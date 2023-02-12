import styles from "./Carousel.module.css";
import slide1 from "../img/jean.jpg";
import slide2 from "../img/food.jpg";
import slide3 from "../img/work.jpg";
import { useState, useEffect } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";


export default function Carousel() {
    const [count, setCount] = useState(0);

    const nextBtn = () => {
        setCount(count => (count < 2 ? count + 1 : 0));
    };
    const prevBtn = () => {
        setCount(count => (count > 0 ? count - 1 : 2));
    };

    useEffect(() => {
        const interval = setTimeout(() => {
            nextBtn();
        }, 2000);
        return () => clearTimeout(interval);
    });

    return (
        <div className={styles.container}>
            <div className={styles.flexbox} style={{ transform: `translateX(${count * -100}% )`}}>
                <img src={slide1} />
                <img src={slide2} />
                <img src={slide3} />
            </div>
            <div className={styles.carousel}>
                <MdOutlineArrowBackIos className={styles.icon} onClick={prevBtn} />
                <MdOutlineArrowForwardIos className={styles.icon} onClick={nextBtn} />
            </div>
        </div>
    );
}