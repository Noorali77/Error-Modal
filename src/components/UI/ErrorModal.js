import './ErrorModal.css'

function ErrorModal(props){
    return(
        <>
     <div className="backdrop">

         <div className="row">
             <div className="col-md-3">

             </div>
             <div className="col-md-6">
             <div className="card">
      <header className='header'>
          <h2>{props.title}</h2>
      </header>
      <div className='content'>
          <p>{props.message}</p>
      </div>

      <div className='mx-2'>
          <button className='btn btn-primary mb-2' onClick={props.onClick}>Okay</button>
      </div>
   
         </div>
             </div>
         </div>
        
        
     </div>
        </>
    )
}

export default ErrorModal;