import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

const FollowersCard = (props) => {

    return(
        <Card text='secondary' style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.imgurl} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text >
                    name: {props.name}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default FollowersCard;
