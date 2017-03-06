import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../src/components/Header/Header';
import { Menu } from '../src/components/Header/Menu';
import { shallow } from 'enzyme'

describe('<Header />', () => {
  it('Header Returns a function ', () => {
    expect(Header).toBeInstanceOf(Function)
  })

  it('Menu Returns a function ', () => {
    expect(Menu).toBeInstanceOf(Function)
  })
})
