import { useNavigate, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Logo1 from "../../assets/img/Logo1.png"
import Callcenter from "./Callcenter";

import '../../assets/css/MyPage.css';
import backlogo from '../../assets/img/back.png'
import LogoutBtn from './LogoutBtn';


const MyPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const name = location.state.name;
    const pnumber = location.state.pnumber;

    // const [presentCustomerData, setPresentCustomerData] = useState(JSON.parse(localStorage.getItem("CustomerData")));
    const presentCustomerData = JSON.parse(localStorage.getItem("CustomerData"));
    const signedCus = presentCustomerData.filter(customer => customer[0]==name && customer[1]==pnumber);
    // const [address, setAddress] = useEffect(signedCus.length != 0 ? signedCus[0][2] : "서울특별시 종로구 성균관로 25-2 (성균관대학교)");
    const address = signedCus.length != 0 ? signedCus[0][2] : "서울특별시 종로구 성균관로 25-2 (성균관대학교)";
    const restMoney = signedCus.length != 0 ? parseInt(signedCus[0][3]) : 0;
    
    // if(editedAddress){
    //     setPresentCustomerData(JSON.parse(localStorage.getItem("CustomerData")));
    //     const signedCus = presentCustomerData.filter(customer => customer[0]==name && customer[1]==pnumber);
    //     setAddress(signedCus[0][2]);
    //     return;
    // }

    const goBack = () => {
        navigate("/", { state :{name : name, pnumber : pnumber} });
    }

    const goToCharge = () => {
        navigate("/charge", { state :{name : name, pnumber : pnumber} });
    }

    const goToHome = () => {
        navigate("/", { state :{name : name, pnumber : pnumber} });
    }

    const goToEdit = () => {
        navigate("/edit", { state :{name : name, pnumber : pnumber} });
    }


    return (
        <div className="My-whole">
                <LogoutBtn/>
            <div className="My-header" style={{cursor:'pointer'}} onClick={goToHome}>
                <span>보따리</span><img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
            </div>
            <div className="My-topbox">
                내 보따리
            </div>
            <div>
                <Callcenter/>
                <button className="My-back" onClick={goBack}>
                    <img src={backlogo}/>
                    뒤로가기
                </button>
                <div className="My-profile">
                    <div className="My-topinside">
                        <div className="My-name">
                            {name ? name : '김OO'}님
                        </div>
                        <button className="My-edit" onClick={goToEdit}>
                            내 정보 수정
                        </button>
                    </div>
                    <div className="My-phone">
                        전화번호 | {pnumber?pnumber:'01000000000'}
                    </div>
                    <div className="My-address">
                        배송주소 | {address}
                    </div>
                    <div className="My-address">
                        남은 충전액 | {restMoney}원
                    </div>
                </div>
                
                <div className="My-charge" onClick={goToCharge}>
                    <i className="fas fa-money-bills" style={{position:'relative', top:'3px', marginRight:'10px'}}/> 금액 충전하기
                </div>
                <Link to="/mypage/buylist" state={{name : name, pnumber: pnumber}}>
                    <div className="My-list">
                        <i className="fas fa-table-list" style={{position:'relative', top:'3px', marginRight:'10px'}}/> 나의 구매목록 확인
                    </div>
                </Link>
                
                <footer style={{height:"40px"}}>
                
                </footer>
            </div>
        </div>
    );
};

export default MyPage;