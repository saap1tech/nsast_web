"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function useGridLayout() {
  const containerRef = useRef(null);
  const [layout, setLayout] = useState({ vertical: 0, horizontal: 0 });

  useEffect(() => {
    const updateLayout = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }
      setLayout({
        vertical: Math.floor(rect.height),
        horizontal: Math.floor(rect.width),
      });
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return {
    layout,
    containerRef,
  };
}

function plotSquares(width, height, size) {
  const squares = [];
  const boundary = size * 2;
  const used = new Set();

  for (let x = boundary; x < width / 2 - boundary; x += size) {
    for (let y = boundary; y < height - boundary; y += size) {
      if (
        used.has(x + y + size) ||
        used.has(x + y - size) ||
        used.has(x + y + size * 4) ||
        used.has(x + y - size * 4)
      ) {
        continue;
      }

      used.add(x + y);
      squares.push({ x, y });
    }
  }
  return squares;
}

const size = 24; // h-6
const boxClassName =
  "absolute h-6 w-6 rounded-md bg-transparent p-px border border-gray-400/30 border-box group";

function Grid() {
  const {
    layout: { vertical, horizontal },
    containerRef,
  } = useGridLayout();

  const squares = useMemo(() => plotSquares(horizontal, vertical, size), [horizontal, vertical]);
  const [active, setActive] = useState(0);
  const timerRef = useRef();

  const onMouseEnter = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const set = () => {
      const next = squares[Math.floor(Math.random() * squares.length) % squares.length];
      setActive(next.x + next.y);
    };

    set();

    const cycleCount = 5;
    let count = 0;
    timerRef.current = setInterval(() => {
      if (count === cycleCount) {
        clearInterval(timerRef.current);
        setActive(0);
        return;
      }

      set();
      count++;
    }, 1000);
  }, [squares]);

  const cells = useMemo(() => {
    return squares.map(({ x, y }, i) => {
      let xPos = x;
      if (i % 2) {
        xPos = horizontal - x - size;
      }

      const shouldHighlight = active - x === x || active - y === y;
      return (
        <div
          key={`${x}-${y}`}
          style={{
            transform: `translate(${xPos}px, ${y}px)`,
          }}
          onMouseEnter={onMouseEnter}
          onClick={onMouseEnter}
          className={boxClassName}
        >
          <div
            style={{
              transitionDelay: active ? `${x + y}ms` : "0ms",
            }}
            className={`h-full w-full scale-90 rounded bg-gray-400/30 opacity-0 transition-all duration-700 ${
              shouldHighlight ? "scale-100 opacity-100" : "group-hover:scale-100 group-hover:opacity-100"
            }`}
          />
        </div>
      );
    });
  }, [squares, horizontal, active, onMouseEnter]);

  return (
    <div
      ref={containerRef}
      onClick={onMouseEnter}
      className={`absolute inset-0 h-full max-h-96 w-full ${vertical > 96 * 4 ? "top-1/4" : ""}`}
    >
      {cells}
    </div>
  );
}

export default function InteractiveGrid({ children, className, contentClassName }) {
  return (
    <div
      className={`storybook-fix relative h-full w-full overflow-hidden rounded-3xl ${className || ""}`}
      style={{
        backgroundImage:
          "linear-gradient(123deg, transparent 0%, transparent 36%,rgba(17, 17, 57,0.02) 36%, rgba(17, 17, 87,0.02) 56%,transparent 56%, transparent 100%),linear-gradient(251deg, transparent 0%, transparent 68%,rgba(3, 3, 3,0.02) 68%, rgba(3, 3, 93,0.02) 99%,transparent 99%, transparent 100%),linear-gradient(135deg, rgb(200,215,255),rgb(205,215,255))",
      }}
    >
      <Grid />
      <div className={`relative mx-auto h-full w-fit ${contentClassName || ""}`}>{children}</div>
    </div>
  );
}
