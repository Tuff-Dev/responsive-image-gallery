import { useState } from "react";
import ImagePanel, { Image } from "./components/ImagePanel";
import image1 from "./assets/images/1.jpg";
import image2 from "./assets/images/2.jpg";
import image3 from "./assets/images/3.jpg";
import image4 from "./assets/images/4.jpg";
import image5 from "./assets/images/5.jpg";
import image6 from "./assets/images/6.jpg";
import image7 from "./assets/images/7.jpg";
import image8 from "./assets/images/8.jpg";
import image9 from "./assets/images/9.jpg";
import image10 from "./assets/images/10.jpg";
import image11 from "./assets/images/11.jpg";
import image12 from "./assets/images/12.jpg";
import image13 from "./assets/images/13.jpg";
import image14 from "./assets/images/14.jpg";
import image15 from "./assets/images/15.jpg";
import image16 from "./assets/images/16.jpg";
import image17 from "./assets/images/17.jpg";
import image18 from "./assets/images/18.jpg";
import image19 from "./assets/images/19.jpg";
import image20 from "./assets/images/20.jpg";

const images: Image[] = [
  {
    src: image1,
    alt: "Image 1",
  },
  {
    src: image2,
    alt: "Image 2",
  },
  {
    src: image3,
    alt: "Image 3",
  },
  {
    src: image4,
    alt: "Image 4",
  },
  {
    src: image5,
    alt: "Image 5",
  },
  {
    src: image6,
    alt: "Image 6",
  },
  {
    src: image7,
    alt: "Image 7",
  },
  {
    src: image8,
    alt: "Image 8",
  },
  {
    src: image9,
    alt: "Image 9",
  },
  {
    src: image10,
    alt: "Image 10",
  },
  {
    src: image11,
    alt: "Image 11",
  },
  {
    src: image12,
    alt: "Image 12",
  },
  {
    src: image13,
    alt: "Image 13",
  },
  {
    src: image14,
    alt: "Image 14",
  },
  {
    src: image15,
    alt: "Image 15",
  },
  {
    src: image16,
    alt: "Image 16",
  },
  {
    src: image17,
    alt: "Image 17",
  },
  {
    src: image18,
    alt: "Image 18",
  },
  {
    src: image19,
    alt: "Image 19",
  },
  {
    src: image20,
    alt: "Image 20",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app w-full p-5 bg-slate-800">
      <h1 className="text-white  text-center text-3xl pb-5">
        Responsive Image Gallery
      </h1>
      <ImagePanel images={images} />
    </div>
  );
}

export default App;
