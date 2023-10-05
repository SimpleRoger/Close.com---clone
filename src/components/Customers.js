import React from "react";
import { SlArrowRight } from "react-icons/sl";
export default function Customers() {
  //   const backgroundPosition = "300px 20px"; // Adjust these values to your desired pixel amounts
  const imageUrl =
    "https://assets-global.website-files.com/61717799a852418a278cfa9b/642c93edfbcffd420c4715a1_quote-icon-48-flip-blue.svg";

  return (
    <div>
      <div className="max-w-[1200px] flex flex-col py-20 mx-auto">
        <h1 className="font-bold text-[64px] text-center">
          Our customers say it best
        </h1>
        {/* reviews */}
        <div className="flex">
          <div
            className="flex-col flex w-1/3 shadow-xl hover:shadow-2xl rounded-md p-10 bg-no-repeat bg-right-top"
            // style={{
            //   backgroundImage:
            //     'url("https://assets-global.website-files.com/61717799a852418a278cfa9b/642c93edfbcffd420c4715a1_quote-icon-48-flip-blue.svg")',
            //   //   backgroundPosition: backgroundPosition,
            // }}
          >
            <div className="flex justify-between">
              <img
                src="./assets/marko.webp"
                className="rounded-full border border-gray-300 w-[80px]"
              />
              <img src={imageUrl} alt="Description of the image" />
            </div>
            <p>
              The cost of Close is minuscule compared to our ROI. We get
              absolutely raving reviews from our sales and customer support
              teams using Close. Even our co-founders are very happy.
            </p>
            <p>Marko Mrkonjic</p>
            <p>Director of Sales at Trufan</p>
          </div>
          <div className="flex-col flex w-1/3 shadow-xl hover:shadow-2xl rounded-md p-10 min-h-[100px]">
            <div className="flex justify-between">
              <img
                src="./assets/eric.webp"
                className="rounded-full border border-gray-300 w-[80px]"
              />
              <img src={imageUrl} alt="Description of the image" />
            </div>
            <p>
              We’re saving 5x on our prior spend. I added simplicity, ease of
              use, and full team engagement.
            </p>
            <p>Eric Keosky-Smith</p>
            <p>Chief Growth Officer at Hownd</p>
          </div>
          <div className="flex-col flex w-1/3 shadow-xl hover:shadow-2xl rounded-md p-10 min-h-[100px]">
            <div className="flex justify-between">
              <img
                src="./assets/anna.webp"
                className="rounded-full border border-gray-300 w-[80px]"
              />
              <img src={imageUrl} alt="Description of the image" />
            </div>
            <p>
              We’re looking at ways to keep the sales team small but innovative.
              We’re automating as much as possible with our really strong CRM
              foundation at the center.
            </p>
            <p>Anna Cochrane</p>
            <p>Director at Melanie Power</p>
          </div>
        </div>

        <p className="flex items-center justify-center text-[19px] font-bold cursor-pointer mt-10">
          See how startups & small businesses win with Close
          <SlArrowRight />
        </p>
      </div>
    </div>
  );
}
