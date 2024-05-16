import { useState } from "react";
import "./portafolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const listTitleProjects = [
  {
    id: 1,
    value: "All",
    state: true,
    project: [
      {
        id: 13,
        title: "Dashboard",
        img: "assents/dashboard.jpg",
        text: "Este proyecto esta hecho con NextJs, Redux Toolkit y esta desplegado en Vercel.",
        linkWeb: "https://cursonextfh.vercel.app/",
      },
      {
        id: 9,
        title: "Página en Bootstrap",
        img: "assents/pagina-en-Bootstrap.png",
        text: "Esta página esta hecho con Bootstrap y desplegado en GitHub pages, tiene de tematica página de adopción, se utiliza variables en css y bootstrap.",
        linkWeb: "https://ctorres20.github.io/adopcion/index.html",
        linkGit:
          "https://github.com/Ctorres2020/Proyecto-del-curso-de-Bootstrap",
      },

      {
        id: 2,
        title: "Portafolio Web",
        img: "assents/next-portafolio.png",
        text: "Se muestra un portafolio básico creado con Nextjs y Markdown, se desplego en Vercel",
        linkWeb: "https://next-portafolio-phi.vercel.app/",
        linkGit: "https://github.com/Ctorres2020/next-portafolio",
      },
      {
        id: 3,
        title: "CryptoPrice",
        img: "assents/CryptoPrice.png",
        text: "En este sitio se uso una api para ver los diferentes precios de las criptomonedas, se desplego en Firebase.",
        linkWeb: "https://crypto-react-native-6c65d.web.app/",
        linkGit: "https://github.com/Ctorres2020/CryptoPrice",
      },

      {
        id: 6,
        title: "Copia de Netflix",
        img: "assents/copia-de-netflix.png",
        text: "Maquetación con Html y Css para un intento de copia de netflix",
        linkWeb: "https://ctorres20.github.io/copianetflix/index.html",
        linkGit: "https://github.com/Ctorres2020/Netflixproyecto",
      },
      {
        id: 7,
        title: "Primera Página básica",
        img: "assents/Primera-página-con-Javascript.png",
        text: "Página básica con funciones Js y Jquery",
        linkWeb: "https://ctorres20.github.io/js/index.html",
        linkGit: "https://github.com/Ctorres2020/Ctorres",
      },
      {
        id: 8,
        title: "Página básica de HTML y CSS",
        img: "assents/Página-con-HTML-y-CSS.png",
        text: "Una página básica hecha con html y css, desplegado en GitHub Pages, temática de ranking de clubes.",
        linkWeb: "https://ctorres20.github.io/ranking/index.html",
        linkGit: "https://github.com/Ctorres2020/Proyecto-Ranking",
      },
      {
        id: 10,
        title: "Pàgina personal",
        img: "assents/cesardigital.png",
        text: "Página de wordpress de uso personal",
        linkWeb: "https://cesartorresdigital.com/",
      },
      {
        id: 11,
        title: "Landing Page",
        img: "assents/landing.png",
        text: "Este proyecto esta hecho con WordPress",
        linkWeb: "https://cesartorresdigital.com/como-vender-mas-en-instagram/",
      },
    ],
  },
  {
    id: 2,
    value: "React",
    state: false,
    project: [
      {
        id: 13,
        title: "Dashboard",
        img: "assents/dashboard.jpg",
        text: "Este proyecto esta hecho con NextJs, Redux Toolkit y esta desplegado en Vercel.",
        linkWeb: "https://cursonextfh.vercel.app/",
      },
      {
        id: 9,
        title: "CRUD en react",
        img: "assents/Crud-react-firebase.png",
        text: "En este sitio es para tener un listado de link, desplegado en Heroku con funciones del crud se puede crear, actualizar y borrar.",
        linkWeb: "https://react-web-heroku-urls.herokuapp.com/",
        linkGit: "https://github.com/Ctorres2020/crud-react",
      },
      {
        id: 1,
        title: "CryptoPrice",
        img: "assents/CryptoPrice.png",
        text: "En este sitio se uso una api para ver los diferentes precios de las criptomonedas, se desplego en Firebase.",
        linkWeb: "https://crypto-react-native-6c65d.web.app/",
        linkGit: "https://github.com/Ctorres2020/CryptoPrice",
      },
      {
        id: 2,
        title: "Portafolio Web",
        img: "assents/next-portafolio.png",
        text: "Se muestra un portafolio básico creado con Nextjs y Markdown, se desplego en Vercel",
        linkWeb: "https://next-portafolio-phi.vercel.app/",
        linkGit: "https://github.com/Ctorres2020/next-portafolio",
      },
    ],
  },
  {
    id: "3",
    value: "Maquetación Web",
    state: false,
    project: [
      {
        id: 1,
        title: "Copia de Netflix",
        img: "assents/copia-de-netflix.png",
        text: "Maquetación con Html y Css para un intento de copia de netflix",
        linkWeb: "https://ctorres20.github.io/copianetflix/index.html",
        linkGit: "https://github.com/Ctorres2020/Netflixproyecto",
      },
      {
        id: 2,
        title: "Página básica de HTML y CSS",
        img: "assents/Página-con-HTML-y-CSS.png",
        text: "Una página básica hecha con html y css, desplegado en GitHub Pages, temática de ranking de clubes.",
        linkWeb: "https://ctorres20.github.io/ranking/index.html",
        linkGit: "https://github.com/Ctorres2020/Proyecto-Ranking",
      },

      {
        id: 3,
        title: "Página en Bootstrap",
        img: "assents/pagina-en-Bootstrap.png",
        text: "Esta página esta hecho con Bootstrap y desplegado en GitHub pages, tiene de tematica página de adopción, se utiliza variables en css y bootstrap.",
        linkWeb: "https://ctorres20.github.io/adopcion/index.html",
        linkGit:
          "https://github.com/Ctorres2020/Proyecto-del-curso-de-Bootstrap",
      },
      {
        id: 4,
        title: "Primera Página básica",
        img: "assents/Primera-página-con-Javascript.png",
        text: "Página básica con funciones Js y Jquery",
        linkWeb: "https://ctorres20.github.io/js/index.html",
        linkGit: "https://github.com/Ctorres2020/Ctorres",
      },
    ],
  },
  {
    id: "4",
    value: "WordPress",
    state: false,
    project: [
      {
        id: 1,
        title: "Pàgina personal",
        img: "assents/cesardigital.png",
        text: "Página de wordpress de uso personal",
        linkWeb: "https://cesartorresdigital.com/",
      },
      {
        id: 12,
        title: "Landing Page",
        img: "assents/landing.png",
        text: "Este proyecto esta hecho con WordPress",
        linkWeb: "https://cesartorresdigital.com/como-vender-mas-en-instagram/",
      },
    ],
  },
];

const Portafolio = () => {
  const [stateActive, setStateActive] = useState("All");
  const [project, setProject] = useState(listTitleProjects[0].project);

  const handledTitleTop = (event) => {
    setStateActive(event.value);
    setProject(event.project);
  };

  return (
    <div className="portafolio pageSection">
      <div className="pageContainer">
        <h2 className="portafolioTitle pageTitle">Portafolio</h2>
        <span className="PageLine"></span>
        <div className="portafolioContain">
          <div className="portafolioTop">
            {listTitleProjects.map((item) => (
              <span
                onClick={() => handledTitleTop(item)}
                key={item.id}
                className={
                  item.value === stateActive
                    ? "portafolioTitleText active"
                    : "portafolioTitleText"
                }
              >
                {item.value}
              </span>
            ))}
          </div>
          <div className="portafolioProjects">
            {project.map((item) => (
              <span className="portafolioCardProject" key={item.id}>
                <img src={item.img} alt="foto" />
                <div className="portafolioCardText">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="portafolioCardLink">
                    <a
                      href={item.linkWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="portafolioCardIcon"
                        icon={faGlobe}
                      ></FontAwesomeIcon>
                      Sitio web
                    </a>
                    <a
                      href={item.linkGit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className="portafolioCardIcon"
                        icon={faGithub}
                      ></FontAwesomeIcon>
                      Github
                    </a>
                  </div>
                </div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
