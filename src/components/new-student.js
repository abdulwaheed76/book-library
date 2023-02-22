import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function NewBookComponent() {
    const navigateTo = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const addStudent = () => {
        const body = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }

        axios.post('http://localhost:8080/student', body)
            .then(res => {
                navigateTo('/student')
            })
            .catch(error => {
                console.error(error)
            })
    }

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
                            <h2>Add New Student</h2>
                        </div>
                        <div>
                            <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        </div>
                        <div>
                            <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div>
                            <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <Button onClick={() => addStudent()} sx={{ backgroundColor: '#1976d2', color: "#fff ", "&:hover": { color: "#000" } }} color="inherit">Add Student</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}
