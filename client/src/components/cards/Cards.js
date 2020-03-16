import React from 'react';
import Video from '../video/Video';
import {
  Container,
  Card,
  Button,
  CardBody
} from 'reactstrap';

const videoTitle = "CDC: On Handwashing";

const Cards = (props) => {
  return (
    <Container>
      <Card body className="text-center" >
        <CardBody className="align-center">
          <h3 className="text-danger">{videoTitle}</h3>
          <Video />
        </CardBody>
        <Button color="danger" size="lg" block href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd" target="_blank" rel="noopener noreferrer"><h4>Updates & Alerts</h4></Button>
      </Card>
    </Container>
  );
};

export default Cards;