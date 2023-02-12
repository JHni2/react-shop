import Product from "./Product";
import styles from "./Products.module.css";

import fashion1 from "../img/fashion1.jpg";
import fashion2 from "../img/fashion2.jpg";
import fashion3 from "../img/fashion3.jpg";
import fashion4 from "../img/fashion4.jpg";
import fashion5 from "../img/fashion5.jpg";
import fashion6 from "../img/fashion6.jpg";
import fashion7 from "../img/fashion7.jpg";
import fashion8 from "../img/fashion8.jpg";

import accessory1 from "../img/accessory1.jpg";
import accessory2 from "../img/accessory2.jpg";
import accessory3 from "../img/accessory3.jpg";
import accessory4 from "../img/accessory4.jpg";

import digital1 from "../img/digital1.jpg";
import digital2 from "../img/digital2.jpg";
import digital3 from "../img/digital3.jpg";
import digital4 from "../img/digital4.jpg";
import digital5 from "../img/digital5.jpg";

export const data = {
    "fashion": {
        "title": "패션",
        "items": [
            {
                id: 1,
                amount: 1,
                src: fashion1,
                name: '패션',
                title: "Fashion Backpack",
                price: "$110"
            },
            {
                id: 2,
                amount: 1,
                src: fashion2,
                name: '패션',
                title: "Mens Casual T-shirts",
                price: "$20"
            },
            {
                id: 3,
                amount: 1,
                src: fashion3,
                name: '패션',
                title: "Mens Cotton Jacket",
                price: "$54"
            },
            {
                id: 4,
                amount: 1,
                src: fashion4,
                name: '패션',
                title: "Mens Casual Slim Fit",
                price: "$15"
            },
            {
                id: 5,
                amount: 1,
                src: fashion5,
                name: '패션',
                title: "Women's 3-in-a Snowboard Jacket",
                price: "$48"
            },
            {
                id: 6,
                amount: 1,
                src: fashion6,
                name: '패션',
                title: "Women's Solid Short Sleeve",
                price: "$10"
            },
            {
                id: 7,
                amount: 1,
                src: fashion7,
                name: '패션',
                title: "Women's Short Sleeve",
                price: "$7"
            },
            {
                id: 8,
                amount: 1,
                src: fashion8,
                name: '패션',
                title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
                price: "$30"
            },
        ],
    },
    "accessory": {
        "title": "액세서리",
        "items": [
            {
                id: 9,
                amount: 1,
                src: accessory1,
                name: '액세서리',
                title: "Women's Gold Chain Bracelet",
                price: "$678"
            },
            {
                id: 10,
                amount: 1,
                src: accessory2,
                name: '액세서리',
                title: "Solid Gold Petite",
                price: "$133"
            },
            {
                id: 11,
                amount: 1,
                src: accessory3,
                name: '액세서리',
                title: "White Gold Princess",
                price: "$21"
            },
            {
                id: 12,
                amount: 1,
                src: accessory4,
                name: '액세서리',
                title: "Rose Gold Plated Stainless Steel Double",
                price: "$15"
            },
        ],
    },
    "digital": {
        "title": "디지털",
        "items": [
            {
                id: 13,
                amount: 1,
                src: digital1,
                name: '디지털',
                title: "WD 2TB Hard Drive",
                price: "$65"
            },
            {
                id: 14,
                amount: 1,
                src: digital2,
                name: '디지털',
                title: "Sandisk SSD PLUS 1TB Internal SSD",
                price: "$109"
            },
            {
                id: 15,
                amount: 1,
                src: digital3,
                name: '디지털',
                title: "Power 256GB SSD 3D A55",
                price: "$109"
            },
            {
                id: 16,
                amount: 1,
                src: digital4,
                name: '디지털',
                title: "WD 4TB Gaming Drive Works with Playstation 4 Portable",
                price: "$15"
            },
            {
                id: 17,
                amount: 1,
                src: digital5,
                name: '디지털',
                title: "Full HD (1920 x 1080) IPS Ultra-Thin",
                price: "$599"
            },
        ],
    },
};

export default function Products(props) {

    let category = props.url;
    if (category === undefined) {
        return (
            <div className={styles.container}>
                <Product item={data.fashion.items} title={data.fashion.title} name={data.fashion.name} amount={data.fashion.amount}/>
                <Product item={data.accessory.items} title={data.accessory.title} name={data.accessory.name}  amount={data.accessory.amount} />
                <Product item={data.digital.items} title={data.digital.title} name={data.digital.name}  amount={data.digital.amount} />
            </div>
        );
    }
    return (
        <div className={styles.container} >
            <Product
                item={data[category].items}
                title={data[category].title}
                name={data[category].name}
                amount={data[category].amount}
                class="keyword"/>
        </div>
    );
}