import React from "react";
import PropTypes from "prop-types";
//import "./styles.css";


const DIALOGUE = ({ embedId }) => (
  <div> 
 
   <iframe 
     
    allow="microphone;"
    width="853"
    height="220"
    src="https://console.dialogflow.com/api-client/demo/embedded/53dd1c22-2525-40bd-bb2f-f5d52c6ab69d">
      
</iframe>
    
  </div>
   
);

DIALOGUE.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default DIALOGUE;


