import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HeadlineCards from "./HeadlineCards";
import Food from "./Food";
import Category from "./Category";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}
