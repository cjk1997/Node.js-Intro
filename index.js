const replaceColor = require('replace-color')

console.log(helloWorld);

console.log('image.png')

replaceColor({
  image: 'image.png',
  colors: {
    type: 'hex',
    targetColor: '#00D4B9',
    replaceColor: '#CB4947'
  }
}, (err, jimpObject) => {
  if (err) return console.log(err)
  jimpObject.write('./output.jpg', (err) => {
    if (err) return console.log(err)
  })
})

console.log('image.jpg')