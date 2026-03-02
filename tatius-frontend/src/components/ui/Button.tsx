import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonBaseProps = {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles = {
  primary:
    "bg-tatius-graphite text-white hover:bg-tatius-graphite/90 transition-colors",
  outline:
    "bg-transparent text-tatius-graphite border border-tatius-graphite hover:bg-tatius-graphite hover:text-white transition-colors",
};

const sizeStyles = {
  sm: "px-5 py-2 text-xs tracking-[0.15em] uppercase",
  md: "px-8 py-3 text-sm tracking-[0.15em] uppercase",
  lg: "px-10 py-4 text-sm tracking-[0.15em] uppercase",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium rounded-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    return <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
