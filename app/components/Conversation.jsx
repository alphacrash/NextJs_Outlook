"use client"

import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Conversation() {
	const [groups, setGroups] = useState([])
	useEffect(() => {
		const getGroup = async () => {
			const { data } = await axios.get("http://localhost:4000/groups")
			setGroups(data)
		}

		getGroup()
	}, [])

	return (
		<>
			<h1 className="font-bold ">Conversations</h1>
			<div>
				{groups.map(({ id, subject }, index) => (
					<Link
						href={`/chat/${id}`}
						key={index}
					>
						<Card className="my-4">
							<CardHeader className="flex gap-4">
								<Avatar
									isBordered
									color="default"
									src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
								/>
								<p>{subject}</p>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</>
	)
}
