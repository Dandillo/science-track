import React, { useEffect } from "react";

const ProgressCircle = ({ roundNumber, progress, duration }) => {
  return (
    <svg
      className="progress-circle round-circle__center"
      width="110"
      height="110"
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#FFA164" />
          <stop offset="25%" stopColor="#FFB379" />
          <stop offset="50%" stopColor="#ff8b3d" />
          <stop offset="100%" stopColor="#fb7a30" />
        </linearGradient>
      </defs>
      <circle
        transform="rotate(-90 55 55)"
        cx="55"
        cy="55"
        r="50.5"
        fill={"#FFF"}
        stroke="url(#gradient)"
        strokeWidth="7"
        strokeLinecap="round"
        style={{
          strokeDasharray: "360",
          strokeDashoffset: `${
            360 - (progress * 360) / (duration + duration * 0.14)
          }`,
          transition: "stroke-dashoffset 0.5s ease",
        }}
      >
        {progress >= duration * 0.9 ? (
          <animate
            attributeType="XML"
            attributeName="fill"
            values="#800;#f00;#800;#800"
            dur="1s"
            repeatCount="indefinite"
          />
        ) : null}
      </circle>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="50"
        fill="#ff8b3d"
        dy="0.1em"
        dx="-0.1rem"
      >
        {roundNumber}
      </text>
    </svg>
  );
};

export default ProgressCircle;
