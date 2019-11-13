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

As a team, we gained experience with large-scale SQL manipulation, with utilizing cron jobs, with cross-component Material-UI, and with building efficient data compatibility layers.


# Client Deliverables
Our team developed the following user stories to track deliverables and meet the expectations of our client:

#### User Stories
* As a user I should see suggestions for activities to do during my free time
* As a user I would like to see suggestions for what to do during the next three days
* As a user I do not want to be overwhelmed by choices on the initial visit to the page
* As a user I want an application that integrates with my Google Calendar
* As a user I do not want to see events that occur during times I am busy
* As a user I should be able to click a button to add an event directly to my calendar
* As a user I should be able to indicate my preference for what types of events I do and do not want to see
* As a user I should be able to indicate times I am unavailable that are not already on my Google Calendar
* As a user I should be able to reject a suggested event and be presented with a different event for that day
* As a user I should be able to browse all events on a given day
* As a user I should be able to browse all events available on all days

## Minimum Viable Product (MVP)

The MVP of the app retrieves events from multiple APIs, and displays events which fit users' free time availability and category selection preferences. Users can choose to add an event to their calendar, to reject an event from the list, and to modify their categories in settings.

### How the App Works:
![GIF OF DEMO](https://media.giphy.com/media/Yq8XBJUsoPTHaFkc7p/giphy.gif)

![IMG OF SCHEMA](https://raw.githubusercontent.com/hratx-blue-ocean/blue512/development/db/Schema.png)


### Development Workflow
Our team managed workflow and responsibilities by utilizing Agile methodology. [Trello](https://trello.com/b/G4xL0tnR/cityscout) was used to to keep track of tickets. All development work was specifically associated with a ticket. At any point in time the status of a ticket could be ascertained by finding it on the board. After our daily standup meeting we assessed the status of our application then updated and reassigned tickets based on workload.

### Version Control and Continuous Integration
Our team utilized git feature branch workflow to ensure our master branch always contained working code. Our master and development branches blocked direct pushes of new code. Instead, developers would create feature branches off the development branch, then create pull requests into development upon completion of that feature.

All pull requests required review by another developer prior to merging new features into development. Our team utilized Travis CI for continuous integration. We integrated Travis with GitHub, allowing reviewers to easily ensure the branch they were reviewing had passed our testing suite. Pull requests with failed tests were barred from merging, and required the developer who opened the request to resolve the issue. The development branch was only merged into master after significant testing and approval by the entire team. This ensured our deployed build was never broken.
