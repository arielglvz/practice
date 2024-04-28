import React from "react"
import styles from "./hero-category.module.scss"
import { UserIcon } from "../../assets"

const HeroCategory: React.FC = () => {
  return (
    <div className={styles.hero_category}>
      <div className={styles.carousel}>
        <ul className={styles.navigation}>
          <li>Automobiles</li>
          <li>Clothes and wear</li>
          <li>Home interiors</li>
          <li>Computer and tech</li>
          <li>Tools, equipments</li>
          <li>Sports and outdoor</li>
          <li>Animal and pets</li>
          <li>Machinery tools</li>
          <li>More category</li>
        </ul>
        <div className={styles.image_display}></div>
      </div>
      <div className={styles.hero_right}>
        <div className={styles.hero_welcome}>
          <div className={styles.user_greet}>
            <img src={UserIcon} alt="user icon" />
            <p>Hi, user let's get started</p>
          </div>
          <button>Join now</button>
          <button>Log in</button>
        </div>
        <div className={styles.offers}>
          <p>Get US $10 off with a new supplier</p>
        </div>
        <div className={styles.review}>
          <p>Send quotes with supplier preferences</p>
        </div>
      </div>
    </div>
  )
}

export default HeroCategory
