import React from 'react';
import Video from '../video/Video';
import {
  Card,
  Button,
  CardBody
} from 'reactstrap';

// const videoTitle = "CDC: On Handwashing";

const Cards = (props) => {
  return (
    <div>
      <Card body className="text-center" >
        <CardBody className="align-center">
          <Video />
        </CardBody>
        <Button color="danger" size="lg" block href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd" target="_blank" rel="noopener noreferrer"><h4>Updates & Alerts</h4></Button>
      </Card>
    </div>
  );
};

export default Cards;