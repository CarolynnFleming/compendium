import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
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
await waitForElementToBeRemoved(screen.getByText(/loading/i)); 
        await screen.findByText('pidgeot', undefined, {timeout:3000});
        const search = screen.getByPlaceholderText('Find a Pokemon');

        userEvent.type(search, 'clefairy');
        screen.debug();


        return waitFor(() => {
            const result = screen.getAllByRole('listitem');
            expect(result.length).toEqual(1);
            expect(result[0].textContent).toEqual('clefairy');
        }); 
    });
});