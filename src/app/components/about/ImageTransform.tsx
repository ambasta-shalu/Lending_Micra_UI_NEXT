"use client";
import { useRef } from "react";

interface ImageTransformProps {
  styles: string;
  children: React.ReactNode;
}

const ImageTransform = ({ styles, children }: ImageTransformProps) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const onMouseMoveHandler = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
      event.currentTarget;
    const x = offsetLeft + Math.floor(offsetWidth / 2);
    const y = offsetTop + Math.floor(offsetHeight / 2);
    const coordX = clientX - x;
    const coordY = (clientY - y) * -1;
    updateTransformStyle(coordX, coordY);
  };

  const onMouseLeaveHandler = function () {
    if (innerRef.current) {
      innerRef.current.style.transform = "";
    }
  };

  const updateTransformStyle = (x: number, y: number) => {
    if (innerRef.current) {
      const rotateX = (y / innerRef.current.offsetHeight + 1 / 2).toFixed(2);
      const rotateY = (x / innerRef.current.offsetWidth + 1 / 2).toFixed(2);
      const style = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
      innerRef.current.style.transform = style;
    }
  };
  return (
    <>
      <div
        style={{ perspective: "35px" }}
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
        className={styles}
      >
        <div className="transition-transform duration-100" ref={innerRef}>
          {children}
        </div>
      </div>
    </>
  );
};

export default ImageTransform;
