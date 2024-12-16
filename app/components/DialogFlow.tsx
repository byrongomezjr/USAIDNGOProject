'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

export default function DialogFlow() {
  useEffect(() => {
    // Ensure we're only running this on the client-side
    if (typeof window !== 'undefined') {
      const initializeDialogflow = () => {
        // Create Dialogflow CSS
        const cssLink = document.createElement('link');
        cssLink.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
        cssLink.rel = 'stylesheet';
        document.head.appendChild(cssLink);

        // Create df-messenger element
        const dfMessenger = document.createElement('df-messenger');
        dfMessenger.setAttribute('location', 'us-east1');
        dfMessenger.setAttribute('project-id', 'usaid-ngo-chatbot');
        dfMessenger.setAttribute('agent-id', '549fba9c-d5c7-42c2-a5ef-2f03f391f076');
        dfMessenger.setAttribute('language-code', 'en');
        dfMessenger.setAttribute('max-query-length', '-1');
        
        // Create chat bubble
        const chatBubble = document.createElement('df-messenger-chat-bubble');
        chatBubble.setAttribute('chat-title', 'Donation Navigator');
        dfMessenger.appendChild(chatBubble);

        // Add custom styles
        const style = document.createElement('style');
        style.textContent = `
          df-messenger {
            z-index: 999;
            position: fixed;
            --df-messenger-font-color: #000;
            --df-messenger-font-family: 'Google Sans', Arial, sans-serif;
            --df-messenger-chat-background: #f3f6fc;
            --df-messenger-message-user-background: #d3e3fd;
            --df-messenger-message-bot-background: #fff;
            bottom: 16px;
            right: 16px;
          }
        `;
        document.head.appendChild(style);

        // Append to body
        document.body.appendChild(dfMessenger);

        // Debugging log
        console.log('Dialogflow Messenger initialized');
      };

      // Call initialization after script loads
      initializeDialogflow();
    }
  }, []);

  return (
    <Script 
      src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
      strategy="afterInteractive"
      onLoad={() => {
        console.log('Dialogflow script loaded successfully');
      }}
      onError={(error) => {
        console.error('Dialogflow script load error', error);
      }}
    />
  );
}
