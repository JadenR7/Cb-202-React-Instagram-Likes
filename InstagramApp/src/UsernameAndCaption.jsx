import UsernameHeader from './UsernameHeader'

function UsernameAndCaption({ username, caption}) {
    return (
    <div>
        <h3>{username}</h3>
        <p>{caption}</p>
    </div>
    )
}

export default UsernameAndCaption