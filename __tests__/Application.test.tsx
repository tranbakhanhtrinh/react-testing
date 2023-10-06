import { Application } from '@/components/Application/Application';
import { render, screen } from '@testing-library/react';
describe('Application', () => {
  it('should render correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      // name: 'Job application form'
      level: 1, // h1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      // name: 'Section 1'
      level: 2, //h2
    });
    expect(sectionHeading).toBeInTheDocument();

    // const paragraphEle = screen.getByText('All fields are mandatory')
    // const paragraphEle = screen.getByText(/mandatory/)
    // const paragraphEle = screen.getByText(/all/i)
    // const paragraphEle = screen.getByText(/^All fields are mandatory$/i)
    // const paragraphEle = screen.getByText((content) => content.includes('are'))
    // const paragraphEle = screen.getByText((content) => content.startsWith('All'))
    const paragraphEle = screen.getByText((content) =>
      content.endsWith('mandatory'),
    );
    expect(paragraphEle).toBeInTheDocument();

    const closeEle = screen.getByTitle('close');
    expect(closeEle).toBeInTheDocument();

    const imageEle = screen.getByAltText('a person with a laptop');
    expect(imageEle).toBeInTheDocument();

    const customEle = screen.getByTestId('custom-element');
    expect(customEle).toBeInTheDocument();

    const nameEle = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameEle).toBeInTheDocument();

    const nameEle2 = screen.getByLabelText('Name', {
      selector: 'input',
    });
    expect(nameEle2).toBeInTheDocument();

    const nameEle3 = screen.getByPlaceholderText('Fullname');
    expect(nameEle3).toBeInTheDocument();

    const nameEle4 = screen.getByDisplayValue('Trinh');
    expect(nameEle4).toBeInTheDocument();

    const bioEle = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioEle).toBeInTheDocument();

    const jobLocationEle = screen.getByRole('combobox');
    expect(jobLocationEle).toBeInTheDocument();

    const termsEle = screen.getByRole('checkbox');
    expect(termsEle).toBeInTheDocument();

    const termsEle2 = screen.getByLabelText(
      'I agree to the terms and conditions',
    );
    expect(termsEle2).toBeInTheDocument();

    const submitButtonEle = screen.getByRole('button');
    expect(submitButtonEle).toBeInTheDocument();

    expect(submitButtonEle).toBeDisabled();
  });
});
