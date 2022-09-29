import React ,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Duration = ({cart}) => {
 const [breakTime , setBreakTime] = useState(0);

 const notify = () => toast("Congratulation ! I have done your Activity");


    let exerciseTime = 0;
    for (const singleCart of cart){
        exerciseTime = parseInt(exerciseTime) + parseInt(singleCart.time);      
    }
   

    const buttonHandler = (e)=>{
        const button = e.target;
        button.style.backgroundColor="#341f97";
        button.style.borderRadius="20px";
        button.style.padding="5px";
       const getTimeString = button.innerText;
       const getBreakTime = parseInt(getTimeString);
       const newCount = breakTime + getBreakTime;
        setBreakTime(newCount)
    }

    return (
        <div className='sm: flex flex-col justify-center items-center'>
            <div className='bg-green-700 rounded  p-5 w-full'>
            <div className='bg-pink-500 p-2 rounded-xl mt-3 mb-3'>
                <h1 >Imam Hossain</h1>
                <p> Chittagong Bangladesh</p>
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
                
         <button onClick={buttonHandler} >10<span className='select-none'>s</span> </button> 
         <button onClick={buttonHandler} >20<span>s</span> </button>
         <button onClick={buttonHandler} >30<span>s</span> </button>
         <button onClick={buttonHandler} >40<span>s</span> </button>
         <button onClick={buttonHandler} >50<span>s</span> </button>

       </div>


            <h2 className='m-5 font-bold text-2xl'>Exercise Details</h2>

         <div className='bg-sky-400 text-black p-5 rounded-xl'>
            <div className='flex justify-evenly'>
                <p>Exercise Time</p>
                <span> {exerciseTime} Mins</span>
            </div>

            <div className='flex justify-evenly'>
                <p>Break Time</p>
                <p> {breakTime} Seconds</p>
            </div>
         </div>

            {/* <button className="btn btn-secondary mt-5 w-full">Activity Comlete</button> */}

        <div>
        <button onClick={notify} className="btn btn-secondary mt-5 w-full">Activity Complete</button>
        <ToastContainer />
      </div>



        </div>
        </div>
    );
};

export default Duration;