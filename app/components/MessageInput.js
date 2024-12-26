"use client";
import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { messages } from "../data/messages";

export default function MessageInput({ selectedSubject }) {
  const [body, setBody] = useState("");

  const handleSend = () => {
    if (!selectedSubject) {
      alert("Select an email to reply.");
      return;
    }
    const subjectName = messages.find(
      (m) => m.account_id === selectedSubject
    ).subject;

    setBody("");
  };

  return (
    <div className="space-y-3 flex flex-col justify-center items-center">
      <Textarea
        label="Reply"
        placeholder="Type your reply here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button color="primary" onPress={handleSend}>
        Send Reply
      </Button>
    </div>
  );
}
