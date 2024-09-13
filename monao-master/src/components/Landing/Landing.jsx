import './Landing.css'
import { UisBars } from '@iconscout/react-unicons-solid' 
import pagg from'../../imgs/pagg.jpg'

export default function Landing() {
  
  // const Navbar = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  
  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };
  // }
  
//       const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");
  // const navToggle = () => {
  //   if (active === "nav__menu") {
  //     setActive("nav__menu nav__active");
  //   } else setActive("nav__menu");

  //   // Icon Toggler
  //   if (icon === "nav__toggler") {
  //     setIcon("nav__toggler toggle");
  //   } else setIcon("nav__toggler");
  // };
  return (
    <>
    <nav className="nav">
      <div className="logo">
        herdoy
      </div>
      <ul>
        <div className='ull'>
        <li className="nav__item">
            Home
        </li>
        <li className="nav__item">
            About
        </li>
        <li className="nav__item">
            Services
        </li>
        <li className='side'>
        Need Help Now? Call Us!
      <span className='num'> <b> 123-456-789 </b> </span>
        </li>
        </div>
      </ul>
      <div className="bars">
     <UisBars />
      </div>
    </nav>

    <div className='bd'>
      <div className='firstpic'>
        <img src={pagg} alt="pagg" />
      </div>
    </div>

   
    </>
  )
}
