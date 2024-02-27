import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Jest', () => {
  it('should render correctly', () => {
    render(<Button>Teste</Button>)

    expect(screen.getByRole('button', { name: /Teste/i })).toBeInTheDocument()
  })

  it('should trigger the onClick prop on click', () => {
    const onClick = jest.fn()

    render(<Button onClick={onClick}>Hello world</Button>)

    const button = screen.getByRole('button', { name: /hello world/i })

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
