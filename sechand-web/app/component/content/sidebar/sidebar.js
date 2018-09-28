import React from 'react'

import styles from './sidebar.css'
class sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {id:1,context:'信息学院',subitem:['数据结构','计算机网络','操作系统']},
                {id:2,context:'经济学院',subitem:['经济1','经济2','经济3']},
                {id:3,context:'金融学院',subitem:['金融1','金融2','金融3']},
                {id:4,context:'人文学院',subitem:['人文1','人文2','人文3']},
                {id:5,context:'地旅学院',subitem:['外1','外2','外3']},
                {id:6,context:'继续教育学院',subitem:['外1','外2','外3']},
                {id:7,context:'数学与统计学院',subitem:['外1','外2','外3']},
                {id:8,context:'艺术学院',subitem:['外1','外2','外3']},
                {id:9,context:'会计学院',subitem:['外1','外2','外3']},
                {id:10,context:'国际学院',subitem:['外1','外2','外3']},
                {id:11,context:'物理学院',subitem:['外1','外2','外3']}
            ],
            hover:false,
        };

        this.showDetail = this.showDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    showDetail(e){
        e.target.childNodes[1].className = styles.show
    }

    closeDetail(e){
        e.target.childNodes[1].className = styles.close
    }

    render(){
        let {list} = this.state;
        return (
            <div className={styles.list}>
                <div className={styles.sort}>图书分类</div>
                {
                    list.map((data) => <li key={data.id} onMouseEnter={this.showDetail} onMouseLeave={this.closeDetail}>
                        {data.context}
                        <dl className={styles.close} id={data.id} onMouseLeave={(e) => {e.target.className = styles.close}}>{data.subitem}</dl>
                    </li>)
                }
            </div>
        )
    }
}

export default sidebar