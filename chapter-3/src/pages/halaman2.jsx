import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddUpdateToDo = ({ onSubmit, todoToUpdate }) => {
  const [task, setTask] = useState(todoToUpdate ? todoToUpdate.task : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ task });
    setTask('');
  };

  return (
    <div>
      <h2>{todoToUpdate ? 'Update ToDo' : 'Add ToDo'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="task">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {todoToUpdate ? 'Update' : 'Add'}
        </Button>
      </Form>
    </div>
  );
};

export default AddUpdateToDo;
