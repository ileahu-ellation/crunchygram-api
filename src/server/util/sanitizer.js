import { identity, when } from 'ramda';

const numberSanitizer = when(identity, Number);

export { numberSanitizer };
