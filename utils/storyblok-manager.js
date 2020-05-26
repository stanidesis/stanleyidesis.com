import StoryblokClient from 'storyblok-js-client'

class StoryblokManager {
  constructor() {
    this.client = new StoryblokClient({
      oauthToken: process.env.storyblok_management_token
    })
  }

  put(slug, params) {
    params = params || {}
    return this.client.put(slug, params)
  }

  updateStory(story, forceUpdate, publish) {
    let params = { story: story }
    if (forceUpdate) {
      params['force_update'] = 1
    }
    if (publish) {
      params['publish'] = 1
    }
    return this.put(
      `spaces/${process.env.storyblok_space}/stories/${story.id}`,
      params
    )
  }
}

const storyblokManager = new StoryblokManager()

export default storyblokManager
