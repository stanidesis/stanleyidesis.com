---
layout: post

date_modified: "2018-08-27"

title: "Easy Project Management with Google Sheets (Template Included)"

description: "ProSheets is a free DIY project management template that combines Google Sheets, Google Calendar, and Google Contacts into a project management solution and todo list that you can use on your phone, desktop, tablet, or any device with Calendar access."
headline: "Manage Your Personal Projects in Google Sheets with this Template"

alt_headline: "Free Template: Project Management with Google Sheets, Calendar, and Contacts"

feature_image_url: "/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/cover-art.png"

social_image_url: "/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-social-image.png"

author: "Stanley Idesis"

genre: "Project Management"

permalink: /project-management-with-google-sheets-free-template

keywords: "google calendar daily tasks, google calendar tasks list, google tasks google calendar, tasks for google calendar, using tasks in google calendar, diy task, diy tasks, diy things to do, diy to do list, diy to do list template, diy todo list, project management google sheets, project management google sheets template, project management in google sheets, project management using google sheets, project management with google sheets, google tasks on calendar, google sheets task list, google sheets task list template, google sheets task management template, google sheets task manager, google sheets tasks, google sheets todo list, google sheets todo list template"
---
It all began with money problems. I went from juggling a handful of consistently well-paying tasks to suddenly working on several potentially worthless projects overnight, projects I needed to track immediately. But if you’re anything like me, your problem with project management tools and to-do list apps is that you can’t stick to any of them. Sooner or later, you grow weary of upkeep and you forget about ticking off boxes or dragging tiles along your little Kanban board.

## I’ve Tried Everything

One of the first Android applications I built was TaskPop, an overly-complicated todo list application synchronized with Google Tasks. Since then, I’ve tried every method of task management under the get-things-done sun. Google Tasks, Google Keep, Any.Do, Wunderlist, Google Calendar, Google Tasks (again), Google Reminders, Apple Reminders, JIRA, Trello, Asana, a Kanban board made of actual sticky notes, and most recently, pen and paper; typing this list gave me post-todo-list-stress-disorder.

But I have never tried building my own project management tool, that is, not until now. I turned to spreadsheets.

My spreadsheet mastery has grown ever since I committed to managing my finances in a Google Sheet in October of 2015. For 3 years, I’ve logged every financial transaction to one spreadsheet; I have not skipped a single one. Beyond Photoshop, I can’t think of a single piece of software I’ve committed to more completely than my own financial spreadsheet.

So if that method worked for my finances, why not for my productivity?

## Introducing ProSheets

Approximately two months ago, I created a project spreadsheet. I did not choose Google Sheets because it felt like the right tool, but because I had absolutely no time to waste and by that point, spreadsheets were second nature to me. But when Google released a Gmail redesign with a side-pane users could dedicate to Google Calendar, I so desperately wanted to see my tasks show up there--but how?

The Google Calendar API. By connecting my spreadsheet to Google Calendar, ProSheets could create events that represented my tasks, tasks that I could view anywhere as long as I had access to my Calendar. And with that connection established, I could see, complete, and create tasks from my GCal, and that meant instant portability to my smartphone and tablet. Perfect.

Without further ado, meet ProSheets.

<div class="post-video-wrapper">
  <iframe src="https://www.youtube.com/embed/v84x2bxw0HU">
  </iframe>
</div>


# ProSheets v1.0: A Template for Project Management in Google Sheets

This free Google Sheets project manager relies on three project management staples: projects, milestones, and tasks. I treat projects as large tasks with tangible outcomes. Beneath them, milestones exist to divide large projects into key accomplishments. Finally, each task belongs to a milestone.

<section class="hero is-small has-text-centered post-cta animated slow">
  <div class="hero-body">
    <p class="subtitle is-size-4">Start Using ProSheets Now</p>
    <a class="button is-primary is-rounded is-outlined" href="https://drive.google.com/open?id=17SR7QjBOcWB691iOyTZ2CCdFJppaCIlpr91hilLpJg4">
    <span class="icon">
      <i class="fas fa-arrow-circle-down"></i>
    </span>
    <span>Install ProSheets</span>
    </a>
  </div>
</section>

## Features

**Sheet-to-Calendar Synchronization**

![How a ProSheets task looks in Google Calendar](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-task-in-google-calendar.png)

When you create a task in ProSheets, ProSheets generates a corresponding Event in your selected Google Calendar. Tasks equate to All-Day Events by default (this is currently the only option). And when you update a task’s title, description, start date, or estimate, ProSheets reflects these changes in the associated Event.

Currently, only tasks appear in your Google Calendar, projects and milestones are not visible.

**Calendar-to-Sheet Synchronization**

Similarly, you can create, edit, delete, or complete a task on Google Calendar and ProSheets will reflect these changes in your spreadsheet. This feature works with any front-end calendar client that has two-way sync with your Google Calendar (Native iOS Calendar, Google Calendar on Android, Outlook, Fantastical, Windows Calendar, iCal, aCalendar, Any.do, etc.)

**Contact Synchronization**

ProSheets creates custom contacts for every milestone in your spreadsheet. Use these contacts to assign new tasks from your Calendar to a specific milestone and project. Voila, no custom frontend app required, only access to Google Calendar and Google Contacts.

**Task Rollover**

Rather than getting lost in your backlog, ongoing tasks rollover to the next day as long as they remain incomplete. For example, come Tuesday morning, an incomplete task due Monday with a single-day estimate will have its due date adjusted to Tuesday.

**Emoji Identification**

![Complete a ProSheets task from Google Calendar (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-complete-task-on-google-calendar.gif)

ProSheets identifies open tasks by preceding their title with the following symbol: ‘⭕.’ Conversely, completed tasks are preceded by a ‘✅.’ You can customize these characters by opening up ProSheet’s scripts and editing the `Constants.gs` file.

## How-To Guide
Watch [this video](https://www.youtube.com/watch?v=v84x2bxw0HU) (embedded above) or refer to the guide below.

### Install

[Navigate to ProSheets](https://drive.google.com/open?id=17SR7QjBOcWB691iOyTZ2CCdFJppaCIlpr91hilLpJg4) and make a copy of the Google Sheet to your own GDrive. In your copy, click on the ProSheets Menu item and then click Setup to begin the setup process. Complete each step in the process, otherwise ProSheets may fail to function as intended.

### Add Projects

![Create a Project in ProSheets (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-create-a-project.gif)

To create a new project, simply add a new row to the ‘Projects’ sheet and fill in the requisite details.

### Complete Projects

In the final column of a project row, change the project’s status to ‘Mark as Complete.’ This will move the project to the ‘Completed Projects’ sheet. This behavior reduces spreadsheet clutter as well as look-up times.

### Add Milestones

![Create a Milestone in ProSheets (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-create-a-milestone.gif)

Much like projects, you can add a milestone by creating a new row in the ‘Milestones’ sheet. Milestones require a Project and a title. When you create or update a milestone, a corresponding Project+Milestone Contact is added to your Google Contacts (see Contact Synchronization).

### Add Tasks From Your Spreadsheet

![Create a Task in ProSheets (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-create-a-task-from-sheets.gif)

Adding a task is as simple a process as the previous additions. Create a new row in the ‘Tasks’ sheet and fill in the following requisite elements: Project+Milestone, title, start date, and estimate. If you want to create a task without a project or milestone associated, choose the ‘N/A’ option.

### Add Tasks From Your Calendar

![Create a Task from Google Calendar (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-create-a-task-in-google-calendar.gif)

Begin by creating a new Event on the Calendar associated with ProSheets (I recommend a separate Calendar just for this purpose). The title of your task belongs in the Event summary, as it normally appears when created by ProSheets (you do not need to include the emoji status symbols in the summary).

Optionally, fill in task details in the Event description field. To assign the task to a Project+Milestone, invite a single ProSheets-generated contact from your address book to the Event.
The contacts look like this: `Build-Treehouse+Buy-Lumber@gmail.com` where the name of the project is attached to the title of the milestone. This only works when a single contact is invited to your Event. If you invite no contact, ProSheets will assign ‘N/A’ to the task’s Project+Milestone column.

Finally, assign a start and end date. ProSheets uses these dates to set the task’s start date and estimate.

### Complete Tasks From Your Spreadsheet

![Complete a Task from Sheets (gif)](/assets/images/collections/posts/2018-08-07-project-management-with-google-sheets/prosheets-complete-task-in-sheets.gif)

To complete a task from your spreadsheet, assign a date to the ‘Completed On’ column. This will update the corresponding Calendar Event and move the task to the ‘Completed Tasks’ sheet.

### Complete Tasks From Your Calendar

To do this nifty trick, edit the summary/title of your task Event in any Calendar-editing frontend application. Append the following, without quotes, to any part of the title: ‘(close)’. Upon synchronizing, ProSheets will mark the task as complete and update the Calendar Event.

## Known Issues

**Menu Not Appearing**

The menu doesn’t always appear immediately when you copy and open ProSheets for the first time. Recommended: refresh your browser a few times until you see ‘ProSheets Menu’ appear in the menu bar. If it fails to appear, make a fresh copy of ProSheets and try again.

<section class="hero is-small has-text-centered post-cta animated slow">
  <div class="hero-body">
    <p class="subtitle is-size-4">ProSheets is Free <span style="text-decoration: underline;">Forever</span></p>
    <a class="button is-primary is-rounded is-outlined" href="https://drive.google.com/open?id=17SR7QjBOcWB691iOyTZ2CCdFJppaCIlpr91hilLpJg4">
    <span class="icon">
      <i class="fas fa-arrow-circle-down"></i>
    </span>
    <span>Install ProSheets</span>
    </a>
  </div>
</section>

## Final Words

Thank you for trying out ProSheets and feel free to contact me if you have issues during installation, feature requests, or you want to talk about project management for hours over the phone like a couple of school girls gushing over the cutest boy in class.

The cutest boy is Kevin, btw, Todd is hideous and I can’t believe you like him.

---

#### Changelog

| **Date** | **Update** |
| :--: | :-- |
| August 8, 2018 | * Bug Fix: Now catches an error if you delete a Project+Milestone contact from your contacts.<br /><br />* Bug Fix: Deleting a task event that does not exist now supported |
| August 20, 2018 | * New: Delete Projects and Milestones safely using the new 'Delete' dropdown option.<br /><br />This removes the generated contact info for Project+Milestones when you no longer want to work on them. Use this method rather than deleting the row yourself to keep your contact info accurate.
| August 27, 2018 | * New: Project+Milestone List now includes Project titles as well in cases where you want a one-off, Milestone-free task. |
| September 20, 2018 | * Bug Fix: Race condition created by update script should now stop causing problems. Grrr! |
| September 27, 2018 | * Bug Fix: Accurate dates pulled from calendar again...<br /><br />* Improvement: Delete on calendar now deletes the task row<br /><br />* Improvement: Opening/Closing a task from your calendar updates the estimate to the current date (before, the estimate stayed the same even if you completed the task earlier than estimated) |
