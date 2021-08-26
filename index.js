let axios = require('axios')
let url = "http://raphapowerministry.org/250-events-in-the-life-of-jesus-christ/"
let jsdom = require('jsdom')
let { JSDOM } = jsdom

axios({
    url: url,
    method: "GET"
}).then( response => {
    // console.log(response.data);
    let { document } = (new JSDOM(response.data)).window
    let textGroups = [...document.querySelectorAll("#post-123 > div > div > p")]
    let data = []
    textGroups.forEach( (eachTextGroup) => {
        if(eachTextGroup.textContent.match(/\d+\. /g)){
            data.push(eachTextGroup.textContent.replace("Matt.", "Matthew"))
        }
    })
    // console.log(data)
    let fs = require('fs')
    fs.writeFileSync("rawData.json", JSON.stringify(data, null, 2))
    let sortedData = []
    data.forEach( (eachGroup) => {
        // let obj = {
        //     eventNumber: eachGroup
        // }
        // sortedData.push(obj)
        let group = [...eachGroup.matchAll(/(?<eventNumber>\d+)\. (?<title>[\w\s]+)/g)][0].groups
        let refs = eachGroup.match(/\w+\.? \d+:\d+[\-—]?\d*:?\d*/g)
        let obj = {
            eventNumber: group.eventNumber,
            title: group.title,
            references: refs
        }
        sortedData.push(obj)
    })
    fs.writeFileSync("sortedData.json", JSON.stringify(sortedData, null, 2))
    // console.log([...data[15].matchAll(/(?<eventNumber>\d+)\. /g)][0].groups)
    let keyedData = {}
    data.forEach( (eachGroup) => {
        // let obj = {
        //     eventNumber: eachGroup
        // }
        // sortedData.push(obj)
        let group = [...eachGroup.matchAll(/(?<eventNumber>\d+)\. (?<title>[\w\s]+)/g)][0].groups
        let refs = eachGroup.match(/\w+\.? \d+:\d+\-?\d*/g)
        keyedData[group.eventNumber] = {
            title: group.title,
            references: refs
        }
    })
    fs.writeFileSync("keyedData.json", JSON.stringify(keyedData, null, 2))
    let searchableData
})