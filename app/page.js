"use client";
import { useState } from "react";
import SubjectList from "./components/SubjectList";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

export default function ChatEmailInterface() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="h-screen flex">
      {/* Left Panel: Email Subjects */}
      <div className="w-1/4 border-r overflow-auto max-md:hidden">
        <SubjectList setSelectedSubject={setSelectedSubject} />
      </div>
      {/* Right Panel: Chat Section */}
      <div className="w-3/4 flex flex-col max-md:w-full">
        <div className="hidden w-full max-md:block">
          <SubjectList setSelectedSubject={setSelectedSubject} />
        </div>
        <div className="flex-grow overflow-auto px-4 pb-4">
          <ChatWindow selectedSubject={selectedSubject} />
        </div>
        <div className="p-4 border-t">
          <MessageInput selectedSubject={selectedSubject} />
        </div>
      </div>
    </div>
  );
}
