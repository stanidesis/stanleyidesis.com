export const IconOptions = {
  Amazon: '/images/icons/amazon_diablo.svg',
  Email: '/images/icons/telegram_diablo.svg',
  ExternalURL: '/images/icons/share_diablo.svg',
  LinkedIn: '/images/icons/linkedin_diablo.svg',
  Twitter: '/images/icons/twitter_diablo.svg'
}

const CircleButton = ({ iconOption, url }) => {
  return (
    <a className="CircleButton" href={url}>
      <img src={iconOption || IconOptions.ExternalURL} />
    </a>
  )
}

export default CircleButton
