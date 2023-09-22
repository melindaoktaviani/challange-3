import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const ToDo = () => {
  // State untuk daftar tugas
  const [tasks, setTasks] = useState([]);
  // State untuk filter tugas
  const [filter, setFilter] = useState('all');

  // Fungsi untuk menambahkan tugas baru
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Fungsi untuk mengubah filter
  const changeFilter = (value) => {
    setFilter(value);
  };

  // Fungsi untuk menghapus tugas
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // Filter tugas sesuai dengan filter yang dipilih
  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.completed === (filter === 'completed'));

  return (
    <div>
      <h1>To-Do List</h1>

      {/* Form untuk menambahkan tugas baru */}
      <Form onSubmit={(e) => { e.preventDefault(); addTask(e.target.task.value); e.target.task.value = ''; }}>
        <Form.Group>
          <Form.Control type="text" name="task" placeholder="Tambahkan tugas baru" />
        </Form.Group>
        <Button type="submit" variant="primary">Tambah</Button>
      </Form>

      {/* Filter To-Do */}
      <div className="mt-3">
        <Button variant="outline-primary" onClick={() => changeFilter('all')}>Semua</Button>{' '}
        <Button variant="outline-success" onClick={() => changeFilter('completed')}>Selesai</Button>{' '}
        <Button variant="outline-danger" onClick={() => changeFilter('uncompleted')}>Belum Selesai</Button>
      </div>

      {/* Tabel To-Do */}
      <Table className="mt-3" striped bordered hover>
        <thead>
          <tr>
            <th>Tugas</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ToDo;
