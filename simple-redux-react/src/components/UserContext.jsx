import { useState, createContext } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "text@example.com",
            bio: "Software Developer",
            avatar: "https://avatar.iran.liara.run/public"
        },
        {
            id: 2,
            name: "Alice Smith",
            email: "text2@example.com",
            bio: "Graphic Designer",
            avatar: "https://avatar.iran.liara.run/public"
        }
    ]);

    const updateUser = (id, updatedData) => {
        setUsers(users.map(user => 
            user.id === id ? { ...user, ...updatedData } : user
        ));
    };

    return (
        <UserContext.Provider value={{ users, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;