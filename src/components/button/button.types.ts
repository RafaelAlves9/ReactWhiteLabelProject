import { ReactElement } from "react";

export type ButtonTypes = {
  onClick: () => void;
  description: string;
  type?: "button" | "submit";
  maxWidth: string;
  style?: number;
  icon?: ReactElement;
  cyTestName?: string;
};
