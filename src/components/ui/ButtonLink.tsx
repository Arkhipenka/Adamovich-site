import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  className,
  variant = "secondary",
  ...props
}: ButtonLinkProps) {
  const classes = ["button-link", `button-link--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return <Link className={classes} {...props} />;
}
