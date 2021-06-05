

import strutils

echo "----------------"
echo "EX 1"
echo "Collatz conjecture is a popular mathematical problem with simple rules. First pick a number. If it is odd, multiply it by three and add one; if it is even, divide it by two. Repeat this procedure until you arrive at one. E.g. 5 → odd → 3*5 + 1 = 16 → even → 16 / 2 = 8 → even → 4 → 2 → 1 → end! Pick an integer (as a mutable variable) and create a loop which will print every step of the Collatz conjecture. (Hint: use div for division)"

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
echo "Create an immutable variable containing your full name. Write a for-loop which will iterate through that string and print only the vowels (a, e, i, o, u). (Hint: use case statement with multiple values per branch)"

const fullname: string = "Ben Hodge"

for letter in fullname:
  case letter.toLowerAscii():
    of 'a', 'e', 'i', 'o', 'u':
      echo "Letter is vowel: ", letter

    else: discard

echo "----------------"
echo "EX 3"
echo "Fizz buzz is a kids game sometimes used to test basic programming knowledge. We count numbers from one upwards. If a number is divisible by 3 replace it with fizz, if it is divisible by 5 replace it with buzz, and if a number is divisible by 15 (both 3 and 5) replace it with fizzbuzz. First few rounds would look like this: 1, 2, fizz, 4, buzz, fizz, 7, Create a program which will print first 30 rounds of Fizz buzz. (Hint: beware of the order of divisibility tests)"

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
echo "In the previous exercises you have converted inches to centimeters, and vice versa. Create a conversion table with multiple values. For example, the table might look like this:"

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

