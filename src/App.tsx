import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.key
          // eslint-disable-next-line
            ? <p className="App__message">The last pressed key is{`[${this.state.key}]`}</p>
            : <p>Nothing was pressed yet</p>
        }
      </div>
    );
  }
}
