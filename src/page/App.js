import React, { Component } from 'react'
import CourseContainer from './CourseContainer'


class App extends Component {

    render () {
        return (
            <div className='app'>
                <CourseContainer testvideo={this.props.testvideo} title={this.props.title} zidong={this.props.zidong} auto={this.props.auto}/>
            </div>
        )
    }
}

export default App