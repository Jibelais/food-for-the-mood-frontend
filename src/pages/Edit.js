import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'


function Edit(props) {
    const {id} = useParams();
    const food = props.food.find((food)=>food.id === +id)
    let navigate = useNavigate()

    const[editForm, setEditForm] = useState(food)

    const handleChange =(event) =>{
        setEditForm((prevState) => ({
             ...prevState, [event.target.name]: event.target.value,
        }))
        console.log(event.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        props.updateFood(editForm, food.id)
        console.log(editForm)
        navigate("/foodmood")
    }
    const removeFood = () => {
        props.deleteFood(food._id)
        navigate("/foodmood")
    }

    return(
        <section> 
          <form onSubmit={handleSubmit}>
            <div>
              Mood:<input
              type="text"
              value={editForm.mood}
              name="mood"
              placeholder="mood"
              onChange={handleChange}
            />
            </div>
            <div>
              Food:<input
              type="text"
              value={editForm.name}
              name="name"
              placeholder="food"
              onChange={handleChange}
            /> 
            </div>
            
            <div>
              Image:<input
              type="text"
              value={editForm.img}
              name="img"
              placeholder="image"
              onChange={handleChange}
            />  
            </div>
            
            <div>
              Info:<input
              type="text"
              value={editForm.info}
              name="info"
              placeholder="Information"
              onChange={handleChange}
            />
            </div>
            
            <div>
              Recipe: <input
              className="input"
              type="text"
              value={editForm.recipe}
              name="recipe"
              placeholder="recipe link"
              onChange={handleChange}
            /> 
            </div>
           
            <div><input id = "update-button"className="input" type="submit" value="Update"/></div>
            <button id="delete-button" className="input button" onClick = {()=>removeFood(food.id)}>Delete</button>

          </form>
        </section>
      )
}

export default Edit