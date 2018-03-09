import React from 'react';
import { Segment } from 'semantic-ui-react';

const Exempt = () => {
    return (
        <Segment.Group style = {{textAlign: 'left'}}>
            <Segment>
                <h5>
                    1．大会主催者、スタッフから再三注意を受け、改善されない場合は、他の参加者を考慮してレース失格にさせていただく場合がございます。ご了承下さい。
                </h5>
            </Segment>
            <Segment>
                <h5>
                    2．明確なルール違反や過度な改造、受付時間に間に合わない場合等に関してもレース失格にさせていただく場合がございます。ご了承下さい。
                </h5>
            </Segment>
        </Segment.Group>
    );
}

export default Exempt;