# T-Chat/Scrum-Vaders



#### Q1: What are you planning to build?

A web-based anonymous chat application that serves as a real-time public forum for lectures. We plan to provide value to students who are struggling in courses and to lecturers who want to revise their classes to be more accessible. The product is intended to be lightweight (setup/login time of around 5 minutes), and can be added to any professor's lecture plan as an "afterthought" but still provide great value.

*The key features of the application include*
* Anonymous chatting with peers in the class.
* Archived chat logs for review by the instructor.
* Real time annotation of slides provided in pdf format. 

Below is a storyboard of what a use case for our product may look like.

![The image did not display correctly](https://raw.githubusercontent.com/FreakingBarbarians/FreakingBarbarians_Images/master/CSC301_Project_UseCase_1.png "Greetings human")
> 1| Left student understands material. Right student is confused.

> 2| Right student uses our application to ask for clarification.

> 3| Left student answers.

> 4| Both students understand.
---
**The product will have two modes of operation**. 
The modes, access points, interfaces, and functions are described in detail below.

| Userbase | Access | Interface | Functions |
| -------- | ------ | --------- | ----------|
| Students | Unique Link to Chatroom | Chat bar, Slide view | Chat with peers, annotate slides |
| Lecturers| Standard Web-page Login | Website | Monitor Chatrooms, Create chat rooms, Organise archived chatrooms, Review archives |

![The image did not display correctly](https://raw.githubusercontent.com/FreakingBarbarians/FreakingBarbarians_Images/master/CSC301_UserInteraction_Graph.png "Why are you hovering here. Go hover somewhere else.")

---


#### Q2: Who are your target users?

Our target users consists of three groups of people. Two kinds of students, and lecturers.

---

Jean Luc Picard is an enthusiastic educator who is constantly looking to try out new technologies to augment his teaching style. He teaches"course A" at Starfleet University. Picard's classes have been known to be a bit theory heavy and he is looking for a way to make his lectures more accessible to less theoretical students.

Jean Luc's Goals Are:
* To give his students the best understanding of the material he can.
* To use new technologies that augment but do not take over the way he teaches.
* To improve his lectures to be more accessible to students.

---

Data is an excellent student who is always looking for the opportunity to help his peers. He is well equipped to understand the more theoretical aspects of most courses at Starfleet University and usually finds himself re-explaining lecture material to his peers during study sessions.

Data's Goals Are:
* To help others understand the lecture material

> We note that in the case of Data, the goal "To help others understand the lecture material" may be a means to the end of another goal such as "Making new friends".

> We are not particularly interested in what his end goal is, just that he will be forthcoming with his knowledge.
---

Worf is a student who has some (or a lot of) difficulty understanding the material in Picard's lectures. Worf finds himself constantly asking questions in class, and even then does not fully understand the material. He tries to use discussion boards, office hours, and consult with peers afterwards, but dislikes the fact that he has to spend extra time to achieve the same level of understanding as other students. Nevertheless, because he either requires the course or is enthusiastic and interested in the material, he is looking for ways that will help him digest the content easier.

Worf's Goals Are:
* To understand the lecture material

---

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

_We will first consider the benefit that our product as described in **Q1** would give to the personas mentioned in **Q2** and then consider alternative products and why they are unsuitable in comparison to our application._

We note that with enough time lecturers like Picard, and students like Worf and Data will eventually achieve their goals. But the amount of time taken can be compressed, and indeed one of main benefits of our application is to save time. We also note that our application would not function without the presence of students such as Data who are not only willing to explain the material, but also do it in an effective manner.

For Picard, the chat archives will provide an invaluable insight of the student body's reaction to the material. The volume of questions, comments, and recurrence of similar questions will be vital in diagnosing sub-optimal material presentation. Picard saves the time he would spend extracting this information through other means. Picard may also gain information that would otherwise be unavailable due to a variety of factors that come into play after the lecture ends. In example, a student notes that the lecturer repeatedly uses a confusing term. When lecture ends the student looks up the term and the problem is solved but the lecturer never learns of the existence of a problem to begin with.

For the students, the application will allow Worf to potentially understand material as its being presented, saving the time that he would have to spend reading through a textbook or classroom forum. In converse, the application will allow Data to aid students as aid is needed, instead of having to spend time later using a classroom forum or during study sessions.

| Persona | Time Saved       | New Information Gained                          |
| ------- | ----------       | ----------------------------------------------- |
| Picard  | 10's Hrs         | Info that would be lost to post-lecture factors |
| Data    | not well defined | None                                            |
| Worf    | < 10 Hrs         | None                                            |

> The time that Data saves is not well defined as it is based on the social structure of Data's relationships with students who are struggling to understand material.
---

**Alternative Products**

For each alternative system, the system is not an optimal solution because it is unsuitable for the personas described or our application fulfills the task in a more efficient manner.

* TopHat
    * Not lightweight, requires lecturer to fully integrate TopHat into slides as well as requires the student body to use TopHat
    * Subscription based, costs money.
* Piazza
    * Message delivery system is too overhead heavy (internet forum/post based), and will not adapt well into a lecture scenario.
        * Think email vs instant messaging
    * Out of classroom, does not provide a realtime solution. And students have to take extra time to digest material.
* Google presentation with questions URL.
    * Because the system sorts automatically on upvotes, responses to questions can be mismatched and lost when messages are sorted.
    * Does not record responses to questions, so it won't help after the lecture/ presentation.
    * Questions are not associated with a slide.
    * Does not provide slide annotation
* Any chat generic application. FB messenger/Slack/Skype/Discord
    * Does not provide slide annotation.
    * Does not allow lecturer to efficiently organize archives of chats.
    * Not anonymous, may discourage students from participating in discussion.
    * Provides unnecessary functionality.
    * Can distract users.

----

### Highlights
During our planning stage we came up with a few project ideas. The first was a service for hosting slackbots that helped users integrate important information into their chats such as a bot that would pull information from portal or a CS course web page. There was another idea to help students study and practice topics they found difficult by curating previous offerings of courses practice problems, designed for students to search by topic. The other contender was a mashup of Google API's to create pop-up chatrooms about news topics in local areas. Below is a chart of positives and negatives of the potential ideas compared with the idea that we decided to go with. 

| Ideas:         | Python Slack Bots                                                                                                                                                                                                                           | Practice Problem Archive                                                                                           | Google New Chatroom                                                                                       | In Class Forum                                                                                                                                                                                                                                                                |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Positives      | Fun for groups; Can save time on getting   important notifications                                                                                                                                                                          | Saves time searching for topics ; Students can easily study relevant material                                      | Creates a space for people to discuss current topics. Potential to meet and befriend people in your area. | Helps students solve mutual problems; Creates a way for professors to get  class by class feedback. Allows students to demonstrate knowledge and practice problems they feel comfortable with. Creates Archive of course lecture questions.                                   |
| Negatives      | - There are many chatgroup bot;   hosting services with good premade bots; Integration would be difficult and    it would be hard to create something    better than the other services;  Hosting the bots would be a logistical challenge. | Relies on people adding information to it; Storage of archive; Organizing the problems; Creating search algorithm. | Moderating it would be hard. Scope of project is not big enough.                                          | Could be a distraction to users. Creating something different from piazza.                                                                                                                                                                                                    |
| Value to users | - Saves time setting up and creating bots, but most of the stuff would be fairly simple to create.                                                                                                                                         | This adds a lot of value to the student users. Does not add value to teachers and those who populate it.           | Creates a space for people to discuss problems and get a sense of public opinions.                        | Helps students learn by saving time on concepts they don't understand. Saves teacher time since they don't have to answer every question. Teachers save time learning what students liked and didn't like about the lecture and can improve for later offerings and lectures. |

In the end we decided that the In Class Forum was appropriate for the scope of the project. Compared with the other ideas it added the most amount of value to our focus group. The other projects that helped with courses relied too much on students populating information. The questions forum would use technologies that our group has experience with and would help lecturers and students.
