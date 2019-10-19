// store

// 引入createStore方法  applyMiddleware中间件 中间件是对store.dispatch()的增强
// 用法:直接将thunk引入，放在applyMiddleware方法中，传入createStore方法
// 在实际工作中可使用中间件来进行日志记录、创建崩溃报告、调用异步接口或者路由。
import { createStore, applyMiddleware,compose } from 'redux'

// 1.使用redux-thunk中间件
// import thunk from 'redux-thunk'
// 2.使用saga中间件
import createSagaMiddleware from 'redux-saga'
// 配置redux-sagas.js（业务逻辑）
import mySagas from './sagas.js' 
import reducer from './reducer'


const sagaMiddleware = createSagaMiddleware();
// 如果想要同时使用中间件和Redux Dev Tools插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// 创建数据存储仓库
// store必须唯一；只有store能改变自己内容，Redux不能改变；Redux必须是纯函数
// 纯函数的定义：如果函数的调用参数相同，则永远返回相同的结果
const store = createStore(
    reducer,

    // 配置Redux Dev Tools
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    // applyMiddleware(thunk)
    enhancer
)
sagaMiddleware.run(mySagas)

// 暴露出去
export default store