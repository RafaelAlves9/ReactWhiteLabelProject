import { ButtonTypes } from "./button.types";
import { ButtonBase } from "./button.styles";

const Button = ({ onClick, description, type, maxWidth, cyTestName, style = 1, icon }: ButtonTypes) => {
  return (
    <>
      <ButtonBase
        type={type ?? "button"}
        onClick={onClick}
        $maxWidth={maxWidth}
        $style={style}
        data-cy={cyTestName ?? ""}
      >
        {icon}
        {description}
      </ButtonBase>
    </>
  );
};

export default Button;
