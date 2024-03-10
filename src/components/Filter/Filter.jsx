import css from './Filter.module.css';

const Filter = ({ filter, updateValue }) => {
  return (
    <div className={css.search}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={evt => updateValue(evt.target.value)}
      ></input>
    </div>
  );
};

export default Filter;
