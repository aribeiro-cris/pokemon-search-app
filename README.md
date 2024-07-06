# Pokémon Search App

React web page that allows users to display a pokémon when searching by name. It also has a previous and next button that switch to the previous/next Pokémon, based on their id number.

## Live Application URL

The application was deployed on the following link:

## Main features

- Search by Pokémon Name: Enter a Pokémon name in the search box to display detailed information such as ID, name, sprite image, weight, height, and types.

- Navigation Buttons: Navigate through Pokémon entries using the "Previous" and "Next" buttons. This allows you to sequentially view Pokémon details based on their ID number.

- Autocomplete Search: As you type in the search box, the app suggests matching Pokémon names. Clicking on a suggestion instantly displays the corresponding Pokémon details.

- Caching Mechanism: Utilizes `useMemo` to cache fetched Pokémon data locally, ensuring that repeated searches for the same Pokémon avoid unnecessary API requests. This enhances performance by reducing network traffic and improving responsiveness.

## Prerequisites 

1. Refer to https://nodejs.org/en/ to install node.js in your machine.

2. Clone the repository to your local machine:

```
    git clone
```

## Running the application

3. Navigate to the project directory:

```
cd pokemon
```
4. Install dependencies:
```
npm install
```
5. Start the development server:
```
npm run dev
```
The application will be running on http://localhost:5173/.

## Testing 

The testing was done using Jest testing framework. Jest is designed to easily work with React applications and it provides utilities like render, fireEvent, and screen from '@testing-library/react' that simplify component testing. To run tests, use the following command:

```
npm test
```

## Dependencies
- Vite
- React
- Pokémon API: https://pokeapi.co/