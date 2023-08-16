import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../../assets/css/SignUp.css';

function SignUp() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/login");
    }

    const goToHome = () => {
        navigate("/");
    }

    const goToSignup = () => {
        navigate("/signup");
    }

    const [name, setName] = useState("");
    const [pnumber, setPnumber] = useState(0);
    const [cnumber, setCnumber] = useState(0);
    const [address, setAddress] = useState("");

    const handleNameInput = (event) => {
        const value = event.target.value;
        setName(value);
        console.log(name);
    };

    const handlePnumberInput = (event) => {
        const value = event.target.value;
        setPnumber(value);
    };

    const handleCnumberInput = (event) => {
        const value = event.target.value;
        setCnumber(value);
    };

    const handleAddressInput = (event) => {
        const value = event.target.value;
        setAddress(value);
        console.log(address);
    };

  return (
    <div>
        <div className="Su-header" onClick={goToHome}>
            LOGO for customer
        </div>
        <div className="Su-topbox">
            회원가입
        </div>
        <button className="Su-back" onClick={goBack}>
            뒤로가기
        </button>
        <div className="Su-middle">
            <div className="Su-name">
                <div className="Su-nametag">
                    이름
                </div>
                <input className="Su-nameinput" type='string' onChange={(event)=> handleNameInput(event)}/>
            </div>

            <div className="Su-number">
                <div className="Su-numbertag">
                    전화번호
                </div>
                <input className="Su-numberinput" type='number' onChange={(event)=> handlePnumberInput(event)}/>
            </div>

            <div className="Su-cert">
                <div className="Su-certtag">
                    인증번호
                </div>
                <input className="Su-certinput" type='number' onChange={(event)=> handleCnumberInput(event)}/>
            </div>

            <div className="Su-add">
                <div className="Su-addtag">
                    배송주소
                </div>
                <input className="Su-addinput1" type='string' onChange={(event)=> handleAddressInput(event)}/>
            </div>
            <div className="Su-add2">
                <div className="Su-addtag2"/>
                <input className="Su-addinput2" type='string' onChange={(event)=> handleAddressInput(event)}/>
            </div>
                
            <button className="Su-signup">
                회원가입
            </button>
            </div>
        </div>
  );
}

export default SignUp;