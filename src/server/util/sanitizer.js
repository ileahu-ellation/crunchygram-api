import { compose, identity, toLower, trim, when } from 'ramda';

const numberSanitizer = when(identity, Number);

const stringSanitizer = when(identity, compose(toLower, trim));

export { numberSanitizer, stringSanitizer };
