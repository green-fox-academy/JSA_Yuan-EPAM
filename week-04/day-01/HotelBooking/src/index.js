import React from 'react';
import ReactDOM from 'react-dom'

import getData from './data';
import listComponent from './list-component';

let data = getData();
// console.log(data);
let listE = <listComponent items = { data['filters'] } />;
console.log(listE['Star rating']);

ReactDOM.render(listE, document.getElementById('react-container'));