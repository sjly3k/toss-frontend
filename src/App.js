import React, {useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import the redux hook
import { useDispatch, useSelector } from 'react-redux'

// import our recipes selector
import { accountsSelector, fetchAccounts, getFilterLike } from './slices/account'

const App = () => {

	const dispatch = useDispatch();
	const { accounts, loading, message } = useSelector(accountsSelector)
	const filteredAccounts = useSelector(getFilterLike);

	useEffect(() => {
		dispatch(fetchAccounts(1))
	}, [dispatch])

	console.log(filteredAccounts)

	return (
		<React.Fragment>
		<ToastContainer />
		<BrowserRouter>
			<Switch>
				{/*<Route exact path="/" component={VoteItemList} />*/}
				{/*<Route path="/auth" component={Authentication} />*/}
			</Switch>
		</BrowserRouter>
		</React.Fragment>
	);
};

export default App;