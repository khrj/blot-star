/* START OF CONFIG */

// set a value to set the number of stars of that type to generate
// set null to pick randomly between 0-3
const stars = {
  simpleStar: null,
  crossStar: null,
  classicStar: null,
  classicStarUnfilled: null,
  curveStar: null,
  arcStar: null
}

for (const [type, count] of Object.entries(stars)) {
  if (count === null) {
    stars[type] = Math.floor(Math.random() * 4)
  }
}

/* END OF CONFIG */


/* drawing starts */

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

const classicStarUnfilled = () => {
  const t = new bt.Turtle()
  const size = 10

  t.left(90)
  t.right(18)

  times(() => {
    t.forward(size)
    t.left(90 - 18)
    t.forward(size)
    t.right(180 - 36)
  }, 5)

  return t.lines()
}

const curveStar = () => {
  return [bt.catmullRom([
    [0, 50],
    [40, 60],
    [50, 100],
    [60, 60],
    [100, 50],
    [60, 40],
    [50, 0],
    [40, 40],
    [0, 50]
  ])]
}

const arcStar = () => {
  const t = new bt.Turtle()
  const radius = 10

  times(() => {
    t.arc(90, radius)
    t.right(180)
  }, 4)

  return t.lines()
}

const circle = () => {
  const t = new bt.Turtle()
  const radius = 10
  t.arc(360, radius)
  return t.lines()
}


for (const [type, count] of Object.entries(stars)) {
  const fn = eval(type)
  const star = fn()
  bt.join(finalLines, star)
}

drawLines(finalLines);
