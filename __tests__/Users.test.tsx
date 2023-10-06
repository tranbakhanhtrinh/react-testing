import { render, screen } from '@/test-utils';
import { Users } from '@/components/Users/Users';
import { server } from '@/mocks/server';
import { rest } from 'msw';

describe('Users Component', () => {
  it('should render correctly', () => {
    render(<Users />);
    const textEle = screen.getByText('Users');
    expect(textEle).toBeInTheDocument();
  });

  it('should render a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(3);
  });

  it('should render error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500));
        },
      ),
    );
    render(<Users />);
    const error = await screen.findByText('Error fetching users');

    expect(error).toBeInTheDocument();
  });
});
