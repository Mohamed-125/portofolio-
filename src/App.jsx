import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let blobX = 0;
    let blobY = 0;
    let targetX = 0;
    let targetY = 0;

    const speed = 0.2; // Adjust the speed of the movement (0.1 = slower, 0.5 = faster)

    const mouseMoveHandler = (e) => {
      targetX = e.pageX;
      targetY = e.pageY;
    };

    const animate = () => {
      // Interpolate towards the target position
      blobX += (targetX - blobX) * speed;
      blobY += (targetY - blobY) * speed;

      const blob = document.querySelector(".blob");

      if (blob) {
        blob.style.left = `${blobX - blob.clientWidth / 2}px`;
        blob.style.top = `${blobY - blob.clientHeight / 2}px`;
      }

      requestAnimationFrame(animate);
    };

    document.body.addEventListener("mousemove", mouseMoveHandler);
    requestAnimationFrame(animate);

    return () => {
      document.body.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className=" bg-background-light ">
      <div className="blob  pointer-events-none hidden sm:block"></div>
      <div className="flex flex-col min-h-[86vh] mt-4">
        <Navbar />
        <Hero />
      </div>
      <hr className="text-white opacity-50 mb-14"></hr>
      <About />
      <hr className="text-white  opacity-50"></hr>
      <Services />
      <hr className="text-white  opacity-50"></hr>
      <Projects />
      <hr className="text-white  opacity-50"></hr>
      <Contact />
    </div>
  );
}

export default App;
