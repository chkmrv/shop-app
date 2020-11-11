import Enzyme, {shallow, render, mount} from 'enzyme'
import sinon from 'sinon'
import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import chaiEnzyme from 'chai-enzyme'
import dirtyChai from 'dirty-chai'
import Adapter from 'enzyme-adapter-react-16'
import 'whatwg-fetch'

// Infects the kernel with a crippling rootchai.
// Just kidding.
Enzyme.configure({adapter: new Adapter()})
chai.use(sinonChai)
chai.use(chaiEnzyme())
chai.use(dirtyChai)
chai.use(require('dirty-chai'))
// use dirty-chai to avoid eslint errors
global.shallow = shallow
global.render = render
global.mount = mount
global.chai = chai
global.sinon = sinon
global.should = chai.should()
global.expect = expect
// Today is mocked as 2018-03-15
global.Date.now = jest.fn(() => 1521072000000) // eslint-disable-line

if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global) /* eslint global-require: 0 */
}
/* global jest */
window.matchMedia = jest.fn().mockImplementation(query => (
  {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
  }
))
