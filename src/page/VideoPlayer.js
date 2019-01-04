import React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import Styles from './videojsHqcat.css'
import testVideo1 from './1.mp4'
import testVideo2 from './2.mp4'
import testVideo3 from './3.mp4'

var array=new Array(testVideo1,testVideo2,testVideo3);
var i=1;
class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          srcc:''
        };
    }

    componentDidMount () {
        // instantiate video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady () {})
        this.player.on('ended',()=>{
            this.props.zidong();
        })
        this.player.on('pause',()=>{
            this.props.adv()
        })
        this.player.on('play',()=>{
            this.props.adv1()
        })
    }
    
    componentDidUpdate() {
        if (this.player) {
            this.player.src({
                src: this.props.testvideo,
               
                type: 'video/mp4'
            })
            this.player.autoplay(this.props.auto)
        }
        else {
            this.player = videojs(this.videoNode, this.props)
        }
    }

    // destroy player on unmount
    componentWillUnmount () {
        if (this.player) {
            this.player.dispose()
        }
      
    }

    render () {
        return (
            <div data-vjs-player>
                <video ref={node => this.videoNode = node} className='video-js vjs-hqcat' />
            </div>
        )
    }
}
export default VideoPlayer