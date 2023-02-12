import styles from './BannerCarousel.module.css';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Button } from 'react-bootstrap';

export default function BannerCarousel(): React.ReactElement {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      swipeable={false}
      dynamicHeight={false}
      showStatus={false}
      showThumbs={false}
    >
      <div className={styles.carouselContainer}>
        <img src="https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg" />
        <div className={styles.des}>
          <h2 className="title-bold-24">물 빠진 청바지!</h2>
          <p className="text-regular-16 mtb">
            이제 막 도착한 패션 청바지를 구경해 보세요.
          </p>
          <Button
            className="btn-dark text-bold-14"
            style={{ marginTop: '0.75rem', color: 'rgb(165,172,185' }}
          >
            바로가기 ➜
          </Button>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <img src="https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg" />
        <div className={styles.des}>
          <h2 className="title-bold-24">신속한 업무처리!</h2>
          <p className="text-regular-16 mtb">
            다양한 디지털 상품을 둘러보세요.
          </p>
          <Button
            className="btn-dark text-bold-14"
            style={{ marginTop: '0.75rem', color: 'rgb(165,172,185' }}
          >
            바로가기 ➜
          </Button>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <img src="	https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg" />
        <div className={styles.des}>
          <h2 className="title-bold-24">신선한 식품!</h2>
          <p className="text-regular-16 mtb">
            농장 직배송으로 더욱 신선한 식료품을 만나보세요.
          </p>
          <Button
            className="btn-dark text-bold-14"
            style={{ marginTop: '0.75rem', color: 'rgb(165,172,185' }}
          >
            바로가기 ➜
          </Button>
        </div>
      </div>
    </Carousel>
  );
}
