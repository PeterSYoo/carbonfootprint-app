import { useCallback, useEffect, useState } from "react"
import { io } from "socket.io-client"
export default function MinEditor() {
  const [socket, setSocket] = useState()
  useEffect(() => {
    const socketConection = io("http://localhost:3002", { transports : ['websocket']})
    setSocket(socketConection)

    return () => {
      socketConection.disconnect()
    }
  }, [])


  u

  useEffect(()=>{
    if(!socket) return 
    const socketC = setInterval(() => {
      socket.disconnect()
    }, 2000)

    return () => {
      clearInterval( socketC )
    }
  }, [socket])

  useEffect(() => {
    if (!socket) return

    socket.once('load-chat', chat => {
      console.log(chat)
    })

    socket.emit('find-chat', ["steven", "peter"])
  }, [socket])
  
  return <div>

    "save to stash"
  </div>
}