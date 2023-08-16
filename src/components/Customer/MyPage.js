import { useNavigate, Link } from "react-router-dom";
import React from 'react';
import Logo1 from "../../assets/img/Logo1.png"

import '../../assets/css/MyPage.css';


const MyPage = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    }

    const goToCharge = () => {
        navigate("/charge");
    }

    const goToHome = () => {
        navigate("/");
    }

    return (
        <div className="My-whole">
            <div className="My-header" onClick={goToHome}>
                보따리<img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
            </div>
            <div className="My-topbox">
                내 보따리
            </div>
            <button className="My-back" onClick={goBack}>
                뒤로가기
            </button>
            <div className="My-profile">
                <div className="My-topinside">
                    <div className="My-name">
                        김OO님
                    </div>
                    <button className="My-edit">
                        내 정보 수정
                    </button>
                </div>
                <div className="My-phone">
                    전화번호 | 01000000000
                </div>
                <div className="My-address">
                    배송주소 | 서울특별시 종로구 성균관로 25-2 (성균관대학교)
                </div>
            </div>
            
            <div className="My-charge" onClick={goToCharge}>
                <i className="fas fa-money-bills" style={{position:'relative', top:'3px', marginRight:'10px'}}/> 금액 충전하기
            </div>
            <Link to="/mypage/buylist" >
                <div className="My-list">
                    <i className="fas fa-table-list" style={{position:'relative', top:'3px', marginRight:'10px'}}/> 나의 구매목록 확인
                </div>
            </Link>
            
            <footer style={{height:"40px"}}>
            
            </footer>
        </div>
    );
};

export default MyPage;