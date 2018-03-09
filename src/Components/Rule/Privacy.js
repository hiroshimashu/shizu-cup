import React from 'react';
import { Segment } from 'semantic-ui-react';

const Privacy = () => {
    return (
        <Segment.Group style = {{textAlign: 'left'}}>
            <Segment>
                <h5>1．主催者は、個人情報の重要性を認識し、個人情報の保護に関する法律および関連法令等を厳守し、主催者の個人情報保護方針に基づき、個人情報を取り扱います。</h5>
            </Segment>
            <Segment>
                <h5>2．大会参加者へのサービス向上を目的とし、参加案内、記録通知、関連情報の通知、次回大会の案内、大会協賛・協力・関係団体からのサービスの提供、記録はおおように利用致します。</h5>
            </Segment>
            <Segment>
                <h5>3．主催者もしくは委託先からの申込内容に関する確認連絡をさせていただくことがあります。</h5>
            </Segment>
        </Segment.Group>
    );
}

export default Privacy;