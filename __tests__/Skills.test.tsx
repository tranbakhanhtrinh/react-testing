import { render, screen, logRoles } from '@testing-library/react';
import Skills from '@/components/Skills/Skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Javascript'];

  it('should render correctly', () => {
    render(<Skills skills={skills} />);
    const listEle = screen.getByRole('list');
    expect(listEle).toBeInTheDocument();
  });

  it('should render a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemEle = screen.getAllByRole('listitem');
    expect(listItemEle).toHaveLength(skills.length);
  });

  it('should render Login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginButton).toBeInTheDocument();
  });

  it('should not render Start Learning button', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  it('should render Start learning button eventually', async () => {
    render(<Skills skills={skills} />);
    // const view = render(<Skills skills={skills} />)
    // logRoles(view.container)
    // screen.debug()
    const startLearningBtn = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000, //default 1000ms
      },
    );
    // screen.debug()
    expect(startLearningBtn).toBeInTheDocument();
  });
});
