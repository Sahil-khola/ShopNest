import React , {useContext} from "react";
import { Link , useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useSelector} from "react-redux";
import "../styles/navbar.css";
const Navbar = () => {

  const {user,logout} = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  function handelLogout () {
   logout();
   navigate('/login');
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/0.png"
            alt="Logo"
            className="navbar-logo"
            style={{height: '36px', width: '36px', borderRadius: '8px', objectFit: 'cover', filter: 'drop-shadow(0 2px 8px rgba(249, 115, 22, 0.35))'}}
          />
          ShopNest
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
          {user?(
            <>
            <li><Link to="/profile">Hi {user.name}</Link></li>
            {user.role==="admin" && <li><Link to="/admin">admin</Link></li>}
            <li><button onClick={logout}>Logout</button></li>
            </>
          ):(
            <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            </>
          )}
     
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
