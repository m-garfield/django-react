import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-2.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <article className="about-careers">
      <section className="content">
        <h2 className="sub-title">карьера</h2>
        <h3>Присоединиться к команде</h3>
        <p>
        Вам нравится вкусная еда, исключительное обслуживание клиентов и работа в веселой и динамичной команде? Если да, то мы будем рады видеть вас в нашей команде в 4:20! Мы всегда ищем талантливых и мотивированных людей, которые присоединятся к нашей команде на самых разных должностях: от официантов и поваров до кухонного персонала и менеджмента. Независимо от того, начинаете ли вы работать в сфере общественного питания или имеете за плечами многолетний опыт, мы предлагаем благоприятную рабочую среду для сотрудничества, которая способствует личному и профессиональному росту.  </p>
        {/* <Link to="/careers" onClick={ResetLocation} className="active-button-style">Присоединяйся сейчас</Link> */}
      </section>
      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
}
export default AboutCareers;
