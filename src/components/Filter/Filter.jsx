import css from './Filter.module.css';

const Filter = ({ filter, updateFilter }) => {
  console.log('f: ', filter);
  return (
    <div className={css.search}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={evt => updateFilter(evt.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
