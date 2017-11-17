# TCHAT/Scrum Vaders

## Iteration 02 - Review & Retrospect

 * When: 16 November, 2017
 * Where: BA2270

## Process - Reflection

Introduction:
This iteration we created a mockup, designed and implemented the database and developed a prototype of the actual web app.
We managed to create the landing page with a signup navigation bar, login page, PDF viewer in the chatroom, 
a page for lecture materials for all the lectures and another page for all the live chatrooms.

#### Decisions that turned out well

List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.
 * A development decision that we made as a group was to build the UI and database at the same time. To acomplish this we seperated into two groups, one that did the website work and the other that built the UI. In order to not have conflicts we defined the database requirements very carefully. This ended up saving us a lot of time when we connected it with the website and its flexibility has been very helpful whenever a design decision is changed.
 
 * Along with dividing the work, we paired up to complete each task. This way one person wasn't the source of truth and blockers were overcome a lot quicker than when one person was designing and implementing a feature.

 * We decided that instead of students and instructors holding accounts, now instructors are the only 
   users who have to sign in. This design change maintains the instructors ability to add and delete course materials
   along with still being able to add courses that they are teaching. Students are now given a read only permission to the 
   course materials and permission to access the chat room. This significantly simplified our development process which helps 
   us create a MVP where we can focus on more important features.
 
 
 * We used bootstrap for the creation of the front end. This gives us the convenience to drag and drop templates
   with a guarantee that there are no bugs and very dynamic with different window sizes.

#### Decisions that did not turn out as well as we hoped

List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.
 
 * The lack of structure for commenting code resulted in our javascript code becoming spagettied after pushs and commits from different team members. This became problematic when we decided to change the pdf viewer to have the pdfs hosted on the node server. After a slack conversation a new commenting guideline was established.
 
 * The use of doodle to aid us in setting up a meeting was not very effective. We found that it was very tedious to 
   import our schedule and selecting a timeslot that works for everyone. We went back to just asking
   team members in slack for the appropriate time to meet. In order to have enough meetings we also decided to meet in groups of 3 when we couldn't find a time that worked for everyone.
   
 * Our initial decision to set up Heroku server ended up being pushed back. We decided to run the web app locally
   for demonstration purposes and to save development time. We feel like this is a better suited task for the next 
   deliverable. 
   
* We ended up not using our GitHub Projects structure the way we initially intended, but instead used it more in the planning and design stages. Tasks were created and given using projects, but our team did not update it as often as initially planned.


#### Planned changes

List any process-related changes you are planning to make (if there are any)
* For the intial few features, some of us were commiting directly to master after having another team member review their
code. In the future this will be avoided by everyone forking the repo and doing pull requests. This will also speed up the
process since we will not have to review eachothers stuff in person, instead we can pull the repo/ branch that our fellow team member has been working on.

* For the next iteration we plan to more closely follow our new commenting guidelines. We are making this change for better
group communication and overall smoother workflow.


## Product - Review

#### Goals and/or tasks that were met/completed:
* The goal of creating a prototype website was met. See mockup image for more details. (https://github.com/csc301-fall-2017/project-team-17/blob/master/image_prototype.pdf)
* We implemented a pdf viewer and tested it versus a few other implementation options. This one was kept since it had the least overhead while allowing us to host the pdfs on the node server.
* The initial chatroom was created and allows multiple users to join and discuss class questions alongside a pdf.
* The database for both users and chat/ class logs has been created. See the db design for more details.
(https://github.com/csc301-fall-2017/project-team-17/blob/master/db/dbDesign.png)


#### Goals and/or tasks that were planned but not met/completed:
* We did not run our web app on Heroku. Initially the plan was to build it on Heroku with auto deployment. After we setup the Heroku environment it became clear that it would be a lot more overhead to use Heroku for initial development, indeed we will build the product locally and port a completed server to it when we finish a deliverable.

* In the plan we thought that having admin controls for lecturers was an important task for the first demo. As development process moved along and we refined what we needed for an initial demo, it was decided that our time would be better spent on choosing the correct pdf viewer and creating a better user work flow.

* When we were making a storyboard for the demon, it became clear that we didn't need to have the administrative control board complete for this stage. As far as showing features go we decided it wasn't a priority compared to having a nice UI and working chatroom and PDF storage.


## Meeting Highlights

Going into the next iteration, our main insights are:
 * Integrating our heroku server with our mock up prototype to create a fully
 functioning webapp.
 * Improve front-end design. We plan on following our initial plan on having 
    a student account and creating a different interface for students.
    This way only students registered in the class can open and access 
    the chatroom and course material.
 * Improve UI. Create feedback for actions given by users such as:
    - adding courses, deleting courses.
    - saving, editing and loading lectures.
    - Create new buttons functionality for easier navigation between pages.
 * Visually restructure the chat such that the questions are in red,
   answers in green, comments in blue, Instructor in purple.
   Answers and questions be linked like a thread.
   Answers and comments will be indented under the specific question

    
 * 2 - 4 items
 * Short (no more than one short paragraph per item)
 * High-level concepts that should guide your work for the next iteration.
 * These concepts should help you decide on where to focus your efforts.
 * Can be related to product and/or process.
