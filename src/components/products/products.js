import React from "react";
import { useState, useRef } from "react";
import Product from "../product/Product.js";
import {listTour} from "../../data.js";
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Container } from 'reactstrap';



export default function Products(props) {
    return (
        <Container>
            <Row>
            {
                listTour.map((item)=>(
                    <Product key={item.id}
                            title={item.title}
                            category={item.category}
                            price={item.price}
                            img={item.img}
                    />
                ))
            }
            </Row>
        </Container>
    )
}
