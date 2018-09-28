import React from 'react';
import styles from './comment.css'
export default class comment extends React.Component {
    render(){
        return (
            <div>
                <div className={styles.comment_title}>评论区</div>
                <div className={styles.comment_area}>
                </div>
            </div>
        )
    }
}