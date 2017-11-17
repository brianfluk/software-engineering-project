# YOUR PRODUCT/TEAM NAME

## Iteration XX - Review & Retrospect

 * When: 16 November 2017
 * Where: BA2270

## Process - Reflection

Short introduction:
This iteration we designed a mock, designed and implemented the database and a prototype of the actual web app.
We managed to create the landing page with a signup navigation bar, login page, PDF viewer in the chatroom, 
a page for lecture materials for all the lectures and another page for all the live chatrooms.

#### Decisions that turned out well

List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.

 * We decided that instead of students and instructors holding accounts, now only instructors are the only 
   users that have to sign in. This design change allows the instructors to add and delete course materials,
   add courses that they are teaching, while students are given a read only permission to the course materials
   and permission to access the chat room.
 
 * We used bootstrap for the creation of the front end. This gives us the convenience to drag and drop templates
   with a guarantee that there are no bugs and very dynamic with different window sizes.
   
 
 
 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s).

#### Decisions that did not turn out as well as we hoped

List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.
 
 * The lack of structure for commenting code resulted in our javascript code becoming spagettied after the different push and commits          from different team members. This became problematic when we decided to change the pdf viewer to have the pdfs hosted on the node        server.
 
 * We ended up not using our GitHub Projects structure the way we initially intended, but instead used it more in the planning and design stages. Tasks were created and given using projects, but our team did not update it as often as initially planned.
 
 * The use of doodle to aid us in setting up a meeting was not very effective. We found that it was very tedious to 
   import our schedule and selecting a timeslot that works for everyone. We went back to just asking
   team members in slack for the appropriate time to meet. In order to have enough meetings we also decided to meet in groups of 3 when    we couldn't find a time that worked for everyone.
   
 * Our initial decision to set up Heroku server ended up being pushed back. We decided to run the web app locally
   for demonstration purposes and to save development time. We feel like this is a better suited task for the next deliverable. 
 
 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Feel free to refer/link to process artifact(s).


#### Planned changes

List any process-related changes you are planning to make (if there are any)

 * Ordered from most to least important.
 * Explain why you are making a change.


## Product - Review

#### Goals and/or tasks that were met/completed:
* The goal of creating a prototype website was met. See mockup image for more details. (https://github.com/csc301-fall-2017/project-team-17/blob/master/image_prototype.pdf)
* We implemented a pdf viewer and tested it versus a few other implementation options. This one was kept since it had the least overhead while allowing us to host the pdfs on the node server.
* The initial chatroom was created and allows multiple users to join and discuss class questions alongside a pdf.
* The database for both users and chat/ class logs has been created. See the db design for more details.
(https://github.com/csc301-fall-2017/project-team-17/blob/master/db/dbDesign.png)

 * From most to least important.
 * Refer/link to artifact(s) that show that a goal/task was met/completed.
 * If a goal/task was not part of the original iteration plan, please mention it.

#### Goals and/or tasks that were planned but not met/completed:
* We did not run our web app on Heroku. Initially the plan was to build it on Heroku with auto deployment. After we setup the Heroku environment it became clear that it would be a lot more overhead to use Heroku for initial development, indeed we will build the product locally and port a completed server to it when we finish a deliverable.

* In the plan we thought that having admin controls for lecturers was an important task for the first demo. As development process moved along and we refined what we needed for an initial demo, it was decided that our time would be better spent on choosing the correct pdf viewer and creating a better user flow.

 * From most to least important.
 * For each goal/task, explain why it was not met/completed.      
   e.g. Did you change your mind, or did you just not get to it yet?

## Meeting Highlights

Going into the next iteration, our main insights are:

 * 2 - 4 items
 * Short (no more than one short paragraph per item)
 * High-level concepts that should guide your work for the next iteration.
 * These concepts should help you decide on where to focus your efforts.
 * Can be related to product and/or process.
