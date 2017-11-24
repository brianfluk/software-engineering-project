# YOUR PRODUCT/TEAM NAME

 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration 3

 * Start date: 11/21/17
 * End date: 11/30/17

## Process

Introduction: This iteration we are planning to improve the flow of our website for both students and lectures. Users should be able to click through available courses and then lectures for that course. We plan to also add in a page for instructors to managage their courses (adding pdfs and other small things like lecture creation). The final task we hope to complete is chat persistence ie chat logs stay in the database after lecture ends.

#### Changes from previous iteration
* We have abandoned most of the overhead of task creations and tracking. The amount of time lost to task management was too much to justify using it. The agile methods were not effective for our academic group. The reason we feel this way is that Agile expects us to be working on the tasks as our only priority. Since our schedules are busy it creates deadlocks on tasks.
Instead we have adopted an iterative approach where we have an idea of what we want, and communicate frequently to verify this idea. Based on what we want we look at what we have, and implement the feature that we think will get us closer to what we want. Sort of like a local search methodology.

* Following from the above shift in methodology. When a task becomes available, along with being added to the Github projects, the developer who "unlocked" the tasks posts it to our slack where someone can claim it. For example, when Max completeted the creation of the course webpages. The task of linking the course database to the front end became avaliable, he posted it to the Slack and Andrew claimed it. This method change achieves a faster task acceptance and completion. 

List the most significant changes you made to your process (if any).

 * At most 3 items
 * Start with the most significant change
 * For each change, explain why you are making it and what you are hoping to achieve from it
 * Ideally, for each change, you will define a clear success metric (i.e. something you can measure at the end of the iteration to determine whether the change you made was successful)

 > *Note:* If you are not making any changes to your process, it means that you are happy with all of the decisions you made in the previous iterations.
 > In this case, list what you consider to be the most significant process decisions your team made. For each decision, explain why you consider it successful, and what success metric you are using (or could use) to assert that the decision is successful.

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.
*We have kept the positions from the last iteration*

**Product Owner:** (Raymond Gao) Acts as the products key stake holder. Ensures that the work being done lines up with the products vision and works closely with the team to design and implement needed features. As well the product owner populates and maintains the product backlog.

**Scrum Lord:** (Andrew Sabot) Manages the weekly sprints, coordinates meetings and decides what tasks from the backlog will be in each sprint. Also helps team members get past blockers and acquires the resources needed for the project. The Scrum Lord also decides what to do with tasks that overflowed from previous sprints, whether they will re-inserted into the backlog or trashed.

*In addition we have slightly changed our development roles based on skillsets*

**Web Developer:**(Brandon, Max, Andrew, Brian) Is responsible for developing web-pages, interactions in the web-page, and routing.

**Sys Admin:** (Raymond) Is responsible for the transition of our platform onto Heroku.

**UI Developer:**(Andrew, Anas, Brian) Is responsible for changing CSS to improve the visual appeal of pages, and designing the overall user interface including web pages HTML.

**Database Maintainers:**(Anas, Raymond) Is responsible for designing and implmenenting any changes to the database that the front end will require as we build out the platform.

**Video Developer:**(Raymond) Is responsible for writing the script and producing the video for the deliverable.

Each member is also responsible for reviewing the code of other members in with the same role. The video will be reviewed by all at the end of the iteration.


#### Events

Describe meetings (and other events) you are planning to have:

 * When and where? In-person or online?
 * What's the **purpose** of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync' meeting online, etc.

#### Artifacts
We are using Github projects organized with the following columns to-do, review/test, done and each member of the team has a column for what tasks they currently are working on.

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

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be to-do lists, task boards, schedule(s), etc.
 * We want to understand:
   * How do you keep track of what needs to get done?
   * How do you prioritize tasks?
   * How do tasks get assigned to team members?

#### Git / GitHub workflow

Describe your Git / GitHub workflow.     
Essentially, we want to understand how your team members share a codebase and avoid conflicts.

 * Be concise, yet precise.      
For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Don't forget to **explain why** you chose this workflow.



## Product



#### Goals and tasks

 * Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
 * Order the items from most to least important.
 * Feel free (but not obligated) to specify some/all tasks as user stories.

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

 * Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
 * Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
 * Be concise, yet precise.         
   For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.
