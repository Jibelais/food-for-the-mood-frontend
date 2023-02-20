import { useState } from "react";
import {useNavigate} from 'react-router-dom'


function New(props) {
  let navigate =  useNavigate()
  const [newForm, setNewForm] = useState({
    name: "",
    mood: "",
    img: "",
    info: "",
    recipe: "",
  });

  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createFood(newForm);
    setNewForm({
        name: "",
        mood: "",
        img: "",
        info: "",
        recipe: "",
    });
    navigate("/foodmood")
  };
  return (
    <section className= "content-margin">
      <p className='title'>Add more food to the mood!</p>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          className='input'
          type="text"
          value={newForm.mood}
          name="mood"
          placeholder="mood"
          onChange={handleChange}
        />
        <input
          className='input'
          type="text"
          value={newForm.img}
          name="img"
          placeholder="img"
          onChange={handleChange}
        />
        <input
          className='input'
          type="text"
          value={newForm.info}
          name="info"
          placeholder="info"
          onChange={handleChange}
        />
        <input
          className='input'
          type="text"
          value={newForm.recipe}
          name="recipe"
          placeholder="recipe"
          onChange={handleChange}
        />
        <br/>
        <input id="add-button" className='input button' type="submit" value="Add" />
      </form>
    </section>
  );
}

export default New;