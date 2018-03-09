import React, { Component } from 'react';
import { Accordion, Icon, Step } from 'semantic-ui-react'

class FormatMain extends Component {
    state = { activeIndex: null }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render(){
        const { activeIndex } = this.state

        return (
           <div className="format-main" style = {styles.formatMain}>
               <p style = {{textAlign:'center'}}>
                   (1)タイムトライアル　→　(2)予選　→　(3)準決勝　→　(4)決勝
               </p>
               <p style = {{textAlign: 'center'}}>
                   の流れでおこないます。
               </p>
               <Step.Group vertical fluid>
                   <Step>
                       <Icon name='wait' />
                       <Step.Content>
                           <Step.Title>タイムトライアル</Step.Title>
                           <Step.Description>
                               <Accordion>
                                   <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                       <Icon name='dropdown' />
                                       タイムトライアルとは？
                                   </Accordion.Title>
                                   <Accordion.Content active={activeIndex === 0}>
                                   <p>
                                       1．参加者は2人ずつ50mのタイムトライアルにチャレンジしてタイムを計ります。
                                   </p>
                                   <p>
                                       2．タイムトライアルの結果で『予選』の組と枠が決まります。
                                   </p>
                                   </Accordion.Content>
                               </Accordion>
                           </Step.Description>
                       </Step.Content>
                   </Step>

                   <Step>
                       <Icon name='road' />
                       <Step.Content>
                           <Step.Title>予選</Step.Title>
                           <Step.Description>
                               <Accordion>
                                   <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                                       <Icon name='dropdown' />
                                       予選とは？
                                   </Accordion.Title>
                                   <Accordion.Content active={activeIndex === 1}>
                                       <p>1．予選の組と出走枠は『タイムトライアル』の結果で大会本部が組み分けます。</p>
                                       <p>2．参加人数によって準決勝に進む人数は異なります。<br/>
                                       ※詳しくは大会スタッフから予選を走る前に説明します。
                                       </p>
                                       <p>3．勝ち残った選手は『準決勝』に進んでもらいます。</p>
                                       <p>4．勝ち抜けられなかった選手は終了となります。準決勝に進むお友達を応援してあげて下さい。</p>
                                   </Accordion.Content>
                               </Accordion>
                           </Step.Description>
                       </Step.Content>
                   </Step>

                   <Step>
                       <Icon name='users' />
                       <Step.Content>
                           <Step.Title>準決勝</Step.Title>
                           <Step.Description>
                               <Accordion>
                                   <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                                       <Icon name='dropdown' />
                                       準決勝とは？
                                   </Accordion.Title>
                                   <Accordion.Content active={activeIndex === 2}>
                                       <p>1．準決勝は3組で行います。</p>
                                       <p>2．走る組と出走枠は『予選』の着順で決まります。</p>
                                       <p>3．準決勝の各組上位2名が『決勝』に進みます。</p>
                                       <p>4．勝ち抜けられなかった選手は終了となります。決勝に進むお友達を応援して下さい。</p>
                                   </Accordion.Content>
                               </Accordion>
                           </Step.Description>
                       </Step.Content>
                   </Step>

                   <Step>
                       <Icon name='trophy' />
                       <Step.Content>
                           <Step.Title>決勝</Step.Title>
                           <Step.Description>
                               <Accordion>
                                   <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                                       <Icon name='dropdown' />
                                       決勝とは？
                                   </Accordion.Title>
                                   <Accordion.Content active={activeIndex === 3}>
                                       <p>1．決勝は6名で行います。</p>
                                       <p>2．走る枠は『準決勝』の着順で決まります。</p>
                                       <p>3．レース終了後、決勝レースを走った6名はそのまま表彰式に参加してもらいます。</p>
                                       <p>4．表彰式終了後、優勝～3位までの選手にはネーム入りのトロフィーを後日お送りするので<br/>
                                           スタッフがお声をかけさせていただきます。
                                       </p>
                                   </Accordion.Content>
                               </Accordion>
                           </Step.Description>
                       </Step.Content>
                   </Step>
               </Step.Group>
           </div>
        );
    }
}

const styles = {
    formatMain: {
        fontFamily: 'Share Tech',
        fontWeight: 'normal',
        textAlign: 'left',
        lineHeight:1.5,
        fontSize: '1.5rem'
    }
}

export default FormatMain;

