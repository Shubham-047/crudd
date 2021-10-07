
import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material'
import React, { useState } from 'react'
import styles from "./adduser.module.css"
import { addUser } from '../../Service/api'
import { useHistory } from 'react-router-dom';


const initialValues = {
    name: "",
    age: "",
    gender: "",
    city: "",
}
export default function Adduser() {
    const [user, setUser] = useState(initialValues);
    const { name, age, gender, city } = user;

    
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user)
        history.push('/');
    }

    return (
        <div className={styles.adduser}>
            <h1>Add User</h1>
            <FormGroup style={{alignItems:"center",border:"2px solid red",padding:"20px",borderRadius:'5px'}}>
                <FormControl style={{marginBottom:"10px",width: "100%"}}>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name}/>
                </FormControl>
                <FormControl style={{marginBottom:"10px",width: "100%"}}>
                    <InputLabel>Age</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="age" value={age}/>
                </FormControl>
                <FormControl style={{marginBottom:"10px",width: "100%"}}>
                    <InputLabel>Gender</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="gender" value={gender}/>
                </FormControl>
                <FormControl style={{marginBottom:"20px",width: "100%"}}>
                    <InputLabel>City</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="city" value={city}/>
                </FormControl>
                <Button  color="primary"
                      variant="contained"
                      style={{ marginRight: 10, width: "100%" }} onClick={() => addUserDetails()}>Add User</Button>
            </FormGroup>
        </div>
    )
}
