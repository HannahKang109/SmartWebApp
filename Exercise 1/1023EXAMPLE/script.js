/**
 * 문제
 * 변수 a에 0~100점까지 점수를 저장하고 70점 미만이면 70-점수를 표시하고
 * 70점 이상이면 "잘했습니다"출력하기
 * 
 * 70점 미만)
 * 당신의 점수는 65점 입니다. 
 * 70점까지 5점 남았습니다.
 * 
 * 70점 이상)
 * 당신의 점수는 90점 입니다. 
 * 잘했습니다.
 */ 

a = 70;
window.document.write("당신의 점수는", a,"점입니다.<br>");
if(a<70){
    window.document.write("70점까지", 70-a,"점 남았습니다.");
}
else{
    window.document.write("잘했습니다.");
}
