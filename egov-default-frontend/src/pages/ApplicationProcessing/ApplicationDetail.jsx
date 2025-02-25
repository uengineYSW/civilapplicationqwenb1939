
import { useEffect, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

import axios from 'axios';

import * as EgovNet from 'api/egovFetch'
// import { NOTICE_BBS_ID } from 'config'
// import CODE from 'constants/code'
import URL from 'constants/url'

// import EgovAttachFile from 'components/EgovAttachFile'
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavInform'

function EgovNoticeDetail(props) {
    console.group("EgovNoticeDetail");
    const [entity, setEntity] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    // const bbsId = location.state.bbsId || NOTICE_BBS_ID;
    const applicationNumber = location.state.applicationNumber;
    // const searchCondition = location.state.searchCondition;

    const condition = true; 

    // const [entity, setEntity] = useState("");

    const [masterBoard] = useState({});
    // const [user, setUser] = useState({});
    const [boardDetail, setBoardDetail] = useState({});
    // const [boardAttachFiles, setBoardAttachFiles] = useState();

    const retrieveDetail = () => {
        const retrieveDetailURL = `/applications/${applicationNumber}`;
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }
        EgovNet.requestFetch(retrieveDetailURL,
            requestOptions,
            function (resp) {
                setBoardDetail(resp);
            }
        );
    }
    useEffect(function () {
        retrieveDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function fetchApplication(applicationNumber){
        axios.get(`/applications/${applicationNumber}`)
        .then(response => {
            setBoardDetail(response.data);
        })
    }

    function deleteList(){
        axios.delete(`/applications/${applicationNumber}`)
        navigate('/applicationProcessing/applications');
    }



    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li><Link to="/applicationProcessing/applications">신청서</Link></li>
                        <li>{masterBoard && masterBoard.bbsNm}</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents NOTICE_VIEW" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">신청서</h1>
                        </div>

                        {/* <!-- 게시판 상세보기 --> */}
                        <div className="board_view">
                            <div className="board_view_top">
                                <div className="tit">{applicationNumber}</div>
                                <div className="info">
                                    <dl>
                                        <dt>신청서</dt>
                                        <dd>{applicationNumber}</dd>
                                    </dl>
                                    <dl>
                                        <dt>ServiceType</dt>
                                        <dd>{boardDetail && boardDetail.serviceType }</dd>
                                    </dl>
                                    <dl>
                                        <dt>ApplicationDate</dt>
                                        <dd>{boardDetail && boardDetail.applicationDate }</dd>
                                    </dl>
                                    <dl>
                                        <dt>Status</dt>
                                        <dd>{boardDetail && boardDetail.status }</dd>
                                    </dl>
                                    <dl>
                                        <dt>문서</dt>
                                        <dd>{boardDetail && boardDetail.documents }</dd>
                                    </dl>
                                    <dl>
                                        <dt>사용자 정보</dt>
                                        <dd>{boardDetail && boardDetail.userData }</dd>
                                    </dl>
                                    <dl>
                                        <dt>dataCollectorId</dt>
                                        <dd>{boardDetail && boardDetail.dataCollectorId }</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="board_btn_area">
                                <div style={{ display: "flex", flexDirection: "row"}}>
                                    <div style={{marginTop: "5px"}}>
                                    </div>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px"}}>
                                    <Link to="/applicationProcessing/applications"
                                        className="btn btn_blue_h46 w_100">목록</Link>
                                </div>
                                <div className="right_col btn1" style={{marginTop: "5px", marginRight: "9%"}}>
                                    <button
                                        onClick={deleteList}
                                        className="btn btn_blue_h46 w_100">삭제
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 게시판 상세보기 --> */}
                        
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EgovNoticeDetail;
