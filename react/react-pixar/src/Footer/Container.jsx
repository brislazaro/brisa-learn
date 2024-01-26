import "./Container.css";
import logofb from "../img/fblogo.png";
import logotw from "../img/twitterlogo.png";
import logoyt from "../img/sss.webp";
import logoig from "../img/iglogo.png";

function Footer() {
  return (
    <footer className="fotter">
      <div className="redes-sociales">
        <a
          href="https://www.facebook.com/Pixar/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="rs-logo" src={logofb}></img>
        </a>
        <a href="https://twitter.com/pixar" target="_blank" rel="noreferrer">
          <img className="rs-logo" src={logotw}></img>
        </a>
        <a
          href="https://www.youtube.com/pixar"
          target="_blank"
          rel="noreferrer"
        >
          <img className="rs-logo" src={logoyt}></img>
        </a>
        <a
          href="https://www.instagram.com/pixar/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="rs-logo" src={logoig}></img>
        </a>
      </div>
      <div className="politics-container">
        <div className="partes">
          <a
            className="politics"
            href="https://privacy.thewaltdisneycompany.com/en/"
            target="_blank"
            rel="noreferrer"
          >
            PRIVACY POLICY
          </a>
          | &nbsp;
          <a
            className="politics"
            href="https://disneytermsofuse.com/"
            target="_blank"
            rel="noreferrer"
          >
            TERMS OF USE
          </a>
        </div>
        <div className="partes">
          <a
            className="politics"
            href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/"
            target="_blank"
            rel="noreferrer"
          >
            YOUR US STATE PRIVACY RIGHTS
          </a>
          | &nbsp;
          <a
            className="politics"
            href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            CHILDREN&apos;S ONLINE PRIVACY POLICY
          </a>
        </div>

        <a
          className="politics"
          href="https://preferences-mgr.truste.com/?affiliateId=115&type=disneycolor"
          target="_blank"
          rel="noreferrer"
        >
          INTEREST - BASED ADS
        </a>
        <p className="years">© 1986-2023 DISNEY / PIXAR</p>
      </div>

      <section className="final-button">
        <button className="personalInformation-button">
          Do Not Sell or Share My Personal Information
        </button>
      </section>
    </footer>
  );
}

export default Footer;
