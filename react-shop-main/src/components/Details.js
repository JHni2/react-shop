import styles from './Details.module.css';
import Header from "./Header";
import {data} from  "./Products";
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {UserCartStore} from './UserCartContext';


export default function Details() {

    const UserCart = useContext(UserCartStore);

    const { id } = useParams();

    const allData = [].concat(data.accessory.items, data.fashion.items, data.digital.items);

    const foundItem = allData.find(item => {
        return item.id === parseInt(id);
    });



    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.containerLeftMargin}>
                        <div>
                            <span className={styles.category}>{foundItem.name}</span>
                            <span className={styles.arrow}> > </span>
                            <span>{foundItem.title}</span>
                        </div>
                        <div className={styles.sub}>
                            <img src={foundItem.src} className={styles.img} />
                            <div className={styles.info}>
                                <p className={styles.title}>{foundItem.title}</p>
                                <span className={styles.details}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                                <span className={styles.price}>{foundItem.price}</span>
                                <button onClick={() => UserCart.onclickCart(foundItem)} className={styles.button}>장바구니에 담기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}