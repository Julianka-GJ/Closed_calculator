const closedCalculator = value => {
    let result = value;
    
    const resultCalculator = {
        add(number) {
            result += number;
        },
        sub(number) {
            result -= number;
        },
        div(number) {
            result /= number;
        },
        mult(number) {
            result *= number;
        },
        getResult() {
            return result;
        }
    };

    return resultCalculator;
};

const first = closedCalculator(50);

first.add(2);
first.sub(10);
first.div(2);
first.mult(100);

let finish = first.getResult();
console.log(finish);