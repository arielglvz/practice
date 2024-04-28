import React from "react"
import styles from "./navbar.module.scss"
import {
  CartIcon,
  MessageIcon,
  OrderIcon,
  ProfileIcon,
} from "../../assets/icons/nav_icon"
import Label from "../label"
import { BrandLogo } from "../../assets/navbar/logo"
import { ArrowDown, Menu } from "../../assets/icons/control"

const Navbar: React.FC = () => (
  <div className={styles.navbar}>
    <nav>
      <div className={styles.company_brand}>
        <img src={BrandLogo} alt="company logo" />
        <Label
          label="Brand"
          CSSprops={{
            fontSize: "35px",
            fontWeight: 700,
            color: "#8cb7f5",
          }}
        />
      </div>
      <div className={styles.search_container}>
        <input type="text" placeholder="Search" />
        <select>
          <option>All category</option>
          <option>Home</option>
          <option>Dinner</option>
        </select>
        <button>Search</button>
      </div>
      <ul>
        <li>
          <img src={ProfileIcon} alt="profile" />
          <p>profile</p>
        </li>
        <li>
          <img src={MessageIcon} alt="message" />
          <p>Message</p>
        </li>
        <li>
          <img src={OrderIcon} alt="order" />
          <p>profile</p>
        </li>
        <li>
          <img src={CartIcon} alt="cart" />
          <p>My cart</p>
        </li>
      </ul>
    </nav>
    <div className={styles.category}>
      <ul className={styles.category_left}>
        <li className={styles.all_category}>
          <img src={Menu} alt="menu" />
          <p>All category</p>
        </li>
        <li>
          <p>Hot offers</p>
        </li>
        <li>
          <p>Gift boxes</p>
        </li>
        <li>
          <p>Projects</p>
        </li>
        <li>
          <p>Menu item</p>
        </li>
        <li className={styles.help}>
          <p>Help</p>
          <img src={ArrowDown} alt="arrow down" />
        </li>
      </ul>
      <ul className={styles.category_right}>
        <li className={styles.currency}>
          <p>English, USD</p>
          <img src={ArrowDown} alt="arrow down" />
        </li>
        <li className={styles.country}>
          <p>Ship to</p>
          <img src={ArrowDown} alt="arrow down" />
        </li>
      </ul>
    </div>
  </div>
)

export default Navbar
