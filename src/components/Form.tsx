import {
  FormEvent,
  type ComponentPropsWithoutRef,
  ReactNode,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
  children: ReactNode;
};

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...props }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log("CLEAR");
          formRef.current?.reset();
        },
      };
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);

      onSave(data);
    };

    return (
      <form onSubmit={handleSubmit} {...props} ref={formRef}>
        {children}
      </form>
    );
  }
);

export default Form;
