# ![GIF OF DEMO](https://i.imgur.com/GN9pc1n.png)

# <p align="center">
  <img width="800" height="400" src="https://i.imgur.com/ExozDFV.png">
</p>

## About

*Resourcely* is a responsive web application that allows users to store and organize their url links that they want to hold on to. <br />

 Resources are organized into user created categories and have informative titles and descriptions attached to them.
 <br />

*Resourcely* utilizes a MySQL database that stores a user's categories and resources.

## Contributors

[Ethan Hogan](https://github.com/EthanHogan)

# Tech Stack 
*Resourcely* was built primarily with ReactJS on the front end and Node/Express on the backend.

## Technologies

<table style="width:60%">
  <tr>

  </tr>
  <tr>
    <td class="subheading">Frontend</td>
    <td><img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="65"/></td> 
    <td></td>
    <td></td>
    <td class="tech">(React)</td>
  </tr>
  <tr rowspan="2">
    <td class="subheading">Backend</td>
    <td><img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="75" /></td> 
    <td><img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="75" style="padding-left: 27px;"/></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/136px-MySQL.svg.png" width="50" style="padding-left: 15px;"/></td>
    <td class="tech">(Node Express MySQL)</td>
  </tr>
  
  <tr>
      <td class="subheading">Dev Tools</td>
      <td><img src='https://cityscoutssss.s3.us-east-2.amazonaws.com/kisspng-webpack-computer-icons-scalable-vector-graphics-re-webpack-svg-icon-transparent-amp-png-clipart-fre-5cb7987106ca27.6083469215555359850278.png' width="60"></td>
      <td><img src='https://i2.wp.com/endlessillusoft.com/wp-content/uploads/2017/01/babel.png?w=1280' width="80" style="padding-left: 27px"><img></td>
      <td></td>
      <td class="tech">(Webpack Babel)</td>
    </tr>
</table>


### Technical Challenges/Research
Some challenges encountered while building this app:
- Implementing React Hooks
- Chaining multiple asynchronous querys to fetch all necessary data for the applications intial request 
- Refactoring the front end to retrieve and fetch data from the API

# Deliverables
Developed the following user stories to track deliverables and meet the expectations of a minimum viable product within a 48 hour deadline:

#### User Stories
* As a user, I want to create categories to organize my resources
* As a user, I want to be able to navigate through my categories
* As a user, I want to add resources to my categories
* As a user, I want my resources to have titles and/or description labels attached to them
* As a user, I want my resources to take me to their attached link
* As a user, I want my categories to be sorted by most recently visited

## Minimum Viable Product (MVP)

The MVP of the application retrieves a user's categories and resources from a Node/Express API and then displays them accordingly. Users can freely add categories and then add resources to each category. Users add categories by supplying a category name. Users add resources by supplying a title (required), description (optional), and a link(required).

### Demo:
![GIF OF DEMO](https://media.giphy.com/media/eMJwl7eplUWvD9u0lN/giphy.gif)

### MySQL Database Schema:

![IMG OF SCHEMA](https://i.imgur.com/RFwlI75.png)

## Future Updates:
- Adding user authentication so that multiple users can interact with the application
- Deploying the application to make the app accessible to the web
- Adding mobile responsiveness
