/**
 * Test09.js 
 */
function check(){
	if(document.myForm.name.value==''){
		alert("이름을 입력 하세요");
		document.myForm.name.focus();
		return false;
	}
	
	if(document.myForm.id.value==''){
		alert("ID를 입력 하세요");
		document.myForm.id.focus();
		return false;
	}
	
	pw=document.myForm.pw.value;
	pw2=document.myForm.pw2.value;
	
	if(pw==''){
		alert("암호를 입력 하세요");
		document.myForm.pw.focus();
		return false;
	}
	
	if(pw2==''){
		alert("암호 확인을 입력 하세요");
		document.myForm.pw2.focus();
		return false;
	}
	
	if(pw!=pw2){
		alert("암호와 암호확인이 다릅니다");
		document.myForm.pw.value=''
		document.myForm.pw2.value=''
		document.myForm.pw.focus();
		return false;
	}
	
	ju1=document.myForm.ju1.value;
	ju2=document.myForm.ju2.value;
	
	if(ju1=='' || ju1.length!=6){
		alert("주민 앞번호를 입력 하세요");
		document.myForm.ju1.focus();
		return false;
	}
	
	if(ju2==''){
		alert("주민 뒷번호를 입력 하세요");
		document.myForm.ju2.focus();
		return false;
	}
	
	if(!document.myForm.email.value){
		alert("이메일을 입력 하세요");
		document.myForm.email.focus();
		return false;
	}
	
	name=document.myForm.name.value;
	id=document.myForm.id.value;
	email=document.myForm.email.value;
	
	alert("당신의 이름:"+name+"\n당신의 ID:"+id+"\n이메일:"+email);
}