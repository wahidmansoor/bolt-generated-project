import React from 'react';
import { TestTube2 } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { ChatInterface } from '../../components/chat/ChatInterface';

const chemotherapySuggestions = [
  "What determines if treatment is curative or palliative?",
  "How is my ECOG performance status evaluated?",
  "What pre-chemotherapy tests are needed?",
  "How are chemotherapy doses calculated?",
  "What medications are given before chemotherapy?",
  "What side effects should I watch for?",
  "When might treatment need to be adjusted?",
  "How often will my response be evaluated?",
];

export function ChemotherapyModule() {
  const handleMessage = async (message: string) => {
    // Implement message handling logic
    console.log('Handling message:', message);
  };

  return (
    <Card 
      title="Chemotherapy Day Unit" 
      icon={<TestTube2 />}
      iconColor="text-green-600"
    >
      <ChatInterface
        suggestions={chemotherapySuggestions}
        onSendMessage={handleMessage}
        placeholder="Ask about chemotherapy protocols, scheduling, or medications..."
      />
    </Card>
  );
}
