"use client";
import EmailCard from "./EmailCard";
import { messages } from "../data/messages";

export default function ChatWindow({ selectedSubject }) {
  if (!selectedSubject) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">
          Select a subject to view the conversation
        </p>
      </div>
    );
  }

  // Filter messages by selected subject
  const filteredMessages = [
    ...messages.filter((email) => email.account_id === selectedSubject),
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Fixed Header */}
      <h2 className="text-lg font-bold text-white-500 sticky top-0 z-50 bg-black py-5">
        {filteredMessages[0]?.subject}
      </h2>

      {/* Scrollable Content */}
      <div className="space-y-4 overflow-y-auto flex-1 px-4 py-2">
        {filteredMessages.map((email) => (
          <EmailCard key={email.id} email={email} />
        ))}
      </div>
    </div>
  );
}
