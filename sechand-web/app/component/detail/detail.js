import React from 'react'
import Comment from './comment/comment'
import Single from './single-detail/single-detail'
import styles from './detail.css'

export default class detail extends React.Component {
    render(){
        return (
            <div className={styles.detailpage}>
                <Single/>
                <Comment/>
            </div>
        )

    }
}