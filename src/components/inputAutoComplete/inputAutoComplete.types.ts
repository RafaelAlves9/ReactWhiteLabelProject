import { ReactElement } from "react";

type ItemsType = {
  value: any;
  label: string;
};

export type InputTypes = {
  control: any;
  name: string;
  errors: any;
  label?: string;
  mandatory?: boolean;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  height?: string;
  iconRight?: ReactElement;
  items: ItemsType[];
  onChangeProps: (event: any) => void;
  cyTestName?: string;
};
