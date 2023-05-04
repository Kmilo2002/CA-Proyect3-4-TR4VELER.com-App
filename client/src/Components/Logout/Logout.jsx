import React, { useEffect } from 'react'


const Logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("id")
    localStorage.removeItem("name")
    localStorage.removeItem("idlogging")
    localStorage.removeItem("idreserva")

    useEffect(() => {
     setTimeout(() => {
      window.location.href = "/"
     }, 2500);   
    })

  return (
    <div>
        <h2>¡¡Vuelva pronto!!</h2>
    </div>
  )
}

export default Logout