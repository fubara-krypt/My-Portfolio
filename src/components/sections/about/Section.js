const Section = ({ title, list }) => {
  return (
    <div>
      <p className="text-[24px] lg:text-[32px] mb-[20px] lg:mb-[24px]">{title}</p>
      <div className="flex flex-col gap-[20px] lg:gap-[32px]">
        {list.map((item) => (
          <div
            key={item.title}
            className="border-2 border-black px-[24px] py-[22px] rounded-[12px]"
          >
            <p className="text-[20px] mb-2">{item.title}</p>
            <div className="flex justify-between gap-1 flex-wrap">
              <p style={{ fontFamily: "Satoshi-Medium" }}>{item.subtitle}</p>
              <p style={{ fontFamily: "Satoshi-Medium" }}>
                <span className="mr-2">•</span>
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
