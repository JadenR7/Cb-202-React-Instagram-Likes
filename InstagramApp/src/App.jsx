import { useState } from 'react'
import './App.css'
import UsernameHeader from './UsernameHeader'
import MainImage from './MainImage'
import mainImg from './assets/cat.jpeg'
import UsernameAndCaption from './UsernameAndCaption'

function App() {
  const [likes, setLikes] = useState(0)

  const [liked, setLiked] = useState(false)
  const Interact = () => {
    if (!liked) {
      setLikes(likes => likes + 1)
      setLiked(true)
    }


    if (liked) {
      setLikes(likes => likes - 1)
      setLiked(false)
    }


  }
  return (
      <div className="post-container">
        <UsernameHeader username ="Jaden.Richh"/>
        <MainImage img ={mainImg} /> 
        <button onClick={Interact}>❤️</button>
        <span>Likes: {likes}</span>
        <UsernameAndCaption username = 'Jaden.Richh' caption ="POV: Me when i try to block in Volleyball" />
        
      </div>
  )

}
 

export default App
