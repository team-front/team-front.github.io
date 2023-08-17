import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import '../../assets/css/Login.css';
import Logo1 from "../../assets/img/Logo1.png";
import CustomerData from "../../data/customerData.json";
import backlogo from '../../assets/img/back.png'

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

    const [name, setName] = useState();
    const [pnumber, setPnumber] = useState();
    const [cnumber, setCnumber] = useState();

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

    const [randCnum, setRandCnum] = useState();
    const [sendCnum, setSendCnum] = useState(0);
    // const [login, setLogin] = useState(0);

    const sendCnumber = () => {
        const definedRandCnum = Math.floor(Math.random() * 9000)+1000;
        setRandCnum(definedRandCnum);
        alert("인증번호 : " + definedRandCnum + "\n" + "(위와 같이 전화번호로 인증번호가 전송될 예정입니다.)");
        setSendCnum(1);
    }

    const handleCertify = () => {
        if(parseInt(cnumber,10) != randCnum){
            alert("인증번호가 일치하지 않습니다.\n다시 입력해주세요.");
        }
        else{
            setCertify(true);
        }
    }

    const handleLogin = () => {
        if (!name){
            alert("성함을 입력해주세요.");
        }
        else if(!pnumber){
            alert("전화번호를 입력해주세요.");
        }
        else if(!cnumber){
            alert("문자로 전송된 인증번호를 입력해주세요.");
        }
        else if(!certify){
            alert("전화번호 인증을 완료해주세요.");
        }
        else{
            if(localStorage.getItem("CustomerData")==undefined){
                const JsonCusData = JSON.stringify(CustomerData.CustomerData);
                localStorage.setItem("CustomerData", JsonCusData);
            }
            const presentCustomerData = JSON.parse(localStorage.getItem("CustomerData"));
            const signedCus = presentCustomerData.filter(customer => customer[0]==name && customer[1]==pnumber);

            // presentCustomerData.map((customer)=>{
            //     if(customer[0]==name && customer[1]==pnumber){
            //         setLogin(1);
            //     }
            // });
            if(signedCus.length != 0){
                // setLogin(0);
                setSendCnum(0);
                localStorage.setItem("Login", 1);
                navigate('/', { state :{name : name, pnumber : pnumber} });
            }
            else{
                alert("등록된 회원이 아닙니다. 다시 입력해주세요.\n**아래 회원가입 버튼 또는 전화 문의를 통해 회원가입을 진행해주세요.**")
            }
        }
    }

    let [timer, setTimer] = useState('00:00')

    let time = 60000;
    let min;
    let sec;



    const [clicked, setClicked] = useState(false);
    const [certify, setCertify] = useState(false);

    function timeMaker(){
        time = time-1000;
        min = Math.floor(time/60000);
        sec = (time%60000)/1000;
        setTimer(min+'0:'+sec)
    };

    const clicking = ()=>{
        clearInterval(timeMaker);
        setClicked(true)
        alert('전송되었습니다.');

        setInterval(timeMaker, 1000)

        setTimeout(function(){
            setClicked(false)
            setTimer('00:00')
            time = 60000;
            clearInterval(timeMaker)

        }, 60000);
    }

    if (clicked===false){
 
    }


  return (
    <div className="Lo-whole">
        <div className="Lo-header" onClick={goToHome}>
            <span>보따리</span><img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>            </div>
        <div className="My-topbox" style={{textAlign:"center"}}>
            로그인
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <button className="Lo-back" style={{marginLeft: '5%'}} onClick={goBack}>
                <img src={backlogo}/>
                뒤로가기
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
                
                <input className="Lo-nameinput" type='string' onChange={(event)=> handleNameInput(event)}
                    style={{marginLeft:'-10px'}}/>
                <div className="Lo-none"></div>
            </div>

            <div className="Lo-number">
                <div className="Lo-numbertag">
                    전화번호
                </div>
                <input className="Lo-numberinput" type='text' onChange={(event)=> handlePnumberInput(event)} placeholder="000-0000-0000"/>
                <div className="forTimer">
                    <button className={clicked===false?"Lo-sendphone":"Lo-sendphone Lo-clicked"} style={{marginLeft: '11px'}} /* , position: 'relative', marginRight: '-185px' */
                        onClick={()=>{sendCnumber();clicking();}} disabled={pnumber?false:true}>
                        {sendCnum?'인증번호 재전송':'인증번호 전송'}
                    </button>
                    <span className="timer">{timer}</span>
                </div>
            </div>

            <div className="Lo-cert">
                <div className="Lo-certtag">
                    인증번호
                </div>
                <input className="Lo-certinput" type='number' onChange={(event)=> handleCnumberInput(event)}/>
                <button className="Lo-sendphone" onClick={()=>{handleCertify()}} disabled={certify === false ? false:true}>
                    {certify === false ? "인증" : "인증완료" }
                </button>
            </div>
            
            <button className="Lo-login" onClick={()=>{handleLogin()}}>
                {/* <Link to="/homeLog" style={{color:"white"}}> */}
                    로그인
                {/* </Link> */}
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