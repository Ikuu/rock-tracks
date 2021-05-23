# Rock Tracks

## Project Makeup

`/app` contains setup files for redux
`/components` contains purely presentational reusable components
`/features` contains components that directly interact with the store or perform logic
`/utils` contains reusuable utility functions

## How To Use

Install: `npm install`
Run: `npm start`
Test: `npm run test`
Cypress: `npm run cypress`

## Improvements

- Actual UI
- Search bar to supply a search term
- Ability to filter data
- Use music preview to let people listen to track
- Pagination, though not sure if the API allows this
- Filter songs, only show of a certain length or price

## Thoughts

While it was mentioned that the UI wasn't being tested, would have liked to have spent more time on it. Instead I've given a glimpse of how I would set the project up and manage components.

As I mentioned via email and commented in the code, the URL I was given for the endpoint was incredibly brittle for me. It would fetch the data OK using the curl command, but wouldn't do it in the app or through a browser. Sometimes it would fetch OK if I refreshed the app, but it was completely random.
