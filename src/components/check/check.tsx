import { Checkbox, Checkmark, InputContainer, Error } from "./check.styles";
import { CheckPropsType } from "./check.types";
import { Controller } from "react-hook-form";
import { memo } from "react";

const Check = ({
  control,
  errors,
  name,
  disabled,
  change,
  value,
  cyTestName
}: CheckPropsType) => {
  const renderInput = (value: any, onChange: (...event: any) => void) => {
    return (
      <InputContainer>
        <Checkbox
          type="checkbox"
          readOnly
          checked={!!value}
          onClick={() => onChange(!value)}
          disabled={disabled}
        />
        <Checkmark data-cy={`${cyTestName}-checkbox`}/>
      </InputContainer>
    );
  };
  
  return (
    <div data-cy={cyTestName ?? "checkComponent"}>
      {(!!control && !!name ) && (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              {renderInput(value, onChange)}
              {errors[name] && <Error>{errors[name]?.message}</Error>}
            </>
          )}
        />
      )}

      {(!!change) && renderInput(value, change)}
    </div>
  );
};

export default memo(Check);
