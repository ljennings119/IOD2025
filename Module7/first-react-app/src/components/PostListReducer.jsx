import { useEffect, useReducer } from "react" // continued on next slide
import axios from 'axios'


export default function PostListReducer() {

    function reducer(postsResult, action) {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return { loading: false, posts: action.payload, error: '' }
            case 'FETCH_ERROR':
                return { loading: false, posts: [], error: action.payload }
            default:
                return { ...postsResult, loading: false }
        }
    }

    const [postsResult, dispatch] = useReducer(reducer, { // initial state for postsResult state variable
        loading: true, // true when loading and no data in posts
        posts: [], // empty until data is fetched
        error: '' // empty unless there was an error
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => {
                dispatch({ type: "FETCH_SUCCESS", payload: response.data })
            })
            .catch(error => {
                dispatch({ type: "FETCH_ERROR", payload: error.message })
            })
    }, []);

    return (
        <div className="PostList componentBox">
            {postsResult.loading ? <div>Loading posts...</div> :
                postsResult.posts.map(post => ( // list of posts is just one of the things stored in the postsResult state object
                    <div className="post" key={post.id}><h3>Post #{post.id}: {post.title}</h3><p>{post.body}</p></div>
                ))}
            <div className="error">{postsResult.error}</div>
        </div>
    )
}


