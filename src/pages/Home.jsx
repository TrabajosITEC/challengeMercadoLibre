import MainLayout from "../layouts/MainLayout";
import { Carousel } from 'primereact/carousel';
import image1 from '../img/carousel1.jpg';
import image2 from '../img/carousel2.jpg';
import image3 from '../img/carousel3.jpg';
import image4 from '../img/carousel4.jpg';
import CardHome from "../components/CardHome";
import './Home.css'

export default function Home() {
  const carouselImages = [
    { id: 1, image: image1, alt: 'Imagen 1' },
    { id: 2, image: image2, alt: 'Imagen 2' },
    { id: 3, image: image3, alt: 'Imagen 3' },
    { id: 4, image: image4, alt: 'Imagen 4' },
  ];

  const itemTemplate = (item) => {
    return (
      <div className="carousel-item" key={item.id}>
        <img src={item.image} alt={item.alt} className="carousel-image" />
      </div>
    );
  };

  return (
    <MainLayout>
        <div className="carousel-container">
        <Carousel 
          className="custom-carousel" 
          value={carouselImages} 
          itemTemplate={itemTemplate} 
          numVisible={1} 
          numScroll={1} 
          circular 
        />
      </div>
        <h2>Recomendaciones</h2>
        <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
              <CardHome id="MLA835862033"/>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <CardHome id="MLA1236126451"/>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <CardHome id="MLA1418684513"/>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <CardHome id="MLA1413614151"/>
            </div>
        </div>   
    </MainLayout>
  );
}
