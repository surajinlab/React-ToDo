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
                <div>
                    <input type="text" placeholder=" Add item here..." className='form-control' />
                    <i className="fa fa-plus add-btn"></i>
                </div>

                    <div className='showItems'>
                        <div className='eachItem'>
                            <h3>Apple</h3>
                            <div className='todo-btn'>
                                <i className="fa fa-plus add-btn"></i>
                                <i className="fa fa-plus add-btn"></i>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className='btn effect04' data-sm-link-text="Remove All">
                            <span> CHECK LIST </span>
                        </button>
                    </div>
                    
                
            </div>
        </div>
    </>
  )
}

export default Todo