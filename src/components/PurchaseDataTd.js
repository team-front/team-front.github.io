import "../assets/css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/LineIcons.3.0.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../assets/js/datatables-simple-demo.js";
import {DataTable} from "simple-datatables"

import { useState } from "react";


function PurchaseDataTd({key, data, refundMoney, setRefundMoney}){

    //반품, 환불
    const [exchange, setExchange] = useState(0);
    const [exchangeDone, setExchangeDone] = useState(0);
    const [exchangeDisplay, setExchangeDisplay] = useState('block');
    const [refund, setRefund] = useState(0);
    const [refundDone, setRefundDone] = useState(0);
    const [refundDisplay, setRefundDisplay] = useState('block');
    const cost = data[3];

    const exchangeButton = () => {
        if(exchange){
            setExchange(0);
        }
        else{
            setExchange(1);
        }
    }

    const refundButton = () => {
        if(refund){
            setRefund(0);
        }
        else{
            setRefund(1);
        }
    }

    const RefundFinButton = () => {
        if(!refundDone){
            setRefundDone(1);
            setRefundDisplay('none');
        }
    }

    const ExchangeFinButton = () => {
        if(!exchangeDone){
            setExchangeDone(1);
            setExchangeDisplay('none');
        }
    }
    return(
        <tr style={{textAlign:'left'}}>
            <td style={{textAlign:'left'}} key={data[0].toString()}>{data[0]}</td>
            <td style={{textAlign:'left'}} key={data[1].toString()}>{data[1]}</td>
            <td style={{textAlign:'left'}} key={data[2].toString()}>{data[2]}</td>
            <td style={{textAlign:'left'}} key={data[3].toString()}>{data[3]}</td>
            <td style={{textAlign:'left'}} key={data[4].toString()}>
                {refund ? 
                    <span style={{color : 'red', fontWeight:refundDone?'bold':'normal'}}>
                        {refundDone? "환불완료": "환불중"}
                    </span>
                    : data[4]}
            </td>
            <td style={{textAlign:'left'}} key={data[5].toString()}>
                {refund ? 
                    <span style={{color : 'red', fontWeight:refundDone?'bold':'normal'}}>
                        {refundDone? "반품완료": "반품요청중"}
                        <button className="btn btn-success btn-refund-fin" style={{display : refundDisplay, fontSize : "12px", padding:'2px'}} onClick={()=>{RefundFinButton();setRefundMoney(refundMoney+cost); console.log(data);}}>
                            반품완료
                        </button>
                    </span> 
                    : (exchange ? 
                        <span style={{color : 'red', fontWeight:exchangeDone?'bold':'normal'}}>
                            {exchangeDone ? '교환완료' : '교환요청중'}
                            <button className="btn btn-success btn-refund-fin" style={{display : exchangeDisplay, fontSize : "12px", padding:'2px'}} onClick={()=>{ExchangeFinButton()}}>
                                교환완료
                            </button>
                        </span> 
                        : data[5])}
            </td>
            <td>
                <button className={exchange ? "btn btn-secondary" : "btn btn-success"} id="btnNavbarSearch" type="button" style={{display:'inline-block', marginRight: '5px', marginBottom:'3px'}} 
                    onClick={()=>{exchangeButton();setRefund(0);setExchangeDone(0);setExchangeDisplay('block');}}
                    disabled={exchangeDone||refundDone?'disabled':''}>
                        교환
                </button>
                <button className={refund ? "btn btn-secondary" : "btn btn-success"} id="btnNavbarSearch" type="button" style={{display:"inline-block"}} 
                    onClick={()=>{refundButton(); setExchange(0);setRefundDone(0);setRefundDisplay('block');setExchangeDone(0);setExchangeDisplay('block');}} 
                    disabled={refundDone?'disabled':''}>
                        반품
                </button>                                            
            </td>
        </tr>
    );
};

export default PurchaseDataTd;