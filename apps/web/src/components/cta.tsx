'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Zap, Shield } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gaming-dark to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-gaming font-bold text-white mb-6">
            Ready to <span className="gaming-text">Dominate</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join thousands of esports organizations already using ClanForge to build their legacy 
            and dominate the competition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Star className="h-12 w-12 text-gaming-yellow mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Free Forever Plan</h3>
              <p className="text-gray-400">Start building your team with our free tier</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="h-12 w-12 text-gaming-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Setup in Minutes</h3>
              <p className="text-gray-400">Get started in under 5 minutes</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Shield className="h-12 w-12 text-gaming-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No Credit Card</h3>
              <p className="text-gray-400">Start free, upgrade when you're ready</p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 gaming-gradient text-white font-semibold rounded-lg text-lg hover:scale-105 transition-transform flex items-center justify-center">
                Start Building Your Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-gaming-blue text-gaming-blue font-semibold rounded-lg text-lg hover:bg-gaming-blue hover:text-white transition-colors">
                Schedule a Demo
              </button>
            </div>
            
            <p className="text-gray-500 text-sm">
              Join 50,000+ esports professionals already using ClanForge
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-gaming font-bold text-white mb-2">
                <span className="gaming-text">Clan</span>Forge
              </h3>
              <p className="text-gray-400">Building the future of esports management</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gaming-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gaming-blue transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gaming-blue transition-colors">Support</a>
              <a href="#" className="hover:text-gaming-blue transition-colors">Contact</a>
            </div>
            <p className="text-gray-600 text-xs mt-6">
              © 2024 ClanForge. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
