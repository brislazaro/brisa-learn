/* eslint-disable react/prop-types */

function PokemonCard(props) {
  return (
    <div className="pokemon-card">
      <img src={props.img} />
      <p> {props.name} </p>
      <div>
        <p>{props?.types[0]?.name}</p>

        {props.types[1] && <p>{props.types[1].name} </p>}
      </div>
    </div>
  );
}

export default PokemonCard;
