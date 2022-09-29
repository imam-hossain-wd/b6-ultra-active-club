import React from 'react';

const Collapse = () => {
    return (
        <div className='flex justify-center my-6'>
            <div className='w-3/5'>
            <div tabIndex={0} className="collapse collapse-arrow border             border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                How does react work
            </div>
            <div className="collapse-content"> 
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.</p>
            </div>
           
         </div>

        <div tabIndex={1} className="collapse collapse-arrow border             border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                Different Between props and state
            </div>
            <div className="collapse-content"> 
                <h3 className='text-center text-2xl'>Props</h3>
                <p>props passed data from one component to another</p>
                <p>Props is Immutable</p>
                <p>Props can be used with state and functional components</p>
                <p>Props are read-only</p>

                <h3 className='text-center text-2xl'>State</h3>

                <p>state passed within the component only</p>
                <p>state is Mutable</p>
                <p>State can be used only with the state components/class component</p>
                <p>State is both read and write</p>
            </div>
           
         </div>
        <div tabIndex={1} className="collapse collapse-arrow border             border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
                How many works useEfeect without dataload from api
            </div>
            <div className="collapse-content"> 
            <p>useEffect() is a React Hook which allows us to handle side effects in our functional React components. we can use it to do anything that doesn’t directly impact our UI/ JSX code.It allows us to register a function which executes AFTER the current render cycle.It runs after every render cycle unless we pass a second argument to an array of dependencies of the effect.</p>
            </div>
           
         </div>
            </div>

       


        </div>

    );
};

export default Collapse;