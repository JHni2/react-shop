import styles from './SideNav.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import SearchModal from '../../Modals/SearchModal';
import { categories } from '../../stores/recoil/items';
import { useRecoilValue } from 'recoil';
import { themeDarkState } from '../../stores/recoil/theme';

export default function SideNav(): React.ReactElement {
  const { isOpen, toggle } = useModal();
  const themeDark = useRecoilValue(themeDarkState);

  if (isOpen)
    document.body.style.cssText = `
    max-height: 100vh!important;
    overflow: hidden;`;
  else document.body.style.cssText = '';

  return (
    <>
      <label className={`${styles.label} ${styles.menu}`} onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </label>
      <SearchModal isOpen={isOpen} toggle={toggle} background={'black'}>
        <ul className={themeDark ? styles.sideNavContainer : styles.sideNavContainerLightTheme}>
          {categories.map((category, idx) => {
            return (
              <li
                className={themeDark ? styles.sideNavItem : styles.sideNavItemLightTheme}
                key={idx}
              >
                <Link className="text-bold-16" to={`/${category.en}`}>
                  {category.ko}
                </Link>
              </li>
            );
          })}
        </ul>
      </SearchModal>
    </>
  );
}
