class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Visibility Toggle',
      visibility: false
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState(() => {
      return {
        visibility: !this.state.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility === true ? 'Hide Details' : 'Show Details'}
        </button>
        <p>
          {this.state.visibility === true
            ? 'Hey, these are some details you can now see.'
            : ''}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//   title: 'Visibility Toggle',
//   visibleDetails: true
// };

// const appRoot = document.getElementById('app');

// const onToggleDetails = () => {
//   app.visibleDetails = !app.visibleDetails;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={onToggleDetails}>
//         {app.visibleDetails === true ? 'Hide Details' : 'Show Details'}
//       </button>
//       <p>
//         {app.visibleDetails === true
//           ? 'Hey, these are some details you can now see.'
//           : ''}
//       </p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// render();
