import React, { useState } from 'react';
import { Upload, Plus, Trash2 } from 'lucide-react';

interface Dataset {
  id: string;
  name: string;
  description: string;
  size: number;
  lastModified: Date;
}

export function DatasetManager() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    // Simulate file upload
    setTimeout(() => {
      setDatasets(prev => [...prev, {
        id: Date.now().toString(),
        name: file.name,
        description: 'Uploaded dataset',
        size: file.size,
        lastModified: new Date()
      }]);
      setIsUploading(false);
    }, 1500);
  };

  const handleDeleteDataset = (id: string) => {
    setDatasets(prev => prev.filter(dataset => dataset.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Training Datasets</h2>
          <label className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
            <Upload className="h-4 w-4" />
            <span>Upload Dataset</span>
            <input
              type="file"
              className="hidden"
              accept=".json,.csv"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
          </label>
        </div>

        <div className="space-y-4">
          {datasets.map(dataset => (
            <div
              key={dataset.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="font-medium">{dataset.name}</h3>
                <p className="text-sm text-gray-500">{dataset.description}</p>
                <div className="text-xs text-gray-400 mt-1">
                  {`${(dataset.size / 1024).toFixed(2)} KB • Last modified: ${dataset.lastModified.toLocaleDateString()}`}
                </div>
              </div>
              <button
                onClick={() => handleDeleteDataset(dataset.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}

          {datasets.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No datasets uploaded yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
