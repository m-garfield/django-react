import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import ResetLocation from '../../helpers/ResetLocation'
import pizzaMenuPreview from '../../data/pizzaMenuPreview';



const PizzaMenuPreview = () => {
  return (
    <article className="section-4 flex-container flex-column" >
      <section className="section-4-info txt-center">
        <h2 className="pop-font txt-white">Фирменные Блюда</h2>
        <p className="section-description">
          4:20 удерживает рынок индустрии питания и постоянно предлагает больше, чем просто еду. Ознакомьтесь с нашими самыми яркими предложениями в меню!
        </p>
      </section>
      <section className="meals-grid flex-container flex-column" >
        {pizzaMenuPreview.map((pizza, id) => (
          <motion.div
            key={id}
            className="meal-item flex-container"
            initial={{ opacity: 0, translateX: -300 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -300 }}
            transition={{ duration: 3 }}
          >
            <img
              src={pizza.img375}
              srcSet={`${pizza.img1440} 300w, ${pizza.img700} 450w, ${pizza.img375} 375w`}
              sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
              alt={pizza.name}
            />
            <section className="meal-item-details flex-container flex-column">
              <h3 className="txt-white">{pizza.name}</h3>
              <p>{pizza.description}</p>
              <section className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>{pizza.currency}</span>
                  {pizza.price}
                </p>
              </section>
            </section>
          </motion.div>
        ))}
      </section>
      <Link
        onClick={ResetLocation}
        to="/menu"
        className="active-button-style txt-white"
      >
        Ищите в меню
      </Link>
    </article>

  )
}

export default PizzaMenuPreview;