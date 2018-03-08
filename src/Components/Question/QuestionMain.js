import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';


export default class QuestionMain extends Component {
    state = { activeIndex: "" }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }



    render() {
        const { activeIndex } = this.state

        return (
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

            </Accordion>
        );
    }
}