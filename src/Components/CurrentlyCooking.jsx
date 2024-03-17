// import Currently from "./Currently";

const CurrentlyCooking = ({current  }) => {

  return (
    <div>
      <div className="text-center font-medium  text-xl mt-10">
        Currently cooking: {current.length}
        {/* {
          current.map(curr =><Currently curr={curr}></Currently> )
        } */}
      </div>
      <div className="px-10 py-3">
        <hr />
      </div>
 
      <div className="flex justify-between px-10 font-medium text-gray-500">
        <h3>Name</h3>
        <h3>Time</h3>
        <h3>Calories</h3>
      
      </div>
      <div className="flex justify-between px-3 font-medium py-3">
          <p>{current?.cook}</p>
          <p>{current?.time}</p>
          <p>{current?.calories}</p>
        </div>
    </div>
  );
};

export default CurrentlyCooking;
