import strutils

proc plus(x: int, y: int): int

echo 5.plus(10)

proc plus(x: int, y: int): int =
  return x + y

echo int("Ben"[0]).plus(10)