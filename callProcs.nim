proc findMax(x: int, y: int): int =
  if x > y:
    return x
  else:
    return y

proc echoLanguageRating(language: string) =
  case language
  of "Nim", "nim", "NIM":
    echo language, " is the best language!"
  else:
    echo language, " might be a second-best language."


proc increment(val: var int) =
  inc val

var x = 100

proc echoX() =
  echo x  
  x += 1  

echoX()
echoX()

var a = 0

increment(a)
echo a
echo "findMax", findMax(10, 20)
echoLanguageRating("nim")

let b = 10
echo findMax(b, 45)
echo b.findMax(45)
