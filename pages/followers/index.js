import Followers from '../../components/Followers'

export default function FollowersPage({followers}) {
    // console.log(followers)
    return (
        <div className="container">
            <Followers followers={followers} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    return {
        props: {
            followers: data.results
        }
    }
}