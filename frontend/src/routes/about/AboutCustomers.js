import React from "react";
//images
import ImgOne from "../../assets/images/about-us/img-1.jpeg";
import ImgTwo from "../../assets/images/about-us/img-2.jpeg";
import ImgThree from "../../assets/images/about-us/img-3.jpeg";

const AboutCustomers = () => {
  return (
    <article className="about-customers">
      <div className="images">
        <img src={ImgOne} alt="" aria-hidden="true" />
        <img src={ImgTwo} alt="" aria-hidden="true" />
        <img src={ImgThree} alt="" aria-hidden="true" />
      </div>
      <section className="content">
        <h2 className="sub-title">ДОВОЛЬНЫЕ КЛИЕНТЫ</h2>
        <h3>Более 16000 положительных отзывов</h3>
        <p>
    Мы также понимаем, что вкусная еда — это только часть уравнения. Вот почему мы уделяем большое внимание предоставлению исключительного обслуживания каждому клиенту, который входит в наши двери. Наша команда преданных своему делу сотрудников стремится создать теплую, гостеприимную атмосферу, в которой каждый гость чувствует себя частью семьи.
        </p>
      </section>
      <div className="img-glass"></div>
    </article>
  );
}


export default AboutCustomers;