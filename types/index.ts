export interface CustomButtonProps {
  variant: "primary" | "secondary" | "outline";
  size: "lg" | "sm";
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  iconSize?: "sm" | "md" | "lg" | "xl";
  containerStyles: string;
  isDisabled?: boolean;
  handleClick?: () => void;
  onClick?: () => void;
}

export interface CustomInputProps {
  id: string;
  type:
    | string
    | "text"
    | "email"
    | "password"
    | "number"
    | "search"
    | "tel"
    | "url";
  label: string;
  placeholder: string;
  hint?: string;
  value: string;
  isInvalid?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CardListProps {
  title: string;
  linkText: string;
  linkHref: string;
  children: React.ReactNode;
}

export interface ListItemProps {
  iconClass: string;
  title: string;
  description?: string;
  rightText?: number | string;
  href: string;
}

export interface AppbarProps {
  title: string;
}

export interface CustomSelectProps {
  options: string[];
  id: string;
}
