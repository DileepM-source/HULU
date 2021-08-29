import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate"; //if content exceeds morethan one line just display ...
import { ThumbUpSharp } from "@material-ui/icons";

const base_URL = "https://image.tmdb.org/t/p/orginal/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_URL}${movie.backdrop_path || movie.poster_path}`}
        alt=""
        className="src"
      />
      <TextTruncate
        line={1} //number of lines to display under video card
        element="p" //p tag
        truncateText="..." // which has to display after the end of the line
        text={movie.overview} // text to truncate
      />

      <h2>{movie.title || movie.orginal_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} `}
        {movie.release_date || movie.forst_air_date}
        <ThumbUpSharp /> {"  "} {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
