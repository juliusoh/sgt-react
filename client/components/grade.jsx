import React from 'react';

function Grade(props) {
  const { grade: { course, grade, name } } = props;
  return (
    <tr>
      <th scope='row'>{name}</th>
      <td>{course}</td>
      <td>{grade}</td>
    </tr>
  );
}

export default Grade;
