require('datejs')
import SbEditable from 'storyblok-react'
import CircleButton, { IconOptions } from '../CircleButton'

const Schema = {
  Title: 'Title',
  Description: 'Description',
  DatePublished: 'Date_Published',
  URL: 'URL',
  Thumbnail: 'Thumbnail'
}

const SbArticle = ({ blok }) => {
  if (!process.env.production) console.log(blok)
  const article = blok.content
  return (
    <SbEditable content={blok}>
      <aside className="ContentItem animate__animated animate__fadeInUp animate__delay-5s">
        {article[Schema.Thumbnail].length > 0 ? (
          <img className="ContentItem__Cover" src={article[Schema.Thumbnail]} />
        ) : (
          ''
        )}
        <div className="ContentItem__Text">
          <h5 className="ContentItem__Text__Title">{article[Schema.Title]}</h5>
          <p className="ContentItem__Text__Description">
            {article[Schema.Description]}
          </p>
          <p className="ContentItem__Text__Date">
            {Date.parse(article[Schema.DatePublished]).toString(
              'MMMM dS, yyyy'
            )}
          </p>
        </div>
        <div className="isHiddenMobile">
          <CircleButton
            iconOption={IconOptions.ExternalURL}
            url={article[Schema.URL].cached_url}
          />
        </div>
        <div
          className="ContentItem__TouchToVisit isHiddenClick"
          onClick={(event) => {
            event.preventDefault()
            window.location.href = article[Schema.URL].cached_url
          }}></div>
      </aside>
    </SbEditable>
  )
}

export default SbArticle
