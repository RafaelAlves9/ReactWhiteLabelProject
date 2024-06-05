import { Controller } from "react-hook-form";
import {
  Container,
  IconLeft,
  IconRight,
  Label,
  ListContainer,
  SelectBase,
  Error
} from "./selectMultiCustom.styles";
import { SelectCustomProps } from "./selectMultiCustom.types";
import { ReactElement, useEffect, useRef, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@extensions/icons";
import Check from "@components/check/check";

const SelectMultiCustom = ({
  control,
  name,
  label,
  errors,
  disabled,
  mandatory,
  iconLeft,
  items,
  placeholderFixed,
  placeholder,
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

  const handleSelectValue = (value: any, onChange: (...event: any[]) => void, currentValue: any[]) => {
    const indexValue = currentValue?.some((x) => x === value);
    let formatedValue: any[] = currentValue?.filter(x => x !== value) || [];
    if(!indexValue) formatedValue.push(value);

    onChange(formatedValue);
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

  const renderBaseValue = (value: any[]) => {
    let selected: any[] = [];
    value?.map((v, index) => {
      let item = items?.find(x => x.value === v);;
      if(!!item){
        if(value.length == index + 1) selected.push(item.label)
        else selected.push(`${item.label}, `);
      }
    });
    return selected.length ? selected : (placeholder ?? "Selecione");
  };

  const renderChecked = (currentValue: any[], value: any, change: (...event: any[]) => void) => {
    const check = currentValue?.some((x) => x === value);
    return (
      <span style={{ pointerEvents: 'none', display: 'flex', alignItems: 'center' }} >
        <Check value={check} change={() => handleSelectValue(value, change, currentValue)} />
      </span>
    );
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
            {!!iconLeft && <IconLeft $haveLabel={!!label} onClick={handleOpenList}>{iconLeft}</IconLeft>}
            {renderArrowIcon()}

            <SelectBase
              $paddingLeft={!!iconLeft ? "3rem" : "1rem"}
              $open={openList}
              $disabled={disabled ?? false}
              onClick={handleOpenList}
              data-cy={`${cyTestName}-base`}
            >
              <p>{placeholderFixed ?? renderBaseValue(value)}</p>
            </SelectBase>
            {handleErrorName() && <Error>{handleErrorName()?.message}</Error>}

            {!!items && (
              <ListContainer $open={openList} data-cy={`${cyTestName}-list`}>
                {items.map((item, index) => (
                  <div key={index} onClick={() => handleSelectValue(item.value, onChange, value)}>
                    <p>{item.label}</p>
                    {renderChecked(value, item.value, onChange)}
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

export default SelectMultiCustom;
