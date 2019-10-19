import React from 'react';

import { Input, Button, List } from 'antd'

// 将普通UI组件改为无状态组件
// 1.首先不需要引入Component，不需要使用class
// 2.只需要JSX部分的代码 可先复制return部分
// 3.函数传递一个props参数，去掉this

const TodoListUI = (props)=>{
    return (
        <div>
            <Input
                className="inputMargin"
                onChange={props.changeInputValue}
                value={props.inputValue}
            />
            <Button
                type="primary"
                onClick={props.clickBtn}
            >添加</Button>
            <List
                dataSource={props.list}
                bordered
                renderItem={(item, index) => (<List.Item onClick={() => { props.delItem(index) }}>{item}</List.Item>)}
                className="listWidth"
                size="small"
            />
        </div>
    );
}

export default TodoListUI;

// 普通UI组件
// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <div>
//                 <Input
//                     className="inputMargin"
//                     onChange={this.props.changeInputValue}
//                     value={this.props.inputValue}
//                 />
//                 <Button
//                     type="primary"
//                     onClick={this.props.clickBtn}
//                 >添加</Button>
//                 <List
//                     dataSource={this.props.list}
//                     bordered
//                     renderItem={(item, index) => (<List.Item onClick={() => { this.props.delItem(index) }}>{item}</List.Item>)}
//                     className="listWidth"
//                     size="small"
//                 />
//             </div>
//         );
//     }
// }
