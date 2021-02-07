import React, {useEffect} from 'react';

// import the redux hook
import { useDispatch, useSelector } from 'react-redux'

// import our recipes selector
import { accountsSelector, fetchAccounts, getFilterLike } from './slices/accounts'

const App = () => {

	const dispatch = useDispatch();
	const { accounts, loading, message } = useSelector(accountsSelector)
	const filteredAccounts = useSelector(getFilterLike);

	useEffect(() => {
		dispatch(fetchAccounts(1))
	}, [dispatch])

	console.log(filteredAccounts)

	return (
		<div>
		</div>
	);
};

export default App;