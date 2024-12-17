import React, { useState } from 'react';
import { MessageSquare, Book, Settings, Brain } from 'lucide-react';
import { TrainingSession } from './TrainingSession';
import { DatasetManager } from './DatasetManager';
import { GuidelinesConfig } from './GuidelinesConfig';

type ActiveTab = 'training' | 'datasets' | 'guidelines';

export function TrainingInterface() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('training');

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1">
        <div className="flex space-x-1">
          <TabButton
            isActive={activeTab === 'training'}
            onClick={() => setActiveTab('training')}
            icon={<MessageSquare className="h-4 w-4" />}
            label="Training Sessions"
          />
          <TabButton
            isActive={activeTab === 'datasets'}
            onClick={() => setActiveTab('datasets')}
            icon={<Book className="h-4 w-4" />}
            label="Manage Datasets"
          />
          <TabButton
            isActive={activeTab === 'guidelines'}
            onClick={() => setActiveTab('guidelines')}
            icon={<Settings className="h-4 w-4" />}
            label="Guidelines"
          />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          title="Training Sessions"
          value="24"
          subtitle="Last 7 days"
          trend="+12%"
          trendUp={true}
        />
        <StatCard
          title="Success Rate"
          value="94%"
          subtitle="Guideline compliance"
          trend="+5%"
          trendUp={true}
        />
        <StatCard
          title="Active Datasets"
          value="8"
          subtitle="Total size: 2.4GB"
          trend="0"
          trendUp={false}
        />
        <StatCard
          title="Response Time"
          value="1.2s"
          subtitle="Average"
          trend="-0.3s"
          trendUp={true}
        />
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {activeTab === 'training' && <TrainingSession />}
        {activeTab === 'datasets' && <DatasetManager />}
        {activeTab === 'guidelines' && <GuidelinesConfig />}
      </div>
    </div>
  );
}

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function TabButton({ isActive, onClick, icon, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-all ${
        isActive
          ? 'bg-blue-500 text-white shadow-sm'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  trendUp: boolean;
}

function StatCard({ title, value, subtitle, trend, trendUp }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className={`ml-2 text-sm font-medium ${
          trendUp ? 'text-green-600' : 'text-gray-500'
        }`}>
          {trend}
        </p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}
