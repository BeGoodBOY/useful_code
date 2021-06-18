const myImage = (()=> {
  const imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: src => {
      imgNode.src = src
    }
  }
})()

const loadingSrc = '../../../../img/loading.gif'
const imgSrc = 'https://img30.360buyimg.com/ling/jfs/t1/187775/5/8271/435193/60c8117eE7d79ef41/1d21db2c4dca9a90.png'


const proxyImage = (function() {
  const img = new Image()
  img.onload = () => {
    myImage.setSrc = img.src
  }

  return {
    setSrc: src => {
      myImage.setSrc(loadingSrc)
      img.src = src
    }
  }
})()