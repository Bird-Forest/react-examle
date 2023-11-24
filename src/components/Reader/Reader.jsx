import React, { Component } from 'react';
import publications from './publications.json';
import { Publication } from './Article';

const LS_KEY = 'reader_item_index';

export default class Reader extends Component {
  state = {
    items: publications,
    index: 0,
  };

  onChangeValue = value => {
    this.setState(state => ({ index: state.index + value }));
  };
  // onPrev = () => {
  //   this.setState(state => ({ index: state.index - 1 }));
  // };
  // onNext = () => {
  //   this.setState(state => ({ index: state.index + 1 }));
  // };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }
  render() {
    const publication = this.props.items[this.state.index];
    return (
      <div>
        <section>
          <button
            disabled={this.state.index === 0}
            onClick={() => this.onChangeValue(-1)}
          >
            Prev
          </button>
          <button
            disabled={this.state.index + 1 === this.props.items.length}
            onClick={() => this.onChangeValue(+1)}
          >
            Next
          </button>
        </section>
        <span>
          {this.state.index + 1}/{this.props.items.length}
        </span>
        <Publication item={publication} />
      </div>
    );
  }
}
