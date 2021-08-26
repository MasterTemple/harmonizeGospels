# Gospel Harmony


# How to Use

Use the function [here](./getGospelEvent.js) which takes `givenVerse` then returns a `gospelEventObject`
```json
{
  "eventNumber": 224,
  "title": "Jesus is betrayed and arrested",
  "references": [
    "Matthew 26:47-56",
    "Mark 14:43-52",
    "Luke 22:47-53",
    "John 18:1-1"
  ]
}
```
### Note
You might need to change the path for `keyedData.json` and `searchableData.json` depending on where you use this function.

### Standalone Example:
See [here](./example.js) for a Standalone example.

# Structure
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
  "Matthew": {
    "1": [
        {
            "startVerse": 1,
            "endVerse": 17,
            "eventNumber": "1"
        }
    ]
  }
}
```