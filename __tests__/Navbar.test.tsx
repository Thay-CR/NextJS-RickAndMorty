import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  it('Renders Navbar s text', () => {
    render(<Navbar />)
    const text1 = screen.getByText("Home")
    const text2 = screen.getByText("About")
    expect(text1).toBeInTheDocument()
    expect(text2).toBeInTheDocument()

  })
})