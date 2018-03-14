import React, { Component } from 'react';
import FormatMain from './FormatMain';
import Bike from './Bike';
import Clothes from './Clothes';
import Start from './Start';
import Insurance from './Insurace';
import Privacy from './Privacy';
import RunArea from './RunArea';
import Cancel from './Cancel';
import Exempt from './Exempt';
import Caution from './Caution';

class RuleMain extends Component {

    render() {

        return (
            <div className = 'container' style = { styles.container }>
                <div className="content" style = { styles.contents }>
                    <div className="format-title" style = { styles.formatTitle}>
                        レース形式に関して
                    </div>
                    <FormatMain />

                    <div className="bike-title" style = { styles.bikeTitle}>
                        大会の車両（バイク）規定に関して
                    </div>
                    <Bike />

                    <div className = 'clothes-title' style = {styles.bikeTitle}>
                        大会参加時の服装に関して
                    </div>
                    <Clothes />

                    <div className="start-title" style = {styles.bikeTitle}>
                        スタートに関して
                    </div>
                    <Start />

                    <div className="insurance-title" style = {styles.bikeTitle}>
                        傷害保険に関して
                    </div>
                    <Insurance />

                    <div className="privacy-title" style = {styles.bikeTitle}>
                        個人情報の取扱いについて
                    </div>
                    <Privacy />

                    <div className="run-area-title" style = {styles.bikeTitle}>
                        走行可能エリアについて
                    </div>
                    <RunArea />

                    <div className="cancel-title" style = {styles.bikeTitle}>
                        レースの棄権、キャンセルに関して
                    </div>
                    <Cancel />

                    <div className="exempt-title" style = {styles.bikeTitle}>
                        レース失格に関して
                    </div>
                    <Exempt />

                    <div className="caution-title" style = {styles.bikeTitle}>
                        注意事項
                    </div>
                    <Caution />

                </div>
            </div>
        );
    }
}









const styles = {
    container: {
        position: 'relative',
        maxWidth: '820px' ,
        padding:'20px 0'
    },
    contents: {
        position: 'relative',
        fontSize: '2rem'
    },
    formatTitle: {
        marginBottom: '30px',
        textAlign: 'left',
        borderBottom: '1px solid #db2828',
        lineHeight: '1.1',
        fontFamily: 'Share Tech',
        fontWeight:'bold'
    },
    bikeTitle: {
        marginBottom: '30px',
        marginTop: '50px',
        textAlign: 'left',
        borderBottom: '1px solid #db2828',
        lineHeight: '1.1',
        fontFamily: 'Share Tech',
        fontWeight:'bold'
    }
}

export default RuleMain;