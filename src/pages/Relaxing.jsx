import Control from "../components/Control";

const Relaxing = () => {
  return (
    <div
      className={`w-screen h-screen bg-[url("./images/relaxing.jpg")]
    bg-cover bg-no-repeat
    flex flex-col justify-center items-center text-white font-['Just_Another_Hand']
    font-medium text-[80px]
    `}
    >
      <span>Relaxing</span>
      <Control/>
    </div>
  );
};

export default Relaxing;
