import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

afterEach(cleanup);

describe('unofficial menu behavior', () => {
  it('searches across all three menu languages and exposes a resettable empty state', async () => {
    const user = userEvent.setup();
    render(<App />);

    const search = screen.getByRole('searchbox', { name: 'Search the trilingual menu' });
    await user.type(search, 'Paça');

    expect(screen.getByText('Traditional Head Stew')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('1 dish');
    expect(screen.queryByText('Pasta with Butter')).not.toBeInTheDocument();

    await user.clear(search);
    await user.type(search, 'definitely-not-a-dish');
    expect(screen.getByRole('heading', { name: 'No dishes match “definitely-not-a-dish”' })).toBeInTheDocument();
    expect(screen.getAllByRole('status').map((node) => node.textContent).join(' ')).toContain('0 dishes');

    await user.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(screen.getByText('Traditional Head Stew')).toBeInTheDocument();
  });

  it('maintains an accurate planning list and presents it as a focus-managed dialog', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Add Traditional Head Stew to planning list' }));
    const cartTrigger = screen.getByRole('button', { name: 'Open planning list: 1 item, 250 Lek' });
    await user.click(cartTrigger);

    const dialog = screen.getByRole('dialog', { name: 'Shporta / Cart / Sepet' });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close planning list' })).toHaveFocus();
    expect(dialog).toHaveTextContent('Planning list · not an order');
    expect(dialog).toHaveTextContent('does not place orders');

    await user.click(screen.getByRole('button', { name: 'Increase Traditional Head Stew' }));
    expect(dialog).toHaveTextContent('250 Lek x 2 = 500 Lek');
    expect(dialog).toHaveTextContent('500 Lek');

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open planning list: 2 items, 500 Lek' })).toHaveFocus();
  });
});
