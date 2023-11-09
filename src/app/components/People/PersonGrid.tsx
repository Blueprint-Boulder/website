interface PersonGridProps {
  children: React.ReactNode;
}

const PersonGrid: React.FC<PersonGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-8 gap-5 mb-12 max-md:grid-cols-2 max-sm:grid-cols-1 items-center">
      {children}
    </div>
  );
};
