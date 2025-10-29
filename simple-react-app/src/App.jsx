import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'

function App() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john.doe@example.com')
  const [bio, setBio] = useState('Software Developer')
  const [avatar, setAvatar] = useState('https://avatar.iran.liara.run/public')

  const handleUpdateProfile = (name, email, bio, avatar) => {
    setName(name);
    setEmail(email);
    setBio(bio);
    setAvatar(avatar);
  }

  return (
    <div className="app-container">
      <Profile
        name={name}
        email={email}
        bio={bio}
        avatar={avatar}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  )
}

export default App;
