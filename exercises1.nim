import strutils

echo "----------------"
echo "EX 1"

var currentValue = 450_024
var iteration = 0

while currentValue != 1:
  if currentValue mod 2 != 0:
    currentValue = (currentValue * 3) + 1
  else:
    currentValue = currentValue div 2

  iteration += 1

echo "Iterations: ", iteration


echo "----------------"
echo "EX 2"

const fullname: string = "Ben Hodge"

for letter in fullname:
  case letter.toLowerAscii():
    of 'a', 'e', 'i', 'o', 'u':
      echo "Letter is vowel: ", letter

    else: discard

echo "----------------"
echo "EX 3"

for i in 0 .. 16:
  var str = ""
  if i mod 3 == 0:
    str.add("fizz")

  if i mod 5 == 0:
    str.add("buzz")

  if str.len > 0:
    echo "i: ", i, " str: ", str

echo "----------------"
echo "EX 4"

const arr: array[7, int] = [1, 4, 7, 10, 13, 16, 19]
echo "in  | cm"
echo "-----------"
for i in arr:
  var row = ""
  row.add($i)
  if i < 10:
    row.add("   | ")
  else:
    row.add("  | ")


  let cm = float(i) * 2.54
  row.add($cm)

  echo row

