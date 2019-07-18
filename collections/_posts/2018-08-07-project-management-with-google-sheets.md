---
# Jekyll
layout: post
categories: [productivity]

# SEO
date_modified: "2019-07-01"

title: "Easy Project Management with Google Sheets (Template Included)"

description: "ProSheets is a free DIY project management template that combines Google Sheets and Google Calendar into a project management solution and todo list that you can use on your phone, desktop, tablet, or any device with Calendar access."

headline: "Manage Your Personal Projects in Google Sheets with this Template"

alt_headline: "Free Template: Project Management with Google Sheets, Calendar, and Contacts"

feature_image_url: "/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/cover-art.png"

social_image_url: "/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-social-image.png"

author: "Stanley Idesis"

genre: "Project Management"

permalink: /project-management-with-google-sheets-free-template

keywords: "google calendar daily tasks, google calendar tasks list, google tasks google calendar, tasks for google calendar, using tasks in google calendar, diy task, diy tasks, diy things to do, diy to do list, diy to do list template, diy todo list, project management google sheets, project management google sheets template, project management in google sheets, project management using google sheets, project management with google sheets, google tasks on calendar, google sheets task list, google sheets task list template, google sheets task management template, google sheets task manager, google sheets tasks, google sheets todo list, google sheets todo list template, time tracking, track time, prorate time tracking, freelancer time tracking, freelance project management"

# TOC
toc: true
---

> **Updated 07/01/2019**: I have released a new version of ProSheets that now features [Time Tracking](#track-your-time) and no longer requires access to your Google Contacts. [Click here to learn about Version 1.1](#version-11)

It all began with money problems. I went from juggling a handful of consistently well-paying tasks to suddenly working on several potentially worthless projects overnight, projects I needed to track immediately. But if you’re anything like me, your problem with project management tools and to-do list apps is that you can’t stick to any of them. Sooner or later, you grow weary of upkeep and you forget about ticking off boxes or dragging tiles along your little Kanban board.

{%
 include prosheets-cta-download.html
 tagline="Skip The Spiel, I Need It Now"
 button="Install ProSheets"
 url="https://docs.google.com/spreadsheets/d/171hB7AStZWJml6ZfCXHaABqxRZukq5izwsMJdEWTm-Q/copy"
%}

## I’ve Tried Everything

One of the first Android applications I built was TaskPop, an overly-complicated todo list application synchronized with Google Tasks. Since then, I’ve tried every method of task management under the get-things-done sun. Google Tasks, Google Keep, Any.Do, Wunderlist, Google Calendar, Google Tasks (again), Google Reminders, Apple Reminders, JIRA, Trello, Asana, a Kanban board made of actual sticky notes, and most recently, pen and paper; typing this list gave me post-todo-list-stress-disorder.

But I have never tried building my own project management tool, that is, not until now. I turned to spreadsheets.

My spreadsheet mastery has grown ever since I committed to managing my finances in a Google Sheet in October of 2015. For 3 years, I’ve logged every financial transaction to one spreadsheet; I have not skipped a single one. Beyond Photoshop, I can’t think of a single piece of software I’ve committed to more completely than my own financial spreadsheet.

So if that method worked for my finances, why not for my productivity?

## Introducing ProSheets

Approximately two months ago, I created a project spreadsheet. I did not choose Google Sheets because it felt like the right tool, but because I had absolutely no time to waste and by that point, spreadsheets were second nature to me. But when Google released a Gmail redesign with a side-pane users could dedicate to Google Calendar, I so desperately wanted to see my tasks show up there--but how?

The Google Calendar API. By connecting my spreadsheet to Google Calendar, ProSheets could create events that represented my tasks, tasks that I could view anywhere as long as I had access to my Calendar. And with that connection established, I could see, complete, and create tasks from my GCal, and that meant instant portability to my smartphone and tablet. Perfect.

Without further ado, meet ProSheets.

{%
  include post-video.html
  url="https://www.youtube.com/embed/v84x2bxw0HU"
%}
<br/>
{%
 include prosheets-cta-download.html
 tagline="“Sold.”"
 button="Install ProSheets"
 url="https://docs.google.com/spreadsheets/d/171hB7AStZWJml6ZfCXHaABqxRZukq5izwsMJdEWTm-Q/copy"
%}

## ProSheets v1.1: A Template for Project Management in Google Sheets

This free Google Sheets project manager relies on three project management staples: projects, milestones, and tasks. I treat projects as large tasks with tangible outcomes. Beneath them, milestones exist to divide large projects into key accomplishments. Finally, each task belongs to a milestone.

### Features

**Sheet-to-Calendar Synchronization**

![How a ProSheets task looks in Google Calendar](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-task-in-google-calendar.png){:rel="nofollow noopener"}

When you create a task in ProSheets, ProSheets generates a corresponding Event in your selected Google Calendar. Tasks equate to All-Day Events by default (this is currently the only option). And when you update a task’s title, description, start date, or estimate, ProSheets reflects these changes in the associated Event.

Currently, only tasks appear in your Google Calendar, projects and milestones are not visible.

**Calendar-to-Sheet Synchronization**

Similarly, you can create, edit, delete, or complete a task on Google Calendar and ProSheets will reflect these changes in your spreadsheet. This feature works with any front-end calendar client that has two-way sync with your Google Calendar (Native iOS Calendar, Google Calendar on Android, Outlook, Fantastical, Windows Calendar, iCal, aCalendar, Any.do, etc.)

**Contact Synchronization**

ProSheets creates custom contacts for every milestone in your spreadsheet. Use these contacts to assign new tasks from your Calendar to a specific milestone and project. Voila, no custom frontend app required, only access to Google Calendar and Google Contacts.

> **Updated 07/01/2019:** As of [ProSheets v1.1](#version-11), this feature is no longer available. If you really want Contact synchronization, continue to use [ProSheets v1.0](https://docs.google.com/spreadsheets/d/17SR7QjBOcWB691iOyTZ2CCdFJppaCIlpr91hilLpJg4/copy){:rel="nofollow noopener"}.

**Task Rollover**

Rather than getting lost in your backlog, ongoing tasks rollover to the next day as long as they remain incomplete. For example, come Tuesday morning, an incomplete task due Monday with a single-day estimate will have its due date adjusted to Tuesday.

**Emoji Identification**

![Complete a ProSheets task from Google Calendar (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-complete-task-on-google-calendar.gif)

ProSheets identifies open tasks by preceding their title with the following symbol: ‘⭕.’ Conversely, completed tasks are preceded by a ‘✅.’ You can customize these characters by opening up ProSheet’s scripts and editing the `Constants.gs` file.

When [tracking time](#track-your-time), ProSheets changes active Task Events to yellow and prefixes their titles with the racing flag emoji: ‘🏁.’

**Time Tracking [New in [Version 1.1](#version-11)]**

<!-- GIF? -->

Say goodbye to timers! ProSheets can automatically record the time you spend on tasks in hours and minutes.

With freelancers and consultants in mind, I’ve included a prorate setting to simplify the client billing process. This setting defaults to None (no prorate), but when set to one of 5, 10, 15, 20, or 30 minutes, your time spent will round up to the nearest multiple of your selection.

For example, if you set your prorate to 15 minutes and ProSheets tracks a time difference of 8 between when you started work and when you stopped, ProSheets will add 15 minutes to your total task time. Neat, huh? [Set your preferred prorate](#set-your-prorate) under the Time Tracking menu.

{%
 include prosheets-cta-download.html
 tagline="Fully-Tested By... Me"
 button="Install ProSheets"
 url="https://docs.google.com/spreadsheets/d/171hB7AStZWJml6ZfCXHaABqxRZukq5izwsMJdEWTm-Q/copy"
%}

## How-To Guide

Watch [this video](https://www.youtube.com/watch?v=v84x2bxw0HU){:rel="nofollow noopener"} (embedded above) or refer to the guide below.

### Install

[Navigate to ProSheets](https://docs.google.com/spreadsheets/d/171hB7AStZWJml6ZfCXHaABqxRZukq5izwsMJdEWTm-Q/copy){:rel="nofollow noopener"} and make a copy of the Google Sheet to your own Google Drive. In your copy, click on the ProSheets Menu item and then click Setup to begin the setup process. Complete each step in the process, otherwise ProSheets may fail to function as designed.

### Add Projects

![Create a Project in ProSheets (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-create-a-project.gif)

To create a new project, add a new row to the ‘Projects’ sheet and fill in the required details.

### Complete Projects

In the final column of a project row, change the project’s status to ‘Mark as Complete.’ This will move the project to the ‘Completed Projects’ sheet. This behavior reduces spreadsheet clutter as well as look-up times.

### Add Milestones

![Create a Milestone in ProSheets (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-create-a-milestone.gif)

Much like projects, you can add a milestone by creating a new row in the ‘Milestones’ sheet. Milestones require a Project and a title.

### Add Tasks From Your Spreadsheet

![Create a Task in ProSheets (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-create-a-task-from-sheets.gif)

Adding a task is as simple a process as the previous additions. Create a new row in the ‘Tasks’ sheet and fill in the following requisite elements: Project+Milestone, title, start date, and estimate. If you want to create a task without a project or milestone associated, choose the ‘N/A’ option.

### Add Tasks From Your Calendar

![Create a Task from Google Calendar (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-create-a-task-in-google-calendar.gif)

Begin by creating a new Event on the Calendar associated with ProSheets (I recommend a separate Calendar just for this purpose). The title of your task belongs in the Event summary, as it normally appears when created by ProSheets. You do not need to include the emoji status symbols in the summary, ProSheets will add them for you.

<div id="deprecated-google-contacts-feature"></div>
To assign the task to a Project+Milestone, invite a single ProSheets-generated contact from your address book to the Event.

The contacts look like this: `Build-Treehouse+Buy-Lumber@gmail.com` where the name of the project is attached to the title of the milestone. This only works when a single contact is invited to your Event. If you invite no contact, ProSheets will assign ‘N/A’ to the task’s Project+Milestone column.

> **Update 07/01/2019:** The feature described above is not available in the latest version of ProSheets ([v1.1](#version-11)). If you can’t let this feature go, please continue to use [Version 1.0](https://docs.google.com/spreadsheets/d/17SR7QjBOcWB691iOyTZ2CCdFJppaCIlpr91hilLpJg4/copy){:rel="nofollow noopener"}.
>
> If you’re on the fence, [Version 1.1](#version-11) provides an elegant workaround for this.

Finally, assign a start and end date. ProSheets uses these dates to set the task’s start date and estimate.

### Complete Tasks From Your Spreadsheet

![Complete a Task from Sheets (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-complete-task-in-sheets.gif)

To complete a task from your spreadsheet, assign a date to the ‘Completed On’ column. This will update the corresponding Calendar Event and move the task to the ‘Completed Tasks’ sheet.

### Complete Tasks From Your Calendar

To do this nifty trick, edit the summary of your task Event in any Calendar-editing frontend application. Append the following, without quotes, to any part of the title: ‘(close)’. Upon synchronizing, ProSheets will mark the task as complete and update the Calendar Event.

### Track Your Time

{%
  include post-video.html
  url="https://www.youtube.com/embed/y9H9eDLxgBA"
%}
<br/>

> This feature was introduced in [Version 1.1](#version-11) of ProSheets.

Append ‘(start)’ to your Task event’s summary and ProSheets will mark a start time for your task. When you’re ready to stop tracking time for your work, add ‘(stop)’ and ProSheets will increase the total time spent on that task.

### Set Your Prorate

> This feature was introduced along with Time Tracking in [Version 1.1](#version-11) of ProSheets.

When I first started to track my time for clients, I stupidly billed them by the minute. As it turns out, no one does this -- no one but the stupids. I spoke with my clients and they agreed to switch to a 15-minute prorate (🙏 thank you).

But my rate is not necessarily your rate, so ProSheets can calculate prorates in 5, 10, 15, 20, and 30-minute intervals. Set your rate from the ProSheets Menu:

![Set Your Prorate from the ProSheets Menu](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-set-prorate.png)

<br/>

{%
 include prosheets-cta-download.html
 tagline="These Features, You Want Them"
 button="Install ProSheets"
 url="https://docs.google.com/spreadsheets/d/171hB7AStZWJml6ZfCXHaABqxRZukq5izwsMJdEWTm-Q/copy"
%}

## Version 1.1

I released a brand new version of ProSheets on July 1st, 2019. While most of the modifications are good news, there’s a few key things I removed that may keep you from upgrading.

But first, let’s begin with what’s new. As you may have read above, ProSheets now offers [Time Tracking](#track-your-time). The time tracking feature removes the hastle of starting and stopping an independent timer as you work on your tasks.

Beyond that, I’ve introduced a host of minor improvements:

- Bug fix for same-day task creation (also in Version 1.0)
- Two-way Google Calendar sync now allows you to update the project/milestone, title, and the task’s description entirely from within Google Calendar
- Prettier task event descriptions now include your full list of project+milestones to choose from and instructions on how to work with Task Events
- Improved setup flow now presents all your calendar options including their IDs
- Better code practices under the hood

I giveth, and I must taketh. Version 1.1 no longer accesses your Google Contacts and cannot assign Project+Milestones through Google Calendar invites, as [described above](#deprecated-google-contacts-feature). But with Version 1.1’s two-way sync, you can set the Project+Milestone after task creation by editing the task’s event description.

### Upgrading to Version 1.1

Watch this video to see the complete process:

{%
  include post-video.html
  url="https://www.youtube.com/embed/mbf6mjt0h_Q"
%}
<br/>
If you currently use Version 1.0 but would like access to the new hotness, here are the steps you should take.

> #### Make a Backup
>
> Open your ProSheets document and click **File** > **Make a Copy...**, and include "Backup" in the title.
>
> This copy of ProSheets will not work automatically, so you don’t have to worry about maintaining two separate sheets.
>
> But if something goes wrong during the upgrade, delete your original ProSheets (permanently) and connect your backup copy to your Google calendar to continue using Version 1.0 as normal.

#### 1. Open The Code Editor

In your original copy of ProSheets, click **Tools** > **Script Editor**.

#### 2. Open Version 1.1 Source Code

Find all the code you need to run Version 1.1 on the [ProSheets Github repository](https://github.com/stanidesis/prosheets){:rel="nofollow noopener"}.

#### 3. Copy & Paste File-by-File

For each file you find in the script editor, you must replace its contents with those found in the code repository. For example, open `Main.gs` in your script editor window, select all, then delete.

Navigate to [Main.gs](https://raw.githubusercontent.com/stanidesis/prosheets/master/Main.gs){:rel="nofollow noopener"} in the code repository, select all, copy the text, then paste it into the script editor window where you previously deleted the contents of `Main.gs`. Click save or press <kbd>Ctrl + S</kbd>.

Repeat this process for each file in the script editor, do not stop until you have replaced the contents of each file.

#### 4. Refresh ProSheets

In the window where ProSheets is open, click the browser’s refresh button (do not use a keyboard shortcut). Alternatively, close ProSheets and reopen it.

When ProSheets reopens or refreshes, it will automatically detect that your sheet requires an upgrade: press Ok! The upgrade process should take no more than a second or two. Wait for it to complete, then refresh ProSheets again. Enjoy version 1.1.

#### Murphy’s Law

If you’ve messed around with the colors, formatting, or placement of columns in ProSheets, the upgrade might get ugly. If it fails or your sheet no longer behaves as expected, delete the sheet permanently (empty your Google Drive trash after deletion) and open your backup ProSheets.

In your backup, run the setup and make sure to connect to the same Google calendar you used previously. Your backup ProSheets should continue working just as your original.

[Contact me](mailto:prosheets@stanleyidesis.com) if you get into a jam.

{%
 include prosheets-cta-download.html
 tagline="ProSheets is Free <span style=\"text-decoration: underline;\">Forever</span>"
 button="Install ProSheets"
 url="https://docs.google.com/spreadsheets/d/171hB7AStZWJml6ZfCXHaABqxRZukq5izwsMJdEWTm-Q/copy"
%}

## Known Issues

**Menu Not Appearing**

The menu doesn’t always appear immediately when you copy and open ProSheets for the first time. I recommend you refresh your browser a few times until you see ‘ProSheets Menu’ appear in the menu bar. If it fails to appear, make a fresh copy of ProSheets and try again.

**Infinite Upgrade Loop**

In the first iteration of V1.1, some of you may have been caught in an infinite upgrade loop (whoops!). I have fixed this issue and Version 1.1 no longer checks for upgrades.

<span id="customize-prosheets-cta"></span>

## Close, But No Cigar

If you’re thinking this sheet is almost exactly what you need but it’s just one snazzy feature away from the perfect project management tool, _I hear you_.

I built ProSheets for my needs, not yours -- but we can change that with cold hard cash. Personalized customizations begin at \$10.

{% include prosheets-cta-upsell.html %}

## Final Words

Thank you for trying out ProSheets and feel free to [contact me](mailto:prosheets@stanleyidesis.com) if you have issues during installation or even if you just want to talk about project management for hours over the phone like a couple of school girls gushing over the cutest boy in class.

The cutest boy is Kevin, btw, Todd is hideous and I can’t believe you like him.

---

## Changelog

| **Date**           | **Update**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| August 8, 2018     | \* Bug Fix: Now catches an error if you delete a Project+Milestone contact from your contacts.<br /><br />\* Bug Fix: Deleting a task event that does not exist now supported                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| August 20, 2018    | \* New: Delete Projects and Milestones safely using the new 'Delete' dropdown option.<br /><br />This removes the generated contact info for Project+Milestones when you no longer want to work on them. Use this method rather than deleting the row yourself to keep your contact info accurate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| August 27, 2018    | \* New: Project+Milestone List now includes Project titles as well in cases where you want a one-off, Milestone-free task.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| September 20, 2018 | \* Bug Fix: Race condition created by update script should now stop causing problems. Grrr!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| September 27, 2018 | \* Bug Fix: Accurate dates pulled from calendar again...<br /><br />\* Improvement: Delete on calendar now deletes the task row<br /><br />\* Improvement: Opening/Closing a task from your calendar updates the estimate to the current date (before, the estimate stayed the same even if you completed the task earlier than estimated)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| January 23, 2019   | \* Improvement: ProSheets now uses built-in functions to generate the Project and ProjectMilestone ranges, no longer relies on spotty formulas. :)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| July 1, 2019       | Version 1.1 Has Arrived<br><br>\* (new) Time Tracking: use (start) and (stop) to track the hours and minutes you spend on each task. No need for timers, ProSheets will track the time for you! It also comes with a prorate option with preset settings of none, 5, 10, 15, 20, and 30 minutes<br><br>\* (new) Full Two-Way Sync: You can now edit your description, project+milestone, and title directly from GCal (description was not possible before)<br><br>\* (new) Suped-Up Event Descriptions: Each task event now comes with instructional reminders on how to use ProSheets to its fullest<br><br>\* (removed) Contacts Integration: ProSheets will no longer create or read from Google Contacts. This feature was buggy af so I dropped it. Instead, each Calendar Event will list available Project+Milestones in the description and you can modify it for each task by hand by editing the Event. |

{%
 include prosheets-cta-download.html
 tagline="Last Chance..."
 button="Not Really (Install ProSheets)"
 url="https://docs.google.com/spreadsheets/d/171hB7AStZWJml6ZfCXHaABqxRZukq5izwsMJdEWTm-Q/copy"
%}
