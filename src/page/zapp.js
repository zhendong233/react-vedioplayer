import React from 'react';
import {Component} from 'react';
import {Layout} from 'antd';
import Icorn from './icorn.js';
import {Row,Col}from 'antd';
import Lists from './list';
import Comment from './comment';
import APP from './App';
import testVideo1 from './1.mp4';
import testVideo2 from './2.mp4';
import testVideo3 from './3.mp4';
import { Switch } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

let data = [
    {
      id: 0, text: 'I like it',
    title:'mack  lee ',zan:12},
    {id: 1, text: 'nice!!!',
    title: 'joshon　james',zan:12}
   ]

var array=new Array(testVideo1,testVideo2,testVideo3);
class BasicLayout extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          Data: data,
          rvideo:testVideo1,
          title:'大连街景',
          auto:false
        };
    }
    setData = (newData,newvideo,newtitle) => {
        this.setState({Data:newData,rvideo:newvideo,title:newtitle})
    }
    OnAddItem=(newItem)=>{    
        let temp = this.state.Data.concat(newItem);
        
        this.setState({Data:temp});
    }
    zidong=()=>
    {
        if(this.state.rvideo==testVideo1){
            this.setState({rvideo:array[1],title:'办公室'})
        }
        else if(this.state.rvideo==testVideo2){
            this.setState({rvideo:array[2],title:'新年烟花'})
        }
        else if(this.state.rvideo==testVideo3){
            this.setState({rvideo:array[0],title:'大连街景'})
        }
        else{

        }
    }
    onChange=(checked)=>{
        console.log(checked);
        if(checked==true)
        {
            this.setState({auto:checked});
            console.log(1,checked,this.state.auto);
        }
        else
        {
            this.setState({auto:checked});
            console.log(2,checked,this.state.auto);
        }
      }
   


    render()
    {
        return(
            <Layout>
            <Header style={{backgroundColor:'#CC0000',color:'#ffffff',fontSize:20}}>
            <Icorn />在线视频
            </Header>
            <Layout>
              <Content style={{height:1100}}>
              <Row>
                  <Col span={16} style={{height:1100}}>
                  <APP testvideo={this.state.rvideo} title={this.state.title} zidong={this.zidong} auto={this.state.auto}></APP><br/>
                  <Comment data = {this.state.Data} OnAddItem={this.OnAddItem}/>;
                  </Col>
                  <Col span={8} style={{height:800,float:"right"}}>
                  <div style={{fontSize:20}}>自动播放<Switch onChange={this.onChange} /></div>
                  <Lists set={this.setData}></Lists>
                  </Col>
              </Row>
              </Content>
            </Layout>
            <Footer style={{textAlign:'center'}}>designed by DAC intern</Footer>
          </Layout>
        )
    }

}
export default BasicLayout;