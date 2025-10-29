import { useState } from "react";
import EditForm from "./EditForm";
function Profile(props) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditProfile = () => {
        setIsEditing(true);
    }
    const handleSubmit = (name, email, bio, avatar) => {
        props.onUpdateProfile(name, email, bio, avatar);
        setIsEditing(false);
    }
    const handleCancel = () => {
        setIsEditing(false);
    }

    return (
        <>
        <div className="profile-card">
        <img src={props.avatar} alt="Profile Avatar" />
        <h2>{props.name}</h2>
        <p>Email: {props.email}</p>
        <p>Bio: {props.bio}</p>
        <button className="edit-btn" onClick={handleEditProfile}>Edit Profile</button>
        </div>

        {isEditing && (
            <EditForm
                name={props.name}
                email={props.email}
                bio={props.bio}
                avatar={props.avatar}
                onSave={handleSubmit}
                onCancel={handleCancel}
            />
        )}
          
        </>
    )
};

export default Profile;
