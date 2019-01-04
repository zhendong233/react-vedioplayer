import React from 'react';
import ReactDom from 'react';
import {Component} from 'react';
import {Card} from 'antd';
import {Meta} from 'antd';
import img1 from './img1.PNG';
import img2 from './img2.PNG';
import img3 from './img3.PNG';
import testVideo1 from './1.mp4'
import testVideo2 from './2.mp4'
import testVideo3 from './3.mp4'
import { List, Avatar, Icon } from 'antd';
let listData = [
    {
        href: 'http://ant.design',
        title: `大连街景`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        image: img1,
        data1:[
          {
            id: 0, text: 'I like it',
          title:'mack  lee ',zan:12},
          {id: 1, text: 'nice!!!',
          title: 'joshon　james',zan:12}
         ],
         rvideo:testVideo1
    },
    {
        href: 'http://ant.design',
        title: `办公室`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        image: img2,
        data1:[
          {
            id: 0, text: '天气不错哦!!!',
          title:'Stan  inuyasya ',zan:12},
          {id: 1, text: '天气不错哦!!!',
          title: '鈴　sessyomaru',zan:12},
          {id: 2, text: '出去玩啊!!!',
          title: '小野　inuyasya',zan:12},
         ],
         rvideo:testVideo2
    },
    {
        href: 'http://ant.design',
        title: `新年烟花`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        image: img3,
        data1:[
          {
            id: 0, text: 'いいですね!!!',
          title:'佐佐木  sasaki ',zan:12}
         ],
         rvideo:testVideo3
    }
]

 

var num=img1
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

const actIcon = (
    <div style={{display:'flex',flexDirection:'column'}}>
       <span><Icon type="star-o" style={{ marginRight: 8 }} />3</span>
       <span><Icon type="like-o" style={{ marginRight: 8 }} />4</span>
       <span><Icon type="message" style={{ marginRight: 8 }} />5</span>
    </div>
)
class Lists extends Component
{
  constructor(props) {
    super(props);
  }
   alet=(e,r,t)=>
   {
     console.log('click',e)
    this.props.set(e,r,t);
   }
    render()
    {
        return(
            <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    renderItem={item => (
      <List.Item
        key={item.title}
        // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
        actions={[actIcon]}
        extra={<img width={270} alt="logo" src={item.image}  style={{cursor:'pointer'}}  onClick={() => this.alet(item.data1,item.rvideo,item.title)} />}
      >
     
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<span>{item.title}</span>}
        />
      </List.Item>
    )}
  />
        )
    }
}



export default Lists;
