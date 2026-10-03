const Filter = ({ filter, setFilter }) => {
  const handleChange = (e) => setFilter(e.target.value)
    
  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Filter countries"
    />
  )
}

export default Filter