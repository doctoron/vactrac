import React, { Fragment } from 'react';
import { Container } from 'reactstrap';

// import Youtube from 'react-youtube';
const Video = () => {
  return (
    <Fragment>
      <Container className="iframe-container">
        <iframe
          src="https://www.youtube-nocookie.com/embed/LWmok9avzr4"
          className="video-embed"
          width="560"
          height="315"
          samesite="None"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title="CDC Handwashing Video"
          allowFullScreen={true}>
        </iframe>
      </Container>
    </Fragment>
  )
}



export default Video

// import video1 from 'https://youtu.be/neUTmGOLJys'
// https://media.giphy.com/media/Qi1eKwIDMHd8k/giphy.gif Handwashing Meme Cartoon
// https://www.cdc.gov/handwashing/CDC Handwashing Guide 
// https://youtu.be/d914EnpU4Fo CDC Handwashing Video
