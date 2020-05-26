import SbArticle from './SbArticle'
import SbBook from './SbBook'

/* All available StoryBlok Components as defined by this app */
const SbComponents = {
  Article: SbArticle,
  Book: SbBook
}

const SbComponent = ({ blok }) => {
  if (typeof SbComponents[blok.component] !== 'undefined') {
    const SbComponent = SbComponents[blok.component]
    return <SbComponent blok={blok} />
  }
  return <SbPlaceholder componentName={blok.component} />
}

export default SbComponent
