import React from 'react'
import {useState, useEffect, createContext} from 'react';

export const UserContext = createContext();

export function UserProvider({children}) {
    const API = 'https://ascend-mauve.vercel.app'



    const username = JSON.parse(sessionStorage.getItem('whoami'))?.username;

    const [userQuests, setUserQuests] = useState({});
    const [questlib, setQuestlib] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!username) return;

        const fetchUserData = async () => {
            try {
                const [userQuestsResponse, questlibResponse, userInfoResponse] = await Promise.all([
                    fetch(`${API}/api/userquests/find?id=${username}`),
                    fetch(`${API}/api/questlib/all`),
                    fetch(`${API}/api/userinfo/find?id=${username}`)
                ]);

                const [userQuestsData, questlibData, userInfoData] = await Promise.all([
                    userQuestsResponse.json(),
                    questlibResponse.json(),
                    userInfoResponse.json()
                ]);
                setUserQuests(userQuestsData);
                setQuestlib(questlibData);
                setUserInfo(userInfoData);
                setLoading(false);
            }
            catch (error) {
                console.error('Error fetching user data:', error);
                setLoading(false);
            }
        };

        // Fetch user quests data
        fetchUserData();

    },[username])


  return (
    <UserContext.Provider value={{userQuests, questlib, userInfo, loading}}>
        {children}
    </UserContext.Provider>
  )
}
