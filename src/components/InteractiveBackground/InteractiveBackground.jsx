import React, { useEffect, useRef } from "react";
import "./InteractiveBackground.css";

class Particle {
  constructor(canvas) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1; // Slightly larger for visibility at speed

    this.baseX = this.x;
    this.baseY = this.y;

    // INCREASED: Constant drift speed (now up to 2.0)
    this.vx = (Math.random() - 0.5) * 2.0;
    this.vy = (Math.random() - 0.5) * 2.0;

    this.density = Math.random() * 30 + 1;
  }

  draw(ctx) {
    ctx.fillStyle = "#2872fa";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse, canvas) {
    // 1. Faster Constant Drift
    this.baseX += this.vx;
    this.baseY += this.vy;

    // Bounce off walls
    if (this.baseX < 0 || this.baseX > canvas.width) this.vx *= -1;
    if (this.baseY < 0 || this.baseY > canvas.height) this.vy *= -1;

    // 2. Mouse Interaction
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const force = (mouse.radius - distance) / mouse.radius;
      const directionX = dx / distance;
      const directionY = dy / distance;

      // Fast reaction to mouse
      this.x -= directionX * force * this.density;
      this.y -= directionY * force * this.density;
    } else {
      // 3. INCREASED: Return speed (0.1 for a snappy "magnetic" return)
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx * 0.1;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy * 0.1;
      }
    }
  }
}

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const mouse = { x: null, y: null, radius: 150 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const init = () => {
      particles = [];
      // Balanced particle count for high-speed visuals
      const numberOfParticles = (canvas.width * canvas.height) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(canvas));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(mouse, canvas);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    handleResize();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" />;
};

export default InteractiveBackground;
