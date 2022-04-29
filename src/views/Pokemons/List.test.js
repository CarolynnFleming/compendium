import { render, screen, waitfor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PokemonList from './List';


describe('PokemonList', () => {
    it('renders a list of pokemon to the screen that are filterable', async () => {
        render(
            <MemoryRouter>
                <PokemonList />
            </MemoryRouter>
        );

        screen.getByText(/loading/i);

        await screen.findByText('pidgeot');

        
    })
})