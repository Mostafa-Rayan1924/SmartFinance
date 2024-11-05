const CapapilitiesCard = ({ item }) => {
  return (
    <div className="text-center flex flex-col border  rounded-lg p-6 hover:border-primary transition-all duration-300 gap-2 items-center">
      <h3 className="text-primary">{item.icon}</h3>
      <h2 className="text-sm">{item.title}</h2>
    </div>
  );
};

export default CapapilitiesCard;
