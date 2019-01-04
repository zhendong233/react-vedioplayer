import React from 'react';

import {Form,Input,Button } from 'antd';

const  TextArea = Input.TextArea;
const FormItem =Form.Item;

class Cform extends React.Component{
  
    constructor() {
        super();
        this.state = {  
          disabled: true,
          data:'',
        };
        //没有bind(this) 会在handle中报错 ： this setstate undefined
        this.change=this.change.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
      }
      handleSubmit(){
          event.preventDefault();       
          let text=this.state.data;
          let title='花音　レイヤ';
          let id=4;
          let zan=0;
          this.props.AddItem({id,text,title,zan});  
      }

      change(){
        this.setState({data:event.target.value}); 
          //注意检测的时候"",null和“”的区别
          let item=event.target.value;
          if(item!="") {  
              this.setState({disabled: false});
            }
          if(item==""){    
               this.setState({disabled: true});
            }
      }
     
    render(){  
        return(   
            <Form  onSubmit = {this.handleSubmit}>
                <FormItem >
                    <TextArea placeholder="コメントする"  onChange={this.change} ref="text"/>
                </FormItem>
                <FormItem>
                    <Button  htmlType="submit" size="small" disabled={this.state.disabled}>
                    送信
                    </Button>
                </FormItem>         
            </Form>
        )
    }
}

export default Cform;