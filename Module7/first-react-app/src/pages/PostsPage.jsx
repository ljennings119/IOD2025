import { Outlet, useParams, Link, useSearchParams } from "react-router-dom";
import { useData } from "../hooks/useData"

export default function PostsPage() {
    return (
        <div className="Posts">
            <h1>Posts</h1>
            <Outlet />
        </div>
    )
    useData()
}
//Original PostList
// export function PostList() {
//     const postsData =
//         useData('https://jsonplaceholder.typicode.com/posts?_limit=5');

//     // the ? means only call map if postsData is not null
//     const postList = postsData?.map(post => (
//         <li key={post.id}><Link to={"/posts/" + post.id}>
//             Post #{post.id}: {post.title}</Link></li>
//     ));
//     return (
//         <ul>{postList}</ul>
//     )
// }

export function PostList() { // updated from slide 60, replace old version
    const [searchParams, setSearchParams] = useSearchParams(); // import this hook
    const limit = searchParams.get('limit') ? searchParams.get('limit') : 5;
    const postsData =
        useData("https://jsonplaceholder.typicode.com/posts?_limit=" + limit);
    const handleChangeLimit = (e) => {
        setSearchParams({ limit: e.target.value })
    }
    // the ? means only call map if postsData is not null
    const postList = postsData?.map((post) => (
        <li key={post.id}>
            <Link to={"/posts/" + post.id}>
                Post #{post.id}: {post.title}
            </Link>
        </li>
    ));
    return (
        <>
            <ul>{postList}</ul>
            <Link to='/posts?limit=10'>Load 10 Posts</Link>
        </>
    );
}

export function Post() {
    const { id } = useParams(); // custom hook to access dynamic params
    const post =
        useData('https://jsonplaceholder.typicode.com/posts/' + id);
    return (
        <div className="Post">
            {post ?
                <><h3>Post #{post.id}: {post.title}</h3>
                    <p>{post.body}</p></>
                : "Loading ..."}
        </div>
    )
}
