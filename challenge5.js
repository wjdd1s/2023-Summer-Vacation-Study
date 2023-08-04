const score= parseInt(prompt("점수를 입력하세요"));

if (isNaN(score) || score < 0){
	alert("양수를 입력해주세요!");
} else if(score >= 90){
	alert("A");
} else if(score < 90 && score >= 80) {
	alert("B");
} else if(score < 80 && score >= 70) {
	alert("C");
} else if (score < 70) {
	alert("D");
}