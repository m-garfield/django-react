import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCollaboration = () => {
  return (
    <article className="about-collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="content">
        <h2 className="sub-title">сотрудничество</h2>
        <h3>Присоединяйтесь к общему делу</h3>
        <p>
        Будь то обслуживание корпоративного мероприятия, обед для деловой встречи или просто предложение вкусной еды для сотрудников, мы стремимся удовлетворить уникальные потребности предприятий в нашем регионе. В нашем меню представлен широкий выбор блюд: от классических пицц и салатов до сэндвичей и блюд из пасты, поэтому вы можете быть уверены, что каждый найдет что-то для себя. Не забывайте, 4:20 — это вымышленный бар, созданный Владимиром Фунтиковым.  </p>
        <Link to="/contact" onClick={ResetLocation} className="active-button-style">Позвонить</Link>
      </section>
    </article>
  );
}

export default AboutCollaboration;
