import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';
import { Zap, Shield, TrendingUp, ArrowRight, Github, Slack, Code2, Boxes } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Generation',
      description: 'Generate connector YAML instantly using natural language prompts'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Smart Validation',
      description: 'Automatic endpoint validation and error detection before deployment'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Ambient Monitoring',
      description: 'Proactive health checks and intelligent failure alerts'
    }
  ];

  const apps = [
    { name: 'Slack', icon: <Slack className="w-6 h-6" /> },
    { name: 'Jira', icon: <Boxes className="w-6 h-6" /> },
    { name: 'GitHub', icon: <Github className="w-6 h-6" /> },
    { name: 'Teams', icon: <Code2 className="w-6 h-6" /> }
  ];

  const stats = [
    { value: '10x', label: 'Faster Deployment' },
    { value: '99%', label: 'Validation Accuracy' },
    { value: '24/7', label: 'Active Monitoring' }
  ];

  return (
    <div className="landing-page" style={{ background: '#fefefe' }}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 139, 123, 0.1)'
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl coral-gradient flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#2d2d2d' }}>
              AutoBridge AI
            </span>
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/dashboard')}
              className="btn-coral"
              data-testid="get-started-btn"
            >
              Get Started <ArrowRight className="inline w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden" style={{ minHeight: '90vh' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="z-10"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'linear-gradient(135deg, #FFE8E3 0%, #FFD6CC 100%)',
                  border: '1px solid #FF8B7B'
                }}
              >
                <span className="text-sm font-semibold" style={{ color: '#FF7765' }}>
                  ✨ Powered by Moveworks AI
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#2d2d2d' }}>
                Build Connectors
                <br />
                <span className="coral-gradient bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  In Seconds
                </span>
              </h1>

              <p className="text-lg mb-8" style={{ color: '#666666', lineHeight: '1.8' }}>
                Transform manual connector building into one-click automation.
                Generate, validate, deploy, and monitor Moveworks connectors with AI.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/builder')}
                  className="btn-coral"
                  data-testid="start-building-btn"
                >
                  Start Building <ArrowRight className="inline w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline"
                  data-testid="view-templates-btn"
                >
                  View Templates
                </motion.button>
              </div>

              {/* Supported Apps */}
              <div>
                <p className="text-sm font-semibold mb-4" style={{ color: '#999' }}>
                  INTEGRATES WITH
                </p>
                <div className="flex gap-4">
                  {apps.map((app, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer"
                      style={{
                        background: 'rgba(255, 139, 123, 0.1)',
                        border: '1px solid rgba(255, 139, 123, 0.2)',
                        color: '#FF8B7B'
                      }}
                      data-testid={`app-icon-${app.name.toLowerCase()}`}
                    >
                      {app.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - 3D Scene */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              <Scene3D />
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: '#FFB8A8' }}></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: '#FFA996' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8" style={{ background: '#fafafa' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#2d2d2d' }}>
              Why AutoBridge AI?
            </h2>
            <p className="text-lg" style={{ color: '#666' }}>
              Intelligent automation that saves time and prevents errors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 rounded-2xl glass-effect smooth-transition"
                style={{
                  background: 'white',
                  border: '1px solid rgba(255, 139, 123, 0.1)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
                data-testid={`feature-card-${index}`}
              >
                <div className="w-16 h-16 rounded-xl coral-gradient flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#2d2d2d' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.7' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-3xl coral-gradient"
            style={{
              boxShadow: '0 20px 60px rgba(255, 139, 123, 0.3)'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-testid={`stat-${index}`}
                >
                  <div className="text-5xl sm:text-6xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-white opacity-90">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#2d2d2d' }}>
              Ready to automate your workflow?
            </h2>
            <p className="text-lg mb-8" style={{ color: '#666' }}>
              Start building intelligent connectors in minutes
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/dashboard')}
              className="btn-coral text-lg px-12 py-4"
              data-testid="cta-start-btn"
            >
              Get Started Free <ArrowRight className="inline w-6 h-6 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t" style={{ borderColor: 'rgba(255, 139, 123, 0.1)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p style={{ color: '#999' }}>© 2025 AutoBridge AI. Powered by Moveworks.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;