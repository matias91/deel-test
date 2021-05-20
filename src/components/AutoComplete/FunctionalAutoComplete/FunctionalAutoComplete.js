// @Vendors
import React, { useEffect, useState } from 'react';

export default function FunctionalAutoComplete() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // I decided to use https://jsonplaceholder.typicode.com/ to fetch the mocked data
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json));
  }

  const filterData = async (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    const predictions = !!value ? await data.filter(prediction => prediction.name.includes(value)) : [];

    setInputValue(value)
    setPredictions(predictions)
  }

  const renderItem = (name, index) => {
    const val =
      name.slice(0, name.indexOf(inputValue)) +
      "<b>" + inputValue + "</b>" +
      name.slice(
        name.indexOf(inputValue) + inputValue.length,
        name.length
      );

    return (
      <li className="autocomplete__prediction" key={`${name}-${index}`}>
        <span dangerouslySetInnerHTML={{ __html: val }} />
      </li>
    );
  }

  const renderList = () => {
    return (
      <ul className="autocomplete__predictions">
        {predictions.map(({ name }, index) => renderItem(name, index))}
      </ul>
    )
  }

  const list = !!predictions.length && renderList();

  return (
    <section className="functional-autocomplete">
      <h3>Functional Component AutoComplete</h3>
      <input
        className="autocomplete__input"
        onChange={filterData}
        value={inputValue}
      />

      {list}
    </section>
  );
}
