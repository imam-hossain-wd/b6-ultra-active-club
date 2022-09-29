import React from 'react';

const Card = (props) => {
   
    const {img,time,name,rep,set}= props.workout;
    return (
        <div>

    <div className="card bg-base-100 shadow-xl">
        <img className='h-56 ' src={img} alt="Shoes" />
    <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Time: {time} Mins</p>
        <p>Rep: {rep}</p>
        <p>Set: {set}</p>
        <button onClick={()=> props.AddToList(props.workout)} className="btn btn-primary w-full">Add to List</button>
    </div>
    </div>
            
        </div>
    );
};

export default Card;