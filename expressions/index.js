

export {
  // List of expressions
  Line,
  Paragraph,
  Brackets,
  BulletPoint,
  Colon, 
  SemiColon,
  Comment,
  DictionaryMatch,

  // Standard sets of symbols
  /*
  std_dashSymbols,
  std_bulletPoints,
  std_monthsCaseInsensitive
  */
}



// Expressions to export from this script
import Paragraph from './paragraph'
import Brackets from './brackets'
import BulletPoint from './bulletpoint'
import Colon from './colon'
import SemiColon from './semicolon'
import Comment from './comment'
import DictionaryMatch from './dictionary'
import DateTime from './datetime'
import Line from './line'



/*

  Standard type definitions

*/


const monthsCaseInsensitive = {
  latin: [ 'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'a+g', 'sep', 'o+t', 'nov', 'de+' ],
  cyrilic: [ ]
}

const dashSymbols = [
  '-', '-', '—'
];

const bulletPoints = [
  ''
]