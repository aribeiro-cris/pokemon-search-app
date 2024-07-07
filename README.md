# Pokémon Search App

React web page that allows users to display a pokémon when searching by name and navigate through Previous/Next button. The app also includes autocomplete suggestions and caching mechanism to enhance performance and responsiveness.

## Live Application URL

The application was deployed on the following link: https://aribeiro-cris.github.io/pokemon-search-app/

## Main features

- Search by Pokémon Name: Enter a Pokémon name in the search box to display detailed information such as ID, name, sprite image, weight, height, and types.

- Navigation Buttons: Navigate through Pokémon entries using the "Previous" and "Next" buttons. This allows you to sequentially view Pokémon details based on their ID number.

- Autocomplete Search: As you type in the search box, the app suggests matching Pokémon names. Clicking on a suggestion instantly displays the corresponding Pokémon details.

- Caching Mechanism: Utilizes `useMemo` to cache fetched Pokémon data locally, ensuring that repeated searches for the same Pokémon avoid unnecessary API requests. This enhances performance by reducing network traffic and improving responsiveness.

## Prerequisites 

1. Refer to https://nodejs.org/en/ to install node.js on your machine.

2. Clone the repository to your local machine:

```
    git clone git@github.com:aribeiro-cris/pokemon-search-app.git
```

## Running the application

3. Navigate to the project directory:

```
cd pokemon-search-app
```
4. Install dependencies:
```
npm install
```
5. Start the development server:
```
npm run dev
```
The application will be running on http://localhost:5173/pokemon-search-app.

## Testing 

The testing was done using the Jest testing framework. Jest is designed to work with React applications easily and it provides features such as render, fireEvent, and screen from '@testing-library/react' that simplify component testing. Use the following command to run the tests:

```
npm test
```

## Dependencies
- Vite
- React
- Pokémon API: https://pokeapi.co/
