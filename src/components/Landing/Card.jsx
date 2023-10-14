// eslint-disable-next-line react/prop-types
const Card = ({ index, title, desc, dueDate, penaltyFees, pfdesc, ss }) => {
  return (
    <div className="w-[22rem] h-64 custom-shadow rounded-xl p-5 z-10 bg-white">
      <div className="h-10 w-10 text-white text-lg font-bold text-center py-2 bg-gradient-to-tr from-[#0076CE] to-[#9400D3] relative -top-8 -left-8 rounded-lg">
        {index + 1}
        <span className="text-xs font-medium relative top-[-0.4rem]">{ss}</span>
      </div>
      <h3 className="text-lg font-bold text-center relative -top-8">{title}</h3>
      <p className="text-center text-sm relative -top-7">{desc}</p>
      <div className="w-[19rem] h-28 bg-[#F4F4F4] rounded-lg relative -top-3 mx-auto">
        <div className="flex px-5 py-2 gap-3">
          <h5 className="text-custom-blue font-sans font-bold w-1/3">
            Due date
          </h5>
          <h5 className="text-[#FF6666] font-sans font-bold">Penalty fees</h5>
        </div>
        <div className="w-full px-5 flex gap-3">
          <h6 className="font-sans w-1/3 text-sm">{dueDate}</h6>
          <h6 className="font-sans text-sm">
            <span className="font-bold underline">{penaltyFees}</span> {pfdesc}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
