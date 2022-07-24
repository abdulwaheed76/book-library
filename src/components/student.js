import React, { useEffect, useState } from 'react'
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom'
import StudentEditComponent from './student-edit';
export default function StudentComponent() {
  const [student, setStudent] = useState([])
  const navigateTo = useNavigate()
  const getStudent = () => {
    axios.get('http://localhost:8080/student')
      .then(res => {
        setStudent(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    getStudent()
  }, [])

  if (student.length === 0) {
    return (
      <div>
        <Button onClick={() => navigateTo(`/student/add`)} sx={{ backgroundColor: '#1976d2', color: "#fff ", "&:hover": { color: "#000" }, mt: 4 }} color="inherit">Add New Student</Button>
      </div>
    )
  }
  else {
    return (
      <div>
        <Box sx={{ flexGrow: 1, paddingTop: 15 }} >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={12} sm={12} md={2}></Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Button onClick={() => navigateTo(`/student/add`)} sx={{ backgroundColor: '#1976d2', color: "#fff ", "&:hover": { color: "#000" }, mb: 4, float: 'right' }} color="inherit">Add New Student</Button>

              <TableContainer xs={8} component={Paper} >
                <div>
                  <h2>All Students</h2>
                </div>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>First Name</TableCell>
                      <TableCell align="left">Last Name</TableCell>
                      <TableCell align="left">Email</TableCell>
                      <TableCell align="right">#</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {student.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.first_name}
                        </TableCell>
                        <TableCell align="left">{row.last_name}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="right">
                          <Button onClick={() => navigateTo(`/student/${row.id}`)} sx={{ backgroundColor: '#1976d2', color: "#fff ", "&:hover": { color: "#000" } }} color="inherit">Edit</Button></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid xs={12} sm={12} md={2}></Grid>
          </Grid>
        </Box>

      </div>
    )
  }
}
