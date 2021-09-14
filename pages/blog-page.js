import Layout from '../compents/Layout'
import { getAllPostsData } from '../ lib/post'
import Post from '../compents/Post'

const Blog = ({ posts }) => {
	return (
		<Layout title="Blog">
			<ul className="m-10">
				{posts &&
					posts.map((post) => <Post key={post.id}  post={post} />
					)}
			</ul>
		</Layout>
	)
}

export default Blog

export const getStaticProps = async () => {
	const posts = await getAllPostsData()
	return {
		props: { posts },
	}
}
