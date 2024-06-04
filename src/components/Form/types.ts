export type FormProps = React.PropsWithChildren & {
  error?: string;

  onSubmit?: () => void;
};
