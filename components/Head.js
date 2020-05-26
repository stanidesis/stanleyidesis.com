import React from 'react'
import NextHead from 'next/head'

const Schema = {
  Main: {
    Title: 'SEO_Title',
    Description: 'SEO_Description'
  }
}

const Head = ({ content }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{content[Schema.Main.Title] || ''}</title>
    <meta name="description" content={content[Schema.Main.Description] || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* Async CSS font load */}
    <link
      rel="stylesheet"
      href="/fonts/publica-play.css"
      media="print"
      onLoad={`this.media='all';this.onload=null;`}></link>
    <link
      rel="stylesheet"
      href="/fonts/roboto-slab.css"
      media="print"
      onLoad={`this.media='all';this.onload=null;`}></link>
  </NextHead>
)

export default Head
