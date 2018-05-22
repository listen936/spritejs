(function () {
  const {Scene, Sprite, Label, Group} = spritejs
  const scene = new Scene('#paper', {viewport: ['auto', 'auto'], resolution: [1200, 1200]})

  const fglayer = scene.layer('fglayer')
  fglayer.canvas.style.backgroundColor = '#1EAC61'

  const button = new Group()
  button.attr({
    anchor: 0.5,
    pos: [600, 600],
  })
  fglayer.append(button)

  const buttonNormal = new Label('Get Started')
  buttonNormal.attr({
    font: '40px "宋体"',
    fillColor: '#04773B',
    lineHeight: 96,
    textAlign: 'center',
    size: [320, 96],
    border: [2, '#178C4E'],
    borderRadius: 48,
  })
  button.append(buttonNormal)

  const buttonHover = new Sprite()
  buttonHover.attr({
    bgcolor: '#208B50',
    height: 100,
    width: 0,
    borderRadius: 48,
    zIndex: -1,
  })
  button.append(buttonHover)

  /* eslint-disable no-console */
  console.log('Place mouse hover the button...')
  /* eslint-enable no-console */

  let hoverAnim = null

  button.on('mouseenter', async (evt) => {
    fglayer.canvas.style.cursor = 'pointer'
    buttonNormal.attr({
      fillColor: '#fff',
    })
    if(hoverAnim) {
      hoverAnim.cancel()
      hoverAnim = null
    }
    hoverAnim = buttonHover.animate([
      {width: 324},
    ], {
      duration: 300,
      fill: 'forwards',
      easing: 'ease-in-out',
    })
    await hoverAnim.finished
    hoverAnim = null
  }).on('mouseleave', async (evt) => {
    fglayer.canvas.style.cursor = 'default'
    buttonNormal.attr({
      fillColor: '#04773B',
    })
    if(hoverAnim) {
      hoverAnim.cancel()
      hoverAnim = null
    }
    hoverAnim = buttonHover.animate([
      {width: 0},
    ], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-in-out',
    })
    await hoverAnim.finished
    hoverAnim = null
  })

  button.on('touchstart', (evt) => {
    if(hoverAnim) {
      hoverAnim.cancel()
      hoverAnim = null
    }
    buttonNormal.attr({
      fillColor: '#fff',
    })
    buttonHover.attr({
      width: 324,
    })
  })
  document.addEventListener('touchend', (evt) => {
    if(hoverAnim) {
      hoverAnim.cancel()
      hoverAnim = null
    }
    buttonNormal.attr({
      fillColor: '#04773B',
    })
    buttonHover.attr({
      width: 0,
    })
  })

  button.on('mousedown', (evt) => {
    button.attr({
      scale: 0.9,
    })
  }).on('mouseup', (evt) => {
    button.attr({
      scale: 1.0,
    })
  })

  button.on('click', (evt) => {
    /* eslint-disable no-console */
    console.log('button clicked')
    /* eslint-enable no-console */
  })
}())
