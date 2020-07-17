import React from 'react';

function GradeTable(props) {
  return (
    <table className='table table-hover col-8'>
      <thead className='thead-light'>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Course</th>
          <th scope='col'>Grade</th>
          <th scope='col'>Operations</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  );
}

export default GradeTable;
