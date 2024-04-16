import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import '../styles/StylesSliders.css'
import { useState } from "react"
export const Sliders = ({ data }) => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSLide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide - 1)
    }
    return (
        <>
            <div className='carousel'>
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSLide} />
                {data.map((item, index) => {
                    return <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide-hidden"} />
                })}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                <span className="indicators">
                    {data.map((_, index) => {
                        return <button key={index} onClick={null} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
                    })}
                </span>
            </div>
        </>
    )
}
