import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircularText1 } from "@/components/ui/t";

const WhoAreWeSection1 = () => {
  return (
    <div className="w-full mx-auto py-4 md:px-12 xl:px-64  bg-[#f7f7f7] text-black 2xl:px-96 max-sm:pb-10 pb-10">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-stretch">
        {/* Left Column */}
        <div className="grid grid-rows-[200px_1fr] h-auto md:h-[450px] ">
          {/* Top Left */}
          <div className="flex items-start justify-start h-full  ">
            <h2 className="text-3xl md:text-4xl font-bold ml-auto">
              WHO ARE WE?
            </h2>
          </div>

          {/* Bottom Left */}
          <div className="flex flex-col gap-4 justify-start">
            <div className="h-[1px] bg-black w-full" />
            <h3 className="text-4xl  font-medium max-sm:text-center ">
              MCN & Music Distribution — Label Services Company
            </h3>
            <div className="flex gap-6 items-center max-sm:flex max-sm:justify-center">
              <div className="relative h-24 w-48">
                <Image
                  src="/images/google-and-youtube-partner-2.png"
                  alt="Google Partner"
                  width={260}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-rows-[200px_1fr] h-auto md:h-[550px] max-sm:h-[500px]">
          {/* Top Right */}
          <div className="ml-auto flex items-start justify-center md:justify-center max-sm:mx-auto">
            <CircularText1 text="AI MEDIA SOLUTION • AMS •" />
          </div>

          {/* Bottom Right */}
          <div className="relative h-[300px] md:h-[400px] w-full max-sm:flex items-center justify-center max-sm:mt-4 max-sm:px-2">
            <Image
              src="/images/mcn-image.jpeg"
              alt="MCN & Music Distribution"
              fill
              className="object-cover rounded-lg shadow-lg flex items-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-24 md:mt-30 max-sm:mt-10  max-sm:px-6 text-justify">
        <p className="text-gray-700 mb-6  mx-auto font-medium text-lg md:text-base">
          Ai Media Solution is one of the biggest YouTube MCN (Multi-Channel
          Network) in the Region. As a leader in innovation and global impact,
          we set the gold standard for excellence and growth, distributing
          content across 130+ networks in 240 countries. We empower publishers
          to focus on creating content while we drive their revenue growth. Our
          team handles asset management, claims, revenue collection, and content
          marketing, ensuring top-notch quality and commitment to your brand.
          With us, every move ensures the highest ROI on your content
          investments.
        </p>
        <Link href="/contact-us" className="block max-sm:text-center">
          <Button className="bg-accent hover:bg-accent/90 text-primary-foreground ">
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WhoAreWeSection1;
