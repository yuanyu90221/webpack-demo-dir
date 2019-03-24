import _ from 'lodash';
console.log(
  _.join(['Another', 'module', 'loaded!', ''])
);
const outputIntoOne = (inputs=[])=>{
  return _.join(inputs);
};
export {outputIntoOne};