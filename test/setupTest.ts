import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });


// テストのため一時package.jsonのscriptをコメントアウトするための避難場所
// "jest": "react-scripts test --coverage --runInBand --watchAll=false",