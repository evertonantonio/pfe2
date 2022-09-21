import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";

function BasicExample() {

    const [km , setKm] = useState(0.001);
    const [hm, setHm] = useState(0.01);
    const [dam, setDam] = useState(0.1);
    const [m, setM] = useState(1);
    const [dm, setDm] = useState(10);
    const [cm, setCm] = useState(100);
    const [mm, setMm] = useState(1000);
  
    useEffect(() => {
      setHm(km * 10);
    }, [km])
  
    useEffect(() => {
      setDam(hm * 10);
    },[hm])
  
    useEffect(() => {
      setM(dam * 10);
    },[dam])
  
   useEffect(() => {
      setDm(m * 10);
    }, [m])
  
    useEffect(() => {
      setCm(dm * 10);
    },[dm])
  
    useEffect(() => {
      setMm(cm * 10);
    },[cm])
  
    useEffect(() => {
      setKm(mm / 1000000);
    },[mm])
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        <h1>Conversor de medida</h1>
      <hr/>
      <table striped bordered hover variant="dark">
      <tr>
        <th>KM</th>
        <th>HM</th>
        <th>DAM</th>
        <th>M</th>
        <th>DM</th>
        <th>CM</th>
        <th>MM</th>
      </tr>
      <tr>
        <td><input  value={km} onChange={(event) => setKm(event.target.value)}/></td>
        <td><input  value={hm} onChange={(event) => setHm(event.target.value)}/></td>
        <td><input  value={dam} onChange={(event) => setDam(event.target.value)}/></td>
        <td><input  value={m} onChange={(event) => setM(event.target.value)}/></td>
        <td><input  value={dm} onChange={(event) => setDm(event.target.value)}/></td>
        <td><input  value={cm} onChange={(event) => setCm(event.target.value)}/></td>
        <td><input  value={mm} onChange={(event) => setMm(event.target.value)}/></td>
      </tr>
    </table>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;