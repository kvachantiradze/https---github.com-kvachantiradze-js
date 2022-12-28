  
  let str = '  მე ვარ ჯუნიორ დეველოპერი  ';


  console.log(str.length)

  console.log(str.replace(/ჯუნიორ/, 'სენიორ'))

  console.log(str.slice(4,-4))

  console.log(str.includes('დეველოპერი'))


  console.log(str.trim())
  
  console.log(str.endsWith('დეველოპერი'))

  console.log(str.toLowerCase())

  console.log(str.toUpperCase())

  document.getElementById('js').innerHTML = str