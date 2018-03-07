import React from "react";

class NewsCard extends React.Component {
    render() {
        return (
            <div className="news-main"　style = {{ textAlign: 'left'}}>
                <span>
                    2018 3.6
                </span>
                <span style = {{marginLeft: '20px'}}>
                   <a>webサイトを開設しました</a>
                </span>
            </div>
        )
    }
}

export default NewsCard;