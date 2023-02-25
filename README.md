<h1 align="center">
    Gvine Chat
</h1>
Gvine chat is a chat application that lets you send and recieve messages. As of now there is no backend or data store, so the simulation of sending and recieving messages is done over mock data. User can view coversation for their respective contacts and also can send and recieve messages as simulation.
<br></br

![gvine-chat](https://user-images.githubusercontent.com/37118964/221347959-878b6cd5-c417-4b33-9e5b-ec1ff8e02bed.png)


## 🏁 Features
1. A user should be able to initiate conversations with another user based on the username.
2. A user should be able to have conversations with multiple users
3. A history of all messages should be stored for reference by the user later

### 💡 How it works
1. This is a fully frontend application without any backend or data store.
2. We are using mock data to get contacts and conversation.
3. For recieving messages we have created a polling where last message of contacts will be marked as latest for simulation. Clicking on new message will append the last message to chat.
4. While sending messages also it will be pushed to existing chat data but will not be persistant as there is not database.
5. For every 20 seconds a flag called isLatest is going to get true for each contacts in order to simulate incoming messages.


### Tech Stacks
 - React
 - Typescript
 - Redux Toolkit
 - Material UI
 - Axios 
 - Mockoon


### Instruction to build and run

```
1. Clone the repository
2. Import the mock_db.json file in Mockoon.
3. Start mockoon server.
4. Navigate to src/api/baseapi.ts and replace the baseURL with mockoon server url
3. npm install
4. npm run dev - For runing development build
5. npm run build - For creating production build
6. npm run preview - For running production build

```

### [Interview Docoment ](InterviewDoc.md)
### [Specification Document »](Spec.md)

---
### Reach out to me

[![Facebook](https://img.shields.io/static/v1.svg?label=follow&message=@tsgoswami&color=black&logo=facebook&style=for-the-badge&logoColor=white&colorA=blue)](https://www.facebook.com/trishnangshu.goswami/) [![Instagram](https://img.shields.io/static/v1.svg?label=follow&message=@tsgoswami&color=black&logo=instagram&style=for-the-badge&logoColor=white&colorA=blue)](https://www.instagram.com/the_tsgoswami/) [![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@tsgoswami&color=black&logo=linkedin&style=for-the-badge&logoColor=white&colorA=blue)](https://www.linkedin.com/in/trishnangshugoswami/) [![Twitter](https://img.shields.io/static/v1.svg?label=connect&message=@tsgoswami&color=black&logo=twitter&style=for-the-badge&logoColor=white&colorA=blue)](https://twitter.com/ts_goswami)

> Made with 🖤 by Trishnangshu Goswami
