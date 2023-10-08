import Image from "next/image";
import React from "react";
import Container from "./container";


const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-3xl"><Mark>Collect Your Plastic:</Mark> </p>
            <p className="text-2xl leading-normal ">
            Once you've collected your plastic waste, separate and clean the items to ensure proper recycling and minimize environmental impact.
            </p>
            
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-3xl"><Mark>Visit Our Platform:</Mark> </p>
            <p className="text-2xl leading-normal ">
            Bring your collected plastic to our user-friendly platform. 
            Here, you'll discover a wide range of recyclable goods and eco-friendly products.
            </p>

          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-3xl"><Mark>Exchange for Rewards:</Mark> </p>
            <p className="text-2xl leading-normal ">
            Exchange your plastic items for these fantastic rewards! 
            It's a win-win – you get something valuable, and the planet benefits from reduced plastic pollution.
            </p>

          </div>
        </div>
      </div>
    </Container>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;