import React, { useState } from 'react';
import { Send, Clock, DollarSign, Paperclip, ThumbsUp, ThumbsDown } from 'lucide-react';
import type { Chat, Message } from '../types';

interface ChatNegotiationProps {
  chat: Chat;
  onSendMessage: (content: string, type: Message['type'], metadata?: Message['metadata']) => void;
  onAcceptProposal: (messageId: string) => void;
}

export default function ChatNegotiation({ chat, onSendMessage, onAcceptProposal }: ChatNegotiationProps) {
  const [message, setMessage] = useState('');
  const [proposedPrice, setProposedPrice] = useState(chat.agreedPrice || 0);
  const [proposedDeadline, setProposedDeadline] = useState(chat.agreedDeadline || '');

  const handleSendProposal = () => {
    onSendMessage('', 'proposal', {
      proposedPrice,
      proposedDeadline,
    });
    setProposedPrice(0);
    setProposedDeadline('');
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Negotiation Chat</h2>
        <div className="flex items-center space-x-4 mt-2">
          <span className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-1" />
            Current Offer: ${chat.agreedPrice || 'Not set'}
          </span>
          <span className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            Proposed Deadline: {chat.agreedDeadline || 'Not set'}
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chat.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.senderId === 'currentUser' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.senderId === 'currentUser'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {msg.type === 'proposal' ? (
                <div className="space-y-2">
                  <p className="font-semibold">New Proposal</p>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Price: ${msg.metadata?.proposedPrice}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Deadline: {msg.metadata?.proposedDeadline}
                  </div>
                  {msg.senderId !== 'currentUser' && (
                    <div className="flex space-x-2 mt-2">
                      <button
                        onClick={() => onAcceptProposal(msg.id)}
                        className="flex items-center px-3 py-1 bg-green-500 text-white rounded-md"
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Accept
                      </button>
                      <button className="flex items-center px-3 py-1 bg-red-500 text-white rounded-md">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p>{msg.content}</p>
              )}
              <span className="text-xs opacity-75 mt-1 block">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* New Proposal Form */}
      {chat.status === 'negotiating' && (
        <div className="p-4 border-t bg-gray-50">
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proposed Price ($)
              </label>
              <input
                type="number"
                value={proposedPrice}
                onChange={(e) => setProposedPrice(Number(e.target.value))}
                className="input-primary"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proposed Deadline
              </label>
              <input
                type="date"
                value={proposedDeadline}
                onChange={(e) => setProposedDeadline(e.target.value)}
                className="input-primary"
              />
            </div>
            <button
              onClick={handleSendProposal}
              className="self-end px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Send Proposal
            </button>
          </div>
        </div>
      )}

      {/* Message Input */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Paperclip className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 input-primary"
          />
          <button
            onClick={() => {
              if (message.trim()) {
                onSendMessage(message, 'text');
                setMessage('');
              }
            }}
            className="p-2 text-indigo-600 hover:text-indigo-700"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}