import "./Phrase.css";

function Phrase() {
  return (
    <section className="prhase">
      <div className="phrase-text">
        <p>
          “What began as an interesting artistic exercise is now an
          indispensable tool. It&apos;s notable that twenty years after putting
          its first pixels on the screen RenderMan remains the benchmark for all
          rendering technology.”
        </p>
        <p className="phrase-autor">— GEORGE LUCAS</p>
      </div>

      <div className="button-container">
        <hr className="separacion" />

        <button className="button">VISIT RENDERMAN.PIXAR.COM</button>

        <hr className="separacion" />
      </div>
      <div className="second-phrase">
        <p>
          RenderMan® is Pixar&apos;s Academy Award®-winning rendering
          technology, excelling at producing stunning imagery for VFX and
          feature film animation. RenderMan is constantly evolving to meet new
          creative and technical challenges and to take advantage of the latest
          advances in computer technology.
        </p>
        <hr className="separacion"></hr>
      </div>
    </section>
  );
}

export default Phrase;
