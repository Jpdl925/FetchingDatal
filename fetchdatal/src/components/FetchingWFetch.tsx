import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
}

const FetchingWFetch = () => {

    // useState to help us with our users state

    const [users, setUsers] = useState<User []>([])

    // Create a function to help us fetch our data
    const fetchUserData = () => {

    }

    // We need a useEffect for rendering our data once our fetchingFetch component loads, no dependency in the array, no clean up function
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then (data => setUsers(data)
      )

    }, [])
    


  return (
    <>
    <h1 className="text-center">Fetching Data using Fetch</h1>
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

export default FetchingWFetch