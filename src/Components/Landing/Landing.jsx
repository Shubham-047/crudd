
import styles from "./landing.module.css";
import React, { useState,useEffect } from 'react'

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from '../../Service/api';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const user = [
  {
    id: 1,
    name: "SHubham",
    age: 21,
    gender: "Male",
    city: "Jharkhand",
  },
  {
    id: 2,
    name: "SHubham",
    age: 21,
    gender: "Male",
    city: "Jharkhand",
    },
  {
      "name": "MS Dhoni",
     "age": 21,
     "gender": "Male",
     "city": "Ranchi",
      "id": 1
    },
    {
      "name": "Mohd Shami",
     "age": 24,
     "gender": "Male",
     "city": "Odisa",
      "id": 4
    },
    {
      "name": "KL Rahul",
      "age": 28,
     "gender": "Male",
     "city": "Mumbai",
      "id": 5
    },
    {
      "name": "Shikhar Dhawan",
      "age": 25,
     "gender": "Male",
     "city": "Delhi",
      "id": 6
    }
];

export default function Landing() {
 const [users, setUsers] = useState([]);
     useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

  return (
    <div className={styles.landing}>
      <div className={styles.left}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Age</StyledTableCell>
                <StyledTableCell align="right">Gender</StyledTableCell>
                <StyledTableCell align="right">City</StyledTableCell>
                <StyledTableCell align="right">Update</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((el) => (
                <StyledTableRow key={el._id}>
                  <StyledTableCell component="th" scope="el">
                    {el.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{el.name}</StyledTableCell>
                  <StyledTableCell align="right">{el.age}</StyledTableCell>
                  <StyledTableCell align="right">{el.gender}</StyledTableCell>
                  <StyledTableCell align="right">{el.city}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ marginRight: 10 }}
                      component={Link}
                      to={`/edit`}
                    >
                      Edit
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      color="secondary"
                      variant="contained"
                      style={{ marginRight: 10 }}
                      onClick={() => deleteUserData(el._id)}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={styles.right}>
        <div className={styles.filter}>
          <div className={styles.f_head}>Filters</div>
          <div className={styles.f_inf}>
            Gender
            <select name="" id="">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <div className={styles.f_inf}>
            Age
            <select name="" id="">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <div className={styles.f_inf}>
            City
            <select name="" id="">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
              </div>
              
              <div className={styles.filter}>
          <div className={styles.f_head}>Sort</div>
          <div className={styles.f_inf}>
            Gender
            <select name="" id="">
              <option value="">Low</option>
              <option value="">High</option>
            </select>
          </div>
         
        </div>
      </div>
    </div>
  );
}
