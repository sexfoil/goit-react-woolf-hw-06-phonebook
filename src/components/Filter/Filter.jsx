import css from './Filter.module.css';

const Filter = ({ filter, updateFilter }) => {
  return (
    <div className={css.search}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={evt => {
          const value = evt.target.value;
          console.log('f:', filter);
          console.log('v:', value);

          return updateFilter(value);
        }}
      ></input>
    </div>
  );
};

export default Filter;
