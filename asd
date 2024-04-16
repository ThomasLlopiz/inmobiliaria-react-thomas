import '../styles/StylesSliders.css'
import ReactImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
export const Sliders = () => {
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600",
            thumbnail: "https://picsum.photos/id/1018/1000/600",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600",
            thumbnail: "https://picsum.photos/id/1015/1000/600",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600",
            thumbnail: "https://picsum.photos/id/1019/1000/600",
        }
    ]
    return (
        <>
            <div className="galleria" style={{width: "210vh", height: "10vh",  margin: "auto", padding: "85px 0" } }>
                <ReactImageGallery 
                items={images} 
                thumbnailPosition={"left"}
                showFullscreenButton= {false}
                showPlayButton = { false}
                autoPlay = {true}
                showNav = { false}
                />
            </div>
        </>
    )
}
