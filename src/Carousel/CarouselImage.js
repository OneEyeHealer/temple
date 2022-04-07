import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./CarouselImage.css";
import { Carousel } from "react-responsive-carousel";

import appLaunch from "../img/iyfrohini_app_launch.JPG";
import bookDistribution from "../img/iyfrohini_book_distribution.JPG";
import drama from "../img/iyfrohini_drama.jpg";
import people01 from "../img/iyfrohini_people_01.JPG";
import people02 from "../img/iyfrohini_people_02.jpg";
import team01 from "../img/iyfrohini_team_01.JPG";
import team02 from "../img/iyfrohini_team_01.JPG";
import shoot01 from "../img/iyfrohini_photoshoot_01.JPG";
import prasadam from "../img/iyfrohini_prasadam.JPG";

const links = [
  { url: appLaunch, label: "App Launch" },
  {
    url: bookDistribution,
    label: "Book Distribution",
  },
  {
    url: drama,
    label: "Book Distribution",
  },
  {
    url: people01,
    label: "Book Distribution",
  },
  {
    url: people02,
    label: "Book Distribution",
  },
  {
    url: team01,
    label: "Book Distribution",
  },
  {
    url: team02,
    label: "Book Distribution",
  },
  {
    url: shoot01,
    label: "Book Distribution",
  },
  {
    url: prasadam,
    label: "Book Distribution",
  },
];

const CarouselImage = () => {
  return (
    <Carousel>
      {links.map((link, i) => (
        <div key={i} className="carouselImage-div">
          <img src={link.url} />
          {/* <p className="legend">{link.label}</p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselImage;
