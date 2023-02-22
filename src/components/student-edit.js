import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function StudentEditComponent(props) {
  const navigateTo = useNavigate()
  const { id } = useParams()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const getStudent = () => {
    axios.get('http://localhost:8080/student/' + id)
      .then(res => {
        setFirstName(res.data[0].first_name)
        setLastName(res.data[0].last_name)
        setEmail(res.data[0].email)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const deleteStudent = () => {


    axios.delete('http://localhost:8080/student/'+id)
      .then(res => {
        navigateTo('/student')
      })
      .catch(error => {
        console.error(error)
      })
  }
  const updateStudent = () => {
    const body = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email
    }

    axios.put('http://localhost:8080/student', body)
      .then(res => {
        navigateTo('/student')
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    getStudent()
  }, [])

  return (
    <div>
      <Box
        component="form"
        sx={{
          // '& > :not(style)': { m: 1, width: '40ch' },
          flexGrow: 1,
          paddingTop: 15,
        }}
        noValidate
        autoComplete="off"

      >
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} sm={12} md={4}>

          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          <div>
                  <h2>Edit Student</h2>
                </div>
            <div>
              <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
              <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
              <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Button onClick={() => updateStudent()} sx={{ backgroundColor: '#1976d2', color: "#fff ", "&:hover": { color: "#000" } ,mr:3}} color="inherit">Update</Button>
              <Button onClick={() => deleteStudent()} sx={{ backgroundColor: '#1976d2', color: "#fff ", "&:hover": { color: "#000" } }} color="inherit">Delete</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          </Grid>
        </Grid>
      </Box>
    </div >
  )
}

