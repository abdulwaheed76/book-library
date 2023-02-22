import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function BookEditComponent(props) {
  const navigateTo = useNavigate()
  const { id } = useParams()
  const [bookName, setBookName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [borrowDate,setBorrowDate] = useState('')
  const [returnDate,setReturnDate] = useState('')
  const [borrowBy,setBorrowBy] = useState('')
  const getBook = () => {
    axios.get('http://localhost:8080/book/' + id)
      .then(res => {
        setBookName(res.data[0].book_name)
        setAuthorName(res.data[0].author_name)
        setBorrowBy(res.data[0].borrow_by)
        setBorrowDate(res.data[0].date_of_borrow)
        setReturnDate(res.data[0].date_of_return)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const updateBook = () => {
    const body = {
      id: id,
      bookName:bookName,
      authorName:authorName,
      dateOfBorrow:borrowDate,
      dateOfReturn:returnDate,
      borrowBy:borrowBy
    }

    axios.put('http://localhost:8080/book', body)
      .then(res => {
        navigateTo('/book')
      })
      .catch(error => {
        console.error(error)
      })
  }
  const deleteBook = () => {
    
    axios.delete('http://localhost:8080/book/'+id)
      .then(res => {
        navigateTo('/book')
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    getBook()
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
                  <h2>Edit Book Details</h2>
                </div>
            <div>
              <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Book Name" variant="outlined" value={bookName} onChange={(e) => setBookName(e.target.value)} />
            </div>
            <div>
              <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Author Name" variant="outlined" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
            </div>
            <div>
              <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" label="Borrow By" variant="outlined" value={borrowBy} onChange={(e) => setBorrowBy(e.target.value)} />
            </div>
            <div>
              <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" type='date' label="Borrow Date" variant="outlined" value={borrowDate} onChange={(e) => setBorrowDate(e.target.value)} />
            </div>
            <div>
              <TextField sx={{ pb: 3, width: 350 }} id="outlined-basic" type='date' label="Return Date" variant="outlined" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
            </div>
            
            <div>
              <Button onClick={() => updateBook()} sx={{ backgroundColor: '#1976d2', color: "#fff ", "&:hover": { color: "#000" },mr:2 }} color="inherit">Update</Button>
              <Button onClick={() => deleteBook()} sx={{ backgroundColor: '#1976d2', color: "#fff ", "&:hover": { color: "#000" } }} color="inherit">Delete</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
          </Grid>
        </Grid>
      </Box>
    </div >
  )
}

