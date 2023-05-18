import styles from './NotFound.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { themeDarkState } from '../../stores/recoil/theme';

export default function NotFound(): React.ReactElement {
  const themeDark = useRecoilValue(themeDarkState);

  return (
    <div className={themeDark ? 'wrapper' : 'wrapperLightTheme'}>
      <section className={styles.pageContainer}>
        <div className={styles.textBox}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.text}>페이지를 찾을 수 없습니다.</p>
          <Link to="/">
            <button className="btn-main">메인으로</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
