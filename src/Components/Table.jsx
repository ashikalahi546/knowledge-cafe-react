

export default function Table({ addCook, currentlyCooking}) {
  return (
    <div>
      <div className="  justify-between  py-3 px-3 font-medium">
        <div className="flex items-center justify-between">
       
          <p>{addCook?.cook}</p>
          <p>{addCook?.time}</p>
          <p>{addCook?.calories}</p>
       

          <button
            onClick={() => currentlyCooking(addCook)}
            className="bg-primary hover:bg-secondary  px-5 py-2  text-gray-800 font-semibold rounded-full  "
          >
            Preparing
          </button>
        </div>
      </div>
    </div>

  );
}
