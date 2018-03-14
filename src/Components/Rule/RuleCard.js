import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function RuleCard() {
    return (
        <div className =  'rule-card'>
            <div href = '/' style = {{
                display: 'flex',
                height: '200px',
                textDecoration: 'none'
            }}>
                <p className = 'image' style = {{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '50%',
                    margin: 0
                }}>
                    <img src = "https://s3-ap-northeast-1.amazonaws.com/collagewebsite/static/media/%E3%82%BB%E3%82%99%E3%83%83%E3%82%B1%E3%83%B32%E6%AD%B31.jpg"
                         style = {{
                             position: 'absolute',
                             left: '0%'
                         }}
                         className="rule-img"
                    />
                </p>
                <div className = 'detail' style = {{
                    position:'relative',
                    boxSizing:'border-box',
                    width: '50%',
                    textDecoration:'none'
                }}>
                    <h2 className="format-top" style = {{textAlign: 'left'}}>
                        レースの形式に関して
                    </h2>
                    <p className = 'format-text'>
                        タイムトライアル　->　予選　-> 準決勝　-> 決勝<br/>
                        の流れで行います
                    </p>
                    <Link to = './rules' className = 'link-to-rules-detail' style = {{position: 'absolute',display:'inline-block', left: '5px'}}>
                        ＞＞詳細はこちら
                    </Link>

                </div>

            </div>
        </div>
    );
}