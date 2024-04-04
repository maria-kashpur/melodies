import "./footer.scss";
import FooterIco from "@assets/icons/facebook.svg?react";
import InstagramIco from '@assets/icons/instagram.svg?react'
import TwitterIco from "@assets/icons/twitter.svg?react";
import PhoneIco from '@assets/icons/phone.svg?react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_about">
        <h2 className="footer_about__title">About</h2>
        <p className="footer_about__content">
          Melodies is a website that has been created for over{" "}
          <span>5 year’s</span> now and it is one of the most famous music
          player website’s in the world. in this website you can listen and
          download songs for free. also of you want no limitation you can buy
          our <span>premium pass’s.</span>
        </p>
      </div>
      <nav className="footer_nav">
        <div>
          <h2 className="footer_nav__title">Melodi</h2>
          <ul className="footer_nav__item">
            <li>Songs</li>
            <li>Radio</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div>
          <h2 className="footer_nav__title">Access</h2>
          <ul className="footer_nav__item">
            <li>Explor</li>
            <li>Artists</li>
            <li>Playlists</li>
            <li>Albums</li>
            <li>Trending</li>
          </ul>
        </div>
        <div>
          <h2 className="footer_nav__title">Contact</h2>
          <ul className="footer_nav__item">
            <li>About</li>
            <li>Policy</li>
            <li>Social Media</li>
            <li>Soppurt</li>
          </ul>
        </div>
      </nav>
      <div>
        <h2 className="logo">Melodies</h2>
        <ul className="contacts">
          <li>
            <a href=""><FooterIco/></a>
          </li>
          <li>
            <a href=""><InstagramIco/></a>
          </li>
          <li>
            <a href=""><TwitterIco/></a>
          </li>
          <li>
            <a href=""><PhoneIco/></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
