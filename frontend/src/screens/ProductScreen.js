import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Col, Row, Image, Card, Button, ListGroup} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = () => {
    const params = useParams();
    const [product, setProduct] = ({useState})

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`/api/product/${params.id}`)
            setProduct(data)
        }

        fetchProducts()
    })
    
    return (
    <>
    <Link className='btn btn-light my-3' to='/'>
        Go Back
    </Link>
    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    />
                </ListGroup.Item>
                <ListGroup.Item>{product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                            <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                        <Col>
                        Status:
                        </Col>
                        <Col>
                            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                        </Col>
                        <ListGroup.Item>
                            <Button
                            className='btn-block'
                            type='button'
                            disabled={product.countInStock === 0}
                            >Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>


    </>
  )
}

export default ProductScreen