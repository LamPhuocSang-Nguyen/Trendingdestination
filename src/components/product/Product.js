import React from "react";
//import {Container, Row, Col} from 'reactstrap';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from 'reactstrap';
export default function Product(props) {
    const { id, title, category, price, img } = props;
    return (
        <Col>
            {/*<div>
        <Container>
            <Row>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} className="border p-5">Row</Col>
            </Row>
        </Container>
        </div>*/}



            <Card key={id}
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src={img}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {category}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {title}
                    </CardSubtitle>
                    <CardText>
                        From {price}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
}
