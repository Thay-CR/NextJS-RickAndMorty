import { render, screen } from '@testing-library/react'
import Card from '@/components/Card'


describe('Card', () => {
  it('Renders a Button with word Details', () => {
    render(<Card results={'test'} item={'test'} character={'test'} />)
    const text = screen.getByText("Details")
    expect(text).toBeInTheDocument()
  })
})