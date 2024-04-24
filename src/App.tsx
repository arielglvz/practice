import "./App.scss"
import BrandLogo from "./assets/navbar/logo/brand_logo.png"
import ProfileIcon from "./assets/icons/nav_icon/profile.png"
import MessageIcon from "./assets/icons/nav_icon/message.png"
import OrderIcon from "./assets/icons/nav_icon/order_icon.png"
import CartIcon from "./assets/icons/nav_icon/cart.png"

function App() {
  return (
    <div className="app">
      <nav>
        <div className="company_brand">
          <img src={BrandLogo} alt="company logo" />
          <span>Brand</span>
        </div>
        <div className="search_container">
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
    </div>
  )
}

export default App
