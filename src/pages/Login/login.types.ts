import { TLoginRequester } from "@request/UserRequest";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

// #region - PROPS
export type UseLoginControllerProps = {
  controller: {
    states: {
      hookForm: UseFormReturn<TLoginRequester>;
    };
    actions: {
      onSubmit: SubmitHandler<TLoginRequester>;
    };
    setters: {
      
    },
  }
};

// #endregion

