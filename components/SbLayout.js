/* This is the top-level Layout component which includes
 * the StoryblokService bridge.
 *
 * Use this to wrap all /SbContents/ components and provide
 * Global site-variables within `settings`
 */

import React from 'react'
import StoryblokService from '../utils/storyblok-service'

export default ({ children, settings = {} }) => (
  <div>
    {children}
    {StoryblokService.bridge()}
  </div>
)
