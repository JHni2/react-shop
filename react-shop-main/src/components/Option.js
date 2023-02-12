import styles from "./Option.module.css";
import {TbBrightnessUp} from "react-icons/tb";
import {MdOutlineBrightness2} from "react-icons/md";
import {BsCart} from "react-icons/bs";
import {UserInfoContextStore} from "./UserInfoContext";
import {UserCartStore} from "./UserCartContext";
import {useContext, useState, useEffect} from "react";
import {data} from "./Products";
import {useNavigate} from "react-router-dom";


export default function Option() {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [search, setSearch] = useState(false);
    const allData = [].concat(data.accessory.items, data.fashion.items, data.digital.items);

    allData.map(item => {
        item.title = item.title.toLowerCase();
        return item;
    });

    const onClickWord = (id) => {
        navigate(`/details/${id}`);
        setSearch(false);
        setInputValue('');
    };

    const onChangeSearch = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);

        let list = allData.filter(item => {
            if (item.title.includes(e.target.value)) {
                return (
                    <li>{item.title}</li>
                )
            }
        })
        setKeywords(list);
        setSearch(true);

        if(e.target.value === '') {
            setSearch(false);
        }
    }

    const UserInfo = useContext(UserInfoContextStore);
    const UserCart = useContext(UserCartStore);



    const cartCountData = UserCart.cart.map(item => item.amount);
    const cartCount = UserCart.cart.length > 0 ? cartCountData.reduce((a, b) => (a + b)) : 0;

    const icon = UserInfo.themeMode === "dark"
        ? <TbBrightnessUp className={`${styles.icon} ${styles.dark}`}/>
        : <MdOutlineBrightness2 className={styles.icon}/>;


    const cart = (e) => {
        navigate('/cart');
    }

    return (
        <div className={styles.theme}>
            <button onClick={UserInfo.toggleTheme} className={styles.button}>
                {icon}
            </button>
            <form className={styles.form}>
                <input className={styles.input} type="text" placeholder="검색" value={inputValue} onChange={onChangeSearch} />
                <ul className={styles.searchList}>
                    {keywords.map((keyword) => {
                        if(search) {
                            return <li className={styles.search} key={keyword.id} onClick={e => onClickWord(keyword.id)}>{keyword.title}</li>
                        }
                    })}
                </ul>
            </form>
            <div className={styles.cart} onClick={cart}>
                <BsCart className={styles.icon} />
                <span className={styles.badge}>{cartCount}</span>
            </div>
        </div>
    );
}
