import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import "./Style.scss";
const NewArrival = (props) => {
  return (
    <CardGroup className="card-group" >
      <Card className="card">
        <CardImg src="https://images.unsplash.com/photo-1495096917745-b96947edc09d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">Aloe Vira</CardTitle>
          <div className="button">
          <Button className="margin-right" >Add To Cart</Button>
          <Button>More Info</Button>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg  src="https://images.unsplash.com/photo-1495096917745-b96947edc09d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">Aloe Vira</CardTitle>
          <div className="button">
          <Button className="margin-right" >Add To Cart</Button>
          <Button >More Info</Button>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg src="https://images.unsplash.com/photo-1495096917745-b96947edc09d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">Aloe Vira</CardTitle>
          <div className="button">
          <Button className="margin-right">Add To Cart</Button>
          <Button >More Info</Button>
          </div>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default NewArrival ;