class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>Link 1</li> <li>Link 2</li>
        </ul>
      </div>
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        <h1>Header</h1>
        <p>Paragraph text</p>
      </div>
    );
  }
}
ReactDOM.render(<Nav />, document.getElementById("nav"));
ReactDOM.render(<Post />, document.getElementById("post"));
