import { isMoment } from 'moment';

export function moment(props, propName, componentName) {
  if (props[propName] == null || !isMoment(props[propName])) {
    return new Error(`Warning: Required prop \`${propName}\` was not specified in \`${componentName}\``);
  }
}
