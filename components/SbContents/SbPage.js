import Head from '../Head'
import SbComponent from '../SbComponents/index'
import SbEditable from 'storyblok-react'

// There are SEO schema elements as well, find them in Head.js
const Schema = {
  // The main content of the Page
  Body: 'body'
}

const SbPage = ({ page }) => (
  <SbEditable content={page}>
    <main>
      <Head content={page} />
      {page[Schema.Body].map((blok) => (
        <SbComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  </SbEditable>
)

export default SbPage
