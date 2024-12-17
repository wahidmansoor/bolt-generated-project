import React, { useState } from 'react';
import { Send, Save, Loader, AlertTriangle, MessageSquare, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

interface GuidelineCheck {
  title: string;
  passed: boolean;
  feedback?: string;
}

export function TrainingSession() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isTraining, setIsTraining] = useState(false);
  const [guidelineChecks, setGuidelineChecks] = useState<GuidelineCheck[]>([]);

  const handleTrain = async () => {
    if (!response.trim()) return;
    
    setIsTraining(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const checks = checkGuidelines(response);
      setGuidelineChecks(checks);

      if (checks.every(check => check.passed)) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: response,
          timestamp: new Date()
        }]);
        setResponse('');
        setGuidelineChecks([]);
      }
    } finally {
      setIsTraining(false);
    }
  };

  const checkGuidelines = (response: string): GuidelineCheck[] => {
    return [
      {
        title: 'Request Analysis',
        passed: response.toLowerCase().includes('understand') || response.toLowerCase().includes('analyze'),
        feedback: 'Consider starting with a clear analysis of the user\'s request'
      },
      {
        title: 'Clear Structure',
        passed: response.includes('\n') && response.length > 100,
        feedback: 'Try to structure the response with clear sections or paragraphs'
      },
      {
        title: 'Professional Tone',
        passed: !response.includes('!') && !response.toLowerCase().includes('hey') && !response.toLowerCase().includes('cool'),
        feedback: 'Maintain a professional yet approachable tone'
      }
    ];
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {/* Left Column - Input and Response */}
      <div className="space-y-6">
        {/* User Input */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-500" />
              User Message
            </h2>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px] text-sm"
            placeholder="Enter the user's message here..."
          />
          <button
            onClick={() => {
              if (input.trim()) {
                setMessages(prev => [...prev, {
                  role: 'user',
                  content: input,
                  timestamp: new Date()
                }]);
                setInput('');
              }
            }}
            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="h-4 w-4" />
            Add Message
          </button>
        </div>

        {/* AI Response */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Bot className="h-5 w-5 text-green-500" />
              AI Response
            </h2>
          </div>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[200px] text-sm"
            placeholder="Enter the expected AI response here..."
          />
          
          {/* Guideline Checks */}
          {guidelineChecks.length > 0 && (
            <div className="mt-4 space-y-2">
              {guidelineChecks.map((check, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg flex items-start gap-2 ${
                    check.passed ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                  }`}
                >
                  <AlertTriangle className="h-4 w-4 mt-0.5" />
                  <div>
                    <div className="font-medium">{check.title}</div>
                    {!check.passed && check.feedback && (
                      <div className="text-sm mt-1">{check.feedback}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleTrain}
            disabled={isTraining || !response.trim()}
            className={`mt-4 w-full py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              isTraining || !response.trim()
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {isTraining ? (
              <>
                <Loader className="h-4 w-4 animate-spin" />
                <span>Validating Response...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Validate & Train</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Right Column - Conversation History */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Training Session</h2>
        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {message.role === 'user' ? (
                    <MessageSquare className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                  <span className="text-xs font-medium">
                    {message.role === 'user' ? 'User' : 'AI Assistant'}
                  </span>
                </div>
                <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                <div className="text-xs opacity-75 mt-2">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          {messages.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No messages in this training session yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
