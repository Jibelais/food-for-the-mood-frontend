
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"


function Show(props) {

  const { id } = useParams()
  const food = props.food.find((food) => food.id === +id)
  console.log(props.food)

  return (
    <div className='content-margin'>
      <div className='center-container'>
        <p className='title'>If you are feeling <span id="mood">{food.mood}</span> ...</p>
        <img id = "image" src={food.img} alt={food.food} /><br/>
        <h3 className="bold">{food.name}</h3>
        <p id='info'>{food.info}</p>
        <p className="bold">Click <a href = {food.recipe} target = "_blank" rel="noreferrer">HERE</a> for the recipe</p>
        <Link to={`/`}><button  className="input button-color">GO BACK TO MOOD</button></Link>
        <Link to={`/foodmood/${food.id}/edit`}><button  className="input button-color">EDIT</button></Link>
      </div> 
    </div>
  )

}

export default Show;