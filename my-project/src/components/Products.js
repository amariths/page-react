import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import json from './Spa.json'


function Products(props) {
    const { id } = useParams()

    const data = json.find((item) => item.id === id)





    function e() {
        console.log(data.name)
    }

    return (
        <div>








                    <Card id="offer" style={{ width: '70rem' }}>
                        <Card.Img id="cardimage1" variant="top" src={data.img} />

                        <Card.Body>
                            <Card.Title id="card-name1" className="card-text">
                                {data.name}
                            </Card.Title>
                            <div id="cardtext1">
                                <Card.Text >
                                    {data.info}
                                </Card.Text>
                            </div>
                            <div className="cardprice1">
                                <h4 id="card-price1">{data.price}</h4>
                            </div>

                            <Button id="btn1" variant="primary">
                                Lägg till i kundvagn
                            </Button>
                        </Card.Body>
                    </Card>





        </div>
    )
}

export default Products
