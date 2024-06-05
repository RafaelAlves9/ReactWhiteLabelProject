import { ReactElement } from "react";

export enum EMask {
  Cpf = "999.999.999-99",
  Cnpj = "99.999.999/9999-99",
  Cep = "99999-999",
  Cnh = "99999999999",
  CnhExpedicao = "99/99/9999",
  Cel = "(99) 99999-9999",
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
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  iconRightSecondary?: ReactElement;
  onBlur?: () => void;
  onChange?: (event: any) => void;
  cyTestName?: string;
};
