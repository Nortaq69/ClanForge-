'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Play, Users, Trophy, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-blue/20 via-gaming-purple/20 to-gaming-pink/20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gaming-blue/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gaming-purple/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gaming-pink/30 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-gaming font-bold mb-6">
            <span className="gaming-text">Clan</span>
            <span className="text-white">Forge</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate esports organization management platform. Build, manage, and dominate with 
            comprehensive tools for team management, tournament organization, and VOD analysis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button size="lg" className="gaming-gradient text-white font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform">
            <Play className="mr-2 h-5 w-5" />
            Get Started Free
          </Button>
          <Button size="lg" variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white px-8 py-3 text-lg transition-colors">
            <Users className="mr-2 h-5 w-5" />
            View Demo
          </Button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <Trophy className="h-12 w-12 text-gaming-yellow mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Tournament Management</h3>
            <p className="text-gray-400">Organize and manage tournaments with ease</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <Users className="h-12 w-12 text-gaming-green mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Team Management</h3>
            <p className="text-gray-400">Build and manage your esports teams</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <Zap className="h-12 w-12 text-gaming-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">VOD Analysis</h3>
            <p className="text-gray-400">Analyze gameplay with advanced tools</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gaming-blue rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gaming-blue rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
