import FollowersList from '../FollowersList'
import Header from '../Header'

export default function Followers({followers}) {
    return (
        <div className="followers">
            <Header title="Followers" />
            <FollowersList followers={followers} />
        </div>
    )
}