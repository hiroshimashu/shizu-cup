import React from 'react';
import { Segment } from 'semantic-ui-react';

const RunArea = () => {
    return (
        <Segment.Group style = {{textAlign: 'left'}}>
            <Segment>
                <h5>
                    1．ランニングバイク乗車可能エリアは、大会実施エリアのみとし、大会実施エリア外は乗車禁止とします。
                </h5>
            </Segment>
            <Segment>
                <h5>
                    2．大会実施エリア内での走行についても、レースコース及び試乗会場以外での走行については、他参加者との接触が発生しない様、保護者が管理をする。
                </h5>
            </Segment>
        </Segment.Group>
    );
}

export default RunArea;