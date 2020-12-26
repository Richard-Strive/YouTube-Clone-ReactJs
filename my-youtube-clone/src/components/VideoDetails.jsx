import React from "react";
import { Paper, Typography } from "@material-ui/core";
const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  console.log(video.id.videoId);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="video player"
          src=""
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}></Paper>
    </>
  );
};

export default VideoDetails;
