export interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
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
  value: string | number;
  options?: string;
  isInvalid?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomSelectProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  leftIcon?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
  onClick?: () => void;
}

export interface AppbarProps {
  title: string;
}

export interface CustomSelectProps {
  options: string[];
  id: string;
}

export interface CustomModalProps {
  isTopupOpen?: boolean;
  isTransferOpen?: boolean;
  setIsTransferOpen?: (open: boolean) => void;
  setIsTopupOpen?: (open: boolean) => void;
  isInvalid: boolean;
  onClose: () => void;
  topupAmount: string;
  setTopupAmount: (value: string) => void;
  onTopup: () => void;
  contactData?: { name: string; account: string; icon: string }[];
  selectedContact?: { name: string; account: string } | null;
  setSelectedContact?: (
    contact: { name: string; account: string } | null
  ) => void;
}
