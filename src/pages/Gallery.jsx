import React,{useState} from "react";
import '../components/Gallery/gallery.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { Icon } from '@iconify/react';
import Seo from "../components/Seo";
import A1 from '../images/Gallery/IMG1.jpg';
import A2 from '../images/Gallery/IMG2.jpg';
import A3 from '../images/Gallery/IMG3.jpg';
import A4 from '../images/Gallery/IMG4.jpg';
import A5 from '../images/Gallery/IMG5.jpg';
import A6 from '../images/Gallery/IMG6.jpg';
import A7 from '../images/Gallery/IMG7.jpg';
import A8 from '../images/Gallery/IMG8.jpg';
import A9 from '../images/Gallery/IMG9.jpg';
import A10 from '../images/Gallery/IMG10.jpg';
import A11 from '../images/Gallery/IMG11.jpg';
import A12 from '../images/Gallery/IMG12.jpg';
import A13 from '../images/Gallery/IMG13.jpg';
import A14 from '../images/Gallery/IMG14.jpg';
import A15 from '../images/Gallery/IMG15.jpg';
import Layout from "../components/Layout";

const images = [
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
    A8,
    A9,
    A10,
    A11,
    A12,
    A13, A14, A15,
]

const ReactImagesGallery = () => {
    const [data, setData] = useState({img: '', i:0})
    
    const veiwImage = (img,i) => {
        setData({img,i})
    }

    const imageAction = (action) =>{
        let i=data.i;
        if(action === 'next-img'){
            setData({img: images[i+1],i:i+1});
        }
        if(action === 'prev-img'){
            setData({img: images[i-1],i:i-1});
        }
        if(!action){
            setData({img: '',i:0});
        }
    }

    return (
       <>
       <Seo title="Gallery" />
       <Layout>
       <h1 className="section-title">Gallery</h1>
       {
        data.img &&
        <div className={data? "design open": "design"}>
             <Icon icon="ep:close-bold"  className="close" onClick={()=>imageAction()} />
             <Icon icon="grommet-icons:previous" className="icon-left" onClick={()=>imageAction('prev-img')}/>
            <img src={data.img} style={{width:'auto', maxWidth:'90%', maxHeight:'90%'}} />
            <Icon icon="grommet-icons:previous" hFlip={true} className="icon-right" onClick={()=>imageAction('next-img')} />
        </div>
       }
           <div className="main-body" >
             <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="15px">
                    {images.map((image, i) => (
                        <div className="image-card"  onClick={()=>veiwImage(image,i)}>
                        <img
                            key={i}
                            src={image}
                            className="image-style"
                            alt="Events Gallery"
                        /></div>
                    ))}
                </Masonry>
             </ResponsiveMasonry>
           </div>
           </Layout>
       </>
    )
}

export default ReactImagesGallery;