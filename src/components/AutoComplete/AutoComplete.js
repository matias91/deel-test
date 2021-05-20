import React from 'react';
import './AutoComplete.css';

export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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
    const { data } = this.state;
    const value = evt.target.value;
    const predictions = !!value ? await data.filter(prediction => prediction.name.includes(value)) : [];

    this.setState({ predictions });
  }

  renderList = () => {
    return (
      <ul className="autocomplete__predictions">
        {this.state.predictions.map(({ name }, index) => <li key={`${name}-${index}`}>{name}</li>)}
      </ul>
    )
  }

  render() {
    const list = !!this.state.predictions.length && this.renderList();

    return (
      <section className="autocomplete">
        <input className="autocomplete__input" onChange={this.filterData} />

        {list}
      </section>
    );
  }
}
