import React from 'react';

function sectionTitle(props) {
    return (
        <h1 style = {{ lineHeight: '100%',verticalAlign: 'baseline', textAlign: 'left' }}>
                <span style = {{
                    fontSize: '2.0rem',
                    letterSpacing: '.08em'
                }}>
                    {props.mainTitle}
                </span>
                <span style = {{
                    fontSize: '0.8rem',
                    letterSpacing: '.05em',
                    marginLeft: '20px'

                }}>
                    {props.subTitle}
                </span>
        </h1>
    );
}

export default  sectionTitle;

