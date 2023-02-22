import {Routes, Route} from "react-router-dom"
import {useEffect, useState} from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"
import New from "../pages/New"
import Edit from "../pages/Edit"
import About from "../pages/About"
import FoodList from "../pages/FoodList"





function Main(props) {

    const URL = "http://127.0.0.1:8000/food"
    
    const [food, setFood] = useState([])

    const getFood = async () =>{
        const res = await fetch (URL)
        const data = await res.json()
        setFood(data)
    }

    const createFood = async (food) => {
        await fetch(URL, {
            method: "POST", 
            headers:{
                "Content-Type": "Application/json", 
            }, 
            body: JSON.stringify(food), 
            
        })
        getFood()

    }

    const updateFood = async (food, id) => {

        await fetch (URL + "/" + id, {
            method: "PUT", 
            headers:{
                "Content-Type": "Application/json", 
            }, 
            body: JSON.stringify(food), 
        })
        getFood()
    }

    const deleteFood = async(id) => {

        await fetch (URL + "/" + id, {
            method: "DELETE"
        })
        getFood()
    }

    useEffect ( () => {
        getFood()
        console.log(food)

    },[])
   
    return (
        <main>

            <Routes>
                <Route
                   exact path ="/foodmood/about"
                   element={<About/>}
                   />
        
                <Route 
                    exact path="/" 
                    element={<Index food = {food} />} />
                <Route 
                    path="/foodmood/:id" 
                    element={<Show food = {food}/>} />
                <Route
                    path="/foodmood/new" 
                    element = {<New food = {food} createFood = {createFood} />}/>
                <Route
                    path="/foodmood/:id/edit" 
                    element = {<Edit food = {food} updateFood = {updateFood} deleteFood = {deleteFood}/>}/>    
                 <Route 
                    exact path="/foodmood/list" 
                    element={<FoodList food = {food} />} />
            </Routes>


        </main>
    )
    
  }
  
  export default Main;