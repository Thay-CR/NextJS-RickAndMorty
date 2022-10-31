import { render, screen } from '@testing-library/react'
import About from '@/pages/about'

describe('About', () => {
  it('Renders Page About', () => {
    render(<About />)
    const heading = screen.getByRole('heading', {
      name: /About this Project/i,
    })
    expect(heading).toBeInTheDocument()
  })
})