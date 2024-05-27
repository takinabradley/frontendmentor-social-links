import styles from "./UserInfoHeader.module.css"

export default function UserInfoHeader({user}) {
  return (
    <div className={styles.UserInfoHeader}>
      <div className="UserInfoHeader__avatar-container">
        <img src={user.avatar} alt="" className={styles["UserInfoHeader__avatar"]} />
      </div>
      <h1 className={styles["UserInfoHeader__username"]}>{user.username}</h1>
      <p className={styles["UserInfoHeader__location"]}>{user.location}</p>
      <p className={styles["UserInfoHeader__description"]}>{user.description}</p>
    </div>
  )
}