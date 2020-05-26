import SbEditable from 'storyblok-react'
import CircleButton, { IconOptions } from '../CircleButton'

const Schema = {
  Title: 'Title',
  Description: 'Description',
  CoverImage: 'Cover_Image',
  AmazonURL: 'Amazon_URL'
}

const SbBook = ({ blok }) => {
  if (!process.env.production) console.log(blok)
  const book = blok.content
  return (
    <SbEditable content={blok}>
      <aside className="ContentItem animate__animated animate__fadeInUp animate__delay-4s">
        <img className="ContentItem__Cover" src={book[Schema.CoverImage]} />
        <div className="ContentItem__Text">
          <h5 className="ContentItem__Text__Title">{book[Schema.Title]}</h5>
          <p className="ContentItem__Text__Description">
            {book[Schema.Description]}
          </p>
        </div>
        <div className="isHiddenMobile">
          <CircleButton
            iconOption={IconOptions.Amazon}
            url={book[Schema.AmazonURL].cached_url}
          />
        </div>
        <div
          className="ContentItem__TouchToVisit isHiddenClick"
          onClick={(event) => {
            event.preventDefault()
            window.location.href = book[Schema.AmazonURL].cached_url
          }}></div>
      </aside>
    </SbEditable>
  )
}

export default SbBook
