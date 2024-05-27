export default function FrontendMentorAttributionFooter({name = '', socialMediaLink = "#"}) {
  return (
    <div className="attribution" style={{color: "white"}}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href={socialMediaLink}>{name}</a>.
    </div>
  )
}