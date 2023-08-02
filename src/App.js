import React from 'react';
import Navbar from './components/Navbar';
import { AnimatedCarousel } from './components/CarouselComponent';
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div>
      <Navbar />
      <section id="section1">
        <AnimatedCarousel />
      </section>
      <section id="section2">
        <div className="max-w-md mx-auto py-12">
          {/* Text above the button */}
          <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
          
          {/* Button */}
          <Button variant="outlined" color="red" size="lg">
            Large Blue Button
          </Button>
        </div>a
      </section>
    </div>
  );
}

export default App;