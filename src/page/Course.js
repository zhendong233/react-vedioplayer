import React, { Component } from 'react'
import VideoPlayer from './VideoPlayer'
import Styles from './videojsHqcat.css'
import post from './下载.png'
class Course extends Component {
    adv=()=>{
        var play = document.getElementById('adv');
        play.style.display = 'block';
    }
    adv1=()=>{
        var play = document.getElementById('adv');
        play.style.display = 'none';
    }
    render () {
        return (
            <div className='course-container' >
                <h2 className={Styles.diy1}><b>我的视频</b></h2>
                <div id='adv'style={{display:'none',zIndex:100,position:'absolute',top: 150,left:200}}><a href="http://www.baidu.com" target='_blank'><img src={post}/></a></div>
                <VideoPlayer {...this.props.videoJsOptions} testvideo={this.props.testvideo} zidong={this.props.zidong}auto={this.props.auto} adv={this.adv} adv1={this.adv1}/>
                <h2 id='videoname'>视频名称：{this.props.title}</h2>
            </div>
        )
    }
}

export default Course