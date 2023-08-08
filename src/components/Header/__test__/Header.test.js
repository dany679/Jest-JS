import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header test GET', () => {
  it('the header is h1', async () => {
    render(<Header title={"title"}/>);
    const headerElement = screen.getByRole("heading", {level: 1 , name: "header"});
    expect(headerElement).toBeInTheDocument();
  });
  
  test('correct title', () => {
    render(<Header title={"the title test"}/>);
    const headerElement = screen.getByText(/the title test/i);
    expect(headerElement).toBeInTheDocument();
  });
  it('get by title header in h1', async () => {
    render(<Header title={"the title test"}/>);
    const headerElement = screen.getByTitle("header");
    expect(headerElement).toBeInTheDocument();
  });
  
  it('the header by ID', async () => {
    render(<Header title={"title"}/>);
    const headerElement = screen.getByTestId("test-1")
    expect(headerElement).toBeInTheDocument();
  });


  it('the all elements header',  () => {
    render(<Header title={"title"}/>);
    const headerElements =  screen.getAllByRole("heading");
    expect(headerElements.length).toBe(2)
  });
  
  it('the subtitle is working', async () => {
    render(<Header title={"title"} subtitle={"this name"}/>);
    const headerElement = screen.getByRole("heading", {level: 2 , name: "this name"});
    render(<Header title={"title"} />);
    const headerElementEmpty = screen.getByRole("heading", {level: 2 , name: ""});
    expect(headerElement).toBeInTheDocument();
    expect(headerElementEmpty).toBeInTheDocument();
  });
})



describe('Header test FIND', () => {
  it('the header is h1 always async await', async () => {
    render(<Header title={"title"}/>);
    const headerElement = await screen.findByRole("heading", {level: 1 , name: "header"});
    expect(headerElement).toBeInTheDocument();
  });

})

describe('Header test Query', () => {
  it('the header is h1 not different from the title',  () => {
    render(<Header title={"title"}/>);
    const headerElement =  screen.queryByText(/the title test/i); // if this is get gonna give one error
    expect(headerElement).not.toBeInTheDocument();
  });
})