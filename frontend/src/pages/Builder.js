import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap, Send, CheckCircle2, AlertCircle, Loader2, Download, Play, Eye, Code2, Sparkles } from 'lucide-react';

const Builder = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [generatedYAML, setGeneratedYAML] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [validationStatus, setValidationStatus] = useState(null);
  const [deploymentLogs, setDeploymentLogs] = useState([]);
  const [activeTab, setActiveTab] = useState('builder');

  const templates = [
    { name: 'Slack Notification', prompt: 'Create a Slack connector to send notifications when new tasks are created in Jira', app: 'Slack' },
    { name: 'Jira Sync', prompt: 'Build a connector to sync GitHub pull requests with Jira tickets', app: 'Jira' },
    { name: 'Teams Alert', prompt: 'Create a Teams connector for sending alerts when deployments complete', app: 'Teams' },
  ];

  const exampleYAML = `name: slack_jira_connector
version: 1.0.0
trigger:
  type: webhook
  endpoint: /api/jira/task_created
  authentication:
    type: bearer_token
    token: \${JIRA_TOKEN}
actions:
  - name: send_slack_notification
    type: slack.send_message
    params:
      channel: "#engineering"
      message: "New task created: {{task.title}}"
      authentication:
        bot_token: \${SLACK_BOT_TOKEN}
error_handling:
  retry_attempts: 3
  retry_delay: 5s
  fallback: log_error`;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setValidationStatus(null);
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedYAML(exampleYAML);
      setIsGenerating(false);
      setActiveTab('yaml');
    }, 2000);
  };

  const handleValidate = () => {
    setValidationStatus('validating');
    
    // Simulate validation
    setTimeout(() => {
      setValidationStatus('success');
    }, 1500);
  };

  const handleDeploy = () => {
    setDeploymentLogs([
      { time: '00:01', message: 'Initializing deployment...', status: 'info' },
      { time: '00:02', message: 'Validating YAML configuration...', status: 'info' },
      { time: '00:03', message: 'Checking endpoint connectivity...', status: 'success' },
      { time: '00:04', message: 'Deploying to Moveworks sandbox...', status: 'info' },
      { time: '00:05', message: 'Deployment successful! ✅', status: 'success' },
    ]);
    setActiveTab('logs');
  };

  const handleTemplateSelect = (template) => {
    setPrompt(template.prompt);
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fefefe 0%, #faf7f7 100%)' }}>
      {/* Header */}
      <div className="px-8 py-6 border-b" style={{ borderColor: 'rgba(255, 139, 123, 0.1)', background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/dashboard')}
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(255, 139, 123, 0.1)', color: '#FF8B7B' }}
              data-testid="back-to-dashboard-btn"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#2d2d2d' }}>Connector Builder</h1>
              <p className="text-sm" style={{ color: '#666' }}>AI-powered connector generation</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {generatedYAML && (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleValidate}
                  className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                  style={{ background: 'rgba(255, 139, 123, 0.1)', color: '#FF8B7B' }}
                  data-testid="validate-btn"
                >
                  {validationStatus === 'validating' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : validationStatus === 'success' ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                  Validate
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDeploy}
                  className="btn-coral"
                  disabled={validationStatus !== 'success'}
                  data-testid="deploy-btn"
                >
                  <Play className="inline w-4 h-4 mr-2" />
                  Deploy
                </motion.button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Prompt & Templates */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Prompt Input */}
            <div className="p-6 rounded-2xl" style={{ background: 'white', border: '1px solid rgba(255, 139, 123, 0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#2d2d2d' }}>
                <Sparkles className="w-5 h-5" style={{ color: '#FF8B7B' }} />
                Describe Your Connector
              </h3>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create a Slack connector to notify when new tasks are created in Jira..."
                className="w-full h-40 p-4 rounded-xl resize-none focus:outline-none focus:ring-2"
                style={{ background: '#fafafa', border: '1px solid rgba(255, 139, 123, 0.1)', color: '#2d2d2d' }}
                data-testid="prompt-input"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full btn-coral mt-4 flex items-center justify-center gap-2"
                data-testid="generate-btn"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Generate YAML
                  </>
                )}
              </motion.button>
            </div>

            {/* Templates */}
            <div className="p-6 rounded-2xl" style={{ background: 'white', border: '1px solid rgba(255, 139, 123, 0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: '#2d2d2d' }}>Quick Templates</h3>
              <div className="space-y-3">
                {templates.map((template, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    onClick={() => handleTemplateSelect(template)}
                    className="p-4 rounded-xl cursor-pointer smooth-transition"
                    style={{ background: '#fafafa', border: '1px solid rgba(255, 139, 123, 0.1)' }}
                    data-testid={`template-${index}`}
                  >
                    <p className="font-semibold text-sm mb-1" style={{ color: '#2d2d2d' }}>{template.name}</p>
                    <p className="text-xs" style={{ color: '#999' }}>{template.app}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Panel - YAML & Logs */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="p-6 rounded-2xl h-full" style={{ background: 'white', border: '1px solid rgba(255, 139, 123, 0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              {/* Tabs */}
              <div className="flex items-center gap-4 mb-6 border-b" style={{ borderColor: 'rgba(255, 139, 123, 0.1)' }}>
                <button
                  onClick={() => setActiveTab('builder')}
                  className={`pb-3 px-4 font-semibold transition-all ${activeTab === 'builder' ? 'border-b-2' : ''}`}
                  style={{ borderColor: activeTab === 'builder' ? '#FF8B7B' : 'transparent', color: activeTab === 'builder' ? '#FF8B7B' : '#999' }}
                  data-testid="tab-builder"
                >
                  <Code2 className="inline w-4 h-4 mr-2" />
                  Builder
                </button>
                <button
                  onClick={() => setActiveTab('yaml')}
                  className={`pb-3 px-4 font-semibold transition-all ${activeTab === 'yaml' ? 'border-b-2' : ''}`}
                  style={{ borderColor: activeTab === 'yaml' ? '#FF8B7B' : 'transparent', color: activeTab === 'yaml' ? '#FF8B7B' : '#999' }}
                  data-testid="tab-yaml"
                >
                  YAML
                </button>
                <button
                  onClick={() => setActiveTab('logs')}
                  className={`pb-3 px-4 font-semibold transition-all ${activeTab === 'logs' ? 'border-b-2' : ''}`}
                  style={{ borderColor: activeTab === 'logs' ? '#FF8B7B' : 'transparent', color: activeTab === 'logs' ? '#FF8B7B' : '#999' }}
                  data-testid="tab-logs"
                >
                  Logs
                </button>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === 'builder' && (
                  <motion.div
                    key="builder"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-20"
                    data-testid="builder-tab-content"
                  >
                    <div className="w-20 h-20 rounded-full coral-gradient flex items-center justify-center mx-auto mb-6">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#2d2d2d' }}>
                      Ready to Build?
                    </h3>
                    <p style={{ color: '#666' }}>
                      Describe your connector or choose a template to get started
                    </p>
                  </motion.div>
                )}

                {activeTab === 'yaml' && (
                  <motion.div
                    key="yaml"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    data-testid="yaml-tab-content"
                  >
                    {generatedYAML ? (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {validationStatus === 'success' && (
                              <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: '#4CAF5020', color: '#4CAF50' }}>
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="text-sm font-semibold">Validated</span>
                              </div>
                            )}
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                            style={{ background: 'rgba(255, 139, 123, 0.1)', color: '#FF8B7B' }}
                            data-testid="download-yaml-btn"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </motion.button>
                        </div>
                        <div className="rounded-xl overflow-hidden p-4" style={{ maxHeight: '600px', overflowY: 'auto', background: '#1e1e1e' }}>
                          <pre className="text-sm" style={{ color: '#d4d4d4', fontFamily: 'monospace', margin: 0 }}>
                            {generatedYAML}
                          </pre>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-20" style={{ color: '#999' }}>
                        No YAML generated yet
                      </div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'logs' && (
                  <motion.div
                    key="logs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    data-testid="logs-tab-content"
                  >
                    {deploymentLogs.length > 0 ? (
                      <div className="space-y-2">
                        {deploymentLogs.map((log, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 p-3 rounded-lg"
                            style={{ background: '#fafafa' }}
                            data-testid={`log-entry-${index}`}
                          >
                            <span className="text-xs font-mono" style={{ color: '#999' }}>{log.time}</span>
                            {log.status === 'success' && <CheckCircle2 className="w-4 h-4 mt-0.5" style={{ color: '#4CAF50' }} />}
                            {log.status === 'info' && <Loader2 className="w-4 h-4 mt-0.5" style={{ color: '#2196F3' }} />}
                            {log.status === 'error' && <AlertCircle className="w-4 h-4 mt-0.5" style={{ color: '#f44336' }} />}
                            <span className="text-sm" style={{ color: '#2d2d2d' }}>{log.message}</span>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-20" style={{ color: '#999' }}>
                        No deployment logs yet
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Builder;