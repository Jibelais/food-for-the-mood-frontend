import { Link, useParams } from "react-router-dom"

function Show(props) {

    const { id } = useParams()
    const food = props.food.find((food) => food.id === +id)
    console.log(props.food)
  
    return (
      <div>
        <div >
          <h1>If you are feeling {food.mood} ...</h1>
          <img id = "image" src={food.img} alt={food.food} /><br/>
          <p><span id="click">Click here for recipe </span><br/></p>
             
        </div>
        
        
       
        <Link to={`/foodmood/${food.id}/edit`}><button id="edit-button" className="input button">Edit</button></Link>
  
      </div>
    )
  
  }
  
  export default Show;