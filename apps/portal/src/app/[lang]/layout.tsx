import type { Metadata } from 'next';
import DictionaryProvider from "@/context/use-dictionary-context";
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: '../../../public/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: '../../../public/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Onesend',
	description:
		'Send your files quickly, easily, and securely. Just upload and download from anywhere. Once you’ve downloaded your file, it’s gone – we don’t keep any copies. Enjoy peace of mind with our simple, safe, and private service.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<head>
			<meta name="google-adsense-account" content="ca-pub-4442572750494652" />
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4442572750494652"
				crossOrigin="anonymous"
			></script>
		</head>
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
		<DictionaryProvider language="en">
			{children}
		</DictionaryProvider>
		</body>
		</html>
	);
}
