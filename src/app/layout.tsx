import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./_theme-toggle";
import { ThemeProvider } from "next-themes";
import { Confetti } from "./_confetti";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Is Firestorm PBR yet",
	description: "Yes! Downloads are available now...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}

					<Confetti />
					<ThemeToggle />
				</ThemeProvider>
			</body>
		</html>
	);
}
