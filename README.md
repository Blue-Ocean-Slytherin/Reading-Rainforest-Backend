# Reading-Rainforest-Backend

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>
<a href="https://github.com/Blue-Ocean-Slytherin/Reading-Rainforest-Backend/">
<img src="https://contrib.rocks/image?repo=Blue-Ocean-Slytherin/Reading-Rainforest-Backend" />
</a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->

<!-- ABOUT THE PROJECT -->

## About The Project

This is a backend server meant to be hooked up to a mongoDB instance of your choosing and attached to our designed <a href="https://github.com/Blue-Ocean-Slytherin/Reading-Rainforest-FrontEnd/">front end application</a>

### Built With

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white). ![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<!-- GETTING STARTED -->

## Getting Started

# Routes

/User

- GET users/:uid

  - REQ:
    - uid: unique ID of the new user that we obtain from the front end through firebase
  - RES:
    - document containing all info about the user, as documented in the schema file

- POST users/new

  - REQ:
    - uid: unique ID of the new user that we obtain from the front end through firebase
    - name: string, username of new user
    - email: string, email of new user
    - phoneNumber: string, phone number, 11 digits in the form of "1XXXYYYZZZZ"
    - profilePhoto: string, url to profile photo of the new user
    - lat: string, Latitude of Location
    - long: string, Longitude of location
  - RES:

    - document of the new user in the form as documented by schema file

  - PATCH users/:uid/ISBN/:ISBN/bookName/:bookName

    - REQ:
      - uid: unique ID of the new user that we obtain from the front end through firebase
      - ISBN: the ISBN number of the book we want to store
      - bookName: The name of the book you are storing
    - RES:
      - updated document of the user in the form as documented by schema file

  - PATCH users/:uid/aboutMe

    - REQ:
      - uid: unique ID of the new user that we obtain from the front end through firebase
      - aboutMe: string, whatever the user submits to be part of their profile description
    - RES:
      - updated document of the user in the form as documented by schema file

  - DELETE users/:uid/ISBN/:ISBN
    - REQ:
      - uid: unique ID of the new user that we obtain from the front end through firebase
      - ISBN: the ISBN number of the book we want to store
    - RES:
      - updated document of the user in the form as documented by schema file

### Installation

Run the following commands in order:  
```
npm install
```
```
npm run
```

Server should be up and running, ready to accept traffic from <a href="https://github.com/Blue-Ocean-Slytherin/Reading-Rainforest-FrontEnd/">our front end appplication</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributions

<br />
Sean Young: Update Search to partial match | User Routes
<br />
Johnny Ho:
<br />
David Garcia: Search Related Routes | MongoDB | Controller-Model Design
<br />
Andy Ho:
<br />
Paul Ko:
<br />
Aaron Yabut: Home Page Routes

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/aaron-yabut/)](https://www.linkedin.com/in/aaron-yabut/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/Aaronyabut)](https://github.com/Aaronyabut) 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Blue-Ocean-Slytherin/Reading-Rainforest-Backend.svg?style=for-the-badge
[contributors-url]: https://github.com/Blue-Ocean-Slytherin/Reading-Rainforest-Backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Blue-Ocean-Slytherin/Reading-Rainforest-Backend.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/Blue-Ocean-Slytherin/Reading-Rainforest-Backend.svg?style=for-the-badge
[stars-url]: https://github.com/Blue-Ocean-Slytherin/Reading-Rainforest-Backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/Blue-Ocean-Slytherin/Reading-Rainforest-Backend.svg?style=for-the-badge
[issues-url]: https://github.com/Blue-Ocean-Slytherin/Reading-Rainforest-Backend/issues
[license-shield]: https://img.shields.io/github/license/Blue-Ocean-Slytherin/Reading-Rainforest-Backend.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.PNG
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
