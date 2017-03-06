import React from 'react';
import ReactDOM from 'react-dom';
import People from '../src/components/People/Main';
import { shallow } from 'enzyme'

const wrapper = shallow(<People />)

describe('<People />', () => {
  it('Check People List state to be null ', () => {
    expect(wrapper.state('PeopleList')).toHaveLength(0)
  });

  it('Check search value', () => {
    fetch(`http://swapi.co/api/people/`)
      .then(response => {
        return response.json()
      }).then(data => {
        expect(wrapper.state('PeopleList')).not.toHaveLength(0);
      })
      .catch(err => {
      })
  });
})
