import {useState , createContext }   from 'react'


const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user, setUser] = useState({});
    
    return (
        <UserContext.Provider value={{user , setUser}} >
            {children}
        </UserContext.Provider>          
    )
}

export default UserContext;
export {UserProvider};