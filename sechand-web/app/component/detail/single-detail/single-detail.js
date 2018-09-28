import React from 'react'

import styles from './single-detail.css'

export default class single_detail extends React.Component{
    constructor(props){
        super(props)
        this.show = this.show.bind(this)
        this.state = {
            flag :1
        }
    }
    show(e){
        let node = e.target.parentNode.childNodes[8]
        if (this.state.flag ===1){
            node.className = styles.showContent
            e.target.innerHTML = '收起>>'
            this.setState({
                flag :2
            })
        }
        else{
            node.className = styles.detailcontent
            e.target.innerHTML = '查看详情>>'
            this.setState({
                flag:1
            })
        }
    }
    render(){
        return(
            <div className={styles.singlewrapper}>
                <div className={styles.detail}>商品详情>></div>
                <div className={styles.detailwrapper}>
                    <img src='http://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/8892/88922f34cbc594a2bca4a05ae910a78c_0_0_0_0.jpg'/>
                    <div className={styles.information}>
                        <div>书名:东晋门阀政治</div>
                        <div>作者:123</div>
                        <div>出版时间:2018-09-21</div>
                        <div>上传者:往事随风</div>
                        <div>联系电话:123456789</div>
                        <div>数量:6本</div>
                        <div>价格:20元</div>
                        <div className={styles.instruction}>内容简介:</div>
                        <div className={styles.detailcontent}> 《隔江山色：元代绘画（1297—368）》是作者关于中国晚期绘画史写作计划的第一种，探讨元代绘画。元代是蒙古人统治中国的时代，却也是中国文人画发展最具活力与原创性的时代。在蒙古人废科举制度的情形下，读书人面临着变节或失业的两难窘境，很多文人政途不通，转而以为人占卜、代书或绘画为业。《隔江山色：元代绘画（1297—368）》即讲述了在这个异族统治、志不得伸的年代里，画家如何以绘画来表达自己的看法与心声的故事。高居翰（James Cahill），1926年出生于美国加州，曾长期担任加州大学伯克利分校艺术史和研究生院的教授，以及华盛顿弗利尔美术馆中国书画部顾问，他的著作多由在各大学授课时的讲稿修订，或充分利用博物馆资源编纂而成，皆是通过风格分析研究中国绘画史的经典书籍，享有世界范围的学术声誉。</div>
                        <span className={styles.search} onClick={this.show}>查看详情>></span>
                    </div>
                </div>
            </div>
        )
    }
}