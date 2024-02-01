import React from "react";
import { motion } from "framer-motion";
//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [62.7582955, 40.3296469];


const ContactLanding = () => {
  return (
    <article className="section-10  flex-container flex-column">
      <motion.div
        className="map"
        initial={{ opacity: 0, translateX: -300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -300 }}
        transition={{ duration: 2 }}
      >
        <MapContainer
          id="map"
          center={position}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </motion.div>
      <motion.div
        className="contact-emails"
        initial={{ opacity: 0, translateX: 300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 300 }}
        transition={{ duration: 2 }}
      >
        <h3>Связаться с нами</h3>
        <p>Есть вопрос, предложение или просто хотите поздороваться? Мы хотели бы услышать от вас!</p>
        <section>
          <h4>Служба поддержки:</h4>
          <p>Наша специализированная команда поддержки клиентов готова помочь вам с любыми вопросами, которые могут у вас возникнуть.</p>
          <ul>
            <li>- Электронная почта: support@420time.com.</li>
            <li>- Телефон: 000 (000) 123 4567.</li>
            <li>- Часы работы: понедельник – пятница, 8:00–21:00</li>
          </ul>
        </section>
        <section>
          <h4>Общие запросы:</h4>
          <p>Если у вас есть общие вопросы о нашей компании, партнерстве или чем-то еще, свяжитесь с нами.</p>
          <ul>
            <li>- Электронная почта: info@420time.com.</li>
          </ul>
        </section>
        <section>
          <h4>Отзывы и предложения:</h4>
          <p>Мы ценим ваши отзывы и всегда стремимся совершенствоваться. Если у вас есть какие-либо предложения, комментарии или идеи о том, как мы можем улучшить наши предложения, сообщите нам об этом.</p>
          <ul>
            <li>- Электронная почта: Feedback@420time.com</li>
          </ul>
        </section>
      </motion.div>
    </article>
  );
}


export default ContactLanding;
