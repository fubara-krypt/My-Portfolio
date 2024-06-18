const CustomButton = ({ title, onClick, type = "outline", className }) => {
  //type => solid | outline
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        type === "solid" ? "text-white bg-black" : ""
      }  rounded-[4px] text-[18px] border-2 border-black ${className}`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
