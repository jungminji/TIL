/* 메인 메뉴 제어하기 */
window.onload = init;
// 메인 페이지 초기화
function init(){
	var mainMenuLink = document.querySelectorAll(".main-menu > li > a");
	for(var i=0; i<mainMenuLink.length; i++){
		mainMenuLink[i].onmouseover = function(){
			showSubMenu(this);
		};
		mainMenuLink[i].onfocus = function(){
			showSubMenu(this);
		};
	}
}
// 메인메뉴 선택시 서브메뉴 출력
function showSubMenu(targetNode){
	// 모든 서브메뉴를 숨긴다.
	var hideList = document.querySelectorAll(".main-menu > li > ul");
	for(var i=0; i<hideList.length; i++){
		hideList[i].style.display = "none";
	}	
	// 선택한 메인메뉴의 서브메뉴를 보여준다.
	getElementNextSibling(targetNode).style.display = "block";
}
// 지정한 요소의 다음 노드를 반환한다.
function getElementNextSibling(node){
	var nextElement = node.nextSibling;
	if(nextElement == null){
		return null;
	}else if(nextElement.nodeType != 1){
		return getElementNextSibling(nextElement);
	}
	return nextElement;
}
