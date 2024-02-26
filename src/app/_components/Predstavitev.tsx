import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "src/app/_components/Predstavitev.css"

function predstavitev() {
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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img src="/IMG_6600.JPG" alt="antena" /></SwiperSlide>
          <SwiperSlide><img src="/IMG_6604.JPG" alt="antena2" /></SwiperSlide>
          <SwiperSlide><img src="/IMG_6605.PNG" alt="antena3" /></SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}
export default predstavitev
