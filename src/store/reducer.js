// 有管理能力的模块
import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'

// 默认数据
const defaultState = {
    inputValue: 'write something',
    list: []
}
// 一个方法函数
export default (state = defaultState, action) => {
    // Reduer只接收state，不能改变state，然后再return回去
    if (action.type === CHANGE_INPUT) {
        // JSON.parse()将数据转换为javaScript对象 JSON.stringify()将对象类型转换为字符串类型
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState
    }


    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState
    }

    if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState
    }

    // 4.
    if(action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data.data.list
        return newState
    }

    return state
}