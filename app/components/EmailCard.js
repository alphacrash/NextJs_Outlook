"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

export default function EmailCard({ email }) {
  return (
    <Card className="p-4 border rounded-md shadow-sm">
      <CardHeader className="flex flex-row align-start">
        <strong className="text-black">From:</strong>
        <div className="text-gray-600">
          &nbsp;{email.from_name} ({email.from})
        </div>
      </CardHeader>
      <CardBody className="flex flex-row">
        <strong className="text-black">Body:</strong>
        <div className="text-gray-600">&nbsp;{email.snippet}</div>
      </CardBody>
      <Divider />
      <CardFooter className="text-gray-600 text-sm">
        <strong className="text-black">Sent at:</strong>
        <div className="text-gray-600">
          &nbsp; {new Date(email.created).toLocaleString()}
        </div>
      </CardFooter>
    </Card>
  );
}
