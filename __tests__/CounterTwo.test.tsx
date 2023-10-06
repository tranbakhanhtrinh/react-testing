import { render, screen } from '@/test-utils';
import { CounterTwo } from '@/components/Counter-two/CounterTwo';
import user from '@testing-library/user-event';

describe('CounterTwo Component', () => {
  it('should render correctly', () => {
    render(<CounterTwo count={0} />);
    const textEle = screen.getByText('Counter Two');
    expect(textEle).toBeInTheDocument();
  });

  it('should call handlers', async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    );
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    const decrementButton = screen.getByRole('button', {
      name: 'Decrement',
    });
    await user.click(incrementButton);
    await user.click(decrementButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
