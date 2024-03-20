import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ComingSoon = () => {
  return (
      <div style={{textAlign:'center'}}>
        <h1>Sorry page is not availabe yet(</h1>
        <Link to='/objects'>
            <Button>Click For Chechking Out Objects Page !</Button>
        </Link>
    </div>
  )
}

export default ComingSoon