import axios from "axios";

const client = axios.create({
	baseURL : "https://2c78be06-eb02-405b-b425-3069fb370a78.mock.pstmn.io/"
})

export const getAccountsAPI = async (userId : number) => {
	return await client.get(`/account/list?user_id=${userId}`)
}