import './styles.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Footer() {
  return (
    <footer className='footer'>
      <div className="dark-footer">
        <ul>
          <li>
            <a href='#'>
              <img src="https://darkside.blog.br/wp-content/uploads/2020/06/neon_darkside_central.gif" alt="DarkSide" className="dark-gif " />
            </a>
          </li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">&copy; Dark Movie 2023</a></li>
          <li><a href="#"><BsGithub
            size={25}
          /></a></li>
          <li><a href="#"><BsLinkedin size={22} /></a></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer;
