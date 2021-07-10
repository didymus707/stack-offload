# Stack Offload
Have StackExchange questions at your fingertips

## About

This is a simple web application that streams new questions posted in the sites of Stack Exchange network, as push notifications. 

## Why

There is no mechanism in the Stack Exchange sites to subscribe to receive questions, therefore it takes a long time to get a question answered. IMO, the main reason for this is that more experienced developers have less time to browse the sites and answer the questions. Questions will be answered fast, if there is a way that the domain experts are notified of questions.

## How It Works

This app solves the above problem by streaming questions posted in Stack Exchange network sites to the domain experts. The exact process is as follows.

- The domain experts sign in to StackOffload with their stack exchange accounts.
- Then they select the preferred SE sites and the question tags.
- When new questions are posted in those sites, under the preferred tags, those questions are streamed to the experts as push notifications.

Users can install the chrome extension to view streaming information for each question. This extension displays vital streaming info such as the no. of people reached, no. of people clicked on, estimated difficulty level etc.

## Impact

- For the experts
    - Getting a chance to easily share their knowledge with the community.
    - Being able to build their reputation in a particular domain
    - Being able to earn SE reputation fast.   
<br />
- For the community
  - Questions are answered fast.
  - Trust and the credibility of the community increases.

## Technologies used

- Front-end: React.js, Chakra UI
- Chrome extension: HTML, CSS, JavaScript
- Back-end: Serverless framework, Google Cloud Functions, Node.js
- Testing: React-testing-library