# IF.03.01-06 Basic Web Techniques - Information Website
This coding assignment shall make you practice all concepts we have learned so far. Make sure that you read the section *Required Tasks*  in [CodingAssignment.md](CodingAssignment.md) carefully and to complete all the tasks listed there.

## INTRODUCTION
This website aims to provide a free and easy to use database for users
that want to get into programming, while also giving more experienced
programmers a way to fresh up their memory and help new and aspiring programmers.

## WEBAPP FEATURES
We are currently working on implementing both a functioning forum as well
as a login / registration page for users to ask / answer questions

The forum will be split up in seperate sections, including programming in general,
any questions or issues related to computers, and, of course, a section for c# in particular.

Users will be able to recieve / give roles that determine what they can and can't do.
Here is a table of the planned roles and their abilities.

| Role name | create new threads | can pin threads to the top of the list |	ban / mute other users | Can mark their responses to a thread as answers | mark a thread as closed
|--|--|--|--|--|--|
| Member | x |  |  |  |  |
| Helper | x | x | | x | x |
| Moderator | x | x | x |  | x |
|Administrator | x | x | x | x | x |


Helpers are those who are experienced (and competent) enough to help other users.

None of the roles are earned, they will be manually given out by staff (administrators)

Furthermore, we will implement a search function that filters threads by either their name, the name of the autor or both.

To prevent constant repetition of questions both the helpers and moderators will work together to constantly maintain and update a questions megathread that will be pinned to the top of the section at all times.
There, the most asked / answered questions and their answers will be collected for easier access.
##

TODO :

 - [ ] Finish login page and it's functions
 - [ ] Figure out how to implement a forum
 - [ ] Possible design overhaul (?)
 - [ ] Continue adding more content to the individual sites
