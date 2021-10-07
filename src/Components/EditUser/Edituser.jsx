import React, { useState,useEffect } from 'react'
import styles from "./edituser.module.css"
import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material'
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../../Service/api';

const initialValues = {
    name: "",
    age: "",
    gender: "",
    city: "",
}
export default function Edituser() {

     const [user, setUser] = useState(initialValues);
    const { name, age, gender, city } = user;
  const { id } = useParams();
    
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        history.push('/');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <div className={styles.edituser}>
             <h1>Edit User</h1>
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
                      style={{ marginRight: 10, width: "100%" }} onClick={() => editUserDetails()}>Add User</Button>
            </FormGroup>
        </div>
    )
}
