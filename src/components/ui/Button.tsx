import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const size = props.size ?? "md";
  const sizes =
    size === "lg"
      ? "px-8 py-4 text-base font-medium"
      : "px-5 py-2.5 text-sm font-medium";

  const className = `inline-flex items-center justify-center rounded-full bg-neutral-900 text-white shadow-sm transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${sizes} ${props.className ?? ""}`;

  if ("href" in props && props.href) {
    const { href, children, size: _s, className: _c, ...rest } =
      props as ButtonAsAnchor;
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  const {
    children,
    size: _s,
    className: _c,
    type = "button",
    ...rest
  } = props as ButtonAsButton;

  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}
