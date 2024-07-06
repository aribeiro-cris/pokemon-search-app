import { render, screen, cleanup, fireEvent, getByRole } from "@testing-library/react"
import Navigation from "../Navigation.jsx";

afterEach(cleanup);

//mocking
const mockFetchPokemonById = jest.fn();
const mockSprite = 'mock-sprite'

describe(Navigation, () => {
    test ('Display previous ID pokemon when clicking Previous button', () => {
        render(<Navigation sprite={mockSprite} id={25} fetchPokemonById={mockFetchPokemonById} />);
        const previousBttn = screen.getByRole("button", {name: 'Previous'});
        fireEvent.click(previousBttn);
        expect(mockFetchPokemonById).toHaveBeenCalledWith(24);
    })
    
    test ('Display next ID pokemon when clicking Next button', () => {
        render(<Navigation sprite={mockSprite} id={25} fetchPokemonById={mockFetchPokemonById} />);
        const nextBttn = screen.getByRole("button", {name: 'Next'});
        fireEvent.click(nextBttn);

        expect(mockFetchPokemonById).toHaveBeenCalledWith(26);
    })

    test ('Should not display previous button when pokemon ID equals 1', () => {
        render(<Navigation sprite={mockSprite} id={1} fetchPokemonById={mockFetchPokemonById} />);
        const previousBttn = screen.queryByRole("button", {name: 'Previous'});

        expect(previousBttn).toBeNull();
        expect(previousBttn).not.toBeInTheDocument();
    });
    
    test ('Should not display next button when pokemon ID equals 1025', () => {
        render(<Navigation sprite={mockSprite} id={1025} fetchPokemonById={mockFetchPokemonById} />);
        const nextBttn = screen.queryByRole("button", {name: 'Next'});

        expect(nextBttn).toBeNull();
        expect(nextBttn).not.toBeInTheDocument();
    });

});