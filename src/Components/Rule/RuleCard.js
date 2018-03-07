import React from 'react';

export default function RuleCard() {
    return (
        <div className =  'rule-card'>
            <div href = '/' style = {{
                display: 'flex',
                border: '1px solid #efefef',
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
                             top: '50%',
                             left: '50%',
                             width: 'auto',
                             height: '100%',
                             WebkitTransform: 'translate(-50%, -50%)',
                             msTransform: 'translate(-50%, -50%)',
                             transform: 'translate(-50%, -50%)'
                         }}
                    />
                </p>
                <div className = 'detail' style = {{
                    boxSizing:'border-box',
                    width: '50%',
                    padding:  '30px',
                    textDecoration:'none'
                }}>
                    <h2 className="format" style = {{textAlign: 'left'}}>
                        レースの形式に関して
                    </h2>
                    <p className = 'text'>
                        タイムトライアル　->　予選　-> 準決勝　-> 決勝　
                        の流れで行います
                    </p>
                    <p className = 'link' style = {{ textAlign: 'left',color: '#2f8ceb'}}>
                        詳細はこちら
                    </p>

                </div>

            </div>
        </div>
    );
}