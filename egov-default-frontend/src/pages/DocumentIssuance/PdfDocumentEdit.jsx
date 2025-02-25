
import React, { useEffect, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

// import * as EgovNet from 'api/egovFetch'
// import { NOTICE_BBS_ID } from 'config'
import CODE from 'constants/code'
import URL from 'constants/url'
import axios from 'axios';

// import EgovAttachFile from 'components/EgovAttachFile'
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavInform'
// import bbsFormVaildator from 'utils/bbsFormVaildator'

function EgovNoticeEdit(props) {
    console.group("EgovNoticeEdit");
    console.log("EgovNoticeEdit [props] : ", props);
    props = {mode: CODE.MODE_CREATE};

    const navigate = useNavigate();
    const location = useLocation();
    console.log("EgovNoticeEdit [location] : ", location);

    // const bbsId = location.state?.bbsId || NOTICE_BBS_ID;
    // const nttId = location.state?.nttId || "";

    const [modeInfo, setModeInfo] = useState({ mode: props.mode });
    const [masterBoard] = useState({});
    const [boardDetail, setBoardDetail] = useState({ nttSj: '', nttCn: '' });
    // const [boardAttachFiles, setBoardAttachFiles] = useState();

    const initMode = () => {
        switch (props.mode) {
            case CODE.MODE_CREATE:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: "등록",
                    method: "POST",
                    editURL: '/pdfDocuments'
                });
                break;
            
			default:
                navigate({pathname: URL.ERROR}, {state: {msg : ""}});
        }
    }

    const updateBoard = () => {
        const formData = new FormData();
        for (let key in boardDetail) {
            formData.append(key, boardDetail[key]);
        }

        const entity = {
            documentId: boardDetail.documentId,
            content: boardDetail.content,
            generationDate: boardDetail.generationDate,
            status: boardDetail.status,
            userData: boardDetail.userData,
            documents: boardDetail.documents
        };

        axios.post('/pdfDocuments', entity)
        .then(response => {
            if (response.data.documentId) {
                navigate('/documentIssuance/pdfDocuments');
            } else {
                navigate({pathname: URL.ERROR}, {state: {msg: ""}});
            }
        })
        .catch(error => {
            console.error('Request failed:', error);
            navigate({pathname: URL.ERROR}, {state: {msg: error.message}});
        });
    };

	const Location = React.memo(function Location(masterBoard) {
        return (
            <div className="location">
                <ul>
                    <li><Link to={URL.MAIN} className="home">Home</Link></li>
                    <li><Link to="/documentIssuance/pdfDocuments">PdfDocument</Link></li>
                    <li>{masterBoard && masterBoard.bbsNm}</li>
                </ul>
            </div>
        )
    });

    useEffect(function () {
        initMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.groupEnd("EgovNoticeEdit");

    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <Location />
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents NOTICE_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">PdfDocument</h1>
                        </div>
                        
                        <h2 className="tit_2">{masterBoard && masterBoard.bbsNm} {modeInfo.modeTitle}</h2>

                        <div className="board_view2">
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">DocumentId</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="documentId" name="documentId" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, documentId: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Content</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="content" name="content" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, content: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">GenerationDate</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="generationDate" name="generationDate" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, generationDate: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">Status</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="status" name="status" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, status: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">사용자 정보</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="userData" name="userData" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, userData: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">문서</label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="documents" name="documents" type="text"
                                        onChange={e => setBoardDetail({ ...boardDetail, documents: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            {/* <!-- 버튼영역 --> */}
                            <div className="board_btn_area">
                                <div className="left_col btn1">
                                    <button className="btn btn_skyblue_h46 w_100"
                                        onClick={() => updateBoard()}>저장</button>
                                </div>

                                <div className="right_col btn1">
                                    <Link to="/documentIssuance/pdfDocuments" className="btn btn_blue_h46 w_100">목록</Link>
                                </div>
                            </div>
                            {/* <!--// 버튼영역 --> */}
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EgovNoticeEdit;