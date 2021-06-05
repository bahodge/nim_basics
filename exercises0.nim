

echo "----------------"
echo "EX 1"

const age = 31

echo "I am ", age * 365, " days old"

echo "----------------"
echo "EX 2"
echo "Is my age divisible by 3: ", age mod 3

echo "----------------"
echo "EX 3"
const height = 175

echo "height in inches: ", float(height) / 2.54

echo "----------------"
echo "EX 4"
const pipeDiameter = 3 / 8

echo "pipe diameter in cm: ", pipeDiameter * 2.54

echo "----------------"
echo "EX 5"
const firstName = "Ben"
const lastName = "Hodge"
const fullName = firstName & " " & lastName

echo "My full name is: ", fullName

echo "----------------"
echo "EX 6"

const aliceMonthlyIncome = 400 * (30 / 15)
const bobMonthlyIncome = 30 * (3.14 * 8)

echo "alice monthly income: ", aliceMonthlyIncome
echo "bob monthly income: ", bobMonthlyIncome
echo if aliceMonthlyIncome > bobMonthlyIncome: "alice makes more money" else: "bob makes more money"
