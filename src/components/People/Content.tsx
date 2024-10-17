interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="py-4 px-0 min-h-[80px]">{children}</div>;
};
