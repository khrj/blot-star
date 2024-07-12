const width = 100;
const height = 100;

setDocDimensions(width, height);

const times = (f, n) => {
  for (let i = 0; i < n; i++) f()
}

const finalLines = [];

const simpleStar = () => {
  return [
    [[40, 50], [60, 50]],
    [[50, 40], [50, 60]]
  ]
}

const crossStar = () => {
  return bt.rotate(
    simpleStar(),
    45
  )
}

const classicStar = () => {
  const t = new bt.Turtle()
  const size = 10

  t.left(90)
  t.right(18)

  times(() => {
    t.forward(size)
    t.right(180 - 36)
  }, 5)

  return t.lines()
}

bt.join(finalLines, simpleStar())
bt.join(finalLines, crossStar())
bt.join(finalLines, classicStar())

drawLines(finalLines);
