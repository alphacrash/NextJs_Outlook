"use client";
import { useState } from "react";
import {
  Listbox,
  ListboxItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { messages } from "../data/messages";

export const ListboxWrapper = ({ children }) => (
  <div className="w-full px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default function SubjectList({ setSelectedSubject }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (subject) => {
    setSelectedId(subject.account_id);
    setSelectedSubject(subject.account_id);
  };

  // Get unique subjects by filtering out duplicates
  const uniqueSubjects = [
    ...new Map(messages.map((email) => [email.subject, email])).values(),
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="max-md:hidden">
        <ListboxWrapper>
          <Listbox
            aria-label="Listbox menu with subjects"
            color="success"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedId ? [selectedId] : []}
            onSelectionChange={(keys) => {
              const subject = uniqueSubjects.find(
                (item) => item.account_id === [...keys][0]
              );
              if (subject) handleSelect(subject);
            }}
          >
            {uniqueSubjects.map((subject) => (
              <ListboxItem key={subject.account_id} description={subject.from}>
                {subject.subject}
              </ListboxItem>
            ))}
          </Listbox>
        </ListboxWrapper>
      </div>
      {/* Mobile View */}
      <div className="hidden w-full max-md:flex justify-center items-center mt-5">
        <Dropdown backdrop="blur">
          <DropdownTrigger aria-label="Select Subjects Dropdown">
            <Button variant="bordered">Select Subjects &darr;</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Subject Selection Menu"
            variant="faded"
            className="text-black"
          >
            {uniqueSubjects.map((subject) => (
              <DropdownItem
                key={subject.account_id}
                onPress={() => handleSelect(subject)}
              >
                {subject.subject}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}
