import React, { useState } from "react";
import bg_animation from "../assets/bg2.gif";
import Graph from "./Graph";

function Home() {
  const [cost, setCost] = useState(0);
  const [solution, setSolution] = useState([
    0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  return (
    <div className="w-full px-60 py-20 h-full overflow-hidden">
      <div className="absolute top-0 z-10 left-0 px-60 py-20 w-full h-full  overflow-auto">
        <h1 className="pb-7 font-semibold text-4xl text-white">
          Hybridation entre Dragon fly et RS
        </h1>
        <div className="absolute top-20 right-60 bg-bg rounded-xl text-white p-5 flex flex-col items-center justify-center">
          <span className="text-md font-semibold mb-4">
            Coût de la meilleure solution trouvée
          </span>
          <span className="text-3xl font-bold">{cost}</span>
        </div>
        <Graph />
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Meilleure solution trouvée
          </h3>
          <div className="flex flex-row flex-wrap items-center justify-start gap-8">
            {solution.map((item) => {
              return (
                <div className="text-white text-lg bg-bg-alpha border border-bg py-4 px-6 rounded-full">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <img
        src={bg_animation}
        alt="gif"
        className="absolute top-0 right-0 h-full"
      />
    </div>
  );
}

export default Home;
