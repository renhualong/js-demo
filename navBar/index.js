document.querySelectorAll('.tab-bar').forEach(function (item) {
  let children = Array.from(item.children)
  console.log(children)
  let circleIndicator = item.querySelector('.tab-bar-yuan')
  children.forEach((childItem, key) => {
    childItem.onclick = function () {
      let color = getComputedStyle(document.documentElement).getPropertyValue(`--them-${childItem.dataset.theme}`)
      circleIndicator.classList.remove('animate')
      circleIndicator.style.marginLeft = ((25 + childItem.clientWidth) * key) + "px"
      circleIndicator.classList.add('animate')
      document.querySelector('body').style.backgroundColor = color
      circleIndicator.style.backgroundColor = color
    }
  })
})
