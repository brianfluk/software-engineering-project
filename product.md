# TBD/TheWolvesofCS (terrible name please change andrew)



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
* To help others understand lecture material

> We note that in the case of Data, the goal "To help others understand the lecture material" may be a means to the end of another goal such as "Making new friends".
> We are not particularly interested in what his end goal is, just that he will be forthcoming with his knowledge.
---

Worf is a student who has some (or a lot of) difficulty understanding the material in Picard's lectures. Worf finds himself constantly asking questions in class, and even then does not fully understand the material. He tries to use discussion boards, office hours, and consult with peers afterwards, but dislikes the fact that he has to spend extra time to achieve the same level of understanding as other students. Nevertheless, because he either requires the course or is enthusiastic and interested in the material he is looking for ways that will help him digest the content easier.

Worf's Goals Are:
* To understand the lecture material

---

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

_We will first consider the beneifit that our product as described in **Q1** would give to the personas mentioned in **Q2** and then consider alternative products and why they are unsuitable in comparison to our application._

We note that with enough time lecturers like Picard, and students like Worf and Data will eventually achieve their goals. But the amount of time taken can be compressed, and indeed one of main benefits of our application is to save time. We also note that our application would not function without the presence of students such as Data who are not only willing to explain the material, but also do it in an effective manner.

For Picard, the chat archives will provide an invaluable insight of the student body's reaction to the material. The volume of questions, comments, recurrence of similar questions will be vital in diagnosing sub-optimal material presentation. Picard saves time extracting this information through other means (the information is available as its being created). Picard may also gain information that would otherwise be unavailable due to a variety of factors that come into play after the lecture ends. In example, a student notes that the lecturer repeatedly uses a confusing term, lecture ends, the student looks up the term, the problem is solved, but the lecturer never learns of the existence of a problem to begin with.

For the students, the application will allow Worf to potentially understand material as its being presented, saving the time that he would have to spend reading through  a textbook or classroom forum. In converse, the application will allow Data to aid students as aid is needed, instead of having to spend time later using a classroom forum or during study sessions.

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
    * Out of classroom, does not provide a realtime solutioon. And students have to take extra time to digest material.
* The google thing used in 301 lecture. I forget the name of but it will be inserted!
    * Because the system sorts automatically on upvotes, responses to questions can be mismatched and lost when messages are sorted.
    * Does not provide slide annotation
* Any chat generic application. FB messenger/Slack/Skype/Discord
    * Does not provide slide annotation.
    * Does not allow lecturer to efficiently organize archives of chats.
    * Not anonymous, may discourage students from participating in discussion.
    * Provides unecessary functionality.
    * Can distract users.

----

### Highlights

Literally. I was like. Let's do twitch chat for lectures.

AND HERE WE ARE!!!!

:(

YOUR ANSWER GOES HERE ...

Specify 3 - 5 key decisions and/or insights that came up during your meetings
and/or collaborative process.

 * Short (5 min' read max)
 * Decisions can be related to the product and/or the team process.
    * Mention which alternatives you were considering.
    * Present the arguments for each alternative.
    * Explain why the option you decided on makes the most sense for your team/product/users.
 * Essentially, we want to understand how (and why) you ended up with your current product plan.
