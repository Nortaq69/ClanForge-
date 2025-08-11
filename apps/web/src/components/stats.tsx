'use client'

import { motion } from 'framer-motion'
import { Users, Trophy, Video, Clock } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Active Players',
    description: 'Managing teams worldwide'
  },
  {
    icon: Trophy,
    value: '10K+',
    label: 'Tournaments',
    description: 'Successfully organized'
  },
  {
    icon: Video,
    value: '100K+',
    label: 'VODs Analyzed',
    description: 'Hours of gameplay reviewed'
  },
  {
    icon: Clock,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable platform performance'
  }
]

export function Stats() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gaming-blue/10 via-gaming-purple/10 to-gaming-pink/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-gaming font-bold text-white mb-6">
            Trusted by <span className="gaming-text">Champions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform powers some of the biggest names in esports, helping them achieve 
            greatness and build lasting legacies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gaming-blue/20 to-gaming-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-gaming-blue" />
                </div>
                <div className="absolute inset-0 rounded-full gaming-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-gaming font-bold gaming-text mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-400">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Trusted by Leading Esports Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {['Team Liquid', 'Cloud9', 'Fnatic', 'G2 Esports'].map((org, index) => (
                <motion.div
                  key={org}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <span className="text-white font-semibold text-sm">{org.split(' ')[0]}</span>
                  </div>
                  <div className="text-sm text-gray-400">{org}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
