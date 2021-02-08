import {createSelector, createSlice} from "@reduxjs/toolkit";
import {getAccountsAPI} from "../api/AccountAPI";

export const fetchAccounts = (userId) => {
	return async dispatch => {
		dispatch(getAccounts())
		try {
			const { data } = await getAccountsAPI(userId)
			dispatch(getAccountsSuccess(data))
		} catch (error) {
			dispatch(getAccountsFailure(error))
		}
	}
}

const getAccountsInitialState = {
	accounts : [],
	loading : false,
	message : null
}

export const getAccountsSlice = createSlice({
	name : 'getAccounts',
	getAccountsInitialState,
	reducers: {
		getAccounts: state => {
			state.loading = true;
		},
		getAccountsSuccess: (state, { payload }) => {
			state.loading = false;
			state.accounts = payload.accounts;
			state.message = null
		},
		getAccountsFailure : (state, { payload }) => {
			state.loading = false;
			state.message = payload
		}
	}
});

export const accountsSelector = (state) => state.accounts;
export const getFilterLike = createSelector(accountsSelector, data => {
	return data.accounts.filter(account => account.is_liked)
})
export const { getAccounts, getAccountsSuccess, getAccountsFailure} = getAccountsSlice.actions;

const addAccountInitialState = {
	account : {},
	loading : false,
	message : null
}

export const addAccountSlice = createSlice({
	name : "addAccount",
	addAccountInitialState,
	reducers : {
		addAccount : state => {
			state.loading = false;
		},
		addAccountSuccess : (state, {payload}) => {
			state.loading = true;
			state.account = payload.account;
			state.message = null;
		},
		addAccountFailure : (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		}
	}
})

export default getAccountsSlice.reducer;