import React,{useState} from 'react';

export default function ListUser() {
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        alert(inputs);
    }
    return (
        <div>
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
              <label>Name: </label>
              <input type="text" name="name" onChange={handleChange} />
              <button>Save</button>
            </form>
        </div>
    )
}