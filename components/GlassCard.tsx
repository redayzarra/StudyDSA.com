"use client";

import React, { PropsWithChildren, MouseEvent, useRef, useEffect } from "react";

interface Props {
  className?: string;
  backgroundColor?: string;
  gradientSize?: number;
  gradientPower?: number;
}

const GlassCard = ({
  children,
  className,
  backgroundColor = "bg-zinc-950",
  gradientSize = 300,
  gradientPower = 0.15,
}: PropsWithChildren<Props>) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set CSS variables for gradient size and power
    if (cardRef.current) {
      cardRef.current.style.setProperty("--circle-size", `${gradientSize}px`);
      cardRef.current.style.setProperty("--gradient-power", `${gradientPower}`);
    }
  }, [gradientSize, gradientPower]);

  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Update CSS variables based on mouse position over the card
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card ${className || ""} ${backgroundColor}`}
      onMouseMove={handleOnMouseMove}
    >
      <div className="glass-card-border"></div>
      <div
        className={`glass-card-content ${backgroundColor} flex items-center justify-center`}
      >
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
