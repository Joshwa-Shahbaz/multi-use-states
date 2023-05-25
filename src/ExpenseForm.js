import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [todos , setTodos] = useState([]);

    const [input , setInput] = useState("");
    const [amount , setAmont] = useState("");
    const [date , setDate] = useState("");
     
    const titleChangeHandler = (event) => {
        setInput(event.target.value)
    }

    const amountHandler = (event) => {
        setAmont(event.target.value)
    }
    
    const dateHandler = (event) => {
        setDate(event.target.value)
    }


    const submitHandler = (event) =>{
     
        event.preventDefault();

    const newTodos = {
        title : input,
        price : amount,
        date : date
    }


    setTodos((prevState) => [...prevState, newTodos])

    setInput("");
    setAmont("");
    setDate("");

    }
    
   

    return( 
    <div>
       <form className='form-main' onSubmit={submitHandler}>
       <div className='check'>
            <label>Title</label> <br/>
            <input type="text" placeholder="enter your title"
            value={input} onChange={titleChangeHandler} required />
        </div>
        <div className='check'>
            <label>Amont</label> <br/>
            <input type="number"
            value={amount} min="0.01" step="0.01" placeholder='Enter price' required onChange={amountHandler}/>
        </div>
        <div className='check'>
            <label>Date</label> <br/>
            <input type="date" min="2021-01-1" value={date} max="2025-12-31" required onChange={dateHandler} />
        </div>
        <div className='check'>
            <button  className='submit-button'  type='submit'>Add Expense </button>
        </div>
       </form>

       {todos?.map((item) => <> 

        <div className='center'>
        <div className='main'>

            <div className='check'>
               <h2>{item.date}</h2>
            </div>
            <div>
                <h1>{item.title}</h1>
            </div>

            <span className='amo'>{item.price}</span>
        </div>
    </div>

        </>)}



   
    </div>

    );

};

export default ExpenseForm;