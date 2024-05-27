import styles from "./SocialLinksProfile.module.css"
import UserInfoHeader from "./UserInfoHeader"
import UserLinks from "./UserLinks"


export default function SocialLinksProfile({user}) {
  return (
    <div className={styles.SocialLinksProfile}>
      <UserInfoHeader user={user} />
      <UserLinks userLinks={user.links}/>
    </div>
  )
}