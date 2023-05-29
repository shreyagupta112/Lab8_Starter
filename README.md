# Lab 8 - Starter
Fill your answer in your README.md
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed. This is becasue automated tests don't take any 
effot to do, so there's no need to wait to the end of the devlopment without testing and we 
can test throughout devlopment, allowing us to catch issues early without extra effort.

The point of automated tasks is to not have to test anything manually, so manually run them locally before pushing code

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No becasue a unit test is only supposed to test a single component and this feature involves multiple components (writing a message and sending a message)

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, because this is a single component and unit tests are supposed to only test a single component