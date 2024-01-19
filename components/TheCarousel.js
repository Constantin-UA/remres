"use client";

import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 7000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function TheCarousel() {
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "images/bg/1.jpg",
    "images/bg/2.jpg",
    "images/bg/3.jpg",
    "images/bg/4.jpg",
    "images/bg/5.jpg",
    "images/bg/6.jpg",
    "images/bg/7.jpg",
  ];

  return (
    <Box
      position={"fixed"}
      bot={"0"}
      left={"0"}
      zIndex={"-1"}
      w={"100%"}
      top={"0"}
      h={"100vh"}
      className="animate__animated animate__fadeIn"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={"100vh"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}
("contain, cover, center unset");
