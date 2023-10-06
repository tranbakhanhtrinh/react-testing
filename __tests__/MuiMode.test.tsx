import { MuiMode } from '@/components/MuiMode/MuiMode';
import { render, screen } from '../test-utils';

describe('MuiMode Component', () => {
  it('should render text correctly', () => {
    render(<MuiMode />);
    const headingEle = screen.getByRole('heading');
    expect(headingEle).toHaveTextContent('dark mode');
  });
});
