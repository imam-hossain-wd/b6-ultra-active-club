
import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";



let getItem = localStorage.getItem('break-time');
    if(!getItem){
        getItem = "00";
 }

const Duration = ({cart}) => {
    const [breakTime , setBreakTime] = useState(`${getItem.slice(0,2)}`);
    


 const notify = () => toast("Congratulation ! you have done your Activity",{
    position:"top-center"
 });


    let exerciseTime = 0;
    for (const singleCart of cart){
        exerciseTime = parseInt(exerciseTime) + parseInt(singleCart.time); 
       localStorage.setItem("exerciseTime", exerciseTime);  
       
    }

    const getExerciseTime = () => {
        const exerciseTime = localStorage.getItem("exerciseTime") ? localStorage.getItem("exerciseTime") : "00";  
        return exerciseTime;
        
    }
   
    const buttonHandler = (e)=>{
        const button = e.target;
        button.style.backgroundColor="#341f97";
        button.style.borderRadius="20px";
        button.style.padding="5px";
       const getTimeString = button.innerText;
        localStorage.setItem('break-time', getTimeString);
        const getTimeFromDB = (localStorage.getItem('break-time'))
        let  newTime;
        if(getTimeFromDB){
          newTime= getTimeFromDB.split('').slice(0,2).join('')
        }
        setBreakTime(newTime)   
    }

    

   

    return (
        <div className='sm: flex flex-col justify-center items-center'>
            <div style={{backgroundColor:'#222f3e'}} className='bg-green-700 rounded-2xl text-white p-5 w-full'>
            <div className='bg-pink-500 p-2 rounded-xl mt-3 mb-3 flex justify-around'>
                <div>
                <img className='rounded-full w-32 h-32' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlB8FzzL5xfVfJG3oFNfl27WKuZqH5hTBeDSh7pGt&s" alt="" />
                </div>
                <div className='text-lg'>
                <h1 >Imam Hossain</h1>
                <p> <FontAwesomeIcon icon={faLocationDot} /> Chittagong Bangladesh</p>
                </div>
                
            </div>

           
            
       <div className='flex justify-between bg-teal-400 rounded-xl p-5 text-black'>
                <div>
                    <h5>60 <span>kg</span> </h5>
                    <p>Weight</p>
                </div>
                <div>
                    <h5>6.7 </h5>
                    <p>Height</p>
                </div>
                <div>
                    <h5>23 <span>yrs</span> </h5>
                    <p>Age</p>
                </div>
            </div>

            <h5 className='m-5 font-bold text-2xl'>Add A Break</h5>

            <div className='flex justify-evenly bg-slate-400 text-black py-6 rounded-xl'>
                
            <button onClick={buttonHandler} >10s</button> 
            <button onClick={buttonHandler} >20s</button>
            <button onClick={buttonHandler} >30s</button>
            <button onClick={buttonHandler} >40s</button>
            <button onClick={buttonHandler} >50s</button>

       </div>


            <h2 className='m-5 font-bold text-2xl'>Exercise Details</h2>

         <div className='bg-sky-400 text-black p-5 rounded-xl'>
            <div className='flex justify-evenly'>
                <p>Exercise Time</p>
                <p>{getExerciseTime()}</p>
                
                
            </div>

            <div className='flex justify-evenly'>
                <p>Break Time :</p>
                <p>{breakTime}</p>
                

                
                
            </div>
         </div>


        <div>
        <button onClick={notify} className="btn btn-secondary mt-5 w-full">Activity Complete</button>
        <ToastContainer />
      </div>



        </div>
        </div>
    );
};

export default Duration;