import React from 'react';
import Video from '../video/Video';
import {
  Container,
  Card,
  // Button,
} from 'reactstrap';

const videoTitle = "CDC: On Handwashing";

const Cards = (props) => {
  return (
    <Container>
      <Card body className="card" >
        <h3 className="text-info">{videoTitle}</h3>
        <Video />
      </Card>
    </Container>
  );
};

export default Cards;