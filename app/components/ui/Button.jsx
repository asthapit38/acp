import { cva } from "class-variance-authority";

const ButtonVariants = cva(
  "relative uppercase tracking-widest font-medium border border-1 bg-transparent transition-colors before:absolute before:top-0 before:-z-10 before:h-full before:w-full before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-100 before:scale-x-0 ",
  {
    variants: {
      direction: {
        left: "before:left-0 before:origin-top-left ",
        right: "before:right-0 before:origin-top-right ",
      },
      intent: {
        primary:
          "text-background hover:border-primary before:bg-primary hover:text-white border-background ",
        secondary:
          "text-primary hover:border-black before:bg-black hover:text-background border-primary",
      },
      width: {
        full: "w-full",
        default: "self-center ",
      },
      size: {
        medium: "py-2.5 px-5 text-sm ",
        small: "py-1.5 px-1.5 text-xs",
      },
    },
    // defaults
    defaultVariants: {
      intent: "primary",
      size: "medium",
      direction: "left",
      width: "default",
    },
  }
);
const Button = ({ intent, size, direction, onPress, width, children }) => {
  return (
    <button
      className={ButtonVariants({ intent, size, direction, width })}
      onClick={onPress}
    >
      {children}
    </button>
  );
};

export default Button;
