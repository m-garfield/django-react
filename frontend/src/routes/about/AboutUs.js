import React from 'react'
//images
import SlideOne from '../../assets/images/img-one.jpeg'
import SlideTwo from '../../assets/images/carbonara.jpeg'
import SlideThree from '../../assets/images/img-three.jpeg'
import SlideFour from '../../assets/images/img-four.jpeg'


const AboutUs = () => {
  return (
    <article className="about-us">
      <section className="content">
        <h2>О нас</h2>
        <h3 className='sub-title'>БОЛЬШЕ, ЧЕМ ВКУСНАЯ ЕДА</h3>
        <p>
        Основанная в 1982 году, мы выводим пиццу кусочек за кусочком на новый уровень! Уникальный брендинг и присутствие в индустрии пиццы — это формула нашего успеха. Мы понимаем, чего хотят люди, и превращаем желания в уникальные вкусовые ощущения. Свежесть, оригинальность и качество – лишь малая часть наших приоритетов. Доступные цены, доступность практически в любом месте, потрясающая операционная онлайн-система для заказа еды в один клик. Легко ориентироваться в вариантах предзаказа и потрясающих вариантах для корпоративов! В 4:20 мы заботимся о вас, потому что именно вы делаете нас особенными! Проект 4:20 создан с любовью к пицце Екатериной Митагвариа.
        </p>
        <div className="section-one-glass"></div>
      </section>
      <section className="images">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  )
}

export default AboutUs;