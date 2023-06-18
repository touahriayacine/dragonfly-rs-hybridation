import Uploader from "./Uploader";
import bg_animation from "../assets/bg2.gif";

function Preparation() {
  return (
    <div className="w-full px-60 py-20 h-full overflow-hidden">
      <div className="absolute top-0 z-10 left-0 px-60 py-20 w-full h-full  overflow-auto">
        <h1 className="pb-7 font-semibold text-4xl text-white">
          Hybridation entre Dragon fly et RS
        </h1>
        <Uploader />
      </div>
      <img
        src={bg_animation}
        alt="gif"
        className="absolute top-0 left-0 h-full"
      />
    </div>
  );
}

export default Preparation;
