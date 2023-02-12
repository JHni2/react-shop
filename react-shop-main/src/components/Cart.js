import styles from './Cart.module.css';
import Header from "./Header";
import {UserInfoContextStore} from "./UserInfoContext";
import {useContext} from "react";
import {UserCartStore} from "./UserCartContext";
import {useHistory, useNavigate} from "react-router-dom";


export default function Cart() {

    //test
    // const items = window.localStorage.getItem("localCart");
    // console.log(items)

    const navigate = useNavigate();

    const UserCart = useContext(UserCartStore);
    const cart = UserCart.cart;


    const details = (id) => {
        navigate(`/details/${id}`);
    };

    const onclickHome = () => {
        navigate('/');
    };


    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.containerLeftMargin}>
                    <span className={styles.category}>홈</span>
                    <span className={styles.arrow}> > </span>
                    <span>장바구니</span>
                </div>
                {UserCart.noCart &&
                    <div className={styles.noCartInfo}>
                        <span className={styles.noCart}>장바구니에 물품이 없습니다.</span>
                        <button className={styles.noCartButton} onClick={onclickHome}>담으러 가기</button>
                    </div>
                }
                {
                    cart.map((item, index) => {
                        return (
                        <div className={styles.cartInfo}>
                            <img src={item.src} onClick={() => details(item.id)}/>
                            <div className={styles.name}>
                                    <span className={styles.title}
                                          onClick={() => details(item.id)}>{item.title}</span>
                                    <span className={styles.price}>{item.price}</span>
                                    <div className={styles.button}>
                                        <button
                                            className={styles.leftButton}
                                            onClick={() => UserCart.amountDecrease(index)}
                                            disabled={item.amount <= 1}
                                        >
                                            -
                                        </button>
                                        <button className={styles.number}>{item.amount}</button>
                                        <button
                                            className={styles.rightButton}
                                            onClick={() => UserCart.amountIncrease(index)}
                                        >
                                            +
                                        </button>
                                    </div>
                            </div>
                        </div>
                        );
                    })
                }
                <div className={styles.cartPrice}>
                    <span className={styles.total}>결제 예상 금액 &nbsp;:&nbsp;&nbsp;</span>
                    <span className={styles.totalPrice}>${UserCart.cartPrice}</span>
                    <button className={styles.buyButton} onClick={UserCart.buyCart}>구매하기</button>
                </div>
            </div>
        </>
    );
}