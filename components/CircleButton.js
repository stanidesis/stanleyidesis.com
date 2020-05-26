export const IconOptions = {
  Amazon: '/images/icons/amazon_diablo.svg',
  ExternalURL: '/images/icons/share_diablo.svg'
}

const CircleButton = ({ iconOption, url }) => {
  return (
    <a className="CircleButton" href={url}>
      <img src={iconOption || IconOptions.ExternalURL} />
    </a>
  )
}

export default CircleButton
