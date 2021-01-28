const getPlayerName = () => {
	const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)

	const name = urlParams.get('name')
	return name
}

export default getPlayerName
