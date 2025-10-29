import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import { useContext } from 'react'
import { UserContext } from './components/UserContext';

function App() {
  // const [name, setName] = useState('John Doe')
  // const [email, setEmail] = useState('john.doe@example.com')
  // const [bio, setBio] = useState('Software Developer')
  // const [avatar, setAvatar] = useState('https://placehold.net/default.png')

  const { users, updateUser } = useContext(UserContext);
  const handleUpdateProfile = (id,name, email, bio, avatar) => {
    updateUser(id, { name, email, bio, avatar });
  }

  return (
    <div className="app-container">
      {users.map(user => (
        <Profile
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          bio={user.bio}
          avatar={user.avatar}
          onUpdateProfile={handleUpdateProfile}
        />
      ))}
    </div>
  )
}

export default App;
