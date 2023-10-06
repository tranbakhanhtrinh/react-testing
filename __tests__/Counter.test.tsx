import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from '@/components/Counter/Counter';

describe('Counter component', () => {
  it('should render correctly', () => {
    render(<Counter />);
    const countEle = screen.getByRole('heading');
    expect(countEle).toBeInTheDocument();
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButton).toBeInTheDocument();
  });

  it('should render a count of 0', () => {
    render(<Counter />);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('0');
  });

  it('should render a count of 1 after clicking the increment button', async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.click(incrementButton);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('1');
  });

  it('should render a count of 2 after clicking the increment button twice', async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.dblClick(incrementButton);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('2');
  });

  it('should render a count of 10 after clicking the set button', async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole('spinbutton');
    await user.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);
    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    await user.click(setButton);
    const headingEle = screen.getByRole('heading');
    expect(headingEle).toHaveTextContent('10');
  });

  it('should focus on elements in the right order when clicking tab button', async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
