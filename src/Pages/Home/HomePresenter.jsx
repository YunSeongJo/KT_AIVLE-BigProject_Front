import React from 'react';
import "./home.scss"
import GBox from '../../Componentts/GBox/GBox';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const HomePresenter = ({ bow, articles }) => {
    return (
        <div className="home layout">
            {/* LEFT */}
            <div className="left">
                {/* L-TOP */}
                <div className="layout top">
                    <GBox size='large' bgImageSrc='./glawbal.png'>
                        <div className="main">
                            <h1>Glawbal!</h1>
                            세계 어디서든 법률 걱정 없이 일하세요!<br></br>
                            외국인 근로자와 해외 근무자를 위한 맞춤 법률 정보 제공 서비스
                        </div>
                    </GBox>
                </div>
                {/* L-BOTTOM */}
                <Divider />
                <div className="layout bottom">
                    <div className="label">Recommended</div>
                    <div className="articles">
                        {articles.map((nav, key) => {
                            // URL에서 마지막 부분을 추출하여 ID로 사용
                            const urlParts = nav.url.split('/');
                            const id = urlParts[urlParts.length - 1];

                            return (
                                <GBox size='small' color='transparency' key={key}>
                                    <Link to={`/news/${id}`}>
                                        <img
                                            src={nav.imgURL}
                                            alt={nav.headline}
                                            style={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                                width: '100%',
                                                maxHeight: '90px',
                                                objectFit: 'contain',
                                            }}
                                        />
                                        <div className="iHeader">
                                            <div className="header1"> {nav.source} </div>
                                            <div className="header2"> {nav.datetime} </div>
                                        </div>
                                        <div className="iBody">
                                            <div className="iTitle">{nav.headline}</div>
                                            {/* <div className="iContents">{nav.summary}</div> */}
                                        </div>
                                    </Link>
                                </GBox>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* RIGHT */}
            <div className="right">
                <div className="label">
                    <span>Best of the week</span>
                    <Link to='/faq' style={{color: 'var(--clr-gray)'}}>
                        <span style={{fontSize: 'var(--font-size-1)', paddingRight: '0.2rem'}}>자세히 보기</span>
                        <FontAwesomeIcon icon={faAnglesRight} size='sm'/>
                    </Link>
                </div>
                <div className="bow">
                    {bow.map((nav, key) => (
                        <GBox size='large' className="item" key={key}>
                            <div className="iHeader">
                                <div className="datetime"> views: {nav.views} </div>
                            </div>
                            <div className="iBody">
                                <div className="iTitle">{nav.title}</div>
                                <div className="iContents">{nav.content}</div>
                            </div>
                        </GBox>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePresenter;
