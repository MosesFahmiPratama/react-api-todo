// import React,{useState} from 'react';

// function App(){
//   const [name,setName]=useState("Moses");
//   const [currentName,setCurrentName]=useState("");
  
//   const handleChange = event =>{
//     setCurrentName(event.target.value);
//   }
  
//   const handleSubmit = () => {
//     setName(currentName);
//   }
  
//   return ( 
//       <div>
//           <h1>Hello. This is {name}</h1>
//           <input type="text" placeholder="Ubah Nama ku" onChange={handleChange}/>
//           <button onClick={handleSubmit}>ubah</button>
//       </div>
//   )
// }

// export default App;
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import ListUser from './components/ListUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navigasi">
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
        <section className="content">
        <Routes>
              <Route index element={<ListUser />} />
              <Route path="user/create" element={<CreateUser />} />
              <Route path="user/:id/edit" element={<UpdateUser />} />
        </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}
export default App;