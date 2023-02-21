import { Link } from "react-router-dom";

function FoodList(props) {
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
    
    function display(food){
        return(
        <div className= 'food-list'key={(food.id)}>
            <table>
                <tr>
                    <th className='col1'>{food.mood}</th>
                    <th className='col2'>{food.name}</th>
                    <th className='col3'><Link to={`/foodmood/${food.id}/edit`}><button  className="button-size button-color">EDIT</button></Link></th>
                </tr>
            </table>
        </div>)
    }

    return [
        happyFoodArray.map((food)=>(
            display(food)
           )),

        boredFoodArray.map((food)=>(
        display(food)
       )),   

        stressedFoodArray.map((food)=>(
        display(food)
        )),

        healthyFoodArray.map((food)=>(
            display(food)
            )),

       sadFoodArray.map((food)=>(
        display(food)
       )),

       lazyFoodArray.map((food)=>(
        display(food)
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

export default FoodList;