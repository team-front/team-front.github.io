import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../../assets/css/Login.css';
import Logo1 from "../../assets/img/Logo1.png";

function Login() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
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

  return (
    <div className="Lo-whole">
        <div className="Lo-header" onClick={goToHome}>
                보따리<img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
            </div>
        <div className="My-topbox" style={{textAlign:"center"}}>
            로그인
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <button className="Lo-back" style={{marginLeft: '5%'}} onClick={goBack}>
                뒤로가기
            </button>
            <button className="Lo-back" onClick={goBack}>
                회원가입
            </button>
        </div>
        
        {/* <div className="Lo-signup">
            <div className="Lo-signment">
                아직 회원이 아니라면
            </div>
            <button className="Lo-signbutton" onClick={goToSignup}>
                회원가입
            </button>
        </div> */}
        <div className="Lo-middle" style={{marginBotton: "50px"}}>
            <div className="Lo-name">
                <div className="Lo-nametag">
                    이름
                </div>
                <input className="Lo-nameinput" type='string' onChange={(event)=> handleNameInput(event)}/>
            </div>

            <div className="Lo-number">
                <div className="Lo-numbertag">
                    전화번호
                </div>
                <input className="Lo-numberinput" type='number' onChange={(event)=> handleCnumberInput(event)}/>
            </div>

            <div className="Lo-cert">
                <div className="Lo-certtag">
                    인증번호
                </div>
                <input className="Lo-certinput" type='number' onChange={(event)=> handlePnumberInput(event)}/>
            </div>
            
            <button className="Lo-login">
                <Link to="/homeLog" style={{color:"white"}}>로그인</Link>
            </button>
           
            <div style={{textAlign:"center", paddingBottom : "70px"}}>
                <span className="Lo-admin">
                    <Link className="Link-lo-admin" to="/admin">관리자 로그인</Link>
                </span>
                <span>/</span>
                <span className="Lo-admin">
                    <Link className="Link-lo-admin" to="/signup">회원가입</Link>
                </span>
            </div>
        </div>
        </div>
  );
}

export default Login;