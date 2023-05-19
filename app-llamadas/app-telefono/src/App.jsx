import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { useState } from "react";
import { faDeleteLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [numbers, setNumbers] = useState("");
  const handleChange = (event) => {
    setNumbers(event.target.value);
  };
  const borrarNumero = () => {
    setNumbers(numbers.slice(0, numbers.length - 1));
  };

  return (
    <>
      <div className="display: flex flex-col justify-center items-center">
        <div className="bg-black w-96 h-screen display: flex flex-col justify-center items-center">
          <input onChange={handleChange} className="numeros" value={numbers} />
          {numbers && (
            <button onClick={borrarNumero} className="btnBorrar">
              <FontAwesomeIcon icon={faDeleteLeft} />
            </button>
          )}
          {numbers && (
            <Button className="addContact" onClick={handleShow}>
              Add Contact
            </Button>
          )}
          <Modal show={show} onHide={handleClose}></Modal>
          <section className="grid grid-cols-3 gap-4">
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={1}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                1
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={2}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                2
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={3}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                3
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={4}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                4
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={5}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                5
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={6}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                6
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={7}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                7
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={8}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                8
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={9}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                9
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={"*"}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                *
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={0}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                0
              </button>
            </div>
            <div className="w-20 h-20 display: flex flex-col justify-center items-center">
              <button
                value={"#"}
                onClick={(e) => setNumbers(numbers + e.target.value)}
                className="w-20 h-20 text-white-700 border border-none hover:bg-gray-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center"
              >
                #
              </button>
            </div>
          </section>
          <div className="mt-5 parteBaja">
            <div>
              <button className="w-20 h-20 text-white-700 border border-none bg-green-600 hover:bg-green-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl text-center items-center">
                <FontAwesomeIcon icon={faPhone} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
