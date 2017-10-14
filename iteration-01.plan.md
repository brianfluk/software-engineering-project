# Team 17

 

## Iteration 01

 * Start date: October 10th, 2017
 * End date: October 12th, 2017

## Process

Quick introduction: We are going to be following the Agile Scrum methodologies taught in class. We will do some modifications to fit our academic schedules. This week we met up and discussed our ideas and what needs to be researched in order to move forward.

#### Roles & responsibilities

**Product Owner:** (Raymond Gao) Acts as the products key stake holder. Ensures that the work being done lines up with the products vision and works closely with the team to design and implemement needed features. As well the product owner populates and maintains the product backlog.

**Scrum Lord:** (Andrew Sabot) Manages the weekly sprints, coordinates meetings and distributes the tasks from the backlog. Also helps team members get past blockers and aquires the resources needed for the project. The Scrum Lord also decides what to do with tasks that overflowed from previous sprints, whether they will re-inserted into the backlog or trashed.

**Stakeholder:** (Brandon and Max) A team member who provides feedback on value generated and progress through the lense of one of our three stakeholders; students, lecturers, and course administrators.

**Architect:** (Brandon and Anas) A team member who designs the high level structure of the system.

**Developer:** (Everyone) Responsible for the creation and delivery of the system.

#### Events

**Daily "Standup"**

Unfortunately due to strenuous courseloads for some of our group members, in-person daily meetups will be impossible. Instead we will facilitate daily "chat-meets" at 10pm every day where members will discuss, blockers, progress, and plans.

---
**Review and Planning Meetings**

We decided to have our weekly Review and planning meetings back to back, so we can review our week and plan for the next week in sequence. It makes little logical sense to have the review meeting in the middle of the scrum, as things can still occur and won't be reviewed until the middle of next scrum. The meetings will take place 5pm every friday in BA2270. During this meeting we will discuss the plan for next week, assign tasks, review and improve upon our collaboration process, and touch base with stakeholders to ensure that value is being created. If possible stakeholders will demo the new features created to give feedback.

---
**Code Reviews**

Code reviews will happen when a task is completed. During a code review, at least two people, the creator of the code and the reviewer, will look over the code. The creator will explain the high level idea of the system to the reviewer. The reviewer will then determine if the code was created in a modular, maintainable and readable way. If refactoring is needed a task will be made in the product backlog. If refactoring is not needed, then tests will be written for the code. If testing does not pass a task will be made in the product backlog. Otherwise the task is considered "done".

| Event | Time | TimeScale | Location | Actions |
| ----- | ---- | --------- | -------- | ------- |
| Standup| Daily 10pm | 10-20 mins | Slack | Discuss daily events, discuss blockers, discuss plans |
| Review and Planning Meeting | Fridays 5pm | 1-2hrs | BA2270 | Review & revise collaboration, manage completed tasks, manage backlog, plan for next week, touch base with stakeholders, evaluate value generated, demo and feedback |
| Code Reviews | spontaneous | 10mins - 1hrs | Slack | Review and test code, create "touch up" tasks if necessary, mark tasks as "done"|

#### Artifacts

Below is a diagram that describes the organization of our team into a productive engine.

![The image did not display correctly](https://raw.githubusercontent.com/csc301-fall-2017/project-team-17/master/images/Workflow.png "Why are you hovering here. Go hover somewhere else.")

To facilitate this process we will need to have these artifacts.

 * Task - a defined job that one person can take take on. A task has several properties.
 	* Description : A description of the task. What needs to be done, what purpose the completed task should have.
	* Size : An estimation of the size of the task from 1 (several lines) to 5 (several classes)
	* Priority : A metric of urgency for the task, which is affected positively by how many other tasks depend on it, how well defined the task is, and whether the MVP requires the task to function
	* Tags : A set of identifiers that describes the mechanical nature of the task. i.e. a "Web" tag defines a task that will require web development, a "Server" tag defines a task that requires server knowledge.
	
> Tasks will be assigned in a self serve manner from the Sprint backlog every week. It is expected that all the tasks in the Sprint backlog are assigned to someone
	
 * Product backlog - A priority sorted list of tasks populated by the product owner.
 
 * Sprint backlog - A list of assigned tasks chosen by the scrum lord that are expected to be completed each sprint.
 
 * Overflow tasks - All tasks in the previous sprint that was not completed. These tasks will be reintegrated into the product backlog.
 
 * Test Backlog - A list of tasks that have been completed and are awaiting code review/testing
 
 * Done - A list of tasks that have passed code review and testing, and are considered done.

--- 

**Other Artifacts**

* Meeting logs - A google doc that keeps track of key points brought up during meetings, decisions made and, poignant insights. The logs will serve to help us remember the decisions we made and why.

* Daily Reports - Stored in the slack chat log. We can review these reports to get an idea of short term progress.

## Product

#### Goals and tasks

Goals:
* Come up with a team workflow
* Create a development roadmanp
* Assign roles for each team member
* Assign priorities to each feature
* Collect data to define our product better
* Choose a hosting service for our webserver

Tasks:
 * Meet and discuss various details of the project such as those mentioned in the goals above.
 * Talk to students and teachers about how they would use a tool like this.
 * Research potential hosting services. One such option is Heroku.
 * Set up slack for group for online communication.

#### Artifacts

* Design Specification - A document that contains a product description, use cases, and argues why such a product is needed. This document will serve to communicate the idea of the system as well as focus our efforts.
* User Interaction Diagram - This will serve to clarify how users will interact with the system and give us a better idea of how to design the system.
* User Storyboards - Will show a use cases of our system in a graphical context, will aid in communication of our idea.
* User Personas - Allows us to design our system to effectively satisfy the needs of a targeted user group.

 * Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
 * Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
 * Be concise, yet precise.         
   For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.
