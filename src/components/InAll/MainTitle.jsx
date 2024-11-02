const MainTitle = ({ title, desc }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl sm:text-3xl capitalize font-semibold text-primary  ">
        {title}
      </h2>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
};

export default MainTitle;
