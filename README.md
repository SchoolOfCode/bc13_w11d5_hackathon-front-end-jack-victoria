# Hackathon - Deployed Full Stack Challenge 💪🏆🪝

Your challenge is to ideate, plan, and build a full stack app that includes the requirements below. You can use this repository for your front end. For your back end, one person in your team can create another repository for the back end and add your pair/team as contributors. (Pop a link to your team's back end repository in this readme.)

What you build is up to you - use the steps that we've learned throughout the course to ensure your MVP is well-planned and managable for a day-long project (with a list of stretch goals to dip into as well!).

Start simple and get your first iteration MVP of your app working as your first priority, and then iterate!

## Requirements

- Deployed front and back ends that talk to each other
- Use of the `useContext` hook somewhere in your app
- Use of at least one custom hook somewhere in your app


## PLAN ## 

Create an GROTTO or NOTTO app for rating christmas jumper drips.

#BACKEND
    - Make a database 
    - Set up database with simple tables: 
        - JUMPERS: ID, and image URL of a christmas jumper and numeric IDs.
        - BOOTCAMPERS: list of names of bootcampers and numeric IDs.

    - ***Get pic of Gabe*** and a couple of other bootcampers 
    - set up backend:
        - 'get by ID' request route handler to backend that retrieves a jumper image by id
        - A second one sent to a different rout? e.g. api/heads
        The necessary models
        - deploy it on RENDER

#FRONTEND
    - Get images of bootcampers/people and store them in the front end
     - GENERATE RANDOM NUMBER hook - this will pick a number that gets sent to the API. This goes into handlechange (?)
    - Create button: get new jumper - this sends getByID request (using random number) to the backend and returns a random jumper image
    - Create button: get new person - this sends getByID request to the backend (using random number) and returns a random person NAME. Which will conditionally render an image using the pictures stored in the front end
    - Create button: toggle theme
    - UseContext to add toggleable theme - XMAS STYLE BABYY
    - Deploy front end
    - Set up theme toggle - USECONTEXT - red font and a festive border on all the headings
    - CSS
    - stretch: make API fetch custom hook
    - user stories
   
    CUSTOM HOOKS: number generator, and fetch
    USE CONTEXT: theme toggle


    APP

        #HEADER

        #IMAGE-DISPLAY

            #HEAD-PIC
                useState: head (stretch goal: put this in a custom hook!)
            #JUMPER-PIC
                useState: jumper (stretch goal: put this in a custom hook!)

        #HEAD-BUTTON
        #JUMPER-BUTTON

        #TOGGLE-THEME-BUTTON

    COMPONENTS:
        -app
        -header
        -imageDisplay
        -image
        -gameButton
        -toggleButton
        -instructions


// PLAN!

- set up 'handleClick' functions for each button - in this function there will be: use randomiser hook, use fetch hook kwith number generated from randomizer, and then set the jumper/head reference ID state. Pass this down to each button as its handleclick

- set up conditional rendering in:
    - jumper card just render an image with the URL that's passed down through state
    - head card - render the specific image HEAD stored in the image file that corresponds with the HEAD, passed down through the HEAD state

- Make sure the fetches are directed to the correct router on the backend

- deploy front end

- deploy backend 

- crack open a cold one gang you all deserve it!!!
