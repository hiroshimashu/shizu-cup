import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

class QuestionDetail extends Component {
    state = { activeIndex: null }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }



    render() {
        const { activeIndex } = this.state

        return (
            <div className = 'container' style = {styles.container} >
                <Accordion fluid styled>
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q1  参加クラスはどのように選べば良いでしょうか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <h5>
                            お子様の生年月日で以下の4クラスから参加クラスを選んで下さい。
                        </h5>
                        <p>
                            2歳クラス　（H26.4.2－H27.4.1生まれの現在2，3歳のお子様対象）<br/>
                            <br/>
                            3歳クラス　（H25.4.2－H26.4.1生まれの現在3，4歳のお子様対象）<br/>
                            <br/>
                            4歳クラス　（H24.4.2－H25.4.1生まれの現在4，5歳のお子様対象）<br/>
                            <br/>
                            5歳クラス　（H23.4.2－H24.4.1生まれの現在5，6歳のお子様対象）<br/>
                        </p>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q2 『テレしずカップ』は、当日参加可能ですか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <h5>
                            当日レースへの参加は基本的に出来ません。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q3 はじめてのレース参加でも大丈夫ですか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <h5>
                            大丈夫です。
                            レース初参加の選手でも楽しんでもらえるようにコースを作っています。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q4 保護者は参加者と一緒にコースを走れますか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                        <h5>
                            レース本番中は基本は保護者はコース内に入れませんが、<br/>
                            選手が一人で走行できない場合はスタッフが許可を出すようにしています。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q5 レンタル車両や装備品（ヘルメット、手袋、肘膝パットなど）はありますか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4}>
                        <h5>
                            レース参加用のレンタル車輌や装備品はありません。<br/>
                            バイク、ヘルメット、手袋（指出しタイプ、軍手可）、肘膝パッドは各自お持ち下さい。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q6 コース全長はどれくらいですか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5}>
                        <h5>
                            1周120mを予定しています。年齢によって周回数を変える予定です。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q7 キャンセル時の返金はありますか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 6}>
                        <h5>
                            エントリー費のご返金はありません。
                            それまでの事前準備の費用に充てさせていただいております。<br/>
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q8 荒天中止の荒天とは？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 7}>
                        <h5>
                            台風なみの横なぐりの雨や視界を遮るような豪雨や降雪が該当します。<br/>
                            また落雷の危険性がある場合も中止です。大会当日の朝7時に協議して<br/>
                            その結果をHPやFacebookなどに発表させていただきます。<br/>
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q9 どのようなレース形式でおこないますか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 8}>
                        <h5>
                            参加者全員の『タイムトライアル』→『予選』→『準決勝』→『決勝』となります。<br/>
                            まず『タイムトライアル』の結果で予選の組み分けを行います。<br/>
                            <br/>
                            『予選』の各組上位が『準決勝』へ進出し、『準決勝』の各組上位が『決勝』へ進みます。<br/>
                            ※予選→準決勝→決勝に進む上位の人数は参加者の人数によって変わってきます
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 9} index={9} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q10 カスタムした車両でも参加できますか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 9}>
                        <h5>
                            ホイールやタイヤ、シート、ハンドル周りの変更などは可能ですが、<br/>
                            規定値を超えるホイールベース（660㎜）の延長やハンドル幅（530㎜）は不可となります
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 10} index={10} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q11 ストライダー以外のメーカー車両（製品）、ブレーキやサイドスタンド付き車両でも参加可能ですか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 10}>
                        <h5>
                            ストライダーと同じ12インチよりホイールサイズの大きなランニングバイクでなければメーカー問わずご参加いただけます。<br/>

                            ブレーキ付きの車両の場合は急停車追突防止策としてブレーキを効かなくすれば<br/>
                            （ワイヤーを緩めるだけで）ご参加いただけます。<br/>
                            サイドスタンドの付いた車両は取り外していただくかゴムキャップなどで安全対策をしていただければ大丈夫です。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 11} index={11} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q12 受付にてすることは何ですか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 11}>
                        <h5>
                            登録したエントリーフォームのスマホの画面か出力した用紙を受付でスタッフに見せて、<br/>
                            ゼッケン一式と保護者パス一式を受け取って下さい。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 14} index={14} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q13 保護者パスとはなんですか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 14}>
                        <h5>
                            参加受付時に当日のタイムテーブルを入れた保護者パスを1枚お渡しします。<br/>
                            保護者パスは帰る際、お手数ですが受付にお戻し下さい。<br/>
                            持ち帰ってしまわないようにご注意ください。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 15} index={15} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q14 怪我をして病院へ行ったら保険を使えますか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 15}>
                        <h5>
                            傷害保険加入費がエントリー費に含まれておりますので、<br/>
                            レースやコース内での練習中の怪我につきましては保険使用が可能です。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 16} index={16} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q15 保険証の持参は必要ですか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 16}>
                        <h5>
                            受付で参加者の生年月日確認に必要なのと、万が一怪我や通院の内容で<br/>
                            保険適用される場合も後日申請となりレース当日は診察や治療費が必要ですので<br/>
                            保険証はご持参ください。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 17} index={17} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q16 観戦や入場は無料でしょうか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 17}>
                        <h5>
                            ランニングバイクレース部分の観戦や入場料は基本無料です。<br/>
                            当日は草薙総合運動場は『草薙まつり』が開催されていて、<br/>
                            他のコンテンツは入場料や参加費が必要な場合がございます。
                        </h5>
                    </Accordion.Content>

                    <Accordion.Title active={activeIndex === 18} index={18} onClick={this.handleClick} style = {{textAlign: 'left'}}>
                        <Icon name='dropdown' />
                        Q17 会場に駐車場はありますか？
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 18}>
                        <h5>
                            参加者専用の無料駐車場はございません。<br/>
                            路上駐車はできませんので、予めご注意ください。<br/>
                            なお、イベント会場周辺の駐車場情報は下記URLからチェックしてみて下さい。
                        </h5>
                        <a href = 'https://www.navitime.co.jp/parking/around/?node=00200507'>https://www.navitime.co.jp/parking/around/?node=00200507</a>
                    </Accordion.Content>


                </Accordion>
            </div>


        );
    }
}


const styles = {
    container: {
        position: 'relative',
        borderTop: '1px solid #dcdddd',
        marginTop: '100px',
        display: 'block',
        padding: '3rem',
        textAlign: 'left'
    },


}

export default QuestionDetail;
