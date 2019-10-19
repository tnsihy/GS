import { takeEvery, put } from 'redux-saga/effects'

import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'

import axios from 'axios'

// generator函数 做异步处理 saga需要
function* mySagas(){
    // 等待监听 当GET_MY_LIST执行时时要执行getList
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList(){
    // console.log('jspang')
    const res = yield axios.get('http://localhost:8888')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySagas;