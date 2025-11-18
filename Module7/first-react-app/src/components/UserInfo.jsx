import { useUserContext } from "../context/UserContext"

function UserInfo() {

    const {currentUser} = useUserContext()

    if (currentUser.email) return <p>No user Logged in.</p>

    return (
        <div className="UserInfo componentBox">
            <h3>Current User Info</h3>
            <p>Name: {currentUser.name}</p>
            <p>Email: {currentUser.email}</p>
        </div>
    )
}

export default UserInfo