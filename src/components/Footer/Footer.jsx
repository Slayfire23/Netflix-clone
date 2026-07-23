import './Footer.css'
import Youtube from '../../assets/youtube_icon.png'
import Twitter from '../../assets/twitter_icon.png'
import Instagram from '../../assets/instagram_icon.png'
import Facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
          <img src={Youtube} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
          <img src={Facebook} alt="" />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className="copyright-text">
          1997-2026 Netflix, Inc.
        </p>
    </div>
  )
}

export default Footer
