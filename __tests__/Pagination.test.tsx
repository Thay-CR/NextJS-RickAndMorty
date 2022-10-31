import { render, screen } from '@testing-library/react'
import Pagination from '@/components/Pagination'

describe('Pagination', () => {
  it('Renders some Pagination numbers', () => {
    render(<Pagination next={'3'} prev={'1'} current={2} pages={42} />)
    const text1 = screen.getByText("1")
    const text2 = screen.getByText("2")
    const text3 = screen.getByText("3")
    const text4 = screen.getByText("30")
    expect(text1).toBeInTheDocument()
    expect(text2).toBeInTheDocument()
    expect(text3).toBeInTheDocument()
    expect(text4).toBeInTheDocument()

  })
})