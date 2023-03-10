import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  uppercase?: boolean;
  width?: number;
  opacity?: boolean;
};
