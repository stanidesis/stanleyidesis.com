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
      onLoad={`this.media='all';this.onload=null;`}
    />
    <link
      rel="stylesheet"
      href="/fonts/roboto-slab.css"
      media="print"
      onLoad={`this.media='all';this.onload=null;`}
    />
    {/* Favicon */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </NextHead>
)

export default Head
