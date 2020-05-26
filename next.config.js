const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  env = {
    production: true,
    storyblok_space: 84956,
    storyblok_api_key: '7KO8aHCrbPmIl2wgW2QbrAtt',
    storyblok_management_token:
      'v17Yr79TscmVTgeNj9jUcQtt-62139-NdmzRpjsfgUs5mypishk'
  }
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    env.production = false
    env.storyblok_api_key = '0CKF2SQHfZWj1K43wXMeBwtt'
  }

  return {
    env
  }
}
