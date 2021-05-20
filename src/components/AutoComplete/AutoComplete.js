import React from 'react';
import './AutoComplete.css';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputValue: '',
      predictions: []
    };
  }

  componentDidMount = () => {
    this.fetchData();
  }

  fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  filterData = async (evt) => {
    evt.preventDefault();
    const { data } = this.state;
    const value = evt.target.value;
    const predictions = !!value ? await data.filter(prediction => prediction.name.includes(value)) : [];

    this.setState({ inputValue: value, predictions });
  }

  renderItem = (name, index) => {
    const { inputValue } = this.state;
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

  renderList = () => {
    return (
      <ul className="autocomplete__predictions">
        {this.state.predictions.map(({ name }, index) => this.renderItem(name, index))}
      </ul>
    )
  }

  render() {
    const { inputValue, predictions } = this.state;
    const list = !!predictions.length && this.renderList();

    return (
      <section className="autocomplete">
        <input
          className="autocomplete__input"
          onChange={this.filterData}
          value={inputValue}
        />

        {list}
      </section>
    );
  }
}
