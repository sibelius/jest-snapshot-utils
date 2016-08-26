## Jest Snapshot Utils

A simple setup file for jest that makes react native snapshot testing a single function call away.

##Goals

- Remove boilerplate
- Provide mocks for components

###Install

```
npm install jest-snapshot-utils --save-dev
```

Add this to your `jest` object in `package.json`

```
"setupFiles": [
  "node_modules/jest-snapshot-utils/lib/index.js"
]
```

###From this

```js
// __tests__/Intro-test.js
import 'react-native';
import React from 'react';
import Intro from '../Intro';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Intro', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <Intro />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
```

###To this

```js
// __tests__/Intro-test.js
import Intro from '../Intro';

describe('Intro', () => {

  it('renders correctly', () => {
    snapshot(<Intro />);
  });

});
```

##Current mocks

- ListView (currently isn't mocked, see: (#1398)[https://github.com/facebook/jest/issues/1398] on Jest's repo)
