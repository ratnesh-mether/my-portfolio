import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="parallax_wrapper">
        <div className="parallax_group intro_screen" id="intro">
          Parallax Demo
        </div>
        <div className="parallax_group" id="group-1">
          <div className="parallax_layer base_layer">
            Base Layer Page
          </div>
          <div className="parallax_layer mid_layer">
            Mid Layer Page
          </div>
        </div>
        <div className="parallax_group" id="group-2" >
          <div className="parallax_layer mid_layer">
            Mid Layer Page
          </div>
          <div className="parallax_layer top_layer">
            Top Layer Page
          </div>
        </div>
        <div className="parallax_group outro_screen" id="outro">
          The End
        </div>
      </div>
    </div>
  );
}

export default App;
