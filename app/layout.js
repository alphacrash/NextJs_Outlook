import { Providers } from "./providers"
import "./globals.css"
import AppNavbar from "./components/AppNavbar"

export const metadata = {
	title: "NextJs Outlook",
	description: "A simplified email application built with Next.js",
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className="dark"
		>
			<body>
				<Providers>
					<div className="container mx-auto">
						<AppNavbar />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	)
}
