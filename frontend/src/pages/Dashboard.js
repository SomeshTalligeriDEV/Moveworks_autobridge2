import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Activity, CheckCircle2, AlertCircle, Clock, Slack, Github, Boxes, Code2, ArrowRight, TrendingUp, Zap } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState('John');

  const recommendedActions = [
    { id: 1, title: 'Create Slack notification connector', app: 'Slack', icon: <Slack className="w-5 h-5" />, checked: false },
    { id: 2, title: 'Build Jira task automation', app: 'Jira', icon: <Boxes className="w-5 h-5" />, checked: false },
    { id: 3, title: 'Setup GitHub webhook connector', app: 'GitHub', icon: <Github className="w-5 h-5" />, checked: false },
  ];

  const recentConnectors = [
    { name: 'Slack Notify', status: 'active', health: 98, lastRun: '2 mins ago', icon: <Slack className="w-5 h-5" /> },
    { name: 'Jira Sync', status: 'active', health: 100, lastRun: '5 mins ago', icon: <Boxes className="w-5 h-5" /> },
    { name: 'GitHub Events', status: 'warning', health: 85, lastRun: '1 hour ago', icon: <Github className="w-5 h-5" /> },
  ];

  const stats = [
    { label: 'Active Connectors', value: '12', icon: <Activity className="w-6 h-6" />, color: '#4CAF50' },
    { label: 'Success Rate', value: '98%', icon: <TrendingUp className="w-6 h-6" />, color: '#FF8B7B' },
    { label: 'Validations Today', value: '47', icon: <CheckCircle2 className="w-6 h-6" />, color: '#2196F3' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fefefe 0%, #faf7f7 100%)' }}>
      {/* Header */}
      <div className="px-8 py-6 border-b" style={{ borderColor: 'rgba(255, 139, 123, 0.1)', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl coral-gradient flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold" style={{ color: '#2d2d2d' }}>AutoBridge AI</span>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/builder')}
            className="btn-coral"
            data-testid="new-connector-btn"
          >
            <Plus className="inline w-5 h-5 mr-2" />
            New Connector
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
          data-testid="dashboard-welcome"
        >
          <h1 className="text-5xl font-bold mb-3" style={{ color: '#2d2d2d' }}>
            Hello, {userName}! 👋
          </h1>
          <p className="text-lg" style={{ color: '#666' }}>
            Welcome back to your connector dashboard
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl smooth-transition"
              style={{
                background: 'white',
                border: '1px solid rgba(255, 139, 123, 0.1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
              data-testid={`stat-card-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${stat.color}20`, color: stat.color }}>
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</span>
              </div>
              <p className="font-medium" style={{ color: '#666' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recommended Actions */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl"
            style={{
              background: 'white',
              border: '1px solid rgba(255, 139, 123, 0.1)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}
            data-testid="recommended-actions-panel"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold" style={{ color: '#2d2d2d' }}>Recommended Actions</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 rounded-lg text-sm font-semibold"
                style={{ background: 'linear-gradient(135deg, #FFE8E3 0%, #FFD6CC 100%)', color: '#FF7765' }}
                data-testid="do-all-btn"
              >
                Do All
              </motion.button>
            </div>

            <div className="space-y-4">
              {recommendedActions.map((action, index) => (
                <motion.div
                  key={action.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-xl smooth-transition cursor-pointer"
                  style={{ background: '#fafafa', border: '1px solid rgba(255, 139, 123, 0.1)' }}
                  onClick={() => navigate('/builder')}
                  data-testid={`action-item-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255, 139, 123, 0.1)', color: '#FF8B7B' }}>
                      {action.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1" style={{ color: '#2d2d2d' }}>{action.title}</p>
                      <p className="text-sm" style={{ color: '#999' }}>{action.app}</p>
                    </div>
                    <ArrowRight className="w-5 h-5" style={{ color: '#FF8B7B' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Connectors */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl"
            style={{
              background: 'white',
              border: '1px solid rgba(255, 139, 123, 0.1)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}
            data-testid="recent-connectors-panel"
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#2d2d2d' }}>Recent Connectors</h2>

            <div className="space-y-4">
              {recentConnectors.map((connector, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-xl smooth-transition"
                  style={{ background: '#fafafa', border: '1px solid rgba(255, 139, 123, 0.1)' }}
                  data-testid={`connector-item-${index}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255, 139, 123, 0.1)', color: '#FF8B7B' }}>
                        {connector.icon}
                      </div>
                      <div>
                        <p className="font-bold" style={{ color: '#2d2d2d' }}>{connector.name}</p>
                        <p className="text-xs flex items-center gap-1" style={{ color: '#999' }}>
                          <Clock className="w-3 h-3" /> {connector.lastRun}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {connector.status === 'active' ? (
                        <CheckCircle2 className="w-5 h-5" style={{ color: '#4CAF50' }} />
                      ) : (
                        <AlertCircle className="w-5 h-5" style={{ color: '#FFA500' }} />
                      )}
                    </div>
                  </div>

                  {/* Health Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium" style={{ color: '#666' }}>Health</span>
                      <span className="text-xs font-bold" style={{ color: connector.health >= 95 ? '#4CAF50' : '#FFA500' }}>
                        {connector.health}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full" style={{ background: '#e0e0e0' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${connector.health}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: connector.health >= 95 ? '#4CAF50' : '#FFA500' }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;