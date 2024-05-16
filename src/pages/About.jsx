import "./about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3Alt,faHtml5,faSass,faJs,faBootstrap, faNodeJs, faGithub,} from "@fortawesome/free-brands-svg-icons";



const About = () => {

const ListaSkills = [
  {
    id: "1",
    value: "Html",
    icon: faHtml5,
    link: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    id: "2",
    value: "Css",
    icon: faCss3Alt,
    link: "https://developer.mozilla.org/es/docs/Learn/CSS",
  },
  {
    id: "3",
    value: "Bootstrap",
    icon: faBootstrap,
    link: "https://getbootstrap.com/",
  },
  { id: "4", value: "Sass", icon: faSass, link: "https://sass-lang.com/" },
  {
    id: "5",
    value: "JavaScript",
    icon: faJs,
    link: "https://www.javascript.com/",
  },
  { id: "6", value: "React", icon: faReact, link: "https://es.reactjs.org/" },
  { id: "7", value: "NodeJs", icon: faNodeJs, link: "https://nodejs.org/es/" },
  { id: "8", value: "Github", icon: faGithub, link: "https://github.com/" },
  // { id: "9", value: "Ubuntu", icon: faUbuntu, link: "https://ubuntu.com/" },
  
];




    return (
      <div className="about pageSection" id="about">
        <div className="pageContainer">
          <h2 className="aboutTitle pageTitle">Sobre mí</h2>
          <span className="PageLine"></span>

          <div className="aboutContain">
            <div className="aboutRight">
              <div className="aboutRightContain">
                
                <h3 className="aboutRightFirst">
                  Mi nombre es César Iván Torres, soy Desarrollador FrontEnd, apasionado a la
                  tecnología y al Desarrollo Web. {" "}
                </h3>
                <p className="aboutRightText">
                  Poseo conocimiento en construcción de páginas web, además, cuento con
                  habilidades de programación FrontEnd - React. Tengo Capacidad de adaptación y autodidacta con ganas de seguir aprendiendo más.
                </p>
                <a
                  className="download"
                  href="https://github.com/Ctorres2020"
                  // download="Reporte2Mayo2010"
                >
                  <span>Descargar CV</span>
                </a>
              </div>
            </div>
            <div className="aboutLeft">
              <h2 className="aboutLeftTitle">Skills</h2>
              <div className="aboutTargets">
                {ListaSkills.map((item) => (
                  <a
                    href={item.link}
                    key={item.id}
                    className="aboutLeftTarget"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="aboutLeftTargetIcon"
                      icon={item.icon}
                    />
                    <h3 className="aboutLeftSubtitle">{item.value}</h3>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About
