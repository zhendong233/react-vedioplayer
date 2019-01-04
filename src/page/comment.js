import React from 'react';
import Clist from './clist.js';
import Cform from './cform.js';
// import Demo from './test.js';
//import Test from './test.js';

class Comment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.data,
        };
      }
       

    render(){
        const {data}=this.props;
        return (
            <div>
                <h1>コメント</h1>
                <Cform AddItem={this.props.OnAddItem} />
                <Clist data={data}/>
                {/* <Demo /> */}
                
            </div>
        )
    }
}

export default Comment;
