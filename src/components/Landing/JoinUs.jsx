import Card from "./Card";
import vector from "../../assets/images/vector/join_vector.png";

const cardDetail = [
  {
    title: "Commencement of business",
    desc: "Invested shareholders must confirm payment and office address",
    dueDate: "Within 180 days",
    penaltyFees: "₹50,000",
    pfdesc: " for the company",
    ss: "st",
  },
  {
    title: "Auditor Appointment",
    desc: "Company informs new auditor and submits ADT.1 form to ROC.",
    dueDate: "Within 30 days",
    penaltyFees: "₹300",
    pfdesc: " per month",
    ss: "nd",
  },
  {
    title: "DIN eKYC",
    desc: "Directors share personal information for identification & verification",
    dueDate: "Every Year",
    penaltyFees: "₹5,000",
    pfdesc: " one time",
    ss: "rd",
  },
  {
    title: "DPT-3",
    desc: "Companies report money taken from people to ROC; auditors confirm details.",
    dueDate: "Within 30 days",
    penaltyFees: "₹300",
    pfdesc: " per month",
    ss: "th",
  },
  {
    title: "MCA Form AOC-4",
    desc: "It's like an official report card for a company's documents",
    dueDate: "On or Before 30th November",
    penaltyFees: "₹200",
    pfdesc: " per day",
    ss: "th",
  },
  {
    title: "MCA Form MGT-7",
    desc: "Companies must annually report activities and finances to the register",
    dueDate: "On or Before 31st December",
    penaltyFees: "₹200",
    pfdesc: " per day",
    ss: "th",
  },
];

const JoinUs = () => {
  return (
    <div className="pt-20 bg-[#FAFBFC]">
      <h1 className="font-bold text-5xl text-center">
        Want to{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0076CE] to-[#9400D3]">
          Join
        </span>{" "}
        Us?
      </h1>
      <p className="text-lg text-center mt-5">
        To remain with us, it is essential that you diligently follow the steps
        provided
      </p>
      <div className="relative">
        <img
          src={vector}
          className="absolute -top-20 left-0 w-full h-full object-cover"
          alt="Background Image"
        />
        <div className="p-3 md:p-5 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center ">
          {cardDetail.map((ele, i) => (
            <Card
              key={i}
              index={i}
              title={ele.title}
              desc={ele.desc}
              dueDate={ele.dueDate}
              penaltyFees={ele.penaltyFees}
              pfdesc={ele.pfdesc}
              ss={ele.ss}
            />
          ))}
        </div>
      </div>
      <div className="text-sm px-10">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="font-bold">every day</span> until you file the form .
        There is no maximum penalty amount. So, if you don't file the form for a
        year, you will owe ₹73,000 per form
      </div>
    </div>
  );
};

export default JoinUs;
