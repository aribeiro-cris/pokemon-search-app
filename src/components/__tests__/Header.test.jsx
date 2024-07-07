import { render, screen, cleanup } from "@testing-library/react"
import Header from "../Header.jsx";

afterEach(cleanup);

describe(Header, () => {

    test("Header display correct logo image", () => {
        render(<Header />);
        const logoElement = screen.getByAltText("pokemon-logo");
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute("src", "./pokemon-search-app/images/pokemon.svg");
    });

    test("Should display text content on Header component", () => {
        render(<Header/>);
        const headerElement = screen.getByTestId("render-1");
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveTextContent(`Pokémon, gotta catch'em all`);
    });
})