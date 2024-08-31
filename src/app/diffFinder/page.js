import Image from "next/image";
import Differencefinder from "@/components/Differencefinder";
export default function DiffFinder() {
  return (
    <>
         <div className="max-w-7xl mx-auto py-8 px-4">

      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          Find Difference Between JSON with our  
          <br />
          <span className="text-green-500">JSON Difference Finder</span>
        </h1>
      </div>
      </div>
        <Differencefinder/>
  </>
  );
}
