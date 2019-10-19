import React, { Component } from 'react';

import store from './store/index'

//action放另外 getTodoListAction用来演示thunk而getMyListAction用来演示saga
import { changeInputAction, addItemAction, delItemAction, getTodoListAction, getMyListAction } from './store/actionCreators'

//将ui与逻辑层分开 
import TodoListUI from './TodoListUI'

// 引入axios
// import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props);
        // console.log(store.getState()) 获取到store中数据
        this.state = store.getState();

        this.changeInputValue = this.changeInputValue.bind(this);
        this.clickBtn = this.clickBtn.bind(this);

        this.delItem = this.delItem.bind(this);

        // subscribe订阅store的变化，每次对store进行dispatch(action)都会触发subscribe注册的函数调用
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                delItem={this.delItem}
            />
        );
    }

    changeInputValue(e) {
        // console.log(e.target.value);

        // 想改变Redux里边的state值要创建action
        // const action = {
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value)

        // action通过dispatch传递给store
        store.dispatch(action)
    }

    clickBtn() {
        // const action = {
        //     type:ADD_ITEM
        // }
        const action = addItemAction()
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    delItem(index) {
        // console.log(index);
        // const action = {
        //     type:DEL_ITEM,
        //     index
        // }
        const action = delItemAction(index)
        store.dispatch(action)
    }

    componentDidMount(){
        // axios.get('http://localhost:8888').then(res=>{
        //     const data = res.data;
        //     // 3.
        //     const action = getListAction(data)
        //     store.dispatch(action)
        // })

        // 1.使用redux-thunk
        // const action = getTodoListAction()
        // store.dispatch(action)

        // 2.使用redux-saga
        const action = getMyListAction()
        store.dispatch(action)
        // console.log(action)
    }
}

export default TodoList;