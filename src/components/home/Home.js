import React,{useState,useEffect} from 'react';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('workoutData.json')
    .then(res=> res.json())
    .then(data=>setWorkouts(data))
   
},[]);

console.log(workouts);
  return (
    <div>

<div>
           
           <h1 className='text-4xl text-center text-teal-400 mt-5'>E-Max Fitness</h1>
           <h4 className='text-2xl text-center text-teal-400 mt-5'>Select today’s exercise</h4>

           <div className="lg:flex justify-between">

             <div className='card-container'>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-5 mt-10 w-5/6 w-full ">

              card
             
               </div>
             </div>

               <div className="duration">
                 
                   
               </div>

            </div>
       </div>
      
    </div>
  );
};

export default Home;