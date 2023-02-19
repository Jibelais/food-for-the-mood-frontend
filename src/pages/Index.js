import {Link} from "react-router-dom"

function Index(props) {

  const loaded =()=>{

    return props.food.map((food) =>(
      <div  key = {food._id}>
        <Link to={`/foodmood/${food._id}`}>
            <p>{food.mood}</p> 
        </Link>     
      </div>
    ))
 
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return(
    <div>
        <h3 className="title">I am feeling today... </h3>
   
        {props.food ? loaded() : loading()}
    </div>
  )}
  
  export default Index;