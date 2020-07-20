import React from 'react';

function Grade(props) {
  const { grade: { course, grade, name } } = props;
  const del = () => { props.deleteGrade(props.grade.id); };
  return (
    <tr>
      <th scope='row'>{name}</th>
      <td>{course}</td>
      <td>{grade}</td>
      <td><button onClick={del} className='btn btn-danger'>Delete</button></td>
    </tr>
  );
}

export default Grade;
