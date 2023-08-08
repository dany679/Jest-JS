import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodo = jest.fn()

describe('AddInput', () => {
  it('should be able to to see the input new tasks', async () => {
    render(<AddInput todos={""} setTodos={mockSetTodo}/>);
    const AddInputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(AddInputElement).toBeVisible()
  });
  it('should be able to change the name', async () => {
    render(<AddInput todos={""} setTodos={mockSetTodo}/>);
    const AddInputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(AddInputElement , {target :{ value: "new value"}})
    expect(AddInputElement.value).toBe('new value')
  });
  it('clear after click', async () => {
    render(<AddInput todos={""} setTodos={mockSetTodo}/>);
    const AddInputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(AddInputElement , {target :{ value: "new value"}})
    const AddInputButton = screen.getByRole("button" , {name: /Add/i})
    fireEvent.click(AddInputButton)
    expect(AddInputElement.value).toBeFalsy()
  });
 
})


