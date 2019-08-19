// 使用babel-plugin-lodash
// 将解构的形式转换为：
// import get from 'lodash/get'
import {
    get,
    groupBy,
    debounce,
    throttle,
    cloneDeep,
} from 'lodash'

window.glodash = {
    get,
    groupBy,
    debounce,
    throttle,
    cloneDeep,
}