import { type ComponentPropsWithoutRef, type FC } from "react";

type ButtonProps = {
  href?: never;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  href?: string;
} & ComponentPropsWithoutRef<"a">;

const isAnchorProps = (
  props: ButtonProps | AnchorProps
): props is AnchorProps => {
  return "href" in props;
};

const Button: FC<ButtonProps | AnchorProps> = ({ ...props }) => {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
};

export default Button;
