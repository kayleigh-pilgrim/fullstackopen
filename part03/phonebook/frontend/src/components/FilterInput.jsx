const FilterInput = ({ filter, setFilter }) => {
  const onFilterChange = (e) => setFilter(e.target.value)

  return (
    <label>
      filter shown with <input value={filter} onChange={onFilterChange} />
    </label>
  )
}

export default FilterInput