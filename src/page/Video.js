import React from 'react';
import {Component} from 'react';
import img1 from './img1.PNG';
import img2 from './img2.PNG';
import img3 from './img3.PNG';
class Video extends Component
{
    render()
    {
        return(
            <div id='num'>
            <img width={600} alt="logo" src={img1} />
            </div>
        )
    }
}
export default Video;