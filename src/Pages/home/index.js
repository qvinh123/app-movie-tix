import React, { useEffect, useState } from "react";
import Apps from "../../Components/home/apps";
import Carousel from "../../Components/home/carousel";
import Cinema from "../../Components/home/cinema";
import Movie from "../../Components/home/movie";
import News from "../../Components/home/news";
import Loader from "../../Components/loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />
  }

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
