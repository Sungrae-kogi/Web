import java.util.Scanner;

class Calculator {

    // 포함관계
    private AddOperation addOperation;
    private SubstractOperation substractOperation;
    private MultiplyOperation multiplyOperation;
    private DivideOperation divideOperation;

    // 생성자에서 연산 클래스들도 같이 생성
    // 멤버변수같은거를 줄 필요가없다, main에서 우선 계산기 객체를 만들고 그다음에 계산을 시켜야하니까
    // 계산기 객체를 만들면 -> 자동으로 내부 계산 클래스들이 생성.
    public Calculator() {
        this.addOperation = new AddOperation();
        this.substractOperation = new SubstractOperation();
        this.multiplyOperation = new MultiplyOperation();
        this.divideOperation = new DivideOperation();
    }

    public double calculate(String operator, int firstNumber, int secondNumber) {
        // if, switch를 이용해서 전달받은 operator에 맞는 연산을 수행하고 결과를 리턴.
        double result;

        switch (operator) {
            case "+":
                result = addOperation.operate(firstNumber, secondNumber);
                break;
            case "-":
                result = substractOperation.operate(firstNumber, secondNumber);
                break;
            case "/":
                result = divideOperation.operate(firstNumber, secondNumber);
                break;
            case "*":
                result = multiplyOperation.operate(firstNumber, secondNumber);
                break;
            // % 나머지 연산자는 제외했으니 그대로
            case "%":
                result = firstNumber % secondNumber;
                break;
            default:
                System.out.println("잘못된 입력입니다.");
                return 0.0;
        }

        return result;
    }
}

// 연산클래스들은 Calculator와 포함관계여야함, Calculator 내부에서 인자를 전달받고 결과를 리턴.
// 더하기
class AddOperation {
    public AddOperation() {
    }

    public double operate(int firstNumber, int secondNumber) {
        double result = firstNumber + secondNumber;

        return result;
    }
}

// 빼기
class SubstractOperation {
    public SubstractOperation() {
    }

    public double operate(int firstNumber, int secondNumber) {
        double result = firstNumber - secondNumber;

        return result;
    }
}

// 곱하기
class MultiplyOperation {
    public MultiplyOperation() {
    }

    public double operate(int firstNumber, int secondNumber) {
        double result = firstNumber * secondNumber;

        return result;
    }
}

// 나누기
class DivideOperation {
    public DivideOperation() {
    }

    public double operate(int firstNumber, int secondNumber) {
        double result = firstNumber / secondNumber;

        return result;
    }
}

public class Hw03 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Calculator calculator = new Calculator();
        String operator;
        int a,b;

        while (true) {
            System.out.println("계산기 프로그램 입니다.");
            System.out.println("+ - * / % 각 연산에 맞는 연산자를 입력해주세요, 종료시에는 q를 입력해주세요");
            System.out.print("연산자를 입력하세요 : ");
            operator = sc.next();

            if (operator.equals("q")){
                System.out.println("계산기 프로그램을 종료합니다.");
                break;
            }

            System.out.print("피연산자 두 개의 수를 입력하세요 : ");
            a = sc.nextInt();
            b = sc.nextInt();

            if (operator.equals("+"))
                System.out.println("------더하기 연산 결과------");
            else if (operator.equals("-"))
                System.out.println("------ 빼기 연산 결과 ------");
            else if (operator.equals("*"))
                System.out.println("------곱하기 연산 결과------");
            else if (operator.equals("/"))
                System.out.println("------나누기 연산 결과------");
            else if (operator.equals("%"))
                System.out.println("------나머지 연산 결과------");
            else
                System.out.println("------잘못된 연산자 입력------");
            System.out.println(calculator.calculate(operator, a, b));
            System.out.println();
        }

    }
}