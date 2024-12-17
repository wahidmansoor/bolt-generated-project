import React, { useState } from 'react';
import { Save, Plus, Trash2, Check } from 'lucide-react';

interface Guideline {
  id: string;
  title: string;
  description: string;
  examples: string[];
  priority: 'high' | 'medium' | 'low';
}

const defaultGuidelines: Guideline[] = [
  {
    id: '1',
    title: 'Request Analysis',
    description: 'Begin each interaction by carefully analyzing the user\'s request',
    examples: [
      'Could you clarify your specific needs regarding...',
      'Let me make sure I understand your request correctly...'
    ],
    priority: 'high'
  },
  {
    id: '2',
    title: 'Structured Response',
    description: 'Provide detailed, well-structured responses using clear language',
    examples: [
      'Here\'s a step-by-step breakdown of...',
      'Let me organize this information into clear sections...'
    ],
    priority: 'high'
  },
  // Add more default guidelines...
];

export function GuidelinesConfig() {
  const [guidelines, setGuidelines] = useState<Guideline[]>(defaultGuidelines);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSaveGuideline = (guideline: Guideline) => {
    if (editingId) {
      setGuidelines(prev => 
        prev.map(g => g.id === editingId ? guideline : g)
      );
    } else {
      setGuidelines(prev => [...prev, { ...guideline, id: Date.now().toString() }]);
    }
    setEditingId(null);
  };

  const handleDeleteGuideline = (id: string) => {
    setGuidelines(prev => prev.filter(g => g.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">AI Agent Guidelines</h2>
          <button
            onClick={() => setEditingId('new')}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add Guideline</span>
          </button>
        </div>

        <div className="space-y-4">
          {guidelines.map(guideline => (
            <div
              key={guideline.id}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium flex items-center gap-2">
                    {guideline.title}
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      guideline.priority === 'high' 
                        ? 'bg-red-100 text-red-700'
                        : guideline.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {guideline.priority}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{guideline.description}</p>
                  
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-gray-700">Examples:</h4>
                    <ul className="mt-1 space-y-1">
                      {guideline.examples.map((example, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingId(guideline.id)}
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteGuideline(guideline.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {editingId && (
        <GuidelineEditor
          guideline={guidelines.find(g => g.id === editingId) || {
            id: '',
            title: '',
            description: '',
            examples: [],
            priority: 'medium'
          }}
          onSave={handleSaveGuideline}
          onCancel={() => setEditingId(null)}
        />
      )}
    </div>
  );
}

interface GuidelineEditorProps {
  guideline: Guideline;
  onSave: (guideline: Guideline) => void;
  onCancel: () => void;
}

function GuidelineEditor({ guideline, onSave, onCancel }: GuidelineEditorProps) {
  const [editedGuideline, setEditedGuideline] = useState<Guideline>(guideline);
  const [newExample, setNewExample] = useState('');

  const handleAddExample = () => {
    if (newExample.trim()) {
      setEditedGuideline(prev => ({
        ...prev,
        examples: [...prev.examples, newExample.trim()]
      }));
      setNewExample('');
    }
  };

  const handleRemoveExample = (index: number) => {
    setEditedGuideline(prev => ({
      ...prev,
      examples: prev.examples.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <h3 className="text-lg font-semibold mb-4">
          {guideline.id ? 'Edit Guideline' : 'New Guideline'}
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={editedGuideline.title}
              onChange={e => setEditedGuideline(prev => ({ ...prev, title: e.target.value }))}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={editedGuideline.description}
              onChange={e => setEditedGuideline(prev => ({ ...prev, description: e.target.value }))}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              value={editedGuideline.priority}
              onChange={e => setEditedGuideline(prev => ({ ...prev, priority: e.target.value as Guideline['priority'] }))}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Examples
            </label>
            <div className="space-y-2">
              {editedGuideline.examples.map((example, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={example}
                    onChange={e => {
                      const newExamples = [...editedGuideline.examples];
                      newExamples[index] = e.target.value;
                      setEditedGuideline(prev => ({ ...prev, examples: newExamples }));
                    }}
                    className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => handleRemoveExample(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newExample}
                  onChange={e => setNewExample(e.target.value)}
                  placeholder="Add new example..."
                  className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  onKeyPress={e => e.key === 'Enter' && handleAddExample()}
                />
                <button
                  onClick={handleAddExample}
                  className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(editedGuideline)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Guideline
          </button>
        </div>
      </div>
    </div>
  );
}
