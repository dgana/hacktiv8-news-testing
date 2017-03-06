import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'

const wrapper = shallow(<App />)

describe('<App />', () => {
  it('Have a Router element ', () => {
    expect(wrapper.containsAllMatchingElements([
      <Route />
    ])).toBe(true);
  });
})
