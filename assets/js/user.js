import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {createRoot} from "react-dom/client";

function UserProfile({user_id}) {
    const [userData, setUserData] = useState(null);
    const [showInfo, setShowInfo] = useState(false)
    const [showStat, setShowStat] = useState(false)
    const [userId, setUserId] = useState(undefined);

    useEffect(() => {
        const token = localStorage.getItem('jwt');

        // Fetch data for the current user
        axios.get(`/api/user_id`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setUserId(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

    }, []);


    useEffect(()=>{
        if(userId){
            const token = localStorage.getItem('jwt');
            axios.get(`/api/users/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    setUserData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    },[userId])


    function showProfileInfo() {
        if(showInfo){
            setShowInfo(false)
        }else{
            setShowInfo(true)
        }
    }

    function showStatistics() {
        if(showStat){
            setShowStat(false)
        }else{
            setShowStat(true)
        }
    }

    return (

        <div className="one-panel">
            {userData && (
                <div className="user_settings">
                    <div className="top">
                        <div className="profile-photo">
                            <img src={userData.detail.photo} alt="User Photo" />
                        </div>
                        <div className="name">
                            {userData.detail.name} {userData.detail.surname}
                        </div>
                        <div className="statistics">
                            <p>
                                <i className="fa-solid fa-heart"></i>
                                {userData.userStatistics.like_amount}
                            </p>
                            <p>
                                {userData.userStatistics.dreams_amount}
                                {userData.userStatistics.dreams_amount > 1 ? ' dreams' : ' dream'}
                            </p>
                        </div>
                    </div>
                    <div className="other">
                        {/* Profile info */}
                        <div onClick={() => showProfileInfo()}>
                            <p><i className="fa-solid fa-user" ></i> Profile info</p>
                            <div className={`profile-info ${showInfo ? '' : 'hidden'}`} >
                                <p>Name: {userData.detail.name}</p>
                                <p>Surname: {userData.detail.surname}</p>
                                <p>Email: {userData.email}</p>
                            </div>
                        </div>
                        {/* Change photo */}
                        <div>
                            <p><i className="fa-solid fa-camera"></i> Change photo</p>
                        </div>
                        {/* Statistics */}
                        <div onClick={()=> showStatistics()}>
                            <p><i className="fa-solid fa-square-poll-vertical"></i> Statistics</p>
                            <div className={`statistics-info ${showStat ? '' : 'hidden'}`}>
                                <p>You added {userData.userStatistics.dreams_amount} {userData.userStatistics.dreams_amount>1 ? 'dreams' : 'dream'}</p>
                                <p>You liked {userData.userStatistics.like_amount} {userData.userStatistics.like_amount>1 ? 'dreams' : 'dream'}</p>
                                <p>You commented {userData.userStatistics.comments_amount} {userData.userStatistics.comments_amount>1 ? 'dreams' : 'dream'}</p>
                            </div>
                        </div>
                        {/* Logout */}
                        <div>
                            <form action="/logout" method="post">
                                <button type="submit" id="logoutButton">
                                    <p><i className="fa-solid fa-right-from-bracket" style={{ color: '#a6a2da' }}></i> Log out</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

createRoot(document.getElementById('root')).render(<UserProfile/>);
