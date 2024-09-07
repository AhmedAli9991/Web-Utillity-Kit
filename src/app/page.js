import Image from "next/image";
import Formatter from "@/components/Formatter";
import AddBanner from "@/adsense/AddBanner";
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
