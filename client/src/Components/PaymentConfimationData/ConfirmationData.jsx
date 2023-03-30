import React from 'react'
import { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import axios from 'axios'
import NavBars from '../NavBars/NavBars'
import Footer from '../Footer/Footer'

const ConfirmationData = () => {
    const [confirmData, setconfirmData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
    })

    const [succesM, setSuccessM] = useState(null)

    const [errorM, setErrorM] = useState(null)

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setconfirmData({ ...reservation, [name]: value })
        console.log(confirmData)
    }

    const confirmDataSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("", {...reservation});
            console.log(response);
            setSuccessM(response.data.message)
        } catch (error) {
            setErrorM(error.response.data.message)
        }
    }


  return (
    <div>
        <NavBars></NavBars>
       <Form onSubmit={confirmDataSubmit}>
        <FormGroup floating>
          <Input className="input"
            id="name"
            name="name"
            value={user.name}
            placeholder="Name"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleName" className="label">Name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="surname"
            name="surname"
            value={user.surname}
            placeholder="Surname"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="exampleSurname" className="label">Surname</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="exampleEmail"
            name="email"
            value={user.email}
            placeholder="Email"
            type="email"
            onChange={onChangeInput}
          />
          <Label for="exampleEmail" className="label">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input className="input"
            id="examplePhoneNumber"
            name="phone"
            value={user.phone}
            placeholder="PhoneNumber"
            type="text"
            onChange={onChangeInput}
          />
          <Label for="examplePhoneNumber" className="label">Phone Number</Label>
        </FormGroup>{" "} 
        <Button className="button1">Pagar &gt;</Button> <br />
        <Button className="button2">&lt; Cancelar</Button>
        </Form>
        <div></div>
        <div></div>
        <Footer></Footer>
    </div>
  )
}

export default ConfirmationData