import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
    it('should navigate between list and detail views', async () => {
        render(
            <MemoryRouter initialEntries={['/pokemons']}>
                <App />
            </MemoryRouter>
        );
        screen.debug();

        screen.getByText(/view list/i);

    })
})