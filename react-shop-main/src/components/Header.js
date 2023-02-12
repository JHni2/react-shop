import styles from './Header.module.css';
import Category from "./Category";
import Option from "./Option";
import {useNavigate} from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    const clickEvent = (e) => {
        navigate('/');
    }

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title} onClick={clickEvent}>React Shop</h1>
                <Category />
                <Option />
            </div>
        </div>
    );
}