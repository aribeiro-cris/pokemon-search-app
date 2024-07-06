import Search from "../Search.jsx";
import {cleanup, fireEvent, render, screen, waitFor} from "@testing-library/react";
//import { rest } from 'msw';
//import {setupServer} from 'msw/node';
//import 'web-streams-polyfill';

afterEach(cleanup);

// Mock fetch API response to give a specific pokemon - ditto
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 132,
        name: 'ditto',
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' },
        weight: '40',
        height: '3',
        types: 'normal'
      })
  })
);

// Mock PokemonDisplay component to have ditto info 
jest.mock('../PokemonDisplay.jsx', () => () => (
  <div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="sprite image" />
      <p>Pokémon: Ditto</p>
      <p>ID: 132</p>
      <p>Weight: 40</p>
      <p>Height: 3</p>
      <p>Types: Normal</p>
  </div>
));

describe(Search, () => {
  /*
  const server = setupServer(
    rest.get("https://pokeapi.co/api/v2/pokemon/ditto", async(req,res, ctx) => {
      return res(
        ctx.json([{
          id: 132,
          name: 'ditto',
          sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' },
          weight: '40',
          height: '3',
          types: 'normal'
        }])
      )
    })
  );

  beforeAll(server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  */
  test('Display textbox in Search component', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText('Type to search..');
    expect(inputElement).toBeInTheDocument();
  });

  test('updates PokemonDisplay when selecting a pokemon name on the textbox', async () => {
      render(<Search />);
    
      fireEvent.change(screen.getByPlaceholderText('Type to search..'), {
        target: { value: 'ditto' }
      });
    
      fireEvent.click(screen.getByText('Search'));
      
      await waitFor(() => {
        expect(screen.getByText('Pokémon: Ditto')).toBeInTheDocument();
        expect(screen.getByText('ID: 132')).toBeInTheDocument();
        expect(screen.getByText('Weight: 40')).toBeInTheDocument();;
        expect(screen.getByText('Height: 3')).toBeInTheDocument();
        expect(screen.getByText('Types: Normal')).toBeInTheDocument();
        expect(screen.getByAltText('sprite image')).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png');
        expect(screen.queryByText('Pokémon Ditto not found. Please try again')).not.toBeInTheDocument();
      })
  }); 
});