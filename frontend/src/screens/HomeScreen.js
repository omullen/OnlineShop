import React, {useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')
    }
  })

  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map(p => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={p} />
            </Col>
        ))
}
    </Row>
    </>
  )
}

export default HomeScreen