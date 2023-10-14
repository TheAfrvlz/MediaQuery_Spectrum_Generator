/* eslint-disable react/no-unknown-property */
import "./App.css";
import { createContext } from "react";
import { useState,useContext } from "react";
import { Dropdown, Button } from "react-bootstrap"; // Make sure you have react-bootstrap installed


const EspecCon = createContext();

const MinWidth = () => {
  return (
    <div className="Config">
      <h1>Min Width</h1>
      <div className="Container">
        <input
          type="text"
          className="form-control"
          placeholder="0 px"
          value={0}
        />
        <input type="text" className="form-control" placeholder="px" />
      </div>
    </div>
  );
};

const MaxWidth = () => {
  return (
    <div className="Config">
      <h1>Max Width</h1>
      <div className="Container">
        <input type="text" className="form-control" placeholder="px" />
        <input
          type="text"
          className="form-control"
          placeholder="3000 px"
          value={3000}
        />
      </div>
    </div>
  );
};

const Interval = () => {
  const [selectedValue, setSelectedValue] = useState(""); // Estado para almacenar el valor seleccionado

  const handleDropdownSelect = (eventKey) => {
    setSelectedValue(eventKey);
  };

  return (
    <div className="Config">
      <h1>Interval</h1>
      <div className="Container">
        <input type="text" className="form-control" placeholder="px" />
        <Dropdown onSelect={handleDropdownSelect}>
          <Dropdown.Toggle as={Button} variant="primary">
            {selectedValue || "Selecciona una opción"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="<">&lt;</Dropdown.Item>
            <Dropdown.Item eventKey=">">&gt;</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <input type="text" className="form-control" placeholder="px" />
      </div>
    </div>
  );
};

function ScreenLine() {

  const [Spectrum, setSpectrum] = useState([
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%' , '--Min-bg':'#404040'} },
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%' , '--Min-bg':'#309090'} },
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%'  , '--Min-bg':'#001510'} },
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%'  , '--Min-bg':'#136a8a'} },
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%'  , '--Min-bg':'#dc2430'} },
    { className: 'SpectrumMax', device: 'Samsung Se5', style: { '--MaxWidth': '20%'  , '--Max-bg':'#FFF94C'} },
    { className: 'SpectrumInt', device: 'Macbook Pro 2022', style: { '--initialPos': '20%', '--IntervalWidth': '60%'  , '--In-bg':'#00dbde'} }
  ]);

  return (
    <div className="ScreenLine ">
      <input type="text" className="form-control" placeholder="Max: px" />
      <div className="Spectrum-Container">
        <div className="Line"></div>
        {Spectrum.map((divData, index) => (
          <div
            key={index}
            className={`border border-1 Spectrum ${divData.className}`}
            device={divData.device}
            style={divData.style}
          ></div>
        ))}
      </div>
      <input type="text" className="form-control" placeholder="Min: px" />
    </div>
  );
}

const MediaResult = () => {
  return (
    <div className="MediaResult">
      <div className="form-group">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
    </div>
  );
};

const SetMedia = () => {
  const [MediaQueryState, setMediaQueryState] = useState([false, false, false]);

  const HandleMin = () => {
    const updatedComponents = [false, false, false];
    updatedComponents[0] = true;
    setMediaQueryState(updatedComponents);
  };

  const HandleMax = () => {
    const updatedComponents = [false, false, false];
    updatedComponents[1] = true;
    setMediaQueryState(updatedComponents);
  };

  const HandleInterval = () => {
    const updatedComponents = [false, false, false];
    updatedComponents[2] = true;
    setMediaQueryState(updatedComponents);
  };

  return (
    <div className="SetMedia">
      <button className="btn btn-primary">
        <i className="bi bi-plus-lg"></i> Add
      </button>
      <button className="btn btn-danger">
        <i className="bi bi-minus-lg"></i> Delete
      </button>
      <button className="btn btn-warning">
        <i className="bi bi-pencil-square"></i> Edit
      </button>
      <div className="Color">
        <label htmlFor="ColorPicker"> Spectrum Color</label>
        <input type="color" id="ColorPicker" />
      </div>
      <input type="text" className="form-control" placeholder="Device" />
      <Dropdown>
        <Dropdown.Toggle as={Button} variant="success" id="dropdown-basic">
          Media Query
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="text-center" onClick={() => HandleMin()}>
            Min Width
          </Dropdown.Item>
          <Dropdown.Item className="text-center" onClick={() => HandleMax()}>
            Max Widht
          </Dropdown.Item>
          <Dropdown.Item
            className="text-center"
            onClick={() => HandleInterval()}
          >
            {" "}
            Interval
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {MediaQueryState[0] && <MinWidth />}
      {MediaQueryState[1] && <MaxWidth />}
      {MediaQueryState[2] && <Interval />}
    </div>
  );
};

function App() {

  const [Spectrum, setSpectrum] = useState([
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%' , '--Min-bg':'#404040'} },
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%' , '--Min-bg':'#309090'} },
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%'  , '--Min-bg':'#001510'} },
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%'  , '--Min-bg':'#136a8a'} },
    { className: 'SpectrumMin', device: 'Iphone', style: { '--MinWidth': '20%'  , '--Min-bg':'#dc2430'} },
    { className: 'SpectrumMax', device: 'Samsung Se5', style: { '--MaxWidth': '20%'  , '--Max-bg':'#FFF94C'} },
    { className: 'SpectrumInt', device: 'Macbook Pro 2022', style: { '--initialPos': '20%', '--IntervalWidth': '60%'  , '--In-bg':'#00dbde'} }
  ]);

  return (
    <div className="App">
      <h1 className="Title">Device Media Query Spectrum</h1>
      <EspecCon.Provider value={{Spectrum, setSpectrum}} >
      <ScreenLine />
      <SetMedia />
      <MediaResult />
      </EspecCon.Provider>
    </div>
  );
}

export default App;
