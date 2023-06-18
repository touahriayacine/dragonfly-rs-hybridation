function Perameters() {
  return (
    <div className="bg-white p-10 rounded-md w-1/2 relative left-1/4 mb-10">
      <h2 className="text-xl font-bold mb-4">Hyperparamètres</h2>
      <div className="p-2 my-2 flex flex-col items-start justify-start gap-2">
        <label>Nombre du dragonflies</label>
        <input
          type="number"
          step="1"
          min="0"
          name="nb_dragonflies"
          placeholder="0"
          className="text-right p-2 bg-gray-100 rounded-md border border-gray-400 w-full"
        />
      </div>
      <div
        claclassName="p-2 my-2 flex flex-col items-start justify-start gap-2"
        ssName
      >
        <label>Nombre d'itérations</label>
        <input
          type="number"
          step="1"
          min="0"
          name="nb_iterations"
          placeholder="0"
          className="text-right p-2 bg-gray-100 rounded-md border border-gray-400 w-full"
        />
      </div>
      <div className="p-2 my-2 flex flex-col items-start justify-start gap-2">
        <label>Température initiale</label>
        <input
          type="number"
          step="0.01"
          min="0"
          name="tmp_init"
          placeholder="0.00"
          className="text-right p-2 bg-gray-100 rounded-md border border-gray-400 w-full"
        />
      </div>
      <div className="p-2 my-2 flex flex-col items-start justify-start gap-2">
        <label>Température minimale</label>
        <input
          type="number"
          step="0.01"
          min="0"
          name="tmp_min"
          placeholder="0.00"
          className="text-right p-2 bg-gray-100 rounded-md border border-gray-400 w-full"
        />
      </div>
      <div className="p-2 my-2 flex flex-col items-start justify-start gap-2">
        <label>Alpha</label>
        <input
          type="number"
          step="0.01"
          min="0"
          name="alpha"
          placeholder="0.00"
          className="text-right p-2 bg-gray-100 rounded-md border border-gray-400 w-full"
        />
      </div>
    </div>
  );
}

export default Perameters;
