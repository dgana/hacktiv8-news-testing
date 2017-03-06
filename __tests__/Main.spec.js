import React from 'react';
import ReactDOM from 'react-dom';
import News from '../src/components/News/Main';
import { Search } from '../src/components/News/Search';
import { shallow } from 'enzyme'

const wrapper = shallow(<News />)

describe('<News />', () => {
  it('Check Hacker News List state to be null ', () => {
    expect(wrapper.state('hackerNewsList')).toHaveLength(0)
  });
  it('Check currentSearch to have an empty string ', () => {
    expect(wrapper.state('currentSearch')).toEqual('')
  });

  it('Check value after searching', () => {
    const event = {
      target: {
        value: 'React'
      }
    }
    wrapper.instance().handleChange(event)
    expect(wrapper.state('currentSearch')).not.toBe('')
  });

  it('Check Hacker News List not to be null after search', () => {
    fetch(`https://hn.algolia.com/api/v1/search?query=react`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        expect(wrapper.state('hackerNewsList')).toHaveLength(2);
      })
      .catch(err => {

      })
  });

  it('Search returns a function', () => {
    expect(Search).toBeInstanceOf(Function)
  })
})
