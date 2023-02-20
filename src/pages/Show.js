
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
        <p id='info'>{food.info}</p>
        <p><span id="click">Click here for recipe </span><br/></p>
           
      </div>
      
      
     
      <Link to={`/foodmood/${food.id}/edit`}><button id="edit-button" className="input button">Edit</button></Link>

    </div>
  )

}

export default Show;