import styles from "./UserLinks.module.css"

export default function UserLinks({userLinks}) {
  const platforms = Object.keys(userLinks)
  return (
    <div className="UserLinks">
      <ul className={styles.list}> 
        {platforms.map(platform => 
          <li key={platform} className={styles.listItem}>
            <a href={userLinks[platform]} className={styles.link}>{platform}</a>
          </li>
        )}
      </ul>
    </div>
  )
}