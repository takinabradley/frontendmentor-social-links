import SocialLinksProfile from './components/SocialLinksProfile'
import FrontendMentorAttributionFooter from './components/Attribution'
import avatar from "./assets/images/avatar-jessica.jpeg"
import styles from "./App.module.css"
import "./App.css"

let user = {
  username: "Jessica Randall",
  location: "London, United Kingdom",
  description: "Front-end developer and avid reader",
  avatar: avatar,
  links: {
    Github: '',
    "Frontend Mentor": '',
    LinkedIn: '',
    Twitter: '',
    Instagram: ''
  }
}

function App() {
  return (
    <div className={styles.App}>
      <main className={styles["App__main"]}>
        <SocialLinksProfile user={user}/>
      </main>
      
      <FrontendMentorAttributionFooter name='takinabradley' socialMediaLink="https://github.com/takinabradley"/>
    </div>
  )
}

export default App
