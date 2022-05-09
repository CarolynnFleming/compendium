import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

describe('PokemonCard', () => {
    it('renders a pokemon to the screen', () => {
        render(
            <PokemonCard />
        );

        const name = screen.getByAltText('pokemon')
        expect(name).toBeInTheDocument()
    })
})