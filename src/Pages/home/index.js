/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Apps from "../../Components/home/apps";
import Carousel from "../../Components/home/carousel";
import Cinema from "../../Components/home/cinema";
import Movie from "../../Components/home/movie";
import News from "../../Components/home/news";

export default function Home() {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <Carousel />
      <Movie />
      <Cinema />
      <News />
      <Apps />
    </div>
  );
}
