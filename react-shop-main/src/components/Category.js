import styles from './Category.module.css';
import {useNavigate} from 'react-router-dom';

export default function Category() {

    const navigate = useNavigate();

    const clickEvent = (e) => {
        const category = e.target.getAttribute('data-category');
        navigate(`/${category}`);
    };

    return (
        <div>
            <span data-category='fashion' onClick={clickEvent} className={styles.title}>패션</span>
            <span data-category='accessory' onClick={clickEvent} className={styles.title}>액세서리</span>
            <span data-category='digital' onClick={clickEvent} className={styles.title}>디지털</span>
        </div>
    );
}