import React from 'react';
import "./style.css"

const Todo = () => {
  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src="images/imgtodo.jpg" alt="todologo" />
                    <figcaption className='caption'>Add Your List Here!</figcaption>
                </figure>
                
                <div className='addItems'>
                    <p>Just Do it</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo