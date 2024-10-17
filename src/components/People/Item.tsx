interface ItemProps {
  children: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({ children }) => {
  return (
    <div className="w-full h-full overflow-hidden shadow-md people-item">
      {children}
    </div>
  );
};
