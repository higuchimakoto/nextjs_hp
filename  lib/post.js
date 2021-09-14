import fetch from 'node-fetch'
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getAllPostsData = async () => {
	const res = await fetch(new URL(apiUrl))
	const posts = await res.json()
	return posts
}
