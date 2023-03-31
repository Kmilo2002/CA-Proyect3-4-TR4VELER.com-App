import React, {useState, useEffect} from 'react'
import axios from 'axios'




const UserProfile = () => {
    const [user, setUser] = useState({})

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    const [errorM, setErrorM] = useState(null)

    const getUser = async () => {
        try {
        const response = await axios.get("http://localhost:3500/api/user", {
            headers: {
                Authorization: token,
            }
        })
        console.log(response.data)
        setUser(response.data.user)
            
        } catch (error) {
          setErrorM(error.response.data.message)  
        }
        
    }

    useEffect(() => {
        getUser()
    }, [])

  return (
    <div>
        <h1>Hello, {user.name}</h1>
        
        {
            role == 1 ? (<div>

            </div>):(<div>

            </div>)
        }

    </div>
  );
 }
export default UserProfile;