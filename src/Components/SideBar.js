import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import Logo from '../static/tele-shizu.svg';
import '../index.css';
import Twitter from '../static/twitter.png';
import Facebook from '../static/facebook.png';
import Insta from '../static/insta.png';

export default class MenuExampleVertical extends Component {
    state = { activeItem: 'inbox' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu vertical size = "small"  id = 'side-bar'  fixed = 'left'  style = {{
                height: '100vh',
                borderTop:'none',
                backgroundColor: 'rgb(78, 94, 122)',
                fontFamily: "Share Tech, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, Meiryo, 游ゴシック, Yu Gothic, 游ゴシック体, YuGothic, ＭＳ Ｐゴシック, MS PGothic, sans-serif",
            }}>

                <Link to = '/' >
                    <Menu.Item name='inbox' onClick={this.handleItemClick} style = {{height: '15vh', borderBottomStyle: 'dotted', borderBottomColor: 'white'}}>
                        <img src = {Logo} />
                    </Menu.Item>
                </Link>

                <Link to = "/">
                    <Menu.Item name='inbox' onClick={this.handleItemClick} style = {{height: '10vh', fontSize: '0.92857143rem', borderBottomStyle: 'dotted', textAlign:'left', color: 'white'}}>
                        トップページ
                        <div style = {{ position: 'absolute', top: '50%', fontSize: '1.22857143rem', fontWeight: 'bold', textAlign:'left'}}>
                            TOP
                        </div>
                    </Menu.Item>
                </Link>


                <Link to ="/rules">
                    <Menu.Item name='spam'  onClick={this.handleItemClick}  style = {{height: '10vh', borderBottomStyle: 'dotted', textAlign:'left', color: 'white'}}>
                        大会ルール
                        <div style = {{ position: 'absolute', top: '50%', fontSize: '1.22857143rem', fontWeight: 'bold', textAlign:'left'}}>
                            RULE
                        </div>
                    </Menu.Item>
                </Link>


                <Link to = "/entry">
                    <Menu.Item name='updates'  onClick={this.handleItemClick}  style = {{height: '10vh', borderBottomStyle: 'dotted', textAlign:'left', color: 'white'}}>
                        エントリー
                        <div style = {{ position: 'absolute', top: '50%', fontSize: '1.22857143rem', fontWeight: 'bold', textAlign:'left'}}>
                            ENTRY
                        </div>
                    </Menu.Item>
                </Link>


                <Link to ="/questions">
                    <Menu.Item name='updates'  onClick={this.handleItemClick}  style = {{height: '10vh', borderBottomStyle: 'dotted', textAlign:'left', color: 'white'}}>
                        よくある質問
                        <div style = {{ position: 'absolute', top: '50%', fontSize: '1.22857143rem', fontWeight: 'bold', textAlign:'left'}}>
                            Q&A
                        </div>
                    </Menu.Item>
                </Link>

                <Link to ="/photos">
                    <Menu.Item name='updates'  onClick={this.handleItemClick}  style = {{height: '10vh', borderBottomStyle: 'dotted', textAlign:'left', color: 'white'}}>
                        フォトアルバム
                        <div style = {{ position: 'absolute', top: '50%', fontSize: '1.22857143rem', fontWeight: 'bold', textAlign:'left'}}>
                            PHOTOS
                        </div>
                    </Menu.Item>
                </Link>

                <Link to ="/photos">
                    <Menu.Item name='updates'  onClick={this.handleItemClick}  style = {{height: '10vh', borderBottomStyle: 'dotted', textAlign:'left', color: 'white'}}>
                        コンタクト
                        <div style = {{ position: 'absolute', top: '50%', fontSize: '1.22857143rem', fontWeight: 'bold', textAlign:'left'}}>
                            CONTACT
                        </div>
                    </Menu.Item>
                </Link>

                <Menu.Item style = {{paddingTop:  '50px'}}>
                    <div style = {{display: 'flex'}}>
                        <img src = {Facebook} style = {{width:'35px', height: '35px', marginRight: '20px'}}/>
                        <img src = {Insta} style = {{width:'35px', height: '35px', marginRight: '20px'}}/>
                        <img src = {Twitter} style={{width:'35px', height: '35px', marginRight: '20px'}}/>
                    </div>
                </Menu.Item>
            </Menu>
        )
    }
}