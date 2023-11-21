import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <div className="parallax_wrapper">
        <div className="parallax_group intro_screen" id="intro">
          Parallax Demo
        </div>
        <div className="parallax_group" id="group-1">
          <div className="parallax_layer base_layer">
            <h1>Base Layer Page</h1>
          </div>
          <div className="parallax_layer mid_layer">
            <h1> Mid Layer Page</h1>
          </div>
        </div>
        <div className="parallax_group" id="group-2" >
          <div className="parallax_layer mid_layer">
            <h1>Mid Layer Page-1</h1>
          </div>
          <div className="parallax_layer top_layer">
            <h1>Top Layer Page</h1>
          </div>
        </div>
        <div className="parallax_group outro_screen" id="outro">
          The End
        </div>
      </div> */}
      <section className="position one">
        <div className="inner"></div>
      </section>
      <section className="position two">
        <div className="inner"></div>
      </section>
      <section className="position three">
        <div className="inner"></div>
      </section>
      <section className="position four">
        <div className="inner"></div>
      </section>

    </div>
  );
}

export default App;
