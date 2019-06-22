# User Interface and BFF for the K Container shipment solution

!!! abstract 
    This repository includes the user interface to support the demonstration of the end to end Reefer containe shipment process. It is done with Angular 8 with a Back end for front end server done in Nodejs. This is the only component of the solution that is not using publishing events. You will learn how to do test driven development with Angular, and the BFF pattern in action. 
    
This project is part of the Container shipment reference implementation as presented in [this project](https://ibm-cloud-architecture.github.io/refarch-kc).

## User stories to support

This project is in light development so the following user stories are in plan (or done):

- [x] As a fleet manager I want to login to the webapp to access the fleet management feature. Use eddie@email.com.
- [x] As a fleet manager I want to select one of the fleet to get the list of ships with their attributes in a table format, and plot the ship on a map at their respective position (latitude, longitude)
- [x] As a demoer I want to start ship movement so the ships move on the map
- [x] As a fleet manager I want to select one ship from the table of ships and present a detail view of it with its containers loaded in the boat
- [x] As a demoer I want to start the fire to container or heat wave or container down simulation from the detailed ship view
- [ ] As a demoer I want to see the message coming back from the streaming analytics about next best action from my simulation



## UI Development

This is a traditional Angular 7 app with the app.module.ts using `shared` and `features` modules. `Shared` is for UI generic widgets, while `features` are for supporting the UI specific components linked to the business logic. 
There is no login page yet, but the home page displays a set of tiles to support the demonstration of the full shipment process as illustrated in the figure below:

![](./kc-ui-home.png)

For the BFF code the server code is under the `server` folder and uses the standard patterns for expressjs middleware. The [readme file](./server/README.md) goes into the details on this implementation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1. The user interface features are under the features folder. We are using a TDD approach as described in [this note.](https://github.com/ibm-cloud-architecture/refarch-caseportal-app/blob/master/docs/tdd.md) The tests run with `ng test`. We also encourage to read the [angular.io testing guide](https://angular.io/guide/testing)


## Contribute

As this implementation solution is part of the Event Driven architeture reference architecture, the [contribution policies](https://github.com/ibm-cloud-architecture/refarch-kc-ui/blob/master/CONTRIBUTING.md) apply the same way here.

**Contributors:**

* [Jerome Boyer](https://www.linkedin.com/in/jeromeboyer/)
* [Hemankita Perabathini](https://www.linkedin.com/in/hemankita-perabathini/)

Please [contact me](mailto:boyerje@us.ibm.com) for any questions.