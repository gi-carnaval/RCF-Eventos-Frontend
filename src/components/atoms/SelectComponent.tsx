import React, { useState } from 'react'

const SelectComponent = () => {
  const [options, setOptions] = useState(['Opção 1', 'Opção 2'])
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
  }

  const handleAddOption = () => {
    if (selectedOption && !options.includes(selectedOption)) {
      setOptions([...options, selectedOption])
    }
  }

  return (
    <div>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="text-gray-70 bg-navy-60 px-5 py-2 rounded-lg"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleAddOption}>Adicionar Opção</button>
    </div>
  )
}

export default SelectComponent
