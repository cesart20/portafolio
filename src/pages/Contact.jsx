import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    return (
      <div className="contact pageSection " id="contact">
        <div className="pageContainer">
          <h2 className="contactTitle pageTitle">Contacto</h2>
          <span className="PageLine"></span>
          <div className="contactContain">
            <div className="contactText">
              <p>
                Si tienes una oferta de trabajo, una propuesta de proyecto o
                simplemente quiere saludar, Contácteme aquí!
              </p>
            </div>
            <div className="contactCards">
              <a
                href="mailto:cesarivantorres19@gmail.com"
                className="contactCard item1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="contactCardIcon"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
                Enviar un Correo
              </a>
              <a
                href="https://wa.me/972331130"
                className="contactCard item2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="contactCardIcon"
                  icon={faWhatsapp}
                ></FontAwesomeIcon>
                Escribir un WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/cesar-ivan-torres-front-dev/"
                className="contactCard item3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="contactCardIcon"
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
                Contactar por LinkedIn
              </a>
              <a
                href="https://twitter.com/cesarivantorres"
                className="contactCard item4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="contactCardIcon"
                  icon={faTwitter}
                ></FontAwesomeIcon>
                Contactar por Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact
