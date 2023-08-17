import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../../assets/css/SignUp.css';
import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerData from "../../data/customerData.json";
import Logo1 from "../../assets/img/Logo1.png";
import backlogo from '../../assets/img/back.png';


function SignUp() {

    const navigate = useNavigate();
    const [signUpFin, setSignUpFin]=useState(0);

    const goBack = () => {
        navigate("/login");
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
    const [address, setAddress] = useState();

    const handleNameInput = (event) => {
        const value = event.target.value;
        setName(value);
        //console.log(name);
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
        //console.log(address);
    };

    const [randCnum, setRandCnum] = useState();
    const [sendCnum, setSendCnum] = useState(0);

    // const [signedName, setSignedName] = useState(0);
    // const [signedPhone, setSignedPhone] = useState(0);

    const sendCnumber = () => {
        const definedRandCnum = Math.floor(Math.random() * 9000)+1000;
        setRandCnum(definedRandCnum);
        alert("인증번호 : " + definedRandCnum + "\n" + "(위와 같이 전화번호로 인증번호가 전송될 예정입니다.)");
        setSendCnum(1);
    }

    const handleSignUp = ()=>{
        if (!name){
            alert("성함을 입력해주세요.");
        }
        else if(!pnumber){
            alert("전화번호를 입력해주세요.");
        }
        else if(!cnumber){
            alert("문자로 전송된 인증번호를 입력해주세요.");
        }
        else if(certify){
            alert("인증번호가 일치하지 않습니다.\n다시 입력해주세요.");
        }
        else if(address == ""){
            alert("주소를 입력해주세요.");
        }
        else{
            if(localStorage.getItem("CustomerData")==undefined){
                const JsonCusData = JSON.stringify(CustomerData.CustomerData);
                localStorage.setItem("CustomerData", JsonCusData);
            }
            const presentCustomerData = JSON.parse(localStorage.getItem("CustomerData"));
            const signedCus = presentCustomerData.filter(customer => customer[0]==name && customer[1]==pnumber);
            const signedNum = presentCustomerData.filter(customer => customer[1]==pnumber);

            if(signedCus.length != 0){
                alert("이미 가입한 회원입니다.");
                // setSignedName(0);
                // setSignedPhone(0);
            }
            else if(signedNum.length != 0){
                alert("이미 등록된 전화번호입니다.");
                // setSignedName(0);
                // setSignedPhone(0);
            }
            else{
                setSignUpFin(1);
            }
        }
    }


    useEffect(()=>{
        if(signUpFin){
            if(localStorage.getItem("CustomerData")==undefined){
                const JsonCusData = CustomerData.CustomerData;
                const EditJsonCusData = JSON.stringify(JsonCusData.concat([[name, pnumber, address, 0]]));
                localStorage.setItem("CustomerData", EditJsonCusData);
            }
            else{
                const storedCusData = JSON.parse(localStorage.getItem("CustomerData"));
                const JsonCusData = JSON.stringify(storedCusData.concat([[name, pnumber, address, 0]]));
                localStorage.setItem("CustomerData", JsonCusData);
            };
            const JsonPurData = JSON.stringify([]);
            localStorage.setItem(name+"BuyData", JsonPurData);
            localStorage.setItem(name+"chargedList", JsonPurData);
            setSignUpFin(0);
            setSendCnum(0);
            navigate('/login');
        };
    }, [signUpFin]);


    let [timer, setTimer] = useState('00:00')

    let time = 60000;
    let min;
    let sec;



    const [clicked, setClicked] = useState(false)
    const [isStarted, setIsStarted] = useState(false);
    
    const handleStarted = ()=>{
        if(isStarted){
            setIsStarted(false);
        }
        else{
            setIsStarted(true);
        }
    }
    const clicking = () => {

            setClicked(true);
            alert('전송되었습니다.')
            let timeMaker = 
            setInterval(function(){
                time = time-1000;
                if(time >= 0 && isStarted===false){
                min = Math.floor(time/60000);
                sec = (time%60000)/1000;
                setTimer(min+'0:'+sec)}
                else{
                    clearInterval(timeMaker);
                }
            }, 1000)
            setTimeout(function(){
                setClicked(false)
                setTimer('00:00')
                time = 60000;
                clearInterval(timeMaker)
            }, 60000);
        }

    if (clicked===false){
 
    }

    const [certify, setCertify]=useState(false);

    const handleCertify = () => {
        if(parseInt(cnumber,10) != randCnum){
            alert("인증번호가 일치하지 않습니다.\n다시 입력해주세요.");
        }
        else{
            setCertify(true);
        }
    }


  return (
    <div className="so-whole">
        <div className="My-header" onClick={goToHome} style={{cursor: 'pointer'}}>
            <span>보따리</span>
            <img src={Logo1} style={{width:'80px', height:"80px",  marginBottom:'15px', marginLeft:'5px', transform: 'rotate(10deg)'}}/>
        </div>
        <div className="My-topbox" style={{textAlign:"center"}}>
            회원가입
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <button className="so-back" style={{marginLeft: '5%'}} onClick={goBack}>
                <img src={backlogo}/>
                뒤로가기
            </button>
        </div>
        <div className="so-middle" style={{marginBotton: "50px"}}>
            <div className="so-name">
                <div className="so-nametag">
                    이름
                </div>
                
                <input className="so-nameinput" type='string' onChange={(event)=> handleNameInput(event)}/>
                <div className="so-none"></div>
            </div>

            <div className="so-number">
                <div className="so-numbertag">
                    전화번호
                </div>
                <input className="so-numberinput" type='text' onChange={(event)=> handlePnumberInput(event)} placeholder="000-0000-0000"/>
                <div className="forTimer">
                    <button className={clicked===false?"so-auth so-sendphone":"so-auth so-sendphone so-clicked"} style={{marginLeft: '12px'}} /* , position: 'relative', marginRight: '-185px' */
                        onClick={()=>{handleStarted();sendCnumber(); clicking();}} disabled={pnumber?false:true}>
                        {sendCnum?'인증번호 재전송':'인증번호 전송'}
                    </button>
                    <span className="timer">{timer}</span>
                </div>
            </div>

            <div className="so-cert">
                <div className="so-certtag">
                    인증번호
                </div>
                <input className="so-certinput" type='text' onChange={(event)=> handleCnumberInput(event)}/>
                <button className="so-auth" disabled={certify === false ? false:true}
                    style={{marginLeft:'12px'}} onClick={()=>{handleCertify()}}>{certify === false ? "인증" : "인증완료" }</button>
                
            </div>

            <div className="so-address">
                <div className="so-addresstag">
                    배송주소(기본)
                </div>
                <input className="so-addressinput" type='string' onChange={(event)=> handleAddressInput(event)}/>
            </div>
            {/* <div className="Su-add2">
                <div className="Su-addtag2"/>
                <input className="Su-addinput2" type='string' onChange={(event)=> handleAddressInput(event)}/>
            </div> */}

            <button className="so-login" onClick={()=>{handleSignUp()}}>
                {/* <Link className="Btn-Su-signup" to="/login"> */}
                    회원가입
                {/* </Link> */}
            </button>

            <div style={{textAlign:"center", paddingBottom : "70px"}}>
                <span className="so-admin">
                    <Link className="Link-lo-admin" to="/login">로그인</Link>
                </span>
            </div>
            </div>
        </div>
  );
}

export default SignUp;