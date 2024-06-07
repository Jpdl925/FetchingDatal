import axios from "axios"
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
}

const DeleteData = () => {
    // We need a useState to help us hold the state of our users
    const [users, setUsers] = useState<User []>([])
    const [error, setError] = useState('')
    // useState for our isLoading indicator
    const [isLoading, setIsLoading] = useState(false)

    // Create a funciton to help us fetch our data with Axios
    const FetchData = () => {
        setIsLoading(true);
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            setUsers(response.data)
            setIsLoading(false)
        } )
        .catch(error => {
            setError(error.message)
            setIsLoading(false)
        }
        )
    }


// useEffect to help us with our FetchingData

useEffect(() => {
    
    FetchData();
  
}, [])

// Create a helper function to help us delete our users from our front end UI
    const userDelete = (user:User) => {
        setUsers(users.filter(u => u.id != user.id))
    }

  return (
    <>
    <h1 className="text-center">Crud Delete</h1>
    <ul className="list-group">
        {users.map((user) => (
            <li className="list-group-item d-flex justify-content-between"  key={user.id}>{user.name}
            <button onClick={() => userDelete(user)} className="btn btn-outline-danger">Delete</button>
            </li>

        ))}
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
    </ul>
    </>
  )
}

export default DeleteData