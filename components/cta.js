import React from "react";
import Container from "./container";

const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-5xl gap- mx-auto text-white bg-piggreen px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            A Exchange To Suit Everyone
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            <Mark>1KG Plastic Weight = 20 Points!</Mark>
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-darkgreen bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Exchange Now
          </a>
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

export default Cta;