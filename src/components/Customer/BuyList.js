import img from "../../img/image1.png";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../../assets/css/BuyList.module.css";
import Logo1 from "../../assets/img/Logo1.png";
import PurchaseData from "../../data/purchaseDataList.json";

function BuyList(){

    const location = useLocation();
    const navigate = useNavigate();

    const name = location.state.name;
    const pnumber = location.state.pnumber;

    const choicedCustomerBuyData = PurchaseData.PurchaseData.filter(data=>data.name == name && data.phone == pnumber);
    if(localStorage.getItem(name+"BuyData") == undefined && choicedCustomerBuyData.length != 0) {localStorage.setItem(name+"BuyData", JSON.stringify(choicedCustomerBuyData[0].buyList));};
    const signedCusBuylist = JSON.parse(localStorage.getItem(name+"BuyData"));
    

    // console.log(localStorage.getItem(name+"BuyData"));

    // useEffect(()=>{
    //     if(!(localStorage.getItem(name+"BuyData"))){
    //         setSignedCusBuylist(JSON.parse(localStorage.getItem(name+"BuyData")));
    //     }
    //     else{
    //         const choicedCustomerBuyData = PurchaseData.PurchaseData.filter(data=>data.name == name && data.phone == pnumber);
    //         localStorage.setItem(name+"BuyData", choicedCustomerBuyData[0].buyList);
    //         setSignedCusBuylist((signedCusBuylist)=>{return(choicedCustomerBuyData[0].buyList)});
    //         console.log(choicedCustomerBuyData[0].buyList);
    //         console.log(signedCusBuylist);
    //     }
    // },[signedCusBuylist]);
    

    const goToHome = () => {
        navigate("/", { state :{name : name, pnumber : pnumber} });
    }

    return <div className={styles.outline}>
        <div className="My-header" style={{cursor:'pointer'}} onClick={goToHome}>
                보따리<img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
        </div>
        <div className={styles.banner}>구매내역</div>
        <div className={styles.buy_list}>
            {signedCusBuylist && signedCusBuylist.map((item, index)=>{
                // console.log(item);
                return(
                    <div className={styles.card} key={index}>
                        <div>
                            <img src={img} className={styles.card_img} />
                        </div>
                        <div className={styles.text}>
                            <p>구매번호: {item[0] ? item[0] : 2652895023}</p>
                            <p>상품명: {item[2] ? item[2] : "중년 봄가을 조끼1"}</p>
                            <p>구매일: {item[1] ? item[1] : "2023년 8월 5일"}</p>
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