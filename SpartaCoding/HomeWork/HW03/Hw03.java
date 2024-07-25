import java.util.Scanner;

// 연산클래스들은 Calculator와 포함관계여야함, Calculator 내부에서 인자를 전달받고 결과를 리턴.
// 더하기
class AddOperation extends AbstractOperation {
    public AddOperation() {
    }

    @Override
    public double operate(int firstNumber, int secondNumber) {
        double result = firstNumber + secondNumber;

        return result;
    }
}

// 빼기
class SubstractOperation extends AbstractOperation {
    public SubstractOperation() {
    }

    @Override
    public double operate(int firstNumber, int secondNumber) {
        double result = firstNumber - secondNumber;

        return result;
    }
}

// 곱하기
class MultiplyOperation extends AbstractOperation {
    public MultiplyOperation() {
    }

    @Override
    public double operate(int firstNumber, int secondNumber) {
        double result = firstNumber * secondNumber;

        return result;
    }
}

// 나누기
class DivideOperation extends AbstractOperation {
    public DivideOperation() {
    }

    @Override
    public double operate(int firstNumber, int secondNumber) {
        double result = firstNumber / secondNumber;

        return result;
    }
}

// 나머지 step4에 나머지 연산에 대한 설명이 부족한 상태.
class RemainderOperation extends AbstractOperation {
    public RemainderOperation() {

    }

    @Override
    public double operate(int firstNumber, int secondNumber) {
        double result = firstNumber % secondNumber;

        return result;
    }
}

public class Hw03 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Calculator calculator;
        String operator;
        int a, b;

        while (true) {
            System.out.println("계산기 프로그램 입니다.");
            System.out.println("+ - * / % 각 연산에 맞는 연산자를 입력해주세요, 종료시에는 q를 입력해주세요");
            System.out.print("연산자를 입력하세요 : ");
            operator = sc.next();

            if (operator.equals("q")) {
                System.out.println("계산기 프로그램을 종료합니다.");
                break;
            } else if (operator.equals("%")) {
                calculator = new Calculator();
            } else {
                calculator = new Calculator(operator);
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
            System.out.println(calculator.calculate(a, b));
            System.out.println();
        }

    }
}