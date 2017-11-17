# TCHAT/Scrum Vaders


## Iteration 2 : Creating Chatrooms : 10/22/17 ~ 11/13/17

In this iteration we want to create a basic webservice that will captures the core benefits of our proposed system; connecting students together and collaborating in class.

---

### Process

##### Roles & responsibilities

*We have kept these two positions from the last iteration*

**Product Owner:** (Raymond Gao) Acts as the products key stake holder. Ensures that the work being done lines up with the products vision and works closely with the team to design and implement needed features. As well the product owner populates and maintains the product backlog.

**Scrum Lord:** (Andrew Sabot) Manages the weekly sprints, coordinates meetings and decides what tasks from the backlog will be in each sprint. Also helps team members get past blockers and acquires the resources needed for the project. The Scrum Lord also decides what to do with tasks that overflowed from previous sprints, whether they will re-inserted into the backlog or trashed.

*In addition we have subdivided our development roles based on skillsets*

**Web Developer:**(Brandon, Max, Andrew, Brian) Is responsible for developing web-pages, interactions in the web-page, and routing.

**UI Developer:**(Andrew, Anas, Brian) Is responsible for creating mockups, changing CSS to improve the visual appeal of pages, and designing the overall user interface.

**Database Developer:**(Anas, Raymond) Is responsible for designing and implementing the database that the front end will communicate with.

**Video Developer:**(Raymond) Is responsible for writing the script and producing the video for the deliverable.

Each member is also responsible for reviewing the code of other members in with the same role. The video will be reviewed by all at the end of the iteration.

---

#### Events


~~**Daily "Standup"**~~ -> **Slack Announcements**

We have found that in our first iteration, even daily discussions through slack are difficult to maintain. Instead we we decided it would be better for each person to post on slack as things come up. Group members are expected to check slack periodically and keep somewhat up to date so that if one of us runs into difficulty we can expect a response in a day or two.

---
**Review and Planning Meetings**

From our first iteration we found a good meeting time would actually be before tutorial on tuesdays. This meeting serves the same purpose as before, but is restated below.

We decided to have our weekly review and planning meetings back to back, so we can review our week and plan for the next week in sequence. It makes little logical sense to have the review meeting in the middle of the scrum, as things can still occur and won't be reviewed until the middle of next scrum. The meetings will take place 11am every Tuesday in BA1220. During this meeting we will discuss the plan for next week, assign tasks for the sprint, review and improve upon our collaboration process, and touch base with stakeholders to ensure that value is being created. If possible stakeholders will demo the new features created to give feedback.

---
**Code Reviews**

Code reviews will happen when a task is completed. During a code review, at least two people, the creator of the code and the reviewer, will look over the code. The creator will explain the high level idea of the system to the reviewer. The reviewer will then determine if the code was created in a modular, maintainable and readable way. If refactoring is needed a task will be made in the product backlog. If refactoring is not needed, then tests will be written for the code. If testing does not pass a task will be made in the product backlog. Otherwise the task is considered "done".

| Event | Time | Timescale | Location | Actions |
| ----- | ---- | --------- | -------- | ------- |
| Slack Announcements | NA | NA| Slack | Pop in and give intermittent status updates or ask for help. Expect replies within a day or two |
| Review and Planning Meeting | Tuesdays 11am | 1hrs | BA1220 | Review & revise collaboration, manage completed tasks, manage backlog, plan for next week, touch base with stakeholders, evaluate value generated, demo and feedback |
| Code Reviews | spontaneous | 10mins - 1hrs | Slack | Review and test code, create "touch up" tasks if necessary, mark tasks as "done"|
---
#### Artifacts

We are using github projects organized with the following columns todo, review/test, done and each member of the team has a column for what tasks they currently are assigned.

**Github Projects Tasks** -- We had looked into several scrum task managers like Trello but we decided that Github Projects was suitable enough for our needs. We deemed that a large overhead system like Trello was probably more than we needed. Github Projects provides a lightweight, easy to understand, easy to access way of keeping track of tasks.

The tasks themselves will have these attributes:
- Description
-- self explanatory :)
- Priority
-- Will be one of [Low, Medium, High, VeryHigh]. The assignment is dependent on two factors.
    - How many tasks depend on this task being finished
    - How vital this task is to delivering the core value of our system
- Size
-- Will be from the range [1,5]. A size 1 job is something that might involve a few lines of code, a size 5 job is a large undertaking requiring several classes.

For this iteration we will try self-assigning tasks. That is, each team-member will assign themselves tasks that reflect with their roles. Since some tasks are more important than others, we say that for each self-assignment, if you can pick a higher priority task that suits your role, do so.

---
**Meeting logs** -- A google doc that keeps track of key points brought up during meetings, decisions made and, poignant insights. The logs will serve to help us remember the decisions we made and why. This will be helpful for people who miss meetings.

---
Based on the review from the previous iteration, we believe that these are the only artifacts that we need.
Artifacts that we thought of, but are useless because of overhead or the academic environment that we work in are:

- Task Deadlines
-- Our academic schedules will almost certainly interfere with any deadline we create as we have seen in iteration one.
- Team Member Availability Schedules
-- Are calculated largely based on lecture times, cannot accurately predict time taken by assignments and other projects.

---
#### Git / GitHub workflow
Recall the workflow that was shown last iteration.

![The image did not display correctly](https://raw.githubusercontent.com/FreakingBarbarians/FreakingBarbarians_Images/master/CSC301_TeamWorkflow.png "HEY YOU. I HOPE YOU HAVE A NICE DAY")

This gives one a good high level description of how we will be operating.

---

**Github**

Each team member is expected to fork the main branch when they begin to work on a task. After completing the task a code review happens with one other member. They review the changes, test the task, and if everything is good then they will merge back into the main branch. If there is a conflict then the authors of the conflicting code will meet and try to resolve the conflict. If they cannot meet then the merge is put off until they can.

After the merge back to head happens then they will refork and work on their next task.

We will also try to inform others on slack about what parts of the code we are changing to give the team members a rough idea of what to expect of the codebase. Something along the lines of "Hey I'm going to change up the CSS for the home-page" Is a good example of a notification.

We chose this workflow because it uses the best practices we were taught in lecture. Everyone gets a copy of the codebase that won't change on them while they're working and when merging if conflicts arise they can be resolved with the people most familiar with the code. We include announcements so that people can be conscious of what files might change, and possibly avoid changing those files if they can to reduce the number of merge conflicts.

---
## Product

#### Goals and tasks

Recall the user story from iteration 1's [product plan](https://github.com/csc301-fall-2017/project-team-17/blob/master/product.md). The actors were Data, Worf, and Picard. Our iteration plan is to create a system that provides value to these users. In order to provide that value we will need to create an anonymous chatroom, and chat archival and retrieval services. Thus the ranking of our goals will emphasize bringing these features to life.

Our goals for this phase are

- Allow students to collaborate in class with our system
- Allow lecturers to create and archive chatrooms
- Create administrative controls for lecturers

The high level tasks that allow these goals to happen are

- Create a chatroom that supports multiple users
- Create a system that allows lecturers to create chatrooms
- Create a database that stores chatlogs
- Create a system for populating chatrooms from database chatlogs
- Create a landing page for lecturers where they can see their chatrooms and courses
- Create a system that allows lecturer's to organize chatrooms based on lecture and course
- Create a login and authorization for lecturers
- Create administrative controls for lecturers.

- Create the script for the demo video. 

---
#### Artifacts

The artifacts we will produce are

UI Mockups - images that will give us a target for how the website should look & feel

Database Schemas - images or tables that tell us of the relationships between tables and their entries

Routing Diagrams - images that will tell us how the routing of our website will work

