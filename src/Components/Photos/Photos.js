import React, { Component } from 'react';
import PhotoCards2 from './PhotoCards_2nd';
import PhotoCards3 from './PhotoCards_3rd';
import PhotoCards4 from './PhotoCards_4th';
import PhotoCards5 from './PhotoCards_5th';

class Photos extends Component {
    render() {
        return (
            <div class = 'container' style = {styles.container}>
                <div class = '2nd grade' style = { styles.second }>
                    <div class = 'title' style = {styles.secondTitle}>
                        2nd Grade
                    </div>
                    <PhotoCards2 />
                </div>

                <div class = '3rd grade' style = { styles.third }>
                    <div class = 'title' style = {styles.thirdTitle}>
                        3rd Grade
                    </div>
                    <PhotoCards3 />
                </div>

                <div class = '4th grade' style = { styles.third }>
                    <div class = 'title' style = {styles.fourthTitle}>
                        4th Grade
                    </div>
                    <PhotoCards4 />
                </div>

                <div class = '5th grade' style = { styles.third }>
                    <div class = 'title' style = {styles.fifthTitle}>
                        5th Grade
                    </div>
                    <PhotoCards5 />
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
    second: {
        position: 'relative',
        fontSize: '2rem'
    },
    secondTitle: {
        marginBottom: '30px',
        textAlign: 'left',
        borderBottom: '1px solid #db2828',
        lineHeight: '1.1',
        fontFamily: 'Share Tech',
        fontWeight:'bold'
    },
    third: {
        position: 'relative',
        fontSize: '2rem',
        marginTop: '50px'
    },
    thirdTitle: {
        marginBottom: '30px',
        textAlign: 'left',
        borderBottom: '1px solid #f2711c',
        lineHeight: '1.1',
        fontFamily: 'Share Tech',
        fontWeight:'bold'
    },
    fourthTitle: {
        marginBottom: '30px',
        textAlign: 'left',
        borderBottom: '1px solid #a333c8',
        lineHeight: '1.1',
        fontFamily: 'Share Tech',
        fontWeight:'bold'
    },
    fifthTitle: {
        marginBottom: '30px',
        textAlign: 'left',
        borderBottom: '1px solid #fbbd08',
        lineHeight: '1.1',
        fontFamily: 'Share Tech',
        fontWeight:'bold'
    },

}
export default Photos;