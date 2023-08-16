import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import '../../assets/css/SignUp.css';
import "../../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerData from "../../data/customerData.json";


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
        else if(parseInt(cnumber,10) != randCnum){
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
            setSignUpFin(0);
            setSendCnum(0);
            navigate('/login');
        };
    }, [signUpFin]);


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
                <div className="Su-nametag" style={{textAlign:'right'}}>
                    이름
                </div>
                <input className="Su-nameinput" type='string' onChange={(event)=> handleNameInput(event)}/>
            </div>

            <div className="Su-number">
                <div className="Su-numbertag">
                    전화번호
                </div>
                <input className="Su-numberinput" type='text' onChange={(event)=> handlePnumberInput(event)} placeholder="000-0000-0000"/>
                <button style={{marginLeft: '5px'}} /* , position: 'relative', marginRight: '-185px' */
                    onClick={()=>{sendCnumber()}} disabled={pnumber?false:true}>
                    {sendCnum?'인증번호 재전송':'인증번호 전송'}
                </button>
            </div>

            <div className="Su-cert">
                <div className="Su-certtag">
                    인증번호
                </div>
                <input className="Su-certinput" type='text' onChange={(event)=> handleCnumberInput(event)}/>
            </div>

            <div className="Su-add">
                <div className="Su-addtag">
                    배송주소(기본)
                </div>
                <input className="Su-addinput1" type='string' onChange={(event)=> handleAddressInput(event)}/>
            </div>
            {/* <div className="Su-add2">
                <div className="Su-addtag2"/>
                <input className="Su-addinput2" type='string' onChange={(event)=> handleAddressInput(event)}/>
            </div> */}

            <button className="Su-signup" onClick={()=>{handleSignUp()}}>
                {/* <Link className="Btn-Su-signup" to="/login"> */}
                    회원가입
                {/* </Link> */}
            </button>
            </div>
        </div>
  );
}

export default SignUp;