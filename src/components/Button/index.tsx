import classNames from "classnames";
import { ButtonProp } from "../../Types/ComponentTypes/ButtonType";
import "./index.scss";

const Button: React.FC<Partial<ButtonProp>> = ({
  children,
  onClick,
  disabled,
  outline,
  primary,
  secondary,
  outlineDarkBtn,
  type,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  return (
    <div className="root">
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
        onClick={onClick}
        type={type}
        {...props}
        className={classNames("root_enable", {
          outlineBtn: Boolean(outline),
          root_disabled: Boolean(disabled),
          outlineDarkBtn: Boolean(outlineDarkBtn),
          PrimaryColor: Boolean(primary),
          secondaryColor: Boolean(secondary),
          [props?.props?.className!]: true,
        })}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
