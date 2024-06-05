import { Controller } from "react-hook-form";
import { Container, Label, BaseInput, IconLeft, IconRight, Error } from "./input.styles";
import { InputTypes } from "./input.types";
import { useEffect, useState } from "react";

const Input = ({
  control,
  name,
  label,
  errors,
  disabled,
  placeholder,
  type,
  maxLength = 200,
  mandatory,
  iconLeft,
  iconRight,
  iconRightSecondary,
  height,
  onBlur,
  onChange: onChangeProps,
  cyTestName,
}: InputTypes) => {
  const [inputType, setInputType] = useState<string>("");

  const renderIconRightSecondary = () => {
    if(inputType === "password") {
      return iconRightSecondary
    } else return iconRight;
  };

  const handleErrorName = () => {
    const fieldName = name;
    const [object, property] = fieldName.split('.');
    if(!!property) return errors[object]?.[property];
    return errors[object];
  };

  useEffect(() => {
    setInputType(type ?? "text");
  }, [type]);
  
  return (
    <Container>
      {!!label && (
        <Label>
          {label}
          <strong>{mandatory ? "*" : ""}</strong>
        </Label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            {!!iconLeft && (
              <IconLeft $haveLabel={!!label}>
                {iconLeft}
              </IconLeft>
            )}
            {(!!iconRightSecondary || !!iconRight) &&
            <IconRight
              $haveLabel={!!label}
              onClick={() => setInputType(inputType === "password" ? "text" : "password")}
            >
              {renderIconRightSecondary()}
            </IconRight>}
            
            <BaseInput
              $haveLeftIcon={iconLeft ? true : false}
              $haveRightIcon={iconRightSecondary || iconRight ? true : false}
              data-cy={cyTestName}
              value={value}
              onChange={(e: any) => {
                onChange(e.target.value);
                onChangeProps && onChangeProps(e.target.value);
              }}
              disabled={disabled}
              type={inputType}
              placeholder={placeholder}
              onBlur={onBlur}
              maxLength={maxLength}
            />
            {handleErrorName() && <Error data-cy="inputError">{handleErrorName().message}</Error>}
          </>
        )}
      />
    </Container>
  );
};

export default Input;
