import { Link } from "react-router-dom";

function Admin(props) {
  const loaded = () => {
    const foodArray = props.food.map((foodItem) => {
      return {
        name: foodItem.name,
        mood: foodItem.mood,
        id: foodItem.id,
      };
    });

    const happyFoodArray = foodArray.filter((foodItem) => {
      return foodItem.mood.toLowerCase().includes("happy".toLowerCase());
    });

    

    const stressedFoodArray = foodArray.filter((foodItem) => {
      return foodItem.mood.toLowerCase().includes("stressed".toLowerCase());
    });

    const sadFoodArray = foodArray.filter((foodItem) => {
      return foodItem.mood.toLowerCase().includes("sad".toLowerCase());
    });

    const lazyFoodArray = foodArray.filter((foodItem) => {
      return foodItem.mood.toLowerCase().includes("lazy".toLowerCase());
    });

    const boredFoodArray = foodArray.filter((foodItem) => {
      return foodItem.mood.toLowerCase().includes("bored".toLowerCase());
    });

    const healthyFoodArray = foodArray.filter((foodItem) => {
      return foodItem.mood.toLowerCase().includes("healthy".toLowerCase());
    });
    
    return [
        stressedFoodArray.map((food)=>(
        <div key={(food.id)}>
            <p>{food.mood}: {food.name}</p>
        </div>  
       )),
       sadFoodArray.map((food)=>(
        <div key={(food.id)}>
            <p>{food.name}</p>
        </div>  
       ))
       ]

  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    
    <main>
        <h3 className="title">All Food </h3>
    <   div>{props.food ? loaded() : loading()}</div>
  </main>
  );
}

export default Admin;