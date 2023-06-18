import Perameters from "./Perameters";
import run_img from "../assets/run.png";
function Uploader() {
  return (
    <div>
      <form action="http://localhost:5173/home" method="POST">
        <div className="w-full h-52 bg-bg-alpha mb-10 rounded-xl border-2 border-dashed border-bg flex flex-row items-center justify-center relative">
          <span className="text-bg text-center">
            glisser-déposer pour sélectionner un fichier
          </span>
          <input
            type="file"
            name="file"
            required
            className="text-white h-full w-full absolute top-0 left-0"
          />
        </div>
        <Perameters />
        <div className="relative left-3/4 flex flex-row gap-5 items-center justify-center bg-bg text-white font-bold text-lg py-4 px-8 rounded-md w-fit h-fit cursor-pointer">
          <input
            type="submit"
            value="lancer l'algorithme"
            className="cursor-pointer"
          />
          <img src={run_img} alt="" className="h-4 w-4" />
        </div>
      </form>
    </div>
  );
}

export default Uploader;
