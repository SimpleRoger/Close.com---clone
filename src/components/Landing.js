import React from "react";

export default function Landing() {
  return (
    <div className="text-white pt-20 bg-black bg-[url(https://assets-global.website-files.com/6171779…/646f2b6…_light-ray-texture.svg)] bg-center bg-no-repeat bg-cover">
      <div className="flex">
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-[80px] font-bold flex-grow text-center pl-[50px] mt-5 text-white ">
            The CRM built for <span className="text-[#d61549]">growth</span>
          </h1>
          <button className="flex items-center justify-center rounded-full text-white bg-[#d61549] py-[20px] px-[36px] font-bold">
            Start your 14-day free trial
          </button>
        </div>
        <div class="w-1/2">
          <img
            src="./assets/demo.webp"
            alt="Your Image"
            class="object-cover object-center"
          />
        </div>
        {/* <img src="./assets/demo.webp" className="w-1/2" /> */}
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-[32px] mx-auto mt-20">
          Trusted by over 6,500 startups & small businesses
        </h1>
        <div className="flex max-w-[1200px] mx-auto">
          <img src="./assets/branch.svg" className="w-1/4 filter invert"></img>
          <img src="./assets/hipcamp.svg" className="w-1/4"></img>
          <img src="./assets/studi.svg" className="w-1/4 filter invert"></img>
          <img src="./assets/toggl.svg" className="w-1/4"></img>
        </div>
      </div>
    </div>
  );
}
