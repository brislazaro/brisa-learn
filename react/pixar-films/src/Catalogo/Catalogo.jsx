import "./Catalogo.css";
import MovieCard from "./MovieCard";
import Elemental from "../img/elemental.jpeg";
import Buzz from "../img/lightyear.jpeg";
import Red from "../img/red.jpeg";
import Luca from "../img/luca_poster.jpeg";
import Soul from "../img/soul_poster.jpeg";
import Onward from "../img/onward.jpeg";
import ToyStory from "../img/toystory4.jpeg";
import Increibles from "../img/increible.png";
import Coco from "../img/coco.jpeg";

function Catalogo() {
  return (
    <section className="movies">
      <MovieCard name="Elemental" img={Elemental} />
      <MovieCard name="Lightyear" img={Buzz} />
      <MovieCard name="Turning Red" img={Red} />
      <MovieCard name="Luca" img={Luca} />
      <MovieCard name="Soul" img={Soul} />
      <MovieCard name="Onward" img={Onward} />
      <MovieCard name="Toy Story 4" img={ToyStory} />
      <MovieCard name="Incredibles 2" img={Increibles} />
      <MovieCard name="Coco" img={Coco} />
    </section>
  );
}

export default Catalogo;
