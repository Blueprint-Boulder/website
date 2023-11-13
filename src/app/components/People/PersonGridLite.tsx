interface PersonGridLiteProps {
  children: React.ReactNode;
}

const PersonGridLite: React.FC<PersonGridLiteProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-8 gap-5 mb-12 max-lg:grid-cols-1 max-xl:grid-cols-2 items-center">
      {children}
    </div>
  );
};

export default PersonGridLite;
