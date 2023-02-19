import {Routes, Route} from "react-router-dom"
import {useEffect, useState} from "react"
import Index from "../pages/Index"
import Show from "../pages/Show"
import New from "../pages/New"
import Edit from "../pages/Edit"
import Home from "../pages/Home"





function Main(props) {

    const URL = "http://127.0.0.1:8000/food/"
    
    const [food, setFood] = useState([])

    const getFood = async () =>{
        const res = await fetch (URL)
        const data = await res.json()
        setFood(data)
        console.log(data)
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

        await fetch (URL + id, {
            method: "PUT", 
            headers:{
                "Content-Type": "Application/json", 
            }, 
            body: JSON.stringify(food), 
        })
        getFood()
    }

    const deleteFood = async(id) => {

        await fetch (URL + id, {
            method: "DELETE"
        })
        getFood()
    }

    useEffect ( () => {
        getFood()

    }, [])
   
    return (
        <main>

            <Routes>
                <Route
                   exact path ="/"
                   element={<Home/>}
                   />
        
                <Route 
                    exact path="/foodmood" 
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
        
            </Routes>


        </main>
    )
    
  }
  
  export default Main;