import React, { useState, useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [dotStyle, setDotStyle] = useState({});
  const [outlineStyle, setOutlineStyle] = useState({});
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const onMouseMove = (event) => {
    const posX = event.clientX;
    const posY = event.clientY;

    setDotStyle({
      left: `${posX}px`,
      top: `${posY}px`,
    });

    setOutlineStyle({
      left: `${posX}px`,
      top: `${posY}px`,
    });

    if (dotRef.current) {
      dotRef.current.style.left = `${posX}px`;
      dotRef.current.style.top = `${posY}px`;
    }

    if (outlineRef.current) {
      outlineRef.current.style.left = `${posX}px`;
      outlineRef.current.style.top = `${posY}px`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        ref={dotRef}
        data-cursor-dot
        className="cursor-dot"
        style={dotStyle}
      ></div>
      <div
        ref={outlineRef}
        data-cursor-outline
        className="cursor-dot-outline"
        style={outlineStyle}
      ></div>
    </div>
  );
};

export default Cursor;
