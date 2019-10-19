// 当项目庞大时TodoList.js中action到处都是
import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'

import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})

// 1. axios请求后 actionCreators
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

// 使用了中间件thunk后action可返回对象  可异步
export const getTodoListAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:8888').then(res => {
            const data = res.data;
            const action = getListAction(data)
            dispatch(action)
        })
    }
}

// 使用了中间件saga
export const getMyListAction = () => ({
    type:GET_MY_LIST
})