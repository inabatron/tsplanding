import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import appImg from './screen.png'
const images = [
    appImg,
  "https://cdn.discordapp.com/attachments/1125374453220638731/1133366802211160114/inabatron_a_brown_haired_girl_in_a_whimsical_cozy_fairy_tale_ci_0c03d64d-75c6-4210-a6cd-5f9f46608760.png",

]

export function AnimatedCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={false}
      className="rounded-xl"
    >
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`image ${index + 1}`} className="h-full w-full object-cover" />
        </div>
      ))}
    </Carousel>
  );
}

