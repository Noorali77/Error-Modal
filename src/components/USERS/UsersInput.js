import {useState} from 'react';
import ErrorModal from '../UI/ErrorModal';
import './UserInput.css'


function UsersInput(props){
    const[enteredUserName,setEnteredUserName] = useState('');
    const[enteredAge,setEnteredAge] = useState('');
    const[error,setError] = useState(null);

    let userNameChangeHandler = (event)=>{
        setEnteredUserName(event.target.value);


    }

    let ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    let formSubmitHandler = (event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Name or Age!!',
                message : 'Please Enter a Valid Name and Age'
            })
            return;
        }
       
        if(+enteredAge < 1){
            setError({
                title: 'Invalid Age!!',
                message : 'Name must be greater than 1'
            })
            return;
        }

        props.onAddingData(enteredUserName,enteredAge);
            
        setEnteredUserName('');
        setEnteredAge('');

    }

    const errorHandler = ()=>{
        setError(null)
    }

    return(
        <>
       {error && ( <ErrorModal title={error.title}  message={error.message} onClick={errorHandler} />) }
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">

                </div>

                <div className="col-md-6">
               <form onSubmit={formSubmitHandler}>
                          
               <div>

<div className="mb-3">
  <label htmlFor="userName" className="form-label fw-bold fs-5">Username:</label>
  <input value={enteredUserName} onChange={userNameChangeHandler} type="text" id='userName' className="form-control" />
</div>
<div className="mb-3">
  <label htmlFor="age" className="form-label fw-bold fs-5">Age:</label>
  <input type="number" value={enteredAge} onChange={ageChangeHandler} className="form-control"/>
</div>
   <button type='submit' className='btn btn-primary'>Add Users</button>

</div>
            

               </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default UsersInput;