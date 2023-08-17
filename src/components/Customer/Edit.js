import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

import '../../assets/css/Edit.css';


const Edit = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const name = location.state.name;
    const pnumber = location.state.pnumber;

    const goToHome = () => {
        navigate("/", { state :{name : name, pnumber : pnumber} });
    }

    const goToBack = () => {
        navigate("/mypage", { state :{name : name, pnumber : pnumber} });
    }

    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");

    const handleAddress1Input = (event)=>{
        const value = event.target.value;
        setAddress1(value);
        console.log(address1);
    }

    const handleAddress2Input = (event)=>{
        const value = event.target.value;
        setAddress2(value);
        console.log(address2);
    }

    const goToMypage = () => {
        const presentCustomerData = JSON.parse(localStorage.getItem("CustomerData"));
        const signedCus = presentCustomerData.filter(customer => customer[0]==name && customer[1]==pnumber);
        const signedCusIndex = presentCustomerData.indexOf(signedCus[0]);
        presentCustomerData.splice(signedCusIndex, 1, [name, pnumber, address1+'('+address2+')', signedCus[0][3]])
        localStorage.setItem("CustomerData", JSON.stringify(presentCustomerData));

        navigate("/mypage", { state :{name : name, pnumber : pnumber} });
    }


    return (
        <div>
            <div className="Edit-header" onClick={goToHome}>
                LOGO for customer
            </div>
            <div className="Edit-topbox">
                내 정보 수정
            </div>
            <button className="Edit-back" onClick={goToBack}>
                뒤로가기
            </button>
            <div className="Edit-oaddress">
                <div className='Edit-otag'>
                    기존 주소
                </div>
                <div className='Edit-ocontent'>
                    서울특별시 종로구 성균관로 25-2 (성균관대학교)
                </div>
            </div>
            <div className="Edit-nAddress">
                <div className='Edit-ntag'>
                    새로운 주소
                </div>
                <input className='Edit-input' type='string' value={address1} onChange={(event)=>{handleAddress1Input(event)}}/>
                <button className="Edit-find">
                    주소 검색
                </button>
            </div>
            <div className="Edit-nAddress2">
                <div className='Edit-ntag2'/>
                <input className='Edit-input2' type='string' onChange={(event)=>{handleAddress2Input(event)}}/>
            </div>
            <button className='Edit-confirm' onClick={()=>{goToMypage()}}>수정 완료</button>
        </div>
    );
};

export default Edit;