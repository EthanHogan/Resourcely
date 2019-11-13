import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import doesCategoryExist from './App';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('doesCategoryExist', () => {
  let categories = [
                      {
                        name: 'CSS',
                        resources: [],
                      },
                      {
                        name: 'TDD',
                        resources: [],
                      },
                      {
                        name: 'Promises',
                        resources: [],
                      }
                   ]

let newCategory = {
                    name: 'CSS',
                    resources: [],
                  }
  test('should be defined', () => {
    let result = doesCategoryExist(categories, newCategory);
    expect(result).toEqual(true);
  })
})