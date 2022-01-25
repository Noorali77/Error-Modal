

function UsersList(props){
    return(
        <>
      <div className="container mt-5">
          <div className="row">
              <div className="col-md-3">

              </div>
              <div className="col-md-6">

              <ul className="list-group">
                  {
                      props.users.map((user,index)=>{
                          return(
                         <li key={index} className="list-group-item bg-info text-white mt-3">{user.name} &nbsp; {user.age} (Years Old)</li>

                          )
                      })
                  }

                                 </ul>
              </div>
          </div>
      </div>
        </>
    )
}

export default UsersList;