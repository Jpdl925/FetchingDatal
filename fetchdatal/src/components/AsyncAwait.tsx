import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
}


const AsyncAwait = () => {

    const [users, setUsers] = useState<User []>([])
    const [error, setError] = useState('')

    // Function to handle our fetching data
    const fetchData = async () => {
// Our try block will try to get our data
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if(!response.ok){
                throw new Error(`Http error! Status:  ${response.status} `)
            }
            const data = await response.json();
            setUsers(data)
            
        }
// Our catch block will catch any errors and handle them
        catch  (error: any) {
            console.log(error.message)
            setError(error.message)
        }

        

    }

    // useEffect for our function
    useEffect(() => {
        
        // we will call our fetchData
        fetchData();
    
    }, [])
    

  return (
    <>
    <h1 className="text-center">Fetching Data with Async Await and handling errors</h1>
    <div>
        
        <ul>
            {users.map(user =>
                <li key={user.id}>{user.name}</li>
            )}
        </ul>
    </div>
    </>
  )
}

export default AsyncAwait