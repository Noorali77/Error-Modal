import { useState } from "react";
import UsersInput from "./components/USERS/UsersInput";
import UsersList from './components/USERS/UsersList';


function App() {
  const [data,setData] = useState([])

  const dataGettingHandler = (userName,userAge)=>{
     setData((prevData)=>{
       return [{name:userName,age:userAge,prevData},...prevData]
     })
  }
  return (
   <>
   <UsersInput onAddingData={dataGettingHandler}/>
    <UsersList users={data}/>
   </>
  );
}

export default App;
