

echo "----------------"
echo "EX 1"

var a: array[10, int]

for idx in 1 .. 10:
  let v = idx * 10

  a[idx - 1] = v

  if idx mod 2 != 0:
    echo "odd idx:", idx
  else:
    a[idx - 1] = v * 5

echo a


echo "----------------"
echo "EX 2"

const startingValue = 27
var sequence: seq[int] = @[startingValue]
var currentValue = startingValue

while currentValue != 1:
  if currentValue mod 2 != 0:
    currentValue = (currentValue * 3) + 1
  else:
    currentValue = currentValue div 2

  sequence.add(currentValue)


echo sequence


echo "----------------"
echo "EX 3"

var longest: (int, int) = (0, 0)

for i in 0 .. 100:
  var currentSeq: seq[int] = @[startingValue]
  var currentValue = startingValue

  while currentValue != 1:
    if currentValue mod 2 != 0:
      currentValue = (currentValue * 3) + 1
    else:
      currentValue = currentValue div 2

    currentSeq.add(currentValue)

  if currentSeq.len > longest[0]:
    longest = (currentSeq.len, currentSeq[0])

echo longest
