export type ButtonProp = {
  primary: boolean;
  secondary: boolean;
  outlineDarkBtn: boolean;
  outline: boolean;
  disabled: boolean;
  hover: boolean;
  arialabel: string;
  props: {
    className: string;
  };
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
