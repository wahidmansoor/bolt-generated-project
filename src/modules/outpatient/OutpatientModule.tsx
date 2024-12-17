import React from 'react';
import { Calendar } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { ChatInterface } from '../../components/chat/ChatInterface';

const outpatientSuggestions = [
  {
    title: "Diagnosis",
    questions: [
      "What tests are needed to confirm cancer diagnosis?",
      "How long do test results usually take?",
      "What does the biopsy procedure involve?",
      "Should I get a second opinion?"
    ]
  },
  {
    title: "Staging",
    questions: [
      "How is cancer staging determined?",
      "What does my current stage mean?",
      "Will I need additional scans?",
      "How often will staging be reassessed?"
    ]
  },
  {
    title: "Treatment",
    questions: [
      "What are the treatment options for my type of cancer?",
      "What should I expect during the treatment process?",
      "How long will the treatment last?",
      "What are the potential side effects?"
    ]
  },
  {
    title: "Follow-up Care",
    questions: [
      "How often will I need follow-up appointments?",
      "What symptoms should I watch for?",
      "What lifestyle changes are recommended?",
      "What support services are available?"
    ]
  }
];

export function OutpatientModule() {
  const handleMessage = async (message: string) => {
    try {
      console.log('Processing message:', message);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return `Response to: ${message}`;
    } catch (error) {
      console.error('Error processing message:', error);
      throw error;
    }
  };

  return (
    <Card 
      title="Oncology Outpatient" 
      icon={<Calendar />}
      iconColor="text-blue-600"
    >
      <ChatInterface
        suggestions={outpatientSuggestions}
        onSendMessage={handleMessage}
        placeholder="Ask about cancer staging, diagnosis, or treatment planning..."
      />
    </Card>
  );
}
