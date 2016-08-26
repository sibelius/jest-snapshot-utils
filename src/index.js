import './mocks'
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

global.React = React
global.snapshot = component => expect(renderer.create(component).toJSON()).toMatchSnapshot()
