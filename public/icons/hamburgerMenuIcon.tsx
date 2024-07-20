import React from "react";

interface HamburgerMenuIconProps {
  width?: string;
  height?: string;
}

export default function HamburgerMenuIcon({ width, height }: HamburgerMenuIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      width={width}
      height={height}
    >
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
    </svg>
  );
}
