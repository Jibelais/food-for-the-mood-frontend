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

    function randomizeFromArray(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    const randomHappyItem = randomizeFromArray(happyFoodArray);

    const randomStressedItem = randomizeFromArray(stressedFoodArray);

    const randomSadItem = randomizeFromArray(sadFoodArray);

    const randomLazyItem = randomizeFromArray(lazyFoodArray);

    const randomBoredItem = randomizeFromArray(boredFoodArray);

    const randomHealthyItem = randomizeFromArray(healthyFoodArray);


    return (
      <div>
        <h3 className="title">I am feeling today... </h3>
        <div>
          <Link to={`/foodmood/${randomHappyItem?.id}`}>
            <p>Happy</p>
          </Link>
          <Link to={`/foodmood/${randomStressedItem?.id}`}>
            <p>Stressed</p>
          </Link>
          <Link to={`/foodmood/${randomSadItem?.id}`}>
            <p>Sad</p>
          </Link>
          <Link to={`/foodmood/${randomLazyItem?.id}`}>
            <p>Lazy</p>
          </Link>
          <Link to={`/foodmood/${randomBoredItem?.id}`}>
            <p>Bored</p>
          </Link>
          <Link to={`/foodmood/${randomHealthyItem?.id}`}>
            <p>Healthy</p>
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