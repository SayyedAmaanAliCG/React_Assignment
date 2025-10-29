import { useState } from "react";

function EditForm({ name, email, bio, avatar, onSave, onCancel }) {
    const [editedName, setEditedName] = useState(name);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedBio, setEditedBio] = useState(bio);
    const [editedAvatar, setEditedAvatar] = useState(avatar);

    const handleSave = () => {
        onSave(editedName, editedEmail, editedBio, editedAvatar);
    };
    const handleCancel = () => {
        onCancel();
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <span className="close-btn" onClick={handleCancel}>X</span>
                <div className="edit-card">
                    <div className="edit-form">
                        <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} required />
                        <input type="email" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} required />
                        <textarea value={editedBio} onChange={(e) => setEditedBio(e.target.value)} required />
                        <input type="text" value={editedAvatar} onChange={(e) => setEditedAvatar(e.target.value)} required />
                        <button onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditForm;