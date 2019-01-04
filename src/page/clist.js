import React from 'react';
import { List, Avatar,Icon} from 'antd';

const IconText = ({ id,type, text }) => (
    <span>
      <Icon type={type} style={{ fontSize: '16px', color: '#08c', cursor:'pointer'}}   />
      <span id={id}>{text}</span>
    </span>
  );
  
class Clist extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {
        text1:12
      };
    }

    render (){
        const data = this.props.data;
        return(
            <List
            size="small"
            itemLayout="vertical"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<p>{item.title}</p>}
                  //这个<div onClick>是用于评论的单击之后修改 点赞图标的 颜色和数字的 但是没有写完。
                  description={<div  onClick={()=>{item.zan=item.zan+1;document.getElementById(item.id).innerHTML=item.zan;}}>{item.text}<br /><IconText type="like-o" id={item.id} text={item.zan} /></div>}
                />
              </List.Item>
              
            )}
            />
        )
    }
}
export default Clist;