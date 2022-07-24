import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function NewBookComponent() {
    const navigateTo = useNavigate()
    const [bookName, setBookName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [borrowDate, setBorrowDate] = useState('2022-07-22')
    const [returnDate, setReturnDate] = useState('2022-07-22')
    const [borrowBy, setBorrowBy] = useState('')

    const addBook = () => {
        const body = {
            bookName: bookName,
            authorName: authorName,
            dateOfBorrow: borrowDate,
            dateOfReturn: returnDate,
            borrowBy: borrowBy
        }

        axios.post('http://localhost:8080/book', body)
            .then(res => {
                navigateTo('/book')
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
                            <h2>Add a New Book</h2>
                        </div>
                        <div>
                            <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Book Name" variant="outlined" value={bookName} onChange={(e) => setBookName(e.target.value)} required />
                        </div>
                        <div>
                            <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Author Name" variant="outlined" value={authorName} onChange={(e) => setAuthorName(e.target.value)} required />
                        </div>
                        <div>
                            <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Borrow By" variant="outlined" value={borrowBy} onChange={(e) => setBorrowBy(e.target.value)} required />
                        </div>
                        <div>
                            <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" type='date' label="Borrow Date" variant="outlined" value={borrowDate} onChange={(e) => setBorrowDate(e.target.value)} required />
                        </div>
                        <div>
                            <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" type='date' label="Return Date" variant="outlined" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
                        </div>

                        <div>
                            <Button onClick={() => addBook()} sx={{ backgroundColor: '#1976d2', color: "#fff ", "&:hover": { color: "#000" } }} color="inherit">Add</Button>
                        </div>
                    </Grid>
                    {console.log('date', returnDate)}
                    <Grid item xs={12} sm={12} md={4}>
                    </Grid>
                </Grid>
            </Box>
        </div >
    )
}
