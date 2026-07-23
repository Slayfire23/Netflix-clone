import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero_Banner from '../../assets/hero_banner.jpg'
import Hero_Title from '../../assets/hero_title.png'
import Play from '../../assets/play_icon.png'
import Info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img 
        src={Hero_Banner} 
        alt="" 
        className='banner-img'
        />
        <div className="hero-caption">
          <img src={Hero_Title} 
          alt="" 
          className='caption-img'
          />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img 
            src={Play} 
            alt="" 
            />Play</button>
            <button className='btn dark-btn'><img 
            src={Info} 
            alt="" 
            />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
