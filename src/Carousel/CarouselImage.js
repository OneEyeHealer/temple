import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./CarouselImage.css";
import { Carousel } from "react-responsive-carousel";

const links = [
  { url: "/img/iyfrohini_app_launch.JPG", label: "App Launch" },
  {
    url: "/img/iyfrohini_book_distribution.JPG",
    label: "Book Distribution",
  },
  {
    url: "/img/iyfrohini_drama.JPG",
    label: "Book Distribution",
  },
  {
    url: "/img/iyfrohini_people_01.JPG",
    label: "Book Distribution",
  },
  {
    url: "/img/iyfrohini_team_01.JPG",
    label: "Book Distribution",
  },
  {
    url: "/img/iyfrohini_team_02.JPG",
    label: "Book Distribution",
  },
  {
    url: "/img/iyfrohini_photoshoot_01.JPG",
    label: "Book Distribution",
  },
  {
    url: "/img/iyfrohini_people_02.jpg",
    label: "Book Distribution",
  },
  {
    url: "/img/iyfrohini_prasadam.JPG",
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
