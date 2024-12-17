import React from 'react';
import { Heart } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { ChatInterface } from '../../components/chat/ChatInterface';

const palliativeSuggestions = [
  "What is palliative care in oncology?",
  "How is pain managed in cancer care?",
  "What supportive care services are available?",
  "How are different pain medications used?",
  "What symptoms can be managed with palliative care?",
  "What is involved in end-of-life care?",
  "How can family members be supported?",
  "When should palliative care begin?",
];

export function PalliativeCareModule() {
  const handleMessage = async (message: string) => {
    // Implement message handling logic
    console.log('Handling message:', message);
  };

  return (
    <Card 
      title="Palliative Care" 
      icon={<Heart />}
      iconColor="text-red-600"
    >
      <ChatInterface
        suggestions={palliativeSuggestions}
        onSendMessage={handleMessage}
        placeholder="Ask about pain management, supportive care, or symptom control..."
      />
    </Card>
  );
}
