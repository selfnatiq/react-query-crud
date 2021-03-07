const baseUrl = process.env.REACT_APP_BASEURL

export const setAuthToken = async () => {
	const response = await fetch(`${baseUrl}/auth/local`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			identifier: 'natiqkhan00@gmail.com',
			password: 'wg8aty4sTXaXBe2',
		}),
	})

	const { jwt } = await response.json()
	localStorage.setItem('jwt', jwt)
}

export const getPosts = async () => {
	const response = await fetch(`${baseUrl}/posts`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
	})
	return response.json()
}

export const createPost = async (data) => {
	const response = await fetch(`${baseUrl}/posts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
		body: JSON.stringify(data),
	})

	return response.json()
}

export const removePost = async (id) => {
	const response = await fetch(`${baseUrl}/posts/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('jwt')}`,
		},
	})

	return response.json()
}
