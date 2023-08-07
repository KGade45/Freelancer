import React, { useEffect, useState } from 'react'
import useSocket from '../hooks/useSocket'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Contacts from "../components/Contacts";

export default function Chat() {
    const socket = useSocket()
    const navigate = useNavigate();
    const [message,setMessage] = useState("");
    const [messages,setMessages] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentChat, setCurrentChat] = useState(undefined);
    const user = localStorage.getItem('user');

    // useEffect(async()=>{
    //     if(!localStorage.getItem('user')){
    //         navigate('/login');
    //     }
    //     setCurrentUser=(await JSON.parse(localStorage.getItem('user')))
    // },[])

    // useEffect(async()=>{
    //     if(currentUser){
    //         const data = await axios.post()
    //     }
    // },[currentUser])

    // user side
    const userId = "64a03da7f2668fea7eea1e57"
    const clientId = "64a8fb8662bbdca41f66742b"
    const roomId = `${userId}-${clientId}`
    
    // client
    // const userId = "clientId"
    // const clientid = "userId"
    
    useEffect(() => {
        (async() => {
            try {
                const res= await fetch(`http://localhost:8080/messages?roomId=${roomId}`)
                const data = await res.json()
                
                // console.log(data)
            } catch(error) {
                
            }
        })()
    }, [])

    useEffect(() => {
        if (!socket) return
        socket.emit("join-room",{
            roomId
        })

        return () => {
            socket.emit("leave-room", {
                roomId
            })
        }
    }, [socket])
    
    useEffect(() => {
        if (!socket) return 

        socket.on("new-message",(event) => {
            setMessages([...messages, event.message])
        })

        return () => {
            socket.off("new-message")
        }
    }, [socket])
    
    // function to handle send message button click
    const handleSendMessage = async () => {
        console.log("btn clicked")
        const data = {
            message,
            sender:userId,
            receiver:clientId
        }
        socket.emit(`chat`,data)
    }
    
    const handleChatChange = (chat)=>{
        setCurrentChat(chat)
    }
    return (
        // <div>
        //     <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
    //     <button onClick={handleSendMessage}>Send Message</button>
    
    //     <div className="mt-4">
    //        {messages.map(message => <p>{message}</p>)}
    //     </div>
    // </div>


    
    <Container>
        <div className="container">
        Contacts :             
            <Contacts contacts={contacts} currentUser ={user} changeChat ={handleChatChange} />
        </div>
    </Container>



)
}



const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;

    .container {
        color: white;
        height: 85vh;
        width: 85vw;
        background-color: black;
        display: grid;
        grid-template-columns: 25% 75%; /* Updated to two columns */
        gap: 1rem;
        
        @media screen and (min-width: 720px) and (max-width: 1080px) {
            grid-template-columns: 35% 65%; /* Adjusted for medium screens */
        }
    }
`;


