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
        navigate(`/foodmood/${food.id}`)
    }
    const removeFood = () => {
        props.deleteFood(food.id)
        navigate(`/foodmood/`)
    }

    return(
        <section> 
          <form onSubmit={handleSubmit}>
            <p className='title'>Make changes to this food</p>
            <div>
              <label>Mood</label><input
              className='input'
              type="text"
              value={editForm.mood}
              name="mood"
              placeholder="mood"
              onChange={handleChange}
            />
            </div>
            <div>
            <label>Food</label><input
              className='input'
              type="text"
              value={editForm.name}
              name="name"
              placeholder="food"
              onChange={handleChange}
            /> 
            </div>
            
            <div>
            <label>Image</label><input
              className='input'
              type="text"
              value={editForm.img}
              name="img"
              placeholder="image"
              onChange={handleChange}
            />  
            </div>
            
            <div>
            <label>Infomation</label><textarea
              className='input box-size'
              type="text"
              value={editForm.info}
              name="info"
              placeholder="Information"
              onChange={handleChange}
            />
            </div>
            
            <div>
            <label>Recipe</label><input
              className="input"
              type="text"
              value={editForm.recipe}
              name="recipe"
              placeholder="recipe link"
              onChange={handleChange}
            /> 
            </div>
           
            <div><input className="input button" type="submit" value="Update"/></div>
            <button className="input button button" onClick = {()=>removeFood(food.id)}>Delete</button>

          </form>
        </section>
      )
}

export default Edit