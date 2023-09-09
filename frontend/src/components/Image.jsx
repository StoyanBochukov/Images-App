import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Image = ({ image }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/images/${image._id}`}>
            <Card.Img src={image.image} variant='top' />
        </Link>
    </Card>
  )
}

export default Image