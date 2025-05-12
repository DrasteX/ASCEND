import React from 'react'
import {useState, useEffect, createContext} from 'react';

export const UserContext = createContext();





export function UserProvider({children}) {
    const API = 'https://ascend-mauve.vercel.app'



    const username = JSON.parse(sessionStorage.getItem('whoami'))?.username;

    const [userQuests, setUserQuests] = useState({});
    const [questlib, setQuestlib] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [userlvlinv, setUserlvlinv] = useState({});
    const [itemlib, setitemlib] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!username) return;

        const fetchUserData = async () => {
            try {
                const [userQuestsResponse, questlibResponse, userInfoResponse, lvlinvResponse, itemlibResponse] = await Promise.all([
                    fetch(`${API}/api/userquests/find?id=${username}`),
                    fetch(`${API}/api/questlib/all`),
                    fetch(`${API}/api/userinfo/find?id=${username}`),
                    fetch(`${API}/api/lvlinv/find?id=${username}`),
                    fetch(`${API}/api/itemlib/listall`)
                ]);

                const [userQuestsData, questlibData, userInfoData, lvlinvData, itemlibData] = await Promise.all([
                    userQuestsResponse.json(),
                    questlibResponse.json(),
                    userInfoResponse.json(),
                    lvlinvResponse.json(),
                    itemlibResponse.json()
                ]);
                setUserQuests(userQuestsData);
                setQuestlib(questlibData);
                setUserInfo(userInfoData);
                setUserlvlinv(lvlinvData);
                setitemlib(itemlibData);
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

    useEffect(() => {
        if (!userlvlinv?.xp || !username) return;

        const newLevel = Math.floor((1 + Math.sqrt(1 + (8 * userlvlinv?.xp) / 1500)) / 2);

        // Only update if level needs to change
        if (newLevel !== userlvlinv.level) {
            const updateLevel = async () => {
                try {
                    const response = await fetch(`${API}/api/lvlinv/update?id=${username}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ level: newLevel })
                    });

                    if (!response.ok) {
                        throw new Error('Failed to update level');
                    }

                    const updatedData = await response.json();
                    setUserlvlinv(updatedData); // Optional: refresh context with updated data
                } catch (err) {
                    console.error('Level update failed:', err);
                }
            };

            updateLevel();
        }
    }, [userlvlinv, username]);




  return (
    <UserContext.Provider value={{userQuests, questlib, userInfo, userlvlinv, itemlib, loading}}>
        {children}
    </UserContext.Provider>
  )
}
