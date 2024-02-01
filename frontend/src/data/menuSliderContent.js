//375
import pizzaOne375 from '../assets/images/menu-slider/pizza-one-375.webp'
import pizzaTwo375 from '../assets/images/menu-slider/pizza-two-375.webp'
import pizzaThree375 from '../assets/images/menu-slider/pizza-three-375.webp'
import SalmonPoke375 from '../assets/images/menu-slider/sushi-one-375.webp'
import VeggiePoke375 from '../assets/images/menu-slider/sushi-two-375.webp'
import MiniSalmon375 from '../assets/images/menu-slider/sushi-three-375.webp'
import ChickenAlfredo375 from '../assets/images/menu-slider/pasta-one-375.webp'
import AllaGricia375 from '../assets/images/menu-slider/pasta-two-375.webp'
import SheetPan375 from '../assets/images/menu-slider/pasta-three-375.webp'
//700
import pizzaOne700 from '../assets/images/menu-slider/pizza-one-700.webp'
import pizzaTwo700 from '../assets/images/menu-slider/pizza-two-700.webp'
import pizzaThree700 from '../assets/images/menu-slider/pizza-three-700.webp'
import SalmonPoke700 from '../assets/images/menu-slider/sushi-one-700.webp'
import VeggiePoke700 from '../assets/images/menu-slider/sushi-two-700.webp'
import MiniSalmon700 from '../assets/images/menu-slider/sushi-three-700.webp'
import ChickenAlfredo700 from '../assets/images/menu-slider/pasta-one-700.webp'
import AllaGricia700 from '../assets/images/menu-slider/pasta-two-700.webp'
import SheetPan700 from '../assets/images/menu-slider/pasta-three-700.webp'

const menuSliderCategories = [
    {
        name: 'Паста',
        id: 'pasta',
    },
    {
        name: 'Суши',
        id: 'sushi',
    },
    {
        name: 'Пицца',
        id: 'pizza',
       
    },
]
const menuSliderProducts = [
    {
        id: 'pepperoni-pizza',
        name: 'Пицца пепперони',
        describtion:
            'Пицца пепперони Корж для пиццы дрожжевой, пепперони, томатная паста, сыр моцарелла, сахар.',
        price: (500).toFixed(2),
        img375: pizzaOne375,
        img700: pizzaOne700,
        category: 'pizza',
    },
    {
        id: 'bbq-chicken-pizza',
        name: 'Пицца с курицей-барбекю',
        describtion:
            'Курица-гриль, тесто для пиццы, соус барбекю, копченый сыр Чеддер, сыр Моцарелла.',
        price: (1000).toFixed(2),
        img375: pizzaTwo375,
        img700: pizzaTwo700,
        category: 'pizza',
    },
    {
        id: 'cheese-pizza',
        name: 'Пицца с сыром',
        describtion: 'Тесто для пиццы, соус для пиццы, сыр проволоне, моцарелла.',
        price: (500).toFixed(2),
        img375: pizzaThree375,
        img700: pizzaThree700,
        category: 'pizza',
    },
    {
        id: 'salmon-poke',
        img375: SalmonPoke375,
        img700: SalmonPoke700,
        name: 'Поке с лососем',
        describtion:
            'Лосось, Авокадо, Рис, Капуста, Морковь, Лук зеленый, Кунжут.',
        price: (1000).toFixed(2),
        category: 'sushi',
    },

    {
        id: 'veggie-poke',
        img375: VeggiePoke375,
        img700: VeggiePoke700,
        name: 'Вегетарианский поке',
        describtion: 'Рис, авокадо, капуста, морковь, имбирь, зеленый лук, кунжут.',
        price: (800).toFixed(2),
        category: 'sushi',
    },
    {
        id: 'mini-salmon-set-22-pcs',
        img375: MiniSalmon375,
        img700: MiniSalmon700,
        name: 'Мини-сет с лососем',
        describtion:
            'Двойной ролл с лососем, Калифорния, Нигири с лососем - 2шт, Нигири с угрем - 2шт, Вулкан Гункан - 2шт',
        price: (3500).toFixed(2),
        category: 'sushi',
    },
    {
        id: 'chicken-alfredo',
        img375: ChickenAlfredo375,
        img700: ChickenAlfredo700,
        name: 'Цыпленок Альфредо',
        describtion:
            'Куриная грудка без кожи, жирные сливки, оливковое масло, пармезан-реджано, черный перец.',
        price: (200).toFixed(2),
        category: 'pasta',
    },
    {
        id: 'pasta-alla-gricia',
        img375: AllaGricia375,
        img700: AllaGricia700,
        name: 'Паста Алла Грисия',
        describtion:
            'Паста Ригатони, панчетта, оливковое масло, пекорино романо, черный перец.',
        price: (900).toFixed(2),
        category: 'pasta',
    },
    {
        id: 'sheet-pan-burrata-caprese-gnocchi',
        img375: SheetPan375,
        img700: SheetPan700,
        name: 'Ньокки Буррата Капрезе',
        describtion:
            'Паста Пенне, сметана, курица-гриль, помидоры черри, кудрявая капуста.',
        price: (500).toFixed(2),
        category: 'pasta',
    },
]

export { menuSliderProducts, menuSliderCategories };