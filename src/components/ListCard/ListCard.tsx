import React from "react";
import { DetailsProp } from "../../Types/ComponentTypes/ComponentTypes";
import "./ListCard.scss";

const ListCard: React.FC<DetailsProp> = ({
  title,
  genres,
  vote_average,
  backdrop_path,
  genIds,
  poster_path,
}) => {
  const genreArray = genres?.filter((list) => {
    return genIds?.some((genid) => {
      return genid === list.id;
    });
  });

  // console.log(genreArray);
  return (
    <div className="listcardWrapper">
      <div className="listcardDiv">
        <h4>{title}</h4>
        <div className="genrediv">
          {genreArray?.map((genre) => (
            <div key={genre.id} className="genrename">
              {genre.name}
            </div>
          ))}
        </div>
        <div className="rating">
          <i className="fas fa-star"></i>
          <p>{vote_average?.toPrecision(2)}</p>
        </div>

        <div className="listimagediv">
          <div className="image2">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="backdrop_image"
            />
          </div>
          <div className="image1">
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              alt="backdrop_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
