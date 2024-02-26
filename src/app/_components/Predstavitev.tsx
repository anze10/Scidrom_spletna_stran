"use client"

import React, { useRef } from 'react'
import "src/app/_components/Predstavitev.css"
import img1 from "~/../public/IMG_6600.jpg"
import img2 from "~/../public/IMG_6604.jpg"
import img3 from "~/../public/IMG_6605.png"
import { register } from 'swiper/element/bundle';
import Image from 'next/image';
import 'swiper/element/css/navigation'
import 'swiper/element/css/pagination';
import 'swiper/element/css/scrollbar';

// register Swiper custom elements
register();


function Predstavitev() {
  const swiperElRef = useRef(null);

  return (
    <div className='hero'>
      <div className='content'>
        <br />
        <p>Graves radar je napreden radar, ki stoji v Franciji. Njegov glavni namen je nadzorovanje francoskega zračnega prostora. Z njegovo pomočjo in našim strokovnim znanjem pa lahko štejemo in analiziramo različna nebesna telesa, kot so meteoridi, utrinki in drugi objekti, ki jih zazna. Morda vas zanima, kako točno to izvajamo. Postopek je preprost, a učinkovit. Ko radar zazna nebesno telo, odda poseben &apos;pisk&apos; v obliki radijskih valov. Te piske zbiramo z anteno in jih nato predstavljamo na naši spletni strani. S tem omogočamo podrobnejši vpogled v dogajanja nad nami v vesolju. </p>
        <br />
        <p>Na spodnjih slikah si lahko ogledate, kakšno opremo smo naredili za poslušanje teh piskov. pod slikami pa lahko tudi slišite primer enega takega piska.</p>
        <br />
        <audio controls>
          <source src="/test.mp3" type="audio/mpeg" />
        </audio>
        <br />
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          navigation="true"
          pagination="true"
          scrollbar="true"
        >
          <swiper-slide><Image className="w-full h-auto" src={img1} alt="antena" /></swiper-slide>
          <swiper-slide><Image className="w-full h-auto" src={img2} alt="antena2" /></swiper-slide>
          <swiper-slide><Image className="w-full h-auto" src={img3} alt="antena3" /></swiper-slide>
        </swiper-container>
      </div>

    </div>
  )
}
export default Predstavitev
