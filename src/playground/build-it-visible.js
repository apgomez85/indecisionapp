const app = {
  title: 'Visibility Toggle',
  visibleDetails: true
};

const appRoot = document.getElementById('app');

const onToggleDetails = () => {
  app.visibleDetails = !app.visibleDetails;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onToggleDetails}>
        {app.visibleDetails === true ? 'Hide Details' : 'Show Details'}
      </button>
      <p>
        {app.visibleDetails === true
          ? 'Hey, these are some details you can now see.'
          : ''}
      </p>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
