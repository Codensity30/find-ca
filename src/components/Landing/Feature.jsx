// eslint-disable-next-line react/prop-types
const Feature = ({ image, title, desc }) => {
  return (
    <div className="flex gap-3 w-full text-sm">
      <div className="w-12">
        <img src={image} alt="" className="object-contain" />
      </div>
      <h4 className="w-3/5">
        <span className="font-bold">{title}</span>
        {desc}
      </h4>
    </div>
  );
};

export default Feature;
