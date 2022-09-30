import React, { useEffect, useState }  from 'react';
import Card from "../Card/Card";
import Duration from '../Duration/Duration';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";


import "./Home.css";

const Home = () => {
    const [workouts,setWorkouts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('workoutData.json')
        .then(res=> res.json())
        .then(data=>setWorkouts(data))
       
    },[]);

    const AddToList =(workout)=>{
      const newCard = [...cart, workout];
      setCart(newCard);
     
    }

    return (
        <div>
           
      
            
           

            <h4 className='text-2xl  text-teal-400 mt-5 ml-10 text-blue-600'> <FontAwesomeIcon icon={faPersonWalking} /> Select Today’s Exercise</h4>
            

            <div className="lg:flex justify-between">

              <div className='card-container'>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-5 mt-10 w-5/6 w-full ">
              {
                workouts.map(workout=><Card 
                workout={workout}
                AddToList={AddToList}
                key={workout.id}
                ></Card>)
              }

           
                </div>
              </div>

                <div className="duration">
                  
                   
                <Duration cart={cart}></Duration>
                </div>

             </div>
        </div>
    );
};

export default Home;