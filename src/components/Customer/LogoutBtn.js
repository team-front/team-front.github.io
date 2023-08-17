import styles from '../../assets/css/LogoutBtn.module.css'
import { useNavigate } from 'react-router-dom';

function LogoutBtn(){

    const navigate = useNavigate();

    const Logout = ()=> {
        localStorage.setItem("Login",0); 
        navigate('/');
    }

    return(
        <div className={styles.container} onClick={()=>{Logout()}}> 
            <span className={styles.logout}>로그아웃</span>
        </div>
    )
}

export default LogoutBtn;