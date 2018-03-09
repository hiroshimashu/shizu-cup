import React from 'react';
import { Segment } from 'semantic-ui-react';

const Start = () => {
    return (
        <Segment.Group style = {{textAlign: 'left'}}>
            <Segment>
                <h5>カウントダウンシグナルがなり、スタート板が開いてからスタートとなります。<br/>
                    耳が聞こえない参加者には指で4秒前からカウントダウンします。
                </h5>
            </Segment>
        </Segment.Group>
    );
}

export default Start;