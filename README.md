# neg

an app where people sign in and list out their negative attributes, and then others also who sign in get to list negative attributes of the person as well as well as comment negative things on that person's "wall."





## pages

this app is:

 - a web app written in typescript/react/tailwind
 - style wise its fun and colorful
 - - internal app pages have a white background
 - the public facing pages SSR
 - postgres for db
 - use whatever NLP nodejs think you can do for detecting negativity

### homepage

 - classic landing page, description, blah blah
 - "tell your friends just how shitty they are"
 - - "someone needs to tell them and that person is you and that time is now"
 - - this is a negativity-only site
 - - bring your full inner hater
 - - inspired by 50 cent
 - - we use AI to ensure only negative communication occurs
 - has signup/login features


### signup/login

 - takes instagram oauth only
 - on sucessful signup leads to signup intro flow page

### signup intro flow page

 - says something negative to the user about waiting while they sign up
 - pulls in their last 10 instagram posts
 - with an animation flow, shows
 - - one of their pictures centered
 - - says something to "roast" or negative to make fun of the person
 - ends by redirecting w/ animation to the profile page

### profile page (me)

 - tries to get data from oauth to fill out
 - image, name, city, state, country
 - you get to list what you think is your own shitty parts
 - - this is a colorful pils-like preselect common ones or type in your own
 - you can name something shitty you did today as your status
 - view of how others have rated you (you can see counts on how many times it happened plus list of who said it)
 - links to view public profile

### profile page (public)

 - all the info
 - ability to create + edit your own list of this person's shitty parts
 - see their publically sum'd negative parts
 - - see who said it like instagram likes
 - ability to post on their wall a negative comment
 - other people can post on your wall in response to negative comments
 - the person who's profile it is cannot delete or modify others comments or posts


### terms of service

### any other required legal blah blah

### ads

all pages have room for ads in sidebar and footer