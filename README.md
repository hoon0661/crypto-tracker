
# Crypto Tracker
This project shows information about various cryptocurrency that includes prices and trends, and was to learn and utilize my knowledge in React, Typescript and Styled-components. 

App Link: https://hoon0661.github.io/crypto-tracker/

## Features

- Display current time.
- Display weather based on user's location (with user's permission)
- Add & delete todo list (stored in browser local storage)
- Deployed using Github pages.


## Technology Used

- React 
- Typescript
- Styled Components
- React Query
- Apexcharts.js
## API Used
- Coinpaprika API 1.6.1 (https://api.coinpaprika.com/) 
- Crypto Icon API (https://cryptoicon-api.vercel.app/)
## Lessons Learned

Typescript is strongly typed programming language that builds on Javascript, the key functionality is to check type of data before code's run, which is similar to Java in that data must be type-defined such as int, String, List, etc, so it ensures that only defined types can be used in codes, which Javascript doesn't support. Similar type-checking tool candidate is Proptypes, but it shows errors on colsole after code run. 

React Query helps reduce amount of codes to write. Before using Query, I used to use useEffect and useState to perform fetching on loading and saving data in states. However, React Query helped me write codes to perform the same functionality without using useEffect and useState hooks to load data. Another cool thing about React query is that it can perform all methods(GET, POST, ...) and also so much information about query result (ex. if data is loading, if there is an error, etc) and also save data in cache, so that apps don't hit APIs again upon switching web pages.  



