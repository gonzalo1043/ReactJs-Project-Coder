import { createContext, useContext, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationContext = createContext()

const Notification = ({data}) => {
    
        toast(data.text, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: data.type === "dark" ? 'dark' : 'light',
        });
        
        return (
        <>
        <ToastContainer />
        
        </>
        )
    }

export const NotificationProvider = ({children}) => {
    const [notificationData, setNotificationData] = useState({
        type: 'dark',
        text: ''
    })

    const setNotification = (type, text) => {
        setNotificationData({type, text})
    }

    return (
        <NotificationContext.Provider value = {{setNotification}}>
            {notificationData.text && <Notification data={notificationData}/>}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}

