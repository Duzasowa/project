### Installation

1. Install dependencies in both `/backend` and `/frontend` (`npm install`)
2. Run `npm start` command in both `/backend` and `/frontend` directories

### Important!

I want to apologize right away for arbitrarily changing some of the rules of the task, or rather, for doing everything in a new project without TypeScript.

Why did I do it? When building the logic in the project I was given, I sometimes got a 500 error after a request to the server. After reloading the page, it disappeared, but then reappeared again and again, causing the logic I had written to fail. I tried to find the problem, but in vain, and I lost some of my TypeScript skills. So I decided to redo it without wasting time. At the moment, when I write this post, I'm already repeating my knowledge of TypeScript. Thank you very much for the interesting task. I will be waiting for your reply

### New thing

Added the ability to sort by "airlineCode" parameter

### Goals

The solution should contain the following elements:

1. # Done Flights list page
   1. # Done . Flights list should be fetched on page enter (`GET /flights`)
   2. # Done . Each flight should have a button that will allow to display flight details (`GET /flights/:uuid`).
      You can display them in a modal or just expand the flight item - its up to you.
      Remember that all fields returned by this endpoint are optional.
   3. # Done Flights should appear sorted.
      Above the flights list there should be an input that will allow user to select sorting option (`Price` or `Departure time` - by departure time I mean `departure.dateTime` of the first `bound` in flight).
      By default flights should be sorted by `Price`
   4. # Done Each flight should have a button that will book a flight (`POST /flights { uuid }`)
   5. # Done If book action succeed then the user should be redirected to confirmation page
   6. # Done Keep in mind that all the endpoints may take some time to finish and may also throw an error and both of those states should be handled
   7. # Done(but without the desired UI) During implementation of flights list and details please keep in mind that the UI should be responsive.
      Breakpoints that we want you to use are provided below.
2. # Done Confirmation page
   1. # Done Just a simple page with a message that everything went fine without any calls to api
   2. # DOne This page should be created and added to the routing

### Breakpoints

```
Mobile: 375px -> 767px (Only 375px)
Tablet: 768px -> 1023px (Only 768px)
Desktop: >= 1024px (Only 1024px)
```

### Design guidelines

1. Use Typescript extensively - avoid using `any` or `unknown` types
2. Everything needed to complete this task is already installed but feel free to use any libraries that you want
3. If you have some ideas and willingness to improve end result with other features, please feel free

### Designs for single flight in list

1. [Mobile](https://xd.adobe.com/view/09f42c1b-013a-496d-8eeb-c25950b67142-5ca7/)
2. [Tablet](https://xd.adobe.com/view/09f42c1b-013a-496d-8eeb-c25950b67142-5ca7/screen/ea03ccc1-0982-4d28-b35a-5a625fa4b350/)
3. [Desktop](https://xd.adobe.com/view/09f42c1b-013a-496d-8eeb-c25950b67142-5ca7/screen/4492ce02-02ed-42d9-8dae-cb155d29dea1/)

### Link to airline logos

`https://d1ufw0nild2mi8.cloudfront.net/images/airlines/V2/srp/result_desktop/<AIRLINE_CODE_HERE>.png`
