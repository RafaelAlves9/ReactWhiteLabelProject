import { ReactElement } from "react";

type ItemsType = {
  value: any;
  label: string;
};

export type SelectCustomProps = {
  control: any;
  name: string;
  errors: any;
  label?: string;
  mandatory?: boolean;
  disabled?: boolean;
  iconLeft?: ReactElement;
  items?: ItemsType[];
  placeholder?: string;
  direction?: number;
  cyTestName?: string;
};
