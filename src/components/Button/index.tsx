//import { Button } from '@mui/material';
import classNames from "classnames";
import "./index.scss";

type ButtonProp = {
  primary: boolean;
  secondary: boolean;
  outline: boolean;
  disabled: boolean;
  hover: boolean;
  props: {
    className: string;
  };
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: React.FC<Partial<ButtonProp>> = ({
  children,
  onClick,
  disabled,
  outline,
  primary,
  secondary,
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
        {...props}
        className={classNames("root_enable", {
          outlineBtn: Boolean(outline),
          root_disabled: Boolean(disabled),
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
