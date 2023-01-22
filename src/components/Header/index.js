import './header.css';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearch } from 'react-icons/bi';

function Header() {
   return (
      <header>
         <div className='navBar'>
            <Link to="/">
               <img src="https://darkside.blog.br/wp-content/themes/tema-darkside/assets/images/logo-topo.png" alt="Dark side" className="logoTitle " />
            </Link>
            <div className='navBarLinks'>
               <Link className='favorites' to="/favorites">My Movies<BiCameraMovie size={24} className="navIcon" /></Link>
               <Link><BiSearch size={27} className="biSearch" /></Link>
            </div>
         </div>
      </header>
   )
}
export default Header;