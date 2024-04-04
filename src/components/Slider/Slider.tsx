import { useEffect, useState } from "react";
import "./slider.scss";
import arrowIco from '@assets/icons/arrow.svg'

interface Props {
  slides: JSX.Element[]
}

export default function Slider({ slides }: Props) {
  const {length} = slides
  const [currentSlide, setCurrrentSlide] = useState(0);

  const prev = () => {
    if (currentSlide === 0) {
      setCurrrentSlide(length - 1)
    } else {
      setCurrrentSlide((prev) => prev - 1);
    }
  }

  const next = () => {
    if (currentSlide === length - 1) {
      setCurrrentSlide(0)
    } else {
      setCurrrentSlide((prev) => prev + 1)
    }
  }

  // useEffect(() => {
  //   const interval = setInterval(next, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // })


  return (
    <section className="slider">
      <button className="prev">
        <object type="image/svg+xml" data={arrowIco}>
          prev
        </object>
      </button>
      <button className="next">
        <object type="image/svg+xml" data={arrowIco}>
          next
        </object>
      </button>
      <div className="status">
        <span className="status_item"></span>
        <span className="status_item"></span>
        <span className="status_item"></span>
        <span className="status_item"></span>
        <span className="status_item active"></span>
        <span className="status_item"></span>
      </div>
      <div className="content">
        <div className="slide">
          <div className="main_slide">
            <h2 className="main_slide__title">Billie eilish</h2>
            <p className="main_slide__text">
              You can have easy access to every song of billie eilish by just
              clicking on the Listen now botton. You can also follow him too for
              suppurting him and keeping it up with what he dose.
            </p>
            <div className="main_slide__btns">
              <button className="main_slide__btn pink">Listen Now</button>
              <button className="main_slide__btn blue">Follow</button>
            </div>
          </div>
        </div>
        <div className="slide">slide2</div>
      </div>
    </section>
  );
}
