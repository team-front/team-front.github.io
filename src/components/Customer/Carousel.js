import Carousel from 'react-bootstrap/Carousel';
import Old from '../../assets/img/carousel1.png'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import styles from '../../assets/css/Carousel.module.css'
function CarouselMain() {
  return (
    <Carousel className={styles.total}>
      <Carousel.Item className={styles.item}>
    <img src={Old}/>
        <Carousel.Caption className={styles.caption}>
          <h3>디지털에 취약한 노인들도!</h3>
          <p>디지털 사용에 미숙한 어르신분들을 <br/>제일 먼저 생각하고 만들었습니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
      <img src={Old}/>
        <Carousel.Caption className={styles.caption}>
          <h3>무엇이든 살 수 있게</h3>
          <p>이제 걱정하지 말고, 전화로 간편하게 물건을 구매해보세요!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.item}>
      <img src={Old}/>
        <Carousel.Caption className={styles.caption}>
          <h3>24시간 전화 문의</h3>
          <p>
            구매도, 환불도, 결제도 모두 가능합니다.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;