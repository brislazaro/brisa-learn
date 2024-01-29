import "./MovieCard.css";

function MovieCard(props) {
  return (
    <div className="movie">
      <img className="img" src={props.img} />
      <p className="name">{props.name}</p>
    </div>
  );
}
export default MovieCard;
