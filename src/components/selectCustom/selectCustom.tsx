import { Controller } from "react-hook-form";
import {
  Container,
  IconLeft,
  IconRight,
  Label,
  ListContainer,
  SelectBase,
  Error
} from "./selectCustom.styles";
import { SelectCustomProps } from "./selectCustom.types";
import { ReactElement, useEffect, useRef, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon, CheckIcon } from "@extensions/icons";

const SelectCustom = ({
  control,
  name,
  label,
  errors,
  disabled,
  mandatory,
  iconLeft,
  items,
  placeholder,
  direction = 1,
  cyTestName,
}: SelectCustomProps) => {
  const selectContainer = useRef<any>();
  const [openList, setOpenList] = useState<boolean>(false);

  // #region - handles

  const handleErrorName = () => {
    const fieldName = name;
    const [object, property] = fieldName.split('.');
    if(!!property) return errors[object]?.[property];
    return errors[object];
  };

  const handleOpenList = () => {
    if(!disabled) setOpenList(!openList);
  };

  const handleSelectValue = (value: any, onChange: (...event: any[]) => void) => {
    onChange(value);
    handleOpenList();
  };

  const handleClickOutside = (event: any) => {
    if (selectContainer.current && !selectContainer.current.contains(event.target)) {
      setOpenList(false);
    };
  };

  // #endregion

  // #region - renders

  const renderArrowIcon = (): ReactElement => {
    return(
      <IconRight $haveLabel={!!label} onClick={handleOpenList}>
        {openList ? <ArrowUpIcon height={"1.5rem"} /> : <ArrowDownIcon height={"1.5rem"} />}
      </IconRight>
    );
  };

  const renderBaseValue = (value: any) => {
    const selected = items?.find((item) => item.value === value)?.label;
    return selected ?? placeholder ?? "Selecione";
  };

  // #endregion

  // #region - effects

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // #endregion

  return (
    <Container ref={selectContainer} data-cy={cyTestName ?? ""}>
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
            {renderArrowIcon()}
            {!!iconLeft && <IconLeft $haveLabel={!!label}>{iconLeft}</IconLeft>}
            <SelectBase
              $paddingLeft={!!iconLeft}
              $disabled={disabled ?? false}
              onClick={handleOpenList}
              data-cy={`${cyTestName}-base`}
              className="input"
            >
              {renderBaseValue(value)}
            </SelectBase>
            {handleErrorName() && <Error>{handleErrorName().message}</Error>}

            {!!items && (
              <ListContainer $open={openList} data-cy={`${cyTestName}-list`} $direction={direction}>
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

export default SelectCustom;
