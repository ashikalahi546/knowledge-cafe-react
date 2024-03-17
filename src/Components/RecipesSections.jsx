import { useEffect, useState } from "react";
import Recipe from "./Recipe";
 

export default function RecipesSections({handleWantToCook}) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./fake.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
      
  }, []);

  return (
    <div className="lg:w-7/12 mb-16 ">
    <div className="grid sm:grid-cols-2 gap-5">
    
      {recipes.map((recipe,e) => (
        <Recipe recipe={recipe} key={e} handleWantToCook ={handleWantToCook}></Recipe>
      ))}
    </div>
    </div>
  );
}