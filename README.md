# Gospel Harmony

### `keyData.json` is sorted by event number
#### One Entry
```json
"1": {
    "title": "Luke",
    "references": [
        "Luke 1:1-4"
    ]
}
```

### `searchableData.json` is structured as follows
```json
{
  "books": {
    "chapters": [
        {
            "startVerse": 1,
            "endVerse": 17,
            "eventNumber": "1"
        }
    ]
  }
}
```

# How to Use
Assume you are given a verse: `John 18:11` as a string, titled `givenVerse`
```js
let verseData = [...givenVerse.matchAll(/(?<book>\w*) (?<chapter>\d{1,3}):(?<startVerse>\d{1,3})-?(?<lastVerse>\d{1,3})?/g)][0].groups
let eventNumber = searchableData[verseData.book][verseData.chapter].find( v => (v.startVerse <= verseData.startVerse && verseData.startVerse <= v.lastVerse)).eventNumber
let eventData = keyedData[eventNumber]
```
See [here](./getSimilarPassages.js) for an example.

Easiest use is slap it into a function that takes a parameter for givenVerse then returns `eventNumber` and `eventData`