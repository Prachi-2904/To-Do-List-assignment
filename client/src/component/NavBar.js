import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Forms } from './Forms.js'; // Assuming TaskForm is imported from this path

export const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const handleFormToggle = () => {
    setShowForm(!showForm);
  };
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to the state
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">To-Do List</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#home" className='nav-link'>All Tasks</Nav.Link>
              <Nav.Link href="#forms" className='nav-link' onClick={handleFormToggle}>
                {showForm ? 'Hide Task Form' : 'Add new Task'}
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     {/* Conditionally render Forms component */}
     {showForm && <Forms addTask={addTask} />} {/* Pass addTask as a prop */}
      
      {/* Display tasks */}
      <div>
        <h3>Task List</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
