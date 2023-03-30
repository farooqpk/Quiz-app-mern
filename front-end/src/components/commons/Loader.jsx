import { ThreeDots } from "react-loader-spinner";

const Loader = ({color}) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center ">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color= {color? '#FFFFFF' : "#000000"} 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
