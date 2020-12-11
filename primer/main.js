
const red = {
  color: '#ff0000',
  fontSize: '30px'
};

const button = {
  fontSize: '30px'

};

const alertHello = () => {
  (alert('Hello'));
};


const Hello = props => (<p style={red} onClick={alertHello}>Hello {props.name}</p>);

class RenderJSX extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }
    // this.changeCounter = this.changeCounter.bind(this);
  }

  changeCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <header>
          <img className='logo' src='logo.svg' alt='React Logo' />
          <h1>Hello React</h1>
        </header>
        <main>
          <button style={button} onClick={this.changeCounter}>{this.state.counter}</button>
          <p>A React is bibliotec for </p>
          <Hello name='Serg' />
          <Hello name='Alex' />
          <Hello name='Roman' />

        </main>
      </div>
    );
  }
}

ReactDOM.render(<RenderJSX />, document.getElementById('root'));