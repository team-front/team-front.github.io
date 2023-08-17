import { useState, useEffect } from "react";
import data from "../../data/product.json";
import Product from "./Product";
import styles from "../../assets/css/BuyList.module.css";
import user_profile from "../../img/user_profile.png";
import Dropdown from "./Dropdown";
import Logo1 from "../../assets/img/Logo1.png"


/* 텍스트 아이콘 사용 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";


import img from "../../img/image1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PurchaseData from "../../data/purchaseDataList.json";
import LogoutBtn from "./LogoutBtn";
import backlogo from '../../assets/img/back.png'


function BuyList(){

    const location = useLocation();
    const navigate = useNavigate();

    const name = location.state.name;
    const pnumber = location.state.pnumber;

    const choicedCustomerBuyData = PurchaseData.PurchaseData.filter(data=>data.name == name && data.phone == pnumber);
    if(localStorage.getItem(name+"BuyData") == undefined && choicedCustomerBuyData.length != 0) {localStorage.setItem(name+"BuyData", JSON.stringify(choicedCustomerBuyData[0].buyList));};
    const signedCusBuylist = JSON.parse(localStorage.getItem(name+"BuyData"));
        

    const goToHome = () => {
        navigate("/", { state :{name : name, pnumber : pnumber} });
    }

    const goBack = () => {
        navigate("/mypage", { state :{name : name, pnumber : pnumber} });
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
    }, []);

    let [visible, setVisible] = useState(8)
    let [count, setCount] = useState(1)

    const countNumber=()=>{
        setCount(count++)
        console.log(count)
        setVisible(count*visible)
        console.log(visible)
    }

    const [view, setView] = useState(false);

    return <div className={styles.outline}>
        <LogoutBtn/>
        <div className="My-header" style={{cursor:'pointer', marginTop:'0px', paddingTop:'20px'}} onClick={goToHome}>
                보따리<img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
        </div>
        <div className={styles.banner} style={{marginBottom:'30px'}}>내 구매목록</div>
        <button className="My-back" onClick={goBack} style={{marginTop:'0px', marginLeft:'40px'}}>
            <img src={backlogo}/>
            뒤로가기
        </button>
        <div className={styles.buy_list}>
            {signedCusBuylist && signedCusBuylist.map((item, index)=>{
                // console.log(item);
                return(
                    <div className={styles.card} key={index}>
                        <LogoutBtn/>
                        <div>
                            <img src={img} className={styles.card_img} />
                        </div>
                        <div className={styles.text}>
                            <p>구매번호: {item[0] ? item[0] : 2652895023}</p>
                            <p>상품명: {item[2] ? item[2] : "중년 봄가을 조끼1"}</p>
                            <p>구매일: {item[1] ? item[1] : "2023년 8월 5일"}</p>
                            <p>배송주소: {item[3] ? item[3] : "서울시 종로구 oo동 xx로 77"}</p>
                            <p>가격: {item[4] ? item[4] : 8000}</p>
                            <p>결제상태: {item[5] ? item[5] : "결제완료"}</p>
                            <p>구매상태: {item[6] ? item[6] : "구매완료"}</p>
                            <button className={styles.askBtn}><Link to={'/info'}>
                                교환/환불 문의
                            </Link></button>
                        </div>
                    </div>
                );
            })}
            {/* <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼1</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼2</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼3</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼4</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼5</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼6</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼7</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                    <img src={img} className={styles.card_img} />
                </div>
                <div className={styles.text}>
                    <p>구매번호: 2652895023</p>
                    <p>상품명: 중년 봄가을 조끼8</p>
                    <p>구매일: 2023년 8월 5일</p>
                    <button className={styles.askBtn}><Link to={'/info'}>
                        교환/환불 문의
                    </Link></button>
                </div>
            </div> */}
        </div>
    </div>
}

export default BuyList;