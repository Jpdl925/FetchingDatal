import axios from "axios"
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
}

const LoadingIndicator = () => {
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



  return (
    <>
    <h1 className="text-center">Fetching Data with Axios</h1>
    <ul>
        {users.map((user) => (
            <li  key={user.id}>{user.name}</li>
        ))}
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
    </ul>
    </>
  )
}

export default LoadingIndicator