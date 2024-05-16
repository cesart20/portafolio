import "./home.css"
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { Link} from "react-scroll";

let isLoading = true;

const Home = () => {

  
const textRef = useRef(null);

useEffect(() => {
  if (textRef.current && isLoading) {
    isLoading = false;

    init(textRef.current, {
      startDelay: 1500,
      backSpeed: 70,
      showCursor: true,
      strings: ["Desarrollador FrontEnd", "Freelance", "Maquetador Web"],
    });
  }
}, []);

    return (
      <div className="home pageContainerInicio">
        <div className="HomeContain">
          <div className="left">
            <div className="containerImg">
              <img className="homeImg" src="assents/computer.png" alt="cesar torres" />
            </div>
          </div>
          <div className="right">
            <h2>Portafolio de</h2>
            <h1>César Torres</h1>
            <h3 className="itypeText">
              &#60;&nbsp;
              <span ref={textRef}></span>
              &#47;&#62;
            </h3>
            <a
              className="download"
              href="assents/hojaCv.pdf"
              download="Reporte2Mayo2010"
            >
              <span>Descargar CV</span>
            </a>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <FontAwesomeIcon className="rightIcon" icon={faAngleDown} />
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Home


