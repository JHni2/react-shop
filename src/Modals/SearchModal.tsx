import styles from './SearchModal.module.css';

import { ReactNode } from 'react';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function SearchModal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className={styles.modalOverlay} onClick={props.toggle}>
          {props.children}
        </div>
      )}
    </>
  );
}
