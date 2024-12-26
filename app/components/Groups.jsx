"use client";

import { Avatar, Listbox, ListboxItem } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Conversation() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const getGroup = async () => {
      const { data } = await axios.get("http://localhost:4000/groups");
      setGroups(data);
    };

    getGroup();
  }, []);

  return (
    <>
      <h1 className="font-bold ">Conversations</h1>
      <Listbox aria-label="Conversations">
        {groups.map(({ id, subject }, index) => (
          <ListboxItem
            key={index}
            as={Link}
            href={`/chat/${id}`}
            startContent={
              <Avatar
                isBordered
                color="default"
                src={"https://i.pravatar.cc?u=" + id}
                textvalue="avatar"
              />
            }
          >
            {subject}
          </ListboxItem>
        ))}
      </Listbox>
    </>
  );
}
