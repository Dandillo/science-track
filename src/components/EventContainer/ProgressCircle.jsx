import React from "react";

const ProgressCircle = ({ roundNumber, progress }) => {
  return (
    <svg className="progress-circle" width="110" height="110">
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#FFA164" />
          <stop offset="25%" stopColor="#FFB379" />
          <stop offset="50%" stopColor="#ff8b3d" />
          <stop offset="100%" stopColor="#fb7a30" />
        </linearGradient>
      </defs>
      <circle
        cx="55"
        cy="55"
        r="50.5"
        fill="#FFF"
        stroke="url(#gradient)"
        strokeWidth="7"
        strokeLinecap="round"
        style={{
          strokeDasharray: "360",
          strokeDashoffset: `${360 - (360 * progress) / 10}`,
          transition: "stroke-dashoffset 0.5s ease",
        }}
      />
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
