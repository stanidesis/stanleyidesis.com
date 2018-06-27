---
title: "Browji"
subtitle: "Use Emojis on the Internet. Fast 🏁"
thumbnail_3x2: "/assets/images/collections/works/002-browji/3x2.png"
banner_16x9: "/assets/images/collections/works/002-browji/16x9.jpg"
client: "000"
roles: ["001","002","000","003","006","007","005","008","009"]
topics: ["000","002","004"]
types: ["002","003","004","010"]
url_play: "https://youtu.be/ysybYMkqsek"
url_visit: "http://www.browji.com/"
url_source: "https://github.com/stanidesis/browji-chrome-extension"
url_chrome_install: "https://chrome.google.com/webstore/detail/browji-find-copy-and-past/mifjkgpdjmpdkcdehnofdglmigaldenh?hl=en"
url_product_hunt: "https://www.producthunt.com/posts/browji-chrome-extension"
---
Browji was my first solo web development effort and I'm happy with the results. I use this extension on a daily basis, emojis are really important to me... Please don't judge me. 🤓👍

## Inspiration

I grew increasingly frustrated with the inconsistent availability of emojis across the web. I thought Slack's emoji interface was okay, Twitter's great, Hangouts poor, Gmail's absent, and Dropbox's Paper the best: but they weren't available everywhere. However, all these tools ran in Chrome; when that realization hit me over the head, I immediately got to work.

## Process

Coming from a mobile development background, I wanted to keep as much of Browji on the client-side as possible. I didn't want to build a back-end for such a simple tool--that felt like overkill. So I turned to what I knew: SQL databases. But how would I load a SQL database into the browser?

Enter [sql.js](https://github.com/kripken/sql.js). I planned to build a local database on my machine and package it with my extension--a little messy but (hopefully) much faster than any network request.

The next few weeks were spent building a database from scraped emoji data and keywords that I chose to manually supply. For example, when providing the keywords for 💩, some heathens fail to include 'poop.' I'm sure you'll agree that this daring omission is the great struggle of our time. So I made sure poop found its way into Browji. I'm an adult.

Once satisfied with the database, development kicked into higher gear as I explored jQuery, Chrome, JavaScript, and Material Design to bring my vision to life.

## Marketing

At that point I may have been building a product that no body needed, so the marketing came in a little too late on this one, yet I still wanted to give Browji a shot at success. My strategy was to invite supporters of emoji products on Product Hunt to test my extension in advance.

This campaign was fairly successful and I received valuable feedback that contributed to Browji's final design (as well as people to email the day of Browji's Product Hunt debut).

After incorporating feedback, I began to work on the website and the video. Browji was that rare project that required the majority of my skill set: design, development, marketing, video production, and voiceover. Yes, the voice in Browji's commercial is my own.

## Result

While not the booming success I hoped it would be, Browji amassed over 120 upvotes on Product Hunt and remains installed in over 200 browsers. The extension was also featured by Product Hunt in an email focused on emoji-based products.
