import './header.scss'
import SearchIco from '@assets/icons/search.svg?react'

export default function Header() {
  return (
    <header className="header">
      <div className="header__search">
        <span>
          <SearchIco height="25" />
        </span>
        <input
          type="text"
          placeholder="Search for musics, artists, albums..."
        />
      </div>
      <nav>
        <ul className="header_nav__list">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Premuim</a>
          </li>
        </ul>
      </nav>
      <div className="auth">
        <button className="btn-auth">Login</button>
        <button className="btn-auth active">Sign Up</button>
      </div>
    </header>
  );
}
