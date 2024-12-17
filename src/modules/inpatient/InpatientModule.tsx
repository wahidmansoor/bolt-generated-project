import React from 'react';
import { Bed } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { ChatInterface } from '../../components/chat/ChatInterface';

const inpatientSuggestions = [
  "What are oncological emergencies?",
  "When is hospitalization necessary?",
  "What complications require specialist consultation?",
  "How are blood chemistry imbalances managed?",
  "What symptoms require immediate attention?",
  "How long might hospitalization be needed?",
  "What monitoring will be done during admission?",
  "When can outpatient care resume?",
];

export function InpatientModule() {
  const handleMessage = async (message: string) => {
    // Implement message handling logic
    console.log('Handling message:', message);
  };

  return (
    <Card 
      title="Inpatient Oncology" 
      icon={<Bed />}
      iconColor="text-purple-600"
    >
      <ChatInterface
        suggestions={inpatientSuggestions}
        onSendMessage={handleMessage}
        placeholder="Ask about oncology emergencies, complications, or inpatient care..."
      />
    </Card>
  );
}
