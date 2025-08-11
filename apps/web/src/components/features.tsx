'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Trophy, 
  Video, 
  BarChart3, 
  MessageSquare, 
  Shield,
  Zap,
  Target
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Team Management',
    description: 'Build and manage your esports teams with comprehensive player profiles, roles, and permissions.',
    color: 'text-gaming-green'
  },
  {
    icon: Trophy,
    title: 'Tournament Organization',
    description: 'Create and manage tournaments with automated brackets, scheduling, and result tracking.',
    color: 'text-gaming-yellow'
  },
  {
    icon: Video,
    title: 'VOD Analysis',
    description: 'Advanced video analysis tools with timestamping, drawing tools, and team collaboration.',
    color: 'text-gaming-blue'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Comprehensive statistics and performance metrics for players and teams.',
    color: 'text-gaming-purple'
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description: 'Integrated chat, voice channels, and team coordination tools.',
    color: 'text-gaming-pink'
  },
  {
    icon: Shield,
    title: 'Security & Permissions',
    description: 'Enterprise-grade security with role-based access control and data protection.',
    color: 'text-gaming-green'
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Live notifications and real-time collaboration for seamless team coordination.',
    color: 'text-gaming-blue'
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set and track team goals, milestones, and performance objectives.',
    color: 'text-gaming-purple'
  }
]

export function Features() {
  return (
    <section className="py-20 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-gaming font-bold text-white mb-6">
            Everything You Need to{' '}
            <span className="gaming-text">Dominate</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features needed to build, 
            manage, and grow successful esports organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gaming-blue/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gaming-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl gaming-border bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm">
            <h3 className="text-3xl font-gaming font-bold text-white mb-4">
              Ready to Build Your <span className="gaming-text">Legacy</span>?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Join thousands of esports organizations already using ClanForge to dominate their competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 gaming-gradient text-white font-semibold rounded-lg hover:scale-105 transition-transform">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-gaming-blue text-gaming-blue font-semibold rounded-lg hover:bg-gaming-blue hover:text-white transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
