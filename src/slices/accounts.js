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

const initialState = {
	accounts : [],
	loading : false,
	message : null
}

export const getAccountsSlice = createSlice({
	name : 'getAccounts',
	initialState,
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
export default getAccountsSlice.reducer;