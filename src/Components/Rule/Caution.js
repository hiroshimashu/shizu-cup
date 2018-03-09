import React from 'react';
import { Segment } from 'semantic-ui-react';

const Caution = () => {
    return (
        <Segment.Group style = {{textAlign: 'left'}}>
            <Segment>
                <h5>1．イベント開催中、主催者が設けた全ての規制、指示に従って下さい。</h5>
            </Segment>
            <Segment>
                <h5>2．イベント会場内での事故に関して、参加者全員保険に加入しますので保険の範囲内で補償が適用されますが、他の参加者、主催者、会場管理者ならびにイベント関係者に一切の責任を問いません。</h5>
            </Segment>
            <Segment>
                <h5>3．イベント内で主催者ならびにメディア関係者が行った撮影画像・動画は今後ブログやWeb、SNS、パンフレット等で使用することがあります。</h5>
            </Segment>
            <Segment>
                <h5>4．荒天の場合は、大会運営、子どもたちの体調管理を考慮し、原則中止・中断します。また、地震、降雪、事件、事故などにより大会が中止・中断することがあります。</h5><br/>
                その際、主催者の責によらない事由で大会が中止･中断になった場合は参加料の返金は一切行いません。
            </Segment>
            <Segment>
                <h5>5．イベント開催中、個人の所有物に対し紛失、破損等発生した場合、他の参加者及び主催者、イベント関係者に対して、その責任を問いません。</h5>
            </Segment>
            <Segment>
                <h5>6．参加費支払い後のキャンセルによる返金は一切行いません。</h5>
            </Segment>
            <Segment>
                <h5>7．エントリーの可否は参加費入金後に大会実行委員会から送られてくるメールによってご確認下さい。</h5>
            </Segment>
        </Segment.Group>
    );
}

export default Caution;