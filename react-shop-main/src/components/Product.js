import styles from "./Product.module.css";
import {useNavigate} from "react-router-dom";

export default function Product(props) {

    const navigate = useNavigate();


    const details = (item) => {
        let name = item.name;
        let title = item.title;
        let price = item.price;
        let img = item.img;
        let amount = item.amount;

        navigate(`/details/${item.id}`, {
            state: {
                detail: title, price, img, amount, name
            }
        });
    }


    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            <ul className={props.class === "keyword" ? styles.keyword : styles.products}>
                {
                    props.item.map(item => {
                        return (
                            <li className={styles.productItem} key={item.id}  onClick={event => details(item)}>
                                <img src={item.src} className={styles.img} name={item.name} />
                                <div className={styles.productInfo}>
                                    <p className={styles.productTitle} >{item.title}</p>
                                    <p className={styles.price}>{item.price}</p>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}