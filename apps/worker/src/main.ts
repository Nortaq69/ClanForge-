import { Worker } from 'bull'
import Redis from 'redis'
import { VODProcessor } from './processors/vod-processor'
import { NotificationService } from './services/notification-service'
import { EmailService } from './services/email-service'
import { DiscordService } from './services/discord-service'
import { logger } from './utils/logger'

class ClanForgeWorker {
  private redis: Redis.RedisClientType
  private vodProcessor: VODProcessor
  private notificationService: NotificationService
  private emailService: EmailService
  private discordService: DiscordService

  constructor() {
    this.redis = Redis.createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379'
    })
    
    this.vodProcessor = new VODProcessor()
    this.notificationService = new NotificationService()
    this.emailService = new EmailService()
    this.discordService = new DiscordService()
  }

  async start() {
    try {
      await this.redis.connect()
      logger.info('Connected to Redis')

      // Initialize job queues
      await this.initializeQueues()
      
      logger.info('ClanForge Worker started successfully')
    } catch (error) {
      logger.error('Failed to start worker:', error)
      process.exit(1)
    }
  }

  private async initializeQueues() {
    // VOD Processing Queue
    const vodQueue = new Worker('vod-processing', async (job) => {
      logger.info(`Processing VOD: ${job.data.vodId}`)
      await this.vodProcessor.processVOD(job.data)
    }, {
      redis: this.redis,
      concurrency: 2
    })

    vodQueue.on('completed', (job) => {
      logger.info(`VOD processing completed: ${job.data.vodId}`)
    })

    vodQueue.on('failed', (job, err) => {
      logger.error(`VOD processing failed: ${job.data.vodId}`, err)
    })

    // Notification Queue
    const notificationQueue = new Worker('notifications', async (job) => {
      logger.info(`Sending notification: ${job.data.type}`)
      await this.notificationService.sendNotification(job.data)
    }, {
      redis: this.redis,
      concurrency: 5
    })

    notificationQueue.on('completed', (job) => {
      logger.info(`Notification sent: ${job.data.type}`)
    })

    notificationQueue.on('failed', (job, err) => {
      logger.error(`Notification failed: ${job.data.type}`, err)
    })

    // Email Queue
    const emailQueue = new Worker('emails', async (job) => {
      logger.info(`Sending email: ${job.data.to}`)
      await this.emailService.sendEmail(job.data)
    }, {
      redis: this.redis,
      concurrency: 3
    })

    emailQueue.on('completed', (job) => {
      logger.info(`Email sent: ${job.data.to}`)
    })

    emailQueue.on('failed', (job, err) => {
      logger.error(`Email failed: ${job.data.to}`, err)
    })

    // Discord Integration Queue
    const discordQueue = new Worker('discord-integration', async (job) => {
      logger.info(`Processing Discord action: ${job.data.action}`)
      await this.discordService.processAction(job.data)
    }, {
      redis: this.redis,
      concurrency: 2
    })

    discordQueue.on('completed', (job) => {
      logger.info(`Discord action completed: ${job.data.action}`)
    })

    discordQueue.on('failed', (job, err) => {
      logger.error(`Discord action failed: ${job.data.action}`, err)
    })

    logger.info('All job queues initialized')
  }

  async stop() {
    try {
      await this.redis.quit()
      logger.info('Worker stopped gracefully')
    } catch (error) {
      logger.error('Error stopping worker:', error)
    }
  }
}

// Handle graceful shutdown
process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, shutting down gracefully')
  await worker.stop()
  process.exit(0)
})

process.on('SIGINT', async () => {
  logger.info('SIGINT received, shutting down gracefully')
  await worker.stop()
  process.exit(0)
})

// Start the worker
const worker = new ClanForgeWorker()
worker.start().catch((error) => {
  logger.error('Failed to start worker:', error)
  process.exit(1)
})
