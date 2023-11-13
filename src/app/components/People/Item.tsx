interface ItemProps {
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ children }) => {
  return (
    <div className="w-full h-full overflow-hidden shadow-md people-item">
      {children}
    </div>
  );
};

export default Item;
