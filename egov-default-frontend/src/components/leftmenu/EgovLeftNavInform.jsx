import React from 'react';

// import URL from 'constants/url';
import { NavLink } from 'react-router-dom';

function EgovLeftNavInform() { 
    const lastSegment = window.parent.location.href.split('/').pop();
    
    if (lastSegment === 'applications'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>신청서</h2>
                    <ul className="menu4">
                        <li><NavLink to="/applicationProcessing/applications" className={({ isActive }) => (isActive ? "cur" : "")}>신청서</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (lastSegment === 'dataCollectors'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>데이터 수집기</h2>
                    <ul className="menu4">
                        <li><NavLink to="/dataCollection/dataCollectors" className={({ isActive }) => (isActive ? "cur" : "")}>데이터 수집기</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (lastSegment === 'pdfDocuments'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>PDF문서</h2>
                    <ul className="menu4">
                        <li><NavLink to="/documentIssuance/pdfDocuments" className={({ isActive }) => (isActive ? "cur" : "")}>PDF문서</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (lastSegment === 'electronicSignatures'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>전자서명</h2>
                    <ul className="menu4">
                        <li><NavLink to="/documentIssuance/electronicSignatures" className={({ isActive }) => (isActive ? "cur" : "")}>전자서명</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    return null;
}

export default React.memo(EgovLeftNavInform);