import Link from "next/link";

function FollowersListComponent(props) {
    const {followers} = props;

    return (

        <div className="followerslist-container">
            <div>
                {followers.map((follower, index) => (
                    <div className="follower-item" data-testid={`follower-card-${index}`} key={`follower-card-${index}`}>
                        <img src={follower.picture.large}/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link href="/" ><a>Go Back</a></Link>
            </div>
        </div>
    );
}

export default FollowersListComponent;