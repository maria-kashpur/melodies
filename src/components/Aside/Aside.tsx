import { ASIDE } from "./data/aside_data";
import "./aside.scss"

export default function Aside() {
  return (
    <aside className="aside">
      <h1 className="logo">Melodies</h1>
      <nav className="aside_nav">
        {Object.keys(ASIDE).map((title, i) => (
          <div key={i} className="aside_nav__content">
            <h2 className="aside_nav__title">{title}</h2>
            <ul className={`aside_nav__list`}>
              {ASIDE[title].map((el, i) => (
                <li key={i} className="aside_nav__item">
                  <a href={el.link} className="aside_nav__link ">
                    {el.ico}
                    <span>{el.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
