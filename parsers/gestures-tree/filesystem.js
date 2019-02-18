
import { DateTime, GMapsAddressMatch, LanguageISO639, StringType, FileExtensionType } from '../types'




export const expressions = {

  // Shorthand syntax to parse filename and provide context for its contents
  createObjects: [

    /*
      Example of a filename, containing an event:
     (22.4.2015 - Dan zemlje; Kino Šiška, Ljubljana; sl_SL) Kaj bo tvoja Lepa gesta zemlji?.txt
    */

    { 'filename': { regex: new RegExp('/^\((.*\) (.*) *$/gm') },
      'filename.2': { 'title': StringType, required: true, strip: [ExtensionType] },
      'filename.1': {
        delimiters: 'filename',
        tokenize: [
          { try: { 'timestamp': DateTime, 'annualEvent': StringType, required: ['timestamp'] } },
          { 'place': GMapsAddressMatch, required: true },
          { 'language': LanguageISO639 },
          { 'occasion': StringType }
        ] 
      } 
    },

    { 
      // Temporary entry ID for each one event record (in shape of "eventId__temporary")
      createTemporaryId: { 'eventId': ['title', 'timestamp'] }, // using provided hashing function with 'title' and 'timestamp' data field contents}
    },

    {
      'userId': { receiveContext: 'userId' }
    },

    {
      object: 'event',
      properties: ['title', '']
    }

  ]
}

/*
  Reserved object keys: regex, required, strip, try
*/

//
//  Folder structure (tree elements)
/*
—   Root folder (containing files)
*/