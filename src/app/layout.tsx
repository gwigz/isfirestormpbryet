import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./_theme-toggle";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Firestorm is NOT PBR ready yet",
	description: "When will Firestorm Viewer be PBR ready?",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class">
					{children}

					<ThemeToggle />
				</ThemeProvider>
			</body>
		</html>
	);
}
