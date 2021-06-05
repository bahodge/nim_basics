

echo "----------------"
echo "EX 1"
echo "Create an immutable variable containing your age (in years). Print your age in days. (1 year = 365 days)"

const age = 31

echo "I am ", age * 365, " days old"

echo "----------------"
echo "EX 2"
echo "Check if your age is divisible by 3. (Hint: use mod)"
echo "Is my age divisible by 3: ", age mod 3

echo "----------------"
echo "EX 3"
echo "Create an immutable variable containing your height in centimeters. Print your height in inches. (1 in = 2.54 cm)"
const height = 175

echo "height in inches: ", float(height) / 2.54

echo "----------------"
echo "EX 4"
echo "A pipe has a 3/8 inch diameter. Express the diameter in centimeters."
const pipeDiameter = 3 / 8

echo "pipe diameter in cm: ", pipeDiameter * 2.54

echo "----------------"
echo "EX 5"
echo "Create an immutable variable containing your first name, and another one containing your last name. Make a variable fullName by concatenating the previous two variables. Don’t forget to put a whitespace in-between. Print your full name."
const firstName = "Ben"
const lastName = "Hodge"
const fullName = firstName & " " & lastName

echo "My full name is: ", fullName

echo "----------------"
echo "EX 6"
echo "Alice earns $400 every 15 days. Bob earns $3.14 per hour and works 8 hours a day, 7 days a week. After 30 days, has Alice earned more than Bob? (Hint: use relational operators)"

const aliceMonthlyIncome = 400 * (30 / 15)
const bobMonthlyIncome = 30 * (3.14 * 8)

echo "alice monthly income: ", aliceMonthlyIncome
echo "bob monthly income: ", bobMonthlyIncome
echo if aliceMonthlyIncome > bobMonthlyIncome: "alice makes more money" else: "bob makes more money"
