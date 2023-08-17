import { useLocation, useNavigate } from "react-router-dom";
import { React, useState } from 'react';
import '../../assets/css/Pay.css';
import PurchaseData from "../../data/purchaseDataList.json";
import Logo1 from "../../assets/img/Logo1.png";
import LogoutBtn from "./LogoutBtn";

const Pay = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const name = location.state.name;
    const pnumber = location.state.pnumber;
    const [chargeMoney, setChargeMoney] = useState(0);

    const goToCharge = () => {
        navigate("/charge", { state :{name : name, pnumber : pnumber} });
    }
    const goToHome = () => {
        navigate("/", { state :{name : name, pnumber : pnumber} });
    }
    const paymethod = [
        '신용/체크카드',
        '무통장입금',
        '네이버페이',
        '카카오페이'
    ];
    const [method, setMethod] = useState('');
    const handleClick = (selectedPayMethod) => {
        setMethod(selectedPayMethod);
        // 버튼 선택
    };

    const presentCustomerData = JSON.parse(localStorage.getItem("CustomerData"));
    const signedCus = presentCustomerData.filter(customer => customer[0]==name && customer[1]==pnumber);
    const signedCusIndex = presentCustomerData.indexOf(signedCus[0]);

    const handlePayAmount = (event) => {
        setChargeMoney(event.target.value);
        console.log(chargeMoney);
    }

    const choicedCustomerBuyData = PurchaseData.PurchaseData.filter(data=>data.name == name && data.phone == pnumber);
    if(localStorage.getItem(name+"chargedList") == undefined && choicedCustomerBuyData.length != 0) {localStorage.setItem(name+"chargedList", JSON.stringify(choicedCustomerBuyData[0].chargedList));};
    const signedCusChargedList = JSON.parse(localStorage.getItem(name+"chargedList"));

    const amount_c = parseInt(chargeMoney).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    console.log(amount_c);
    let now = new Date();
    const month = (now.getMonth()+1)<10 ? '0'+(now.getMonth()+1) : now.getMonth()+1
    const now_date = now.getFullYear()+'.'+month+'.'+now.getDate();

    const handleCharging = ()=>{
        presentCustomerData.splice(signedCusIndex, 1, [name, pnumber, signedCus[0][2], parseInt(signedCus[0][3],10)+parseInt(chargeMoney)])
        localStorage.setItem("CustomerData", JSON.stringify(presentCustomerData));
        localStorage.setItem(name+"chargedList", JSON.stringify(
            [{title: `충전 (${method})`,
            amount: "+ "+amount_c,
            amount: "+ "+chargeMoney,
            date: now_date}, ...signedCusChargedList, 
            ]));
        navigate("/charge", { state :{name : name, pnumber : pnumber} });
    }

    
    return (
        <div className="Pay-container">
            <LogoutBtn/>
            <div className="Pay-header" onClick={goToHome}>
                <span>보따리</span><img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
            </div>
            <div className="Pay-topbox">
                충전 결제
            </div>
            <button className="Pay-back" onClick={goToCharge}>
                뒤로가기
            </button>
            <div className="Pay-amount">
                <div className="Pay-amount-title">
                    결제 금액
                </div>
                <div className="Pay-amount-box">
                    <input className="Pay-amount-input" type="number" min="0" onChange={(event)=>{handlePayAmount(event)}} placeholder="0"/>
                    <p className="Pay-amount-won">원</p>
                </div>       
            </div>
            <div className="Pay-boundary"/>
            <div className="Pay-method">
                <div className="Pay-method-title">
                    결제 수단
                </div>
                <div className="Pay-method-ubuttons">
                    <button className={method===paymethod[0]? "Pay-method-card clicked-method":"Pay-method-card"} onClick={handleClick} value={paymethod[0]}>
                        {paymethod[0]} 
                    </button>
                    <button className={method===paymethod[1]? "Pay-method-nobook clicked-method":"Pay-method-nobook"} onClick={handleClick} value={paymethod[1]}>
                        {paymethod[1]}
                    </button>
                </div>
                <div className="Pay-method-dbuttons">
                    <button className={method===paymethod[2]? "Pay-method-naver clicked-method":"Pay-method-naver"} onClick={handleClick} value={paymethod[2]}>
                        {paymethod[2]}
                    </button>
                    <button className={method===paymethod[3]? "Pay-method-kakao clicked-method":"Pay-method-kakao"} onClick={handleClick} value={paymethod[3]}>
                        {paymethod[3]}
                    </button>
                </div>
            </div>
            <div className="Pay-boundary"/>
            <div className="Pay-info">
                <div className="Pay-info-top">
                    <div className="Pay-info-title">
                        결제 정보
                    </div>
                    <div className="Pay-info-again">
                        이름과 전화번호를 한 번 더 확인해주세요!
                    </div>
                </div>
                <div className="Pay-info-bottom">
                    <div className="Pay-info-name col-6">
                        <div className="Pay-info-nametag">
                            이름
                        </div>
                        <div className="Pay-info-nameinput">
                            <span>{name}</span>
                        </div>
                    </div>
                    <div className="Pay-info-number col-6">
                        <div className="Pay-info-numbertag">
                            전화번호
                        </div>
                        <div className="Pay-info-numberinput">
                            <span>{pnumber}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Pay-boundary"/>
            <div className="Pay-balance">
                <div className="Pay-balance-ment">
                    충전 후 잔액
                </div>
                <div className="Pay-balance-money">
                    {parseInt(signedCus[0][3],10)+parseInt(chargeMoney)}원
                </div>
            </div>
            <button className="Pay-pay" onClick={()=>{handleCharging()}}>
                결제하기
            </button>
            
        </div>
    );
};
export default Pay;