"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CircularBar = ({
  width,
  height,
  progress,
}: {
  progress:number;
  width: string;

  height: string;
}) => {
  return (
    <div
      style={{ height: `${height}px`, width: `${width}px`, fontWeight: "bold" }}
    >
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        styles={buildStyles({
          // Text size
          textSize: "24px",
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,
          // Colors
          pathColor: "rgba(78, 177, 88)",
          textColor: "#000",
          trailColor: "#f5f5f5",
          backgroundColor: "#7CFC00",
        })}
      />
    </div>
  );
};

export default CircularBar;
