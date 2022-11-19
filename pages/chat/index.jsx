import { useCallback, useEffect, useState } from "react"
import { io } from "socket.io-client"
export default function MinEditor() {
  const [socket, setSocket] = useState()
  const [box, setBox] = useState()
  const [conversation, setConversations]= useState()
  useEffect(() => {
    const socketConection = io("http://localhost:3002", { transports : ['websocket']})
    setSocket(socketConection)

    console.log(socket)
    return () => {
      socketConection.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!socket) return

    socket.once('receive-changes', newData => {
      console.log(newData)
    })
  }, [socket])

  useEffect(() => {
    if (!socket) return

    socket.once('load-chat', chat => {
      console.log(chat)
    })
    const obj = {
      item: "1223",
      owner: "1111",
      renter: "rrr"
    }
    socket.emit('find-chat', obj)
  }, [socket])
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    socket.emit('send-msg', "box")

    console.log('ok')
    


  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text"
      value={box} 
      onChange={(e)=> {setBox(e.target.value)}}/>
      <button> send</button>
    </form>
  </div>
}

// chat is a struggle