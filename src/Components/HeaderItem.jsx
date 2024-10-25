/* eslint-disable react/prop-types */
const HeaderItem = ({ name, Icon }) => {
  // console.log(name, Icon)
  return (
    <div className="flex text-white items-center gap-3 
                    text-[15px] font-semibold cursor-pointer hover:underline 
                    underline-offset-8 mb-2">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
};

export default HeaderItem;
