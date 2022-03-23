import React from "react";
import PropTypes from "prop-types";
//import "./styles.css";


const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="650"
      height="400"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Why 3dsmax here is different"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;