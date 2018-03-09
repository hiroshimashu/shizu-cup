import React from 'react';
import { Segment } from 'semantic-ui-react';

const Cancel = () => {
    return (
        <Segment.Group style = {{textAlign: 'left'}}>
            <Segment>
                <h5>
                    1．参加者の体調がすぐれない場合は、スタッフに声をかけて棄権、または大会へのキャンセルを申し付けて下さい。
                </h5>
            </Segment>
            <Segment>
                <h5>
                    2．タイムトライアルを棄権、キャンセルしてしまった場合、その後の予選までに復活した場合は、スタッフに声をかけていただければ予選から参加できます。
                </h5><br/>
                <p>
                    ただし組や出走枠に関してはタイムトライアルを完走した選手の後の順位とさせていただき、スタッフから指示させていただきます。
                </p>
            </Segment>
        </Segment.Group>
    );
}

export default Cancel;