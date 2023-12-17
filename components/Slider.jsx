"use client";
import Image from 'next/image'
import style from './Slider.module.css'
import { useState, useEffect } from 'react';

const data = [
    {
      id: 1,
      title: "La ciudad de Rawson, ubicada en la provincia de Chubut, enfrenta diversos desafíos ambientales. Este proyecto propone un plan integral de forestación para la ciudad, con el objetivo de aumentar la cobertura vegetal, promover la biodiversidad y mejorar la estética urbana.",
      image: "/image/plantar-arbol.jpg",
    },
    {
      id: 2,
      title: "La forestación puede ser una solución efectiva para abordar estos problemas.",
      image: "/image/lg.webp",
    },
    {
      id: 3,
      title: "Mejorando la calidad de vida de los ciudadanos y contribuyendo a la sostenibilidad ambiental.",
      image: "/image/mano-arbol.jpg",
    },
  ];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(
          () =>
            setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
          5500
        );
        return () => clearInterval(interval);
      }, []);

  return (
    <div className={style.slider_container}>
        <div className={style.text_container}>
            <h1 className={style.descrip_container}>
                {data[currentSlide].title}
            </h1>
            <button className={style.button_container}>CONTACTANOS</button>
        </div>
        <div className={style.image_container}>
            <Image className={style.image_setting} 
                src={data[currentSlide].image}
                width={800}
                height={500}
                layout='responsive'
                alt="" 
            />
        </div>
    </div>
  )
}
