import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const { grades } = props;
  const gradeTableJSX = grades.map(grade => {
    return (
      <Grade grade={grade} key={grade.id} />
    );
  });

  return (
    <table className='table table-bordered table-hover table-info col-8'>
      <thead className='light'>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Course</th>
          <th scope='col'>Grade</th>
        </tr>
      </thead>
      <tbody>
        {gradeTableJSX}
      </tbody>
    </table>
  );
}

export default GradeTable;
