import React from 'react';
import { Segment } from 'semantic-ui-react';

const Clothes = () => {
    return (
        <Segment.Group style = {{textAlign: 'left'}}>
            <Segment>
                <h5>1．ヘルメットの着用：自転車用、もしくはスポーツ用のあご紐が付いているものを着用して下さい。</h5>
            </Segment>
            <Segment>
                <h5>2．グローブ（子ども用手袋、指出しタイプや軍手でも可）を着用して下さい。</h5>
            </Segment>
            <Segment>
                <h5>肌が露出しないような服装を着用して下さい。</h5><br/>
                半そで半ズボンの場合は肘膝パットを着用してお子様が転んだ際ケガしにくいようにケアして下さい。
            </Segment>
            <Segment>
                <h5>4．サイズが合った運動靴を履いて下さい。</h5><br/>
                サンダルまたは踵が露出するような靴およびスパイクでの参加は出来ません。
            </Segment>
        </Segment.Group>
    );
}

export default Clothes;