import styles from './BuyModal.module.css';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Items } from '../stores/items';

interface ModalType {
  show: boolean;
  onHide: () => void;
  setCart: React.Dispatch<React.SetStateAction<Items[]>>;
}

export default function BuyModal({ show, onHide, setCart }: ModalType): React.ReactElement {
  if (show)
    document.body.style.cssText = `
    max-height: 100vh!important;
    overflow: hidden;`;
  else document.body.style.cssText = '';

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={styles.modalBox}>
        <h3 style={{ fontWeight: '600' }}>정말로 구매하시겠습니까?</h3>
        <p className={styles.modalText}>장바구니의 모든 상품들이 삭제됩니다.</p>
        <div className={styles.btnGroup}>
          <button
            className="btn-main"
            onClick={() => {
              {
                onHide();
                setCart([]);
                window.localStorage.removeItem('products');
                window.location.replace('/cart');
              }
            }}
          >
            네
          </button>
          <button className="btn-move" onClick={onHide}>
            아니오
          </button>
        </div>
      </div>
    </Modal>
  );
}
