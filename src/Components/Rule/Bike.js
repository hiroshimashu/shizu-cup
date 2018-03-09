import React from 'react';
import { Segment } from 'semantic-ui-react';

const Bike = () => {
    return (
        <Segment.Group style = {{textAlign: 'left'}}>
            <Segment>
                <h5>1．出場可能車両：ランニングバイクであれば参加可能</h5><br/>
                （例：ストライダー、D-Bikeなどのランニングバイク）
            </Segment>
            <Segment>
                <h5>2．車体・フレーム及びフロントフォークの基本骨格はオリジナルの状態であること。</h5>
            </Segment>
            <Segment>
                <h5>3．シート、シートポスト、ステム、ハンドル、及びホイールなどの改造は安全面で特に問題が無い限り可とします。</h5><br/>
                ※ 但し、タイヤサイズ12インチ以下のリム幅203mm以下とします。
            </Segment>
            <Segment>
                <h5>4．ブレーキ装置は装着してはならない(ブレーキ動作による後続車両の追突を防ぐため）</h5><br/>
                ブレーキ付きの車両の場合は急停車追突防止策としてブレーキを効かなくすれば（ワイヤーを緩めるだけで）ご参加いただけます。
                サイドスタンドの付いた車両は取り外していただくかゴムキャップなどで安全対策をしていただければご参加いただけます。
            </Segment>
            <Segment>
                <h5>5．車両整備：保護者により安全に整備された車両、走行前に各部のボルトに緩みなどがなく保護者の責任で整備すること。</h5><br/>
                ※ 当日、車検等の実施は行いません。
            </Segment>
        </Segment.Group>
    );
}

export default Bike;