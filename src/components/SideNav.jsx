import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo2.png';

import {
  FaBars,
  FaHistory,
  FaPassport,
  FaSignOutAlt,
  FaRegChartBar,
  FaServer,
  FaTh,
  FaUser,
  FaUserAlt,
  FaCreditCard,
  FaInfoCircle,
} from 'react-icons/fa';
import '../styles/Dashboard.css';

const SideNav = ({ isSidebarOpen, onToggle }) => {
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // setIsOpen(window.innerWidth >= 768);
      onToggle(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggle = () => {
    // setIsOpen(!isOpen);
    onToggle(!isSidebarOpen);
  };


  const [userSidenavs] = useState([
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/profile',
      name: 'Profile',
      icon: <FaUserAlt />,
    },
    {
      path: '/AllServiceCards',
      name: 'Services',
      icon: <FaPassport />,
    },
    {
      path:'/UserCheckStatus',
      name:'Applications',
      icon:<FaInfoCircle/>
    },
    {
      path: '/history',
      name: 'History',
      icon: <FaHistory />,
    },
    {
      path: '/logout',
      name: 'Logout',
      icon: <FaSignOutAlt  />,
    },
  ]);

  const [adminSidenavs] = useState([
    {
      path: '/profile',
      name: 'Admin Dashboard',
      icon: <FaUserAlt />,
    },
    {
      path: '/history',
      name: 'Users',
      icon: <FaUser />,
    },
    {
      path: '/dashboard',
      name: 'Payment',
      icon: <FaCreditCard />,
    },
    {
      path: '/logout',
      name: 'Configuration',
      icon: <FaServer />,
    },
    {
      path: '/reports',
      name: 'Reports',
      icon: <FaRegChartBar />,
    },
  ]);

  const [staffSidenavs] = useState([
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/profile',
      name: 'Staff Profile',
      icon: <FaUserAlt />,
    },
    {
      path: '/application',
      name: 'Check Application number',
      icon: <FaHistory />,
    },
    {
      path: '/logout',
      name: 'Logout',
      icon: <FaSignOutAlt  />,
    },
  ]);

  localStorage.setItem('role', 'user'); // Testing different roles by changing in local storage
  localStorage.setItem('accountTypes','customer-servic');
  
  const role = localStorage.getItem('role');
 const accountType = localStorage.getItem('accountTypes');
  let sideNavs = userSidenavs; // Default role

  if (role === 'admin') {
    sideNavs = adminSidenavs;
  } else if (role === 'user') {
    sideNavs = userSidenavs;
  } else if (role === 'staff') {
  if (accountType === 'customer-service') {
    sideNavs = [
      {
        path: '/customer-dashboard',
        name: 'Customer Dashboard',
        icon: <FaTh />,
      },
      {
        path: '/customer-profile',
        name: 'Customer Profile',
        icon: <FaUserAlt />,
      },
    ];
  } else {
    sideNavs = staffSidenavs;
  }
}
  // else if(role=='staff' && accountType=='customer-service'){
  // staffSidenavs.push = [
  //   {
  //      path: '/customer-dashboard',
  //     name: 'Customer Dashboard',
  //     icon: <FaTh />,
  //   },
  //    {
  //     path: '/customer-profile',
  //     name: 'Customer Profile',
  //     icon: <FaUserAlt />,
  //   }
  // ]
    
  // }

 

return (
    <div className="">
      <div style={{ width: isSidebarOpen ? '250px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isSidebarOpen ? 'block' : 'none' }} className="logo">
            <img src={logo} alt="" />
          </h1>
          <div style={{ marginLeft: isSidebarOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {sideNavs.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isSidebarOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideNav;