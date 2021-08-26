/*
    this is an example on how to use the given data
*/

let searchableData = require('./searchableData.json')
let keyedData = require('./keyedData.json')

let givenVerse = "John 18:11"

let verseData = [...givenVerse.matchAll(/(?<book>\w*) (?<chapter>\d{1,3}):(?<startVerse>\d{1,3})-?(?<lastVerse>\d{1,3})?/g)][0].groups
let eventNumber = searchableData[verseData.book][verseData.chapter].find( v => (v.startVerse <= verseData.startVerse && verseData.startVerse <= v.lastVerse)).eventNumber
let eventData = keyedData[eventNumber]

console.log(eventNumber);
console.log(eventData);