import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const mockSetTodo = jest.fn()
const MockTodo = ({numberOfIncompleteTasks})=>
    (
    <BrowserRouter>
    <Todo numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
  )
  const AddTodo = (listTodoToAdd)=>
  {
    const AddInputElement = screen.getByPlaceholderText(/Add a new task here.../i)
     const AddInputButton = screen.getByRole("button",{name :/Add/i})
    listTodoToAdd.forEach(todoToAdd => {
      fireEvent.change(AddInputElement,{ target:{value:todoToAdd}});
      fireEvent.click(AddInputButton);
      });
   }
describe('Todo', () => {
  it('should be able to add new task', async () => {
    render(<MockTodo todos={""} setTodos={mockSetTodo}/>);
    AddTodo(["new value2"])
    const divArrayElement = screen.getByText(/new value2/i)
    expect(divArrayElement).toBeInTheDocument()
  });
  it('should not be able to add new task whit no name', async () => {
    render(<MockTodo todos={""} setTodos={mockSetTodo}/>);
    AddTodo([""])
    const paragraphFooterElement = screen.getByText(/0 tasks/i)

    expect(paragraphFooterElement).toBeInTheDocument()
  });
  it('should have the numbers of tasks equal the number of valid tasks add', async () => {
    render(<MockTodo todos={""} setTodos={mockSetTodo}/>);
    AddTodo(["", "lets go code"," this is the second task valid"])
    const todoArray = screen.getAllByTestId("todoListTestId")
    const paragraphFooterElement = screen.getByText(/2 tasks/i)
    expect(paragraphFooterElement).toBeInTheDocument()
    expect(todoArray.length).toBe(2)
  });
})


