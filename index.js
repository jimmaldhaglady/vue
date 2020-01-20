import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

import {mutations} from './mutations'

Vue.use(Vuex)

const state = {
	jokes: []
}

export default new Vuex.Store({
state, 
mutations,
actions
})