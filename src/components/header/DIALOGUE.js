import React from "react";
import PropTypes from "prop-types";
 

const DIALOGUE = ({ embedId }) => (
    <div className="Dialogue-responsive">
    
      <iframe
             
                                         
             src="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d">

               
        
        </iframe>
    </div>
  );



{/* 
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
  
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      
    />
  </div>
);*/}  


DIALOGUE.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default DIALOGUE;