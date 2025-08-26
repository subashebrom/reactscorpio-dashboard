import { faBars, faBorderAll, faGamepad, faGear,  faInfo, faList, faMoneyBill, faMoneyBillTransfer, faUsers, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import "../assets/css/components/Header.css"

const Header = () => {
  return (
    <div className="sidebar">
      <div className="logo_content">
          <NavLink to="" className='logo'>
            <img src="./img/brand-logo.png" alt="" />
            <div className="brand_name">Scorpion</div>
          </NavLink>
        <span> <FontAwesomeIcon icon={faBars}/> </span>
      </div>
      <div className="nav_list">
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faBorderAll}/>
            <span className="menu_names">Dashboard</span>
          </NavLink>
          {/* <span className="tooltips">Dashboard</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faList}/>
            <span className="menu_names">Category</span>
          </NavLink>
          {/* <span className="tooltips">Category</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faGamepad}/>
            <span className="menu_names">Add Match</span>
          </NavLink>
          {/* <span className="tooltips">Add Match</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faGamepad}/>
            <span className="menu_names">All Matches</span>
          </NavLink>
          {/* <span className="tooltips">All Matches</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faMoneyBillTransfer}/>
            <span className="menu_names">Deposit</span>
          </NavLink>
          {/* <span className="tooltips">Deposit</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faMoneyBillTransfer}/>
            <span className="menu_names">Withdraw Request</span>
          </NavLink>
          {/* <span className="tooltips">Withdraw Request</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faInfo}/>
            <span className="menu_names">Room Details</span>
          </NavLink>
          {/* <span className="tooltips">Room Details</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faUsers}/>
            <span className="menu_names">Users</span>
          </NavLink>
          {/* <span className="tooltips">Users</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faMoneyBill}/>
            <span className="menu_names">Payment Method</span>
          </NavLink>
          {/* <span className="tooltips">Payment Method</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faMoneyBill}/>
            <span className="menu_names">Promo Offer</span>
          </NavLink>
          {/* <span className="tooltips">Promo Offer</span> */}
        </div>
        <div className="menu_card">
          <NavLink to="">
            <FontAwesomeIcon icon={faGear}/>
            <span className="menu_names">Settings</span>
          </NavLink>
          {/* <span className="tooltips">Settings</span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
