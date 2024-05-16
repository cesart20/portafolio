import { useState } from "react";

import "./settingTheme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";


const colores = [
  {
  id:1,
  color:"red",
  },
    {
  id:2,
  color:"blue",
  },
    {
  id:3,
  color:"green",
  },
    {
  id:4,
  color:"orange",
  },
];

const SettingTheme = () => {


  const handledColor = (item) => {
    var body = document.body;
    body.classList.remove("red");
    body.classList.remove("blue");
    body.classList.remove("orange");
    body.classList.remove("green");
    body.classList.add(item.color);
  };


  const [activeSetting, setActiveSetting] = useState(false);
  const [activeTheme, setActiveTheme] = useState(false);
  const handledTheme = () => {
    var body = document.body;
    body.classList.toggle("changeTheme");
    setActiveTheme(!activeTheme);
    
  };

  return (
    <div className="sidebarSetting">
      <FontAwesomeIcon
        onClick={() => setActiveSetting(!activeSetting)}
        className="sidebarSettingIcon"
        icon={faCogs}
      ></FontAwesomeIcon>
      <div
        className={
          activeSetting
            ? "sidebarContainerSetting active"
            : "sidebarContainerSetting"
        }
      >
        <div className="SettingColores">
          {colores.map((item) => (
            <div
              onClick={() => handledColor(item)}
              key={item.id}
              className={`colores ${item.color}`}
            ></div>
          ))}
        </div>

        <div className="sidebarChangeTheme">
          <FontAwesomeIcon
            onClick={handledTheme}
            className={
              activeTheme ? "sidebarThemeIcon active" : "sidebarThemeIcon"
            }
            icon={faSun}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={handledTheme}
            className={
              activeTheme ? "sidebarThemeIcon" : "sidebarThemeIcon active"
            }
            icon={faMoon}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default SettingTheme;
