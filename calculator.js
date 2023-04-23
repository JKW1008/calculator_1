class Calculator {
    constructor(displayElement) { 
        this.displayElement = displayElement
        this.operatorCheck = true
        this.equalsCheck = false
        this.clear()
    }    

    appendNumber(number) {
        if (this.equalsCheck) {
            this.displayContent = number
            this.equalsCheck = false
        } else {
            this.displayContent += number
        }
        this.operatorCheck = false
    }

    appendOperator(operator) {    
        if (this.operatorCheck) return false
        if (this.equalsCheck) this.equalsCheck = false
        this.displayContent += operator
        return this.operatorCheck = true         
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
        this.operatorCheck = true
    }

    compute() {
        if (this.operatorCheck) return
        this.displayContent = eval(this.displayContent
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
        )
        this.equalsCheck = true
    }
}

const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')

const calculator = new Calculator(displayElement)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                if (calculator.appendOperator(button.innerText)) {
                    calculator.updateDisplay()
                }                                            
                break
            case 'ac':
                calculator.clear()
                break
            case 'equals':
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })      
})




// class Calculator{
//     constructor(displayElement){
//         this.displayElement = displayElement;
//         this.operatorCheck = true;
//         this.equalsChek = false;
//         this.clear();
//     }

//     appendNumber(number){
//         if (this.equalsChek){
//             this.displayContent = number;
//             this.equalsChek = false;
//         }else{
//             this.displayContent += number;
//         }
//         this.operatorCheck = false;
//     }

//     appendOperator(operator) {
//         if(this.operatorCheck) return false;
//         if(this.equalsChek) this.equalsChek = false;
//         this.displayContent += operator;
//         return this.operatorCheck = true;
//     }

//     updateDisplay(){
//         this.displayElement.value = this.displayContent
//     }

//     clear(){
//         this.displayContent = ''
//         this.displayElement.value = 0
//         this.operatorCheck = true
//     }

//     compute() {
//         if(this.displayContent) return
//         this.displayContent = eval(this.displayContent
//             .replace('\u00D7','*')
//             .replace('\u00f7','/')
//         )
//         this.equalsChek = true;
//     }
// }

// let buttons = document.querySelectorAll('button')
// let displayElement = document.querySelector('input')

// let calculator = new Calculator(displayElement)

// buttons.forEach(buttons => {
//     buttons.addEventListener('click',()=>{
//         switch(buttons.dataset.type){
//             case 'operator':
//                 if(calculator.appendOperator(buttons.innerText)){
//                     calculator.updateDisplay()
//                 }
//                 break;
//             case 'ac':
//                 calculator.clear()
//                 break;
//             case 'equals':
//                 calculator.compute()
//                 calculator.updateDisplay()
//                 break;
//             default:
//                 calculator.appendNumber(buttons.innerText)
//                 calculator.updateDisplay()
//                 break;
//         }
//     })
// })


// 1. Calculator 클래스 만들고 인스턴스 생성
// 2. addEvenListener로 모든 버튼에 클릭 이벤트를 연결하고 swich문으로 data-type에 따라 구분
// 3. 숫자 버튼을 클릭할 때마다 displayContent 속성에 숫자가 추가되고 input에도 표시되도록 appendNumber, updateDisplay 메서드 추가 switch문의 default에서 추가한 메서드 호출
// 4. 마찬가지로 클래스에 appenOperator 메서드 추가 후 연산자 버튼 클릭시 호출되도록 연결
// AC 기능 구현
// 1. AC 버튼을 클릭하면 입력했던 게 초기화되도록 클래스에 clear 메서드 추가후 AC버튼과 연결
// 2. constructor 에서도 clear 메서드를 호출하도록 수정
// 3. html에서 input 태그의 value 속성은 더 이상 필요 없으니 제거

// this.displayContent 와 this.clear는 인스턴스 생성시 this.displayContent 값을 빈 문자열로 초기화 하는 작업이 꼭 필요해 constructor안에 넣었다.

// 자바스크립트에서 사칙연산과 관련된 산술 연산자는 +, -, *, / 
// 자바스크립트의 eval함수를 사용하면 계산 기능을 쉽게 구현할 수 있다.
// eval()은 문자로 표현된 js코드를 실행하는 함수이다.
// 간단한 예로 a변수에 2+3*5 연산식을 저장하고 eval 함수에 인자로 a를 넣고 실행하면 식이 계산된다
// 그럼 계속해서 클래스에 compute 메서드를 추가하고 eval() 함수를 사용해서 계산 기능 구현
// = 버튼 클릭시 compute 메서드를 호출하도록 연결
