import styles from '../../assets/css/Callcenter.module.css'
import Phone from '../../assets/img/phone.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Callcenter(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div style={{cursor:"pointer"}}>
            <div className={styles.fix} onClick={handleShow}>
                <div className={styles.icon}>
                <img src={Phone}/>
                </div>
                <span className={styles.text}>전화로 물어보기</span>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title className={styles.modal_title}>주문/교환/환불 문의</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modal_body}><strong>010-1234-5678</strong> 으로 전화해서<br /> 문의내용을 말씀해주세요!</Modal.Body>
                <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    닫기
                </Button> */}
                <Button variant="primary" onClick={handleClose} className={styles.okaybtn}>
                    확인
                </Button>
                </Modal.Footer>
            </Modal>
        
        </div>
    )
}

export default Callcenter;