import { Link } from "react-router-dom";

function Index(props) {
  const loaded = () => {
    const foodArray = props.food.map((foodItem) => {
      return {
        name: foodItem.name,
        mood: foodItem.mood,
        id: foodItem.id,
        info: foodItem.info,
      };
    });
    console.log(foodArray);

    const happyFoodArray = foodArray.filter((foodItem) => {
      return foodItem.mood.toLowerCase().includes("happy".toLowerCase());
    });
    console.log(happyFoodArray);

    function randomizeFromArray(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    const randomFoodItem = randomizeFromArray(happyFoodArray);
    console.log(randomFoodItem);

    return (
      <div>
        <h3 className="title">I am feeling today... </h3>
        <div>
          <Link to={`/foodmood/${randomFoodItem?.id}`}>
            <p>HELP US KATIE</p>
          </Link>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return <div>{props.food ? loaded() : loading()}</div>;
}

export default Index;
