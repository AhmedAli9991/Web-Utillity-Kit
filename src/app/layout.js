import { Inter } from "next/font/google";
// import Head from "next/head";
import "./globals.css";
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import AdSense from "@/adsense/Adsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web utility kit",
  description: `We provide a range of tools designed to make your
              daily development tasks easier, from formatting JSON with our JSON formatter tool,
              finding differences between two JSONs with our JSON difference finder tool,we also provide
              tool for formatting XML with our XML formatter tool, finding differences between two XMLs 
              with our XML difference finder tool, and converting images to base64 with our conversion tool.
              We intend to provide a single place for all your daily utility needs as a developer`,
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/ico",
    },
    shortcut: { url: "/favicon.ico", type: "image/ico" },
  },

  keywords: "JSON, XML, formatter, difference finder, base64 converter, development tools, JSON Formatter, XML Formatter, XML difference Finder, JSON difference Finder",
  author: "JSON Web Tools",
  ogTitle: "JSON Web Tools",
  ogDescription: "Tools for formatting JSON with JSON Formatter and XML with XML Formatter, finding differences in JOSN with JSON difference finder and XML with XML difference finder, and converting images to base64. All your development needs in one place.",
  // ogImage: "/path/to/your/image.jpg", // Replace with the path to your Open Graph image
  // ogUrl: "https://yourwebsite.com", // Replace with your actual URL
  // twitterTitle: "JSON Web Tools",
  // twitterDescription: "Tools for formatting JSON with JSON Formatter and XML with XML Formatter, finding differences in JOSN with JSON difference finder and XML with XML difference finder, and converting images to base64. All your development needs in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <AdSense pId="ca-pub-1234567890123456"/>
      </head>
      <body className={inter.className}>
          <Navbar />
            <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
