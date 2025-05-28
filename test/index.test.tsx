import Home from '@/app/page'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Home Page', () => {

  it('renders home page', () => {
    render(<Home />)
    expect(screen.getByText('NESS')).toBeDefined()
  })
  
}) 