var request = require('request')

function getData () {
  return new Promise(function(resolve, reject) {
    request('https://jsonplaceholder.typicode.com/posts/1', function(error, response, body) {
      resolve(body)
    })
  })
}

async function main () {
  var content = await getData()
  console.log(content)
}

main()