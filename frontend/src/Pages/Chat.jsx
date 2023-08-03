import React, { useEffect, useState } from 'react'
import useSocket from '../hooks/useSocket'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Chat() {
    const socket = useSocket()
    const navigate = useNavigate();
    const [message,setMessage] = useState("");
    const [messages,setMessages] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);


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
                
                console.log(data)
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
    
    return (
        // <div>
        //     <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
    //     <button onClick={handleSendMessage}>Send Message</button>
    
    //     <div className="mt-4">
    //        {messages.map(message => <p>{message}</p>)}
    //     </div>
    // </div>
    
    <Container>
        <div className="container"></div>
    </Container>



)
}

const Container = styled.div`
    height : 100vh;
    width : 100vw;
    display: flex;
    flex-direction : column;
    justify-content : center;
    gap : 1rem;
    align-items : center;
    .container{
        height : 85vh;
        width : 85vw;
        background-color : black;
        display: grid;
        grid-templet-columns : 25% 75%;
        @media screen and (min-width : 720px) and (max-width:1080px){
            grid-templet-columns : 35% 65%;    
        }
    }

`;

