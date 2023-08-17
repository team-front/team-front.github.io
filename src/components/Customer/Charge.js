import { useNavigate, useLocation, Link } from "react-router-dom";
import { React, useState } from 'react';
import List from './List';
import Logo1 from "../../assets/img/Logo1.png";
import Callcenter from "./Callcenter";
import backlogo from '../../assets/img/back.png'
import PurchaseData from '../../data/purchaseDataList.json';

import '../../assets/css/Charge.css';
import LogoutBtn from "./LogoutBtn";


const Charge = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const name = location.state.name;
    const pnumber = location.state.pnumber;

    const goBack = () => {
        navigate("/mypage", { state :{name : name, pnumber : pnumber} });
    }

    const presentCustomerData = JSON.parse(localStorage.getItem("CustomerData"));
    const signedCus = presentCustomerData.filter(customer => customer[0]==name && customer[1]==pnumber);
    const signedCusIndex = presentCustomerData.indexOf(signedCus[0]);

    const choicedCustomerBuyData = PurchaseData.PurchaseData.filter(data=>data.name == name && data.phone == pnumber);
    if(localStorage.getItem(name+"chargedList") == undefined &&choicedCustomerBuyData.length != 0) {localStorage.setItem(name+"chargedList", JSON.stringify(choicedCustomerBuyData[0].chargedList));};
    const signedCusChargedList = JSON.parse(localStorage.getItem(name+"chargedList"));
    
    console.log(signedCusChargedList);

    const goToPay = () => {
        navigate("/pay", { state :{name : name, pnumber : pnumber} });
    }

    const goToHome = () => {
        navigate("/", { state :{name : name, pnumber : pnumber} });
    }

    return (
        <div className="Ch-container">
            <LogoutBtn/>
            <Callcenter/>
            <div className="Ch-header" onClick={goToHome}  style={{cursor: 'pointer'}}>
                <span>보따리</span><img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
            </div>
            <div className="Ch-topbox">
                금액 충전하기
            </div>
            <button className="Ch-back" onClick={goBack}>
            <img src={backlogo}/>
                뒤로가기
            </button>
            <div className="Ch-middlebox">
                <div className="Ch-boxleft">
                    <div className="Ch-balance">
                        현재 잔액
                    </div>
                    <div className="Ch-money">
                        {signedCus[0][3]}원
                    </div>
                </div>
                <button className="Ch-button" onClick={goToPay}>
                    충전
                </button>
            </div>
            <div className="Ch-boundary"/>

            <div className="Ch-bottom">
                충전 및 사용 내역
            </div>
            <div className="Ch-list">
                <List signedCusChargedList={signedCusChargedList}/>
            </div>
            
        </div>
    );
};

export default Charge;