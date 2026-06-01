import { useEffect, useRef } from "react";
import logo from "../assets/logo.png";

export default function CursorFollower() {
  const imageRef = useRef(null);

  const hasMouse =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  useEffect(() => {
    if (!hasMouse) return;

    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;
    let animationFrame;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      x += (mouseX - x) * 0.1;
      y += (mouseY - y) * 0.1;

      if (imageRef.current) {
        imageRef.current.style.left = `${x}px`;
        imageRef.current.style.top = `${y}px`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [hasMouse]);

  if (!hasMouse) return null;

  return (
    <img
      ref={imageRef}
      src={logo}
      alt="Follower"
      style={{
        position: "fixed",
        width: "80px",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}