import { useState } from 'react';
import Axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState(0);

  const add = ()=>{
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      edad:edad,
      pais:pais,
      cargo:cargo,
      anios:anios
    }).then(()=>{
      alert("Empleado registrado");
    });
  }

  return (
    <>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={(event)=> setNombre(event.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" onChange={(event)=> setEdad(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>País</Form.Label>
        <Form.Control type="text" onChange={(event)=> setPais(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cargo</Form.Label>
        <Form.Control type="text" onChange={(event)=> setCargo(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Año</Form.Label>
        <Form.Control type="anios" onChange={(event)=> setAnios(event.target.value)} />
      </Form.Group>

      <Button variant="primary" onClick={add} type="submit">
        Registrar
      </Button>
    </Form>
    </>
  )
}

export default App
