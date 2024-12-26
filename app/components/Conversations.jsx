"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ChatCard from "./ChatCard";

const Conversations = ({ id }) => {
  const [subject, setSubject] = useState("");
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:4000/chats/${id}`);
      setSubject(data.subject);
      setConversations(data.conversations);
    };
    fetchData();
  }, []);

  if (!subject) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="grid gap-2">
        <h1>{subject}</h1>

        {conversations.map((conversation) => (
          <ChatCard key={conversation.id} />
        ))}
      </div>
    </div>
  );
};

export default Conversations;
