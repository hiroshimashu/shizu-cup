import React from 'react';
import { Segment } from 'semantic-ui-react';

const Insurance = () => {
    return (
        <Segment.Group style = {{textAlign: 'left'}}>
            <Segment>
                <h5>
                    大会参加時の事故や怪我に備えて傷害保険に加入しておりますが、担保範囲は大会受付完了時から閉会式終了まで、
                    レース内での事故のみ対象となるので、お子様の怪我や事故にはくれぐれもご注意下さい。
                </h5>
            </Segment>
        </Segment.Group>
    );
}

export default Insurance;