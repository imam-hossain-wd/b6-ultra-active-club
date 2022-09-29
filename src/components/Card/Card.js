import React from 'react';

const Card = (props) => {
   
    const {img,time,name,rep,set}= props.workout;
    return (
        <div>

    <div className="card bg-base-100 shadow-xl">
        <img className='h-56 ' src="" alt="Shoes" />
    <div className="card-body">
        <h2 className="card-title"> </h2>
        <p>Time: Mins</p>
        <p>Rep: </p>
        <p>Set: </p>
        <button onClick={()=> props.AddToList(props.workout)} className="btn btn-primary w-full">Add to List</button>
    </div>
    </div>
            
        </div>
    );
};

export default Card;