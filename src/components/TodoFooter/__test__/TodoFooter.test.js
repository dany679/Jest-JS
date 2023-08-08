import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import TodoFooter from '../TodoFooter';


const MockTodoFooter = ({numberOfIncompleteTasks})=>
    (
    <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
  )

describe('Footer', () => {
  it('plural task  when the number of incomplete is more then 1 or 0', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={0}/>);
    const paragraphFooterElement0 = screen.getByText(/0 tasks/i)
    expect(paragraphFooterElement0).toBeVisible()

    render(<MockTodoFooter numberOfIncompleteTasks={10}/>);
    const paragraphFooterElementMoreThan1 = screen.getByText(/10 tasks/i)
    expect(paragraphFooterElementMoreThan1).toBeVisible()
  });
  it('singular task when the number of incomplete is 1', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const paragraphFooterElement1 = screen.getByText(/1 task/i)
    expect(paragraphFooterElement1).toContainHTML("p")
  });
  it('link Followers', async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
    const linkElement = screen.getByRole("link",{name:"Followers",})
    expect(linkElement.href).toContain("/followers");
  });
})


