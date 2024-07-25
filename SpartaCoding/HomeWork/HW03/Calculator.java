public class Calculator {
    // 포함관계
    // private AddOperation addOperation;
    // private SubstractOperation substractOperation;
    // private MultiplyOperation multiplyOperation;
    // private DivideOperation divideOperation;

    private AbstractOperation abstractOperation;

    // 생성자에서 연산 클래스들도 같이 생성
    // 멤버변수같은거를 줄 필요가없다, main에서 우선 계산기 객체를 만들고 그다음에 계산을 시켜야하니까
    // 계산기 객체를 만들면 -> 자동으로 내부 계산 클래스들이 생성.
    public Calculator(){}

    public Calculator(String operator) {
        // this.addOperation = new AddOperation();
        // this.substractOperation = new SubstractOperation();
        // this.multiplyOperation = new MultiplyOperation();
        // this.divideOperation = new DivideOperation();

        //다형성에 맞게 부모 클래스 타입에 들어갈 자식클래스인스턴스(연산자에 맞는것)를 생성
        if(operator.equals("+"))
            this.abstractOperation = new AddOperation();
        else if(operator.equals("-"))
            this.abstractOperation = new SubstractOperation();
        else if(operator.equals("*"))
            this.abstractOperation = new MultiplyOperation();
        else if(operator.equals("/"))
            this.abstractOperation = new DivideOperation();
        
    }

    public double calculate(int firstNumber, int secondNumber) {
        // if, switch를 이용해서 전달받은 operator에 맞는 연산을 수행하고 결과를 리턴.
        double result;

        //Step4 에서 % 연산에 대한 처리 설명이 없고, Calculator 클래스는 4개의 연산 클래스들이 상속받고 있는 AbstractOperation 클래스만을 포함합니다.
        //라는 설명을 참고하여 따로 작성, operator가 %를 전달받았을 때는 기본 생성자가 호출되며 ,abstractOperation이 null 값을 가지게됨.
        if(abstractOperation != null){
            result = abstractOperation.operate(firstNumber,secondNumber);
        }else{
            result = firstNumber % secondNumber;
        }
        

        // switch (operator) {
        //     case "+":
        //         result = addOperation.operate(firstNumber, secondNumber);
        //         break;
        //     case "-":
        //         result = substractOperation.operate(firstNumber, secondNumber);
        //         break;
        //     case "/":
        //         result = divideOperation.operate(firstNumber, secondNumber);
        //         break;
        //     case "*":
        //         result = multiplyOperation.operate(firstNumber, secondNumber);
        //         break;
        //     // % 나머지 연산자는 제외했으니 그대로
        //     case "%":
        //         result = firstNumber % secondNumber;
        //         break;
        //     default:
        //         System.out.println("잘못된 입력입니다.");
        //         return 0.0;
        // }

        return result;
    }
}
