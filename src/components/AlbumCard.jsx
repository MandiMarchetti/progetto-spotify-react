import React from "react";

const AlbumCard = function (props) {
  return (
    <div className="col text-center" id={props.info.id}>
      <img className="img-fluid" src={props.info.album.cover_medium} alt="track" />
      <p>
        Track: {props.info.title.length < 16 ? `${props.info.title}` : `${props.info.title.substring(0, 16)}...`}
        <br />
        Artist: {props.info.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
