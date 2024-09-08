import Image from "next/image";
import Formatter from "@/components/Formatter";
import AddBanner from "@/adsense/AddBanner";

export const metadata = {
  title: "JSON Formatter",
  description: `We provide a range of tools designed to make your
              daily development tasks easier, from formatting JSON with our JSON formatter tool,
              finding differences between two JSONs with our JSON difference finder tool,we also provide
              tool for formatting XML with our XML formatter tool, finding differences between two XMLs 
              with our XML difference finder tool, and converting images to base64 with our conversion tool.
              We intend to provide a single place for all your daily utility needs as a developer`,

  keywords: "JSON, XML, formatter, difference finder, base64 converter, development tools, JSON Formatter, JSON Beautifier, XML Formatter, XML Beautifier, XML difference Finder, JSON difference Finder",
  author: "JSON Web Tools",
  ogTitle: "JSON Web Tools",
  ogDescription: "Tools for formatting JSON with JSON Formatter and XML with XML Formatter, finding differences in JOSN with JSON difference finder and XML with XML difference finder, and converting images to base64. All your development needs in one place.",
  // ogImage: "/path/to/your/image.jpg", // Replace with the path to your Open Graph image
  // ogUrl: "https://yourwebsite.com", // Replace with your actual URL
  // twitterTitle: "JSON Web Tools",
  // twitterDescription: "Tools for formatting JSON with JSON Formatter and XML with XML Formatter, finding differences in JOSN with JSON difference finder and XML with XML difference finder, and converting images to base64. All your development needs in one place.",
};

export default function Home() {
  return (
    <>
        <div className="max-w-7xl mx-auto py-8 px-4">

    <div className="text-center">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          Format JSON beautify JSON make it Readable with  
          <br />
          <span className="text-green-500">JSON Formatter</span>
        </h1>
      </div>
     

      </div>
      <div className="max-w-7xl mx-auto py-10 px-4 ">
              <AddBanner
                dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="4284247248"
              />
            </div>
        <Formatter/>
        </>
  );
}
