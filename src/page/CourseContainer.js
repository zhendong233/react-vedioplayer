import React, { Component } from 'react'
import Course from './Course'
import testVideo1 from './1.mp4'
import testVideo2 from './2.mp4'
import testVideo3 from './3.mp4'




class CourseContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state={inpval:''};
    }

    render () {
   
      //  let address='1.mp4';
        let CourseVideoJsOptions = {
            autoplay: this.props.auto,
            controls: true,
            height:400,
            sources: [{
                src: testVideo1,
                type: 'video/mp4'
            }],

            poster:'http://videojs.com/img/logo.png',

            'playbackRates': [0.75, 1, 1.5, 2],
            controlBar: {
                volumePanel: {
                    inline: false // 将音量控制条垂直
                }
            }



        };


        return (
            <div >

                <Course videoJsOptions={CourseVideoJsOptions} testvideo={this.props.testvideo} title={this.props.title}zidong={this.props.zidong}auto={this.props.auto}/>
                
            </div>

        )
    }
}


export default CourseContainer