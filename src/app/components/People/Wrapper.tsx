interface WrapperProps {
  as?: React.ElementType;
  children: React.ReactNode;
  [key: string]: any;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  as: AsComponent = "div",
  ...props
}) => {
  return (
    <AsComponent {...props} className="py-8">
      {children}
    </AsComponent>
  );
};
