import DefaultProfileImg from '../images/default-profile-pic.png';

const UserAside = ({profileImgUrl, username}) => (
    <aside className="col-sm-4">
        <div className="panel panel-default">
            <div className="panel pane-body">
                <img src={profileImgUrl || DefaultProfileImg} alt={username} className="img-thumbnail" />
                <p>@{username}</p>
            </div>
        </div>
    </aside>
)

export default UserAside;