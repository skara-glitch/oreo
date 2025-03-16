import { ImageSlider } from "./ImageSlider"
import image1 from "./imgs/1.jpg"
import image2 from "./imgs/2.jpg"
import image3 from "./imgs/3.jpg"
import image4 from "./imgs/4.jpg"
import image5 from "./imgs/5.jpg"
import image6 from "./imgs/6.jpg"
import image7 from "./imgs/7.jpg"
import image8 from "./imgs/8.jpg"
import image9 from "./imgs/9.jpg"
import image10 from "./imgs/10.jpg"
import image11 from "./imgs/11.jpg"
import image12 from "./imgs/12.jpg"
import image13 from "./imgs/13.jpg"
import image14 from "./imgs/14.jpg"
import image15 from "./imgs/15.jpg"
import image16 from "./imgs/16.jpg"
import image17 from "./imgs/17.jpg"
import image18 from "./imgs/18.jpg"
import image19 from "./imgs/19.jpg"
import image20 from "./imgs/20.jpg"
import image21 from "./imgs/21.jpg"
import image22 from "./imgs/22.jpg"
import image23 from "./imgs/23.jpg"
import image24 from "./imgs/24.jpg"
import image25 from "./imgs/25.jpg"
import image26 from "./imgs/26.jpg"

const IMAGES = [
  { url: image1, alt: "image One" },
  { url: image2, alt: "image Two" },
  { url: image3, alt: "image Three" },
  { url: image4, alt: "image Four" },
  { url: image5, alt: "image Five" },
  { url: image6, alt: "image six" },
  { url: image7, alt: "image seven" },
  { url: image8, alt: "image eight" },
  { url: image9, alt: "image nine" },
  { url: image10, alt: "image ten" },
  { url: image11, alt: "image eleven" },
  { url: image12, alt: "image twelve" },
  { url: image13, alt: "image thirteen" },
  { url: image14, alt: "image fourteen" },
  { url: image15, alt: "image fifteen" },
  { url: image16, alt: "image sixteen" },
  { url: image17, alt: "image seventeen" },
  { url: image18, alt: "image eighteen" },
  { url: image19, alt: "image nineteen" },
  { url: image20, alt: "image twenty" },
  { url: image21, alt: "image twenty one" },
  { url: image22, alt: "image twenty two" },
  { url: image23, alt: "image twenty three" },
  { url: image24, alt: "image twenty four" },
  { url: image25, alt: "image twenty five" },
  { url: image26, alt: "image twenty six" },
]

export default function App() {
  return (
    
    <div
      style={{
        maxWidth: "1000px",
        width: "100%",
        aspectRatio: "100 / 6",
        margin: "0 auto"        
      }}
    >
      <h1 style={{color: "black",
      backgroundColor: 'rgb(115,79,150)',
      padding: "1%" ,
      borderLeft:"50%",
      display:'flex',
      justifyContent: 'center',

      fontFamily : 'revert-layer'}}>Happy Birthday Aurena!</h1>
      <ImageSlider images={IMAGES} />
    </div>
  )
}
