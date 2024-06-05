import { Controller } from "react-hook-form";
import { Container, Label, BaseInput, IconRight, Error } from "./inputAutoComplete.styles";
import { useEffect, useState } from "react";
import { InputTypes } from "./inputAutoComplete.types";
import { ListContainer } from "./inputAutoComplete.styles";
import { CheckIcon, SearchIcon } from "@extensions/icons";

const InputAutoComplete = ({
  control,
  name,
  label,
  errors,
  disabled,
  placeholder,
  type,
  maxLength = 200,
  mandatory,
  iconRight,
  height,
  items,
  onChangeProps,
  cyTestName,
}: InputTypes) => {
  const [openList, setOpenList] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("");

  const handleErrorName = () => {
    const fieldName = name;
    const [object, property] = fieldName.split('.');
    if(!!property) return errors[object]?.[property];
    return errors[object];
  };
  
  const handleOpenList = () => {
    if(!disabled) setOpenList(!openList);
  };

  const handleSelectValue = (value: any, onChange: (event: any) => void) => {
    onChange(value);
    handleOpenList();
  };

  const renderInputName = (value: any) => {
    if(!!value) {
      return items?.find((item) => item.value === value)?.label;
    };
    return undefined;
  };
  
  useEffect(() => {
    setInputType(type ?? "");
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
            <IconRight $haveLabel={!!label} onClick={handleOpenList}>
              <SearchIcon height={"2rem"} />
            </IconRight>
            
            <BaseInput
              $paddingRight={!!iconRight ? "2rem" : "1rem"}
              $height={height ?? "3.125rem"}
              value={renderInputName(value)}
              data-cy={cyTestName}
              onChange={(e: any) => onChangeProps(e.target.value)}
              disabled={disabled}
              type={inputType}
              placeholder={placeholder}
              onFocus={() => setOpenList(true)}
              maxLength={maxLength}
              className="input"
            />
            {handleErrorName() && <Error>{handleErrorName().message}</Error>}

            {!!items && (
              <ListContainer $open={openList} data-cy={`${cyTestName}-list`}>
                {items.map((item, index) => (
                  <div key={index} onClick={() => handleSelectValue(item.value, onChange)}>
                    <p>{item.label}</p>
                    {value === item.value && (
                      <p><CheckIcon height={"1.5rem"}/></p>
                    )}
                  </div>
                ))}
              </ListContainer>
            )}
          </>
        )}
      />
    </Container>
  );
};

export default InputAutoComplete;
