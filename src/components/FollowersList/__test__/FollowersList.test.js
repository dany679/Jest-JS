import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import FollowersList from '../FollowersList';


const MockFollowersList = ()=>
    (
    <BrowserRouter>
    <FollowersList />    
    </BrowserRouter>
  )


describe('FollowersList', () => {
  it('should be able to get the user mocked and and render', async () => {
    render(<MockFollowersList />);
    const followerArray= await screen.findAllByTestId(/follower-item-/i)
    expect(followerArray).toHaveLength(1)
  });
})


