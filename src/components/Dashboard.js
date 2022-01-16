import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { getConversionRequest, createConversionRequest } from '../redux/requests/actions';
import Input from './Input';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';



function Dashboard() {
    const dispatch = useDispatch();
    const [view, setView] = useState("get");
    const [inputValues, setInputValues] = useState({
        amount: "",
        number: "",
        network: ""
    })
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [requestList, setRequestList] = useState(false);
    toast.configure()
    const Request = [
        {
            number: "08023456788",
            amount: 100000,
            network_name: "MTN"
        },
        {
            number: "08023456788",
            amount: 100000,
            network_name: "MTN"
        },
        {
            number: "08023456788",
            amount: 100000,
            network_name: "MTN"
        },
        {
            number: "08023456788",
            amount: 100000,
            network_name: "MTN"
        },
    ]

    const SingleRequest = ({Number, Amount, NetworkName, Index}) => {
        return (
            <div className="single-request">
                <div className ="col"> {`${Index + 1}.`}</div>
                <div className ="col"> {Number}</div>
                <div className ="col"> {Amount}</div>
                <div className ="col mr-2 "> {NetworkName}</div>

            </div>
        )
    }

    const onChange=(event)=>{
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })

    }
    const getRequests = async () => {
        
        const {status, message} = await dispatch(getConversionRequest())
        if (status) {
            setTimeout(()=>{
                setRequestList(Request)
            },2000)
            toast.success(message,{
                className: 'dark-theme',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                autoClose:8000
            });
        }else {
            toast.warn(message,{
                className: 'dark-theme',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                autoClose:8000
            });
        }   
    }

    
    const createRequest = async () =>{
        setLoading(true)
        const payload= {
            amount: inputValues.amount,
            number: inputValues.number,
            network_name: inputValues.network.toUpperCase()
        }
        const {status, message} = await dispatch(createConversionRequest(payload));
        
        if(status) {
            toast.success(message,{
                className: 'dark-theme',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                autoClose:8000
            });
        }else {
            toast.warn(message,{
                className: 'dark-theme',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                autoClose:8000
            });
        }   
        
        setLoading(false)

    }
    
    useEffect(() => {
        if(!inputValues.network || !inputValues.amount || !inputValues.number){
            setDisabled(true)
        } else{
            setDisabled(false)
        }
        
    }, [inputValues])

    useEffect(() => {
        if(!requestList){
            getRequests()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <DashboardView>
            <div className="side-bar">
                <div className={`acn-btn ${view === "get" && " white"} `} onClick= {()=> setView("get")}> Get Request</div>
                <div className={`acn-btn ${view === "create" && " white"} `} onClick= {()=> setView("create")}> Create Request</div>

            </div>
            <div className="major-view">

                {view ==="get" &&(
                    <div className="width-100">
                    {requestList ?
                        requestList.map((item, index) => (
                            <SingleRequest  Number={item.number} Amount={item.amount} NetworkName={item.network_name} Index={index}/>
                        )
                    ): (
                        <Skeleton height={50} count={10} baseColor= "#262626" highlightColor="#404040" borderRadius={5} containerClassName="mb-10"/>
                    )}
                    </div>
                )}

                {view ==="create" &&(
                    <div className="width-100">
                        <Input
                            type="text"
                            placeholder="Network"
                            className="form-input"
                            onChange={onChange}
                            value={inputValues.network}
                            min={3}
                            name={"network"}
                            label="Mobile Network"
                        />
                        <Input
                            type="number"
                            placeholder="Amount"
                            className="form-input"
                            onChange={onChange}
                            value={inputValues.amount}
                            min={1}
                            name={"amount"}
                            label="Amount"
                        />
                        <Input
                            type="text"
                            placeholder="Phone Number"
                            className="form-input"
                            onChange={onChange}
                            value={inputValues.number}
                            min={11}
                            name={"number"}
                            label="Mobile Number"
                        />

                        <button className={`orange-btn ${disabled ? " disabled" : loading ? " form-loading": ""}`} onClick={createRequest}> <span>Submit</span> </button>

                        
                                
                    </div>
                )}
            </div>

        </DashboardView>
    )
}

export default Dashboard;

const DashboardView = styled.div`
    margin-top: 30px !important;
    max-width: 80vw;
    margin: auto;
    min-height: 700px;
    border-radius: 5px;
    border: 1px solid orange;
    display: flex;
    justify-content: start;
    padding: 40px;
    background: #000000;

    .side-bar {
        min-width: 29%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        margin-right: 40px;
        .acn-btn{
            font-size: 24px;
            font-weight: 500;
            background: rgba(255, 255, 255, 0.1);
            color: grey;
            min-height: 45px;
            min-width: 100%;
            margin-bottom: 10px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid orange;
            cursor: pointer;
        }
        .white{
            color: #ffffff !important;
            font-size: 18px;
            line-height: 27px;
        }
    }

    .major-view{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        min-width: 63%;
        border: 1px solid orange;
        border-radius: 5px;
        padding: 10px;
        .single-request{
            min-height: 50px;
            min-width: 100%;
            display: flex;
            justify-content: space-around;
            border-radius: 5px;
            border: 1px solid orange;
            background: rgba(255, 255, 255, 0.1);
            margin: 10px 0px;
        }
        .col{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-weight: 500;
            line-height: 16px;
            color: grey;
        }
    }
    .form-section{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        min-width: 90%;
        margin-top: 40px;
        font-style: normal;
        font-weight: 500;

        .form-input{
            display: flex;
            justify-content: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            padding: 15px 0px 15px 0px;
            padding-left: 30px;
            min-width: 95%;
            border-color: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 20px;
            font-size: 22px;
            line-height: 27px;

        }
        .white{
            color: white !important;
            font-size: 18px;
            line-height: 27px;
        }
    }


    .width-100{
        min-width: 90%;
    }
    .orange-btn{
        min-height: 50px;
        min-width: 50%;
        margin: auto;
        background: orange;
        border-radius: 5px;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        margin-top: 20px;
        border: none;
        cursor: pointer;

    }
    .disabled{
        opacity: 30%
    }
    .mb-10{
        margin-bottom: 10px;
    }
    .form-loading {
        position: relative;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
        opacity: 0.8;
        pointer-events: none;
    }

    .form-loading span {
        opacity: 0;
        visibility: hidden;
    }
    
    .form-loading:after {
        position: absolute;
        content: "";
        width: 30px;
        height: 30px;
        display: inline-block;
        background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzMiIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1kYXNoYXJyYXk9IjUwLjI2NTQ4MjQ1NzQzNjY5IDUwLjI2NTQ4MjQ1NzQzNjY5IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0icm90YXRlKDMxMS45NjcgNTAgNTApIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMC43MnMiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==");
        background-size: 30px 30px;
    }
    



`;


