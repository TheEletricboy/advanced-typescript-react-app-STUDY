import { ComponentPropsWithoutRef, forwardRef, type FC } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input name={id} ref={ref} id={id} {...props} />
      </p>
    );
  }
);

export default Input;
