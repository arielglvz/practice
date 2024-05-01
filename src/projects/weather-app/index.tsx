import React from "react"
import styles from "./styles.module.scss"
import {
  WeatherAppBg,
  House,
  FooterBg,
  LocOn,
  LocOff,
  MenuListIcon,
  BgMainNav,
  AddBtn,
  SliderNavBg,
} from "../../assets/weather-app"
import { MidRain } from "../../assets/weather-app/weather-status"

const weatherAppStyle: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${WeatherAppBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

const footerStyle: React.CSSProperties = {
  height: "88px",
  width: "100%",
  backgroundImage: `url(${FooterBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

const centerStyle: React.CSSProperties = {
  backgroundImage: `url(${BgMainNav})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}

const sliderNavStyle: React.CSSProperties = {
  backgroundImage: `url(${SliderNavBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

const WeatherApp: React.FC = () => {
  return (
    <div className={styles.weathe_app} style={weatherAppStyle}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <img src={House} alt="house" />
          <div className={styles.controller}>
            <div className={styles.slider_nav} style={sliderNavStyle}>
              <p>Hourly Forecast</p>
              <p>Weekly Forecast</p>
            </div>
          </div>
          <div className={styles.forecast_wrapper}>
            <div className={styles.forecast_list}>
              <div className={styles.item}>
                <p>12 AM</p>
                <img src={MidRain} alt="Mid Rain" />
                <p>19° </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.second}></div>
      </div>
      <footer style={footerStyle}>
        <div className={styles.footerContent}>
          <img src={LocOff} alt="location" />
          <img src={MenuListIcon} alt="menu list icon" />
          <div className={styles.center} style={centerStyle}>
            <img src={AddBtn} alt="add btn" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WeatherApp
