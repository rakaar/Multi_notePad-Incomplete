import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

var i = 0;

class Title extends React.Component {
  render() {
    return <h1>RKA's note pad </h1>;
  }
}
class PowerButton extends React.Component {
  spaceGen(i) {
    i++;
    document.getElementById("area").innerHTML =
      "<div id=i></div> <br /> <div id=i+0.1></div>";
    ReactDOM.render(<NoteGen />, document.getElementById(i));
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.spaceGen}>
          Create New Note
        </button>
      </div>
    );
  }
}

class EditDelButtons extends React.Component {
  makeEditable() {
    document.getElementById("text").readOnly = false;
    document.getElementById("title").readOnly = false;
  }
  clear() {
    var note = document.getElementById(i);
    var buttons = document.getElementById(i + 0.1);
    note.remove();
    buttons.remove();
  }
  render() {
    return (
      <div>
        <button type="button" id="EditButton" onClick={this.makeEditable}>
          Edit
        </button>
        <button type="button" id="DelButton" onClick={this.clear}>
          Delete
        </button>
      </div>
    );
  }
}
class SaveButton extends React.Component {
  SaveAndEditDel() {
    document.getElementById("text").readOnly = true;
    document.getElementById("title").readOnly = true;
    ReactDOM.render(<EditDelButtons />, document.getElementById(i + 0.1));
  }

  render() {
    return (
      <button type="button" id="SaveButton" onClick={this.SaveAndEditDel}>
        Save
      </button>
    );
  }
}
class NoteGen extends React.Component {
  showSave() {
    ReactDOM.render(<SaveButton />, document.getElementById(i + 0.1));
  }

  render() {
    return (
      <div>
        <textarea
          id="title_note"
          defaultValue="Title"
          onChange={this.showSave}
        />
        <br />
        <textarea
          id="text"
          defaultValue="Enter text here..."
          onChange={this.showSave}
        />
      </div>
    );
  }
}

ReactDOM.render(<Title />, document.getElementById("title"));
ReactDOM.render(<PowerButton />, document.getElementById("createButton"));
