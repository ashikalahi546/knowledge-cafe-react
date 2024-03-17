import { LuClock3 } from "react-icons/lu";
import frame from "/assets/image/Frame.png";

export default function Recipe({ recipe,handleWantToCook }) {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    image_url,
  } = recipe;
  return (
    <div className="border p-5 rounded-2xl flex flex-col gap-4">
      <img className="w-full lg:h-40 sm:h-52 h-48 rounded-xl" src={image_url} alt="" />
      <h2 className="font-medium ">{recipe_name}</h2>
      <h3 className="text-gray-500 ">{short_description}</h3>
      <hr />
      <h2 className="font-semibold">Ingredients : {ingredients.length}</h2>
      <div className="text-gray-500 space-y-2 ">
        {ingredients.map((ingredient,i) => (
          <li key={i}>{ingredient}</li>
        ))}
        <hr />
        <div className="flex items-center gap-5 py-2">
          <div className="flex items-center gap-2">
            <LuClock3 />
            <h2>{preparing_time}</h2>
          </div>
          <div className="flex items-center gap-3">
            <img src={frame} alt="" />
            <h3>{calories}</h3>
          </div>
        </div>
        <div>
        <button onClick={()=>handleWantToCook(recipe_name,preparing_time,calories)}
         className="bg-primary hover:bg-secondary  h-10 w-36  text-gray-800 font-semibold rounded-full  ">Want to Cook</button>
        </div>
      </div>
    </div>
  );
}
