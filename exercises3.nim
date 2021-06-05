

echo "----------------"
echo "EX 1"

proc greet(name: string): void =
  echo "Hello ", name

proc greetMany(names: seq[string]): void =
  for name in names: greet(name)

const n = @["Ben", "Steven"]
greetMany(n)

echo "----------------"
echo "EX 2"

proc findMax3(a: int, b: int, c: int): int =
  let values: array[3, int] = [a, b, c]
  for i in values:
    if i > result: result = i
  
echo findMax3(1, 7, 3)

echo "----------------"
echo "EX 3"

type Point = (int, int)

proc addPoints(a: Point, b: Point): Point =
  return (a[0] + b[0], a[1] + b[1])

const point0 = (1, 2)
const point1 = (5, 3)
echo addPoints(point0, point1)

echo "----------------"
echo "EX 4"

var ticker: int = 1

proc tock() =
  echo "tock"

proc tick() =

  echo "--tick"
  if ticker mod 12 == 0:
    tock()

  inc ticker


for _ in 0 .. 12:
  tick()

