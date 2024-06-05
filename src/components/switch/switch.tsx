import { InputContainer, Label, Error } from "./switch.styles";
import { ErrorType } from "./switch.types";
import { Controller } from "react-hook-form";

const Switch = ({
  control,
  errors,
  name,
  disabled,
  change,
  value,
  label,
  mandatory,
  cyTestName
}: ErrorType) => {
  const renderInput = (value: any, onChange: (...event: any) => void) => {
    return (
      <InputContainer data-cy={cyTestName ?? ""}>
        <input type="checkbox" readOnly checked={value} onClick={() => onChange(!value)} disabled={disabled} />
        <span className="slider round"></span>
      </InputContainer>
    );
  };
  
  return (
    <div data-cy={cyTestName ?? ""}>
      {!!label && (
        <Label>
          {label}
          <strong>{mandatory ? "*" : ""}</strong>
        </Label>
      )}
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

      {(change) && renderInput(value, change)}
    </div>
  );
};

export default Switch;
