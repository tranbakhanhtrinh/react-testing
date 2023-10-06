// Greet should render the text hello and if a name is passed into the component
// It should render hello followed by the name

import { render, screen } from '@testing-library/react';
import Greet from '@/components/Greet/Greet';

describe('Greet Component', () => {
  it('should render Hello text', () => {
    render(<Greet />);
    const ele = screen.getByText(/hello/i);
    expect(ele).toBeInTheDocument();
  });

  it('should render with a name', () => {
    render(<Greet name="Trinh" />);
    const textEle = screen.getByText('Hello Trinh');
    expect(textEle).toBeInTheDocument();
  });
});
