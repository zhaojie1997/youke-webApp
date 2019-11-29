import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export let store = new Vuex.Store({
	state: {
		wgm: [],
		discount: ""
	},
	mutations: {
		getdiscount(state, payload) {
			state.discount = payload
		},
		initwgm(state, payload) {
			let flag = true
			for (var i = 0; i < state.wgm.length; i++) {
				if (payload.pid == state.wgm[i].pid) {
					flag = false;
				}
			}
			if (flag) {
				state.wgm.push(payload);
			}
		},

		updatewgm(state, payload) {
			for (var i = 0; i < state.wgm.length; i++) {
				if (payload.pid == state.wgm[i].pid) {
					state.wgm[i].checkflag = payload.checkflag;
				}
			}
		},
		updateall(state, payload) {
			for (var i = 0; i < state.wgm.length; i++) {
				state.wgm[i].checkflag = payload;
			}
		}
	},
	actions: {
		act(context, payload) {
			context.commit("initwgm", payload)
		},
		up(context, payload) {
			context.commit("updatewgm", payload)
		},
		initdiscount(context, payload) {
			context.commit("getdiscount", payload)
		},
		upall(context,payload){
			context.commit("updateall", payload)
		}
	},
	getters: {
		count(state) {
			let a = 0;
			for (var i = 0; i < state.wgm.length; i++) {
				if (state.wgm[i].checkflag == true) {
					a += Number(state.wgm[i].price);
				}
			}
			return [a, ((1 - state.discount / 100) * a).toFixed(2)];
		},
		a(state) {
			for (var i = 0; i < state.wgm.length; i++) {
				if (state.wgm[i].checkflag == false) {
					return false;
				}
			}
			return true
		},
		b(state) {
			let arr = []
			for (var i = 0; i < state.wgm.length; i++) {
				if (state.wgm[i].checkflag == true) {
					arr.push(state.wgm[i].pid)
				}
			}
			return arr;
		}
	}
})
