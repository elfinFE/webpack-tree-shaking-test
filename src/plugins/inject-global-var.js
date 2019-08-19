import get from 'lodash/get'
import groupBy from 'lodash/groupBy'
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'

window.glodash = {
    get,
    groupBy,
    debounce,
    throttle,
    cloneDeep,
}