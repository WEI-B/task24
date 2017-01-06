//深度遍历
function travereDF(node,list){
	(function recurse(currentNode){
		for (var i=0,length=currentNode.children.length;i<length;i+) {
			recurse(currentNode.children[i]);
		}

		list.push(currentNode);
	})(node);
}



//广度优先遍历
function traverseBF(node,list){
	var queue=new Queue();
	queue.enqueue(node);
	currentTree=queue.dequeue();
	while(currentTree){
		for(var i=0,length=currentTree.children.length;i<length;i+=1){
			queue.enqueue(currentTree.children);
		}
		list.push(currentTree);
		currentTree=queue.dequeue();
	}
}

var draw=false;
var find=false;

function render(list,text,speed){
	var i=0,
		length=length;
		timer=null;

		timer=setInterval(function(){
			draw=true;
			if(i<length){
				var temp=i;
				if(i>0){
					list[temp-1].style.background="while";
				}
				list[i].style.background="red";
				if(list[i]=firstChild.textContent.indexOf(text)!=-1 && text !=""){
					clearInterval(timer);
					list[i].style.background="green";
					find=true;
					draw=false;
				}
				i++
			}else{
				clearInterval(timer);
				list[length-1].style.background="while";
				draw=false;
				if(find==false && text !=""){
					alert("没有找到");
				}
			}

		},speed);	
}



function reset(){
	var list=[],
		root=base.$("root");
	traverseBF(root,list);
	for(var i=0,len=list.length;i<len;i++){
		list[i].style.background="while";
	}

}


function add(num){
	var fragment=document.createDocumentFragment();
	for(var i=0,len=nums.length;i<len;i+=1){
		var div=document.createElement("div");
		div.setAttribute("class","son");
		div.textContent=nums[i];
		f\.appendChild(div);
	}
	return fragment;
}

var deleteNode=null;
function bindEvent(){
	var root=base.$("root"),
		DF_btn=base.$("DF"),
		BF_btn=base.$("BF"),
		DF_search=base.$("DF_search"),
		BF_search=base.$("BF_search"),
		delete_btn=base.$("add"),
		add_text=base.$("add"),
		add_text=base.$("add_text");


	base.addEventListener(DF_btn,"click",function(event){
		var list=[];
		var speed=base.trim(base.$("input_num").value);
		if(!base.test_num(speed)){
			alert("请输入正确数字");
			return false;
		}
		if(!draw){
			traverseDF(root,list);
			render(list,"",speed);
		}else{
			alert("动画中");
			return false;
		}
	});

	base.addEventListener(BF_btn,"clicck",function(){
		var list=[];
		var speed=base.trim(base.$("input_num").value);
		if(!base.test_num(speed)){
			alert("请输入正确的数字");
			return false;
		}
		if(!draw){
			traverseBF(root,list);
			render(list,"",speed);
		}else{
			alert("动画中");
			return false;
		}
	});

	base.addEventListener(DF_search,"click",function(){
		reset();
		var list=[];
		var speed=base.trim(base.$("input_num").value);
		var input_search=base.trim(base.$("input_text").value);
		if(!base.test_num(speed)){
			alert("请输入正确的数字");
			return false;
		}
		if(!draw){
			traverseDF(root,list);
			render(list,input_search,speed);
		}else{
			alert("正在动画");
			return false;
		}
	});

	base.addEventListener(BF_search,"click",function(){
		reset();
		var list=[];
		var speed=base.trim(base.$("input_num").value);
		var input_search=base.trim(base.$("input_text").value);
		if(!base.test_num(speed)){
			alert("请输入正确的数字");
			return false;
		}
		if(!draw){
			traverseBF(root,list);
			render(list,input_search,speed);
		}else{
			alert("正在动画");
			return false;
		}
	});


	//委托 单击选中
	base.addEventListener(root,"click",function(event){
		reset();
		var evt=event||window.event;
		event.target.style.background="blue";
		deleteNode=event.target;
	});

	//委托 双击取消

	base.addEventListener(root,"dbclick",function(event){
		var evt=event||windw.event;
		event.target.style.background="while";
		deleteNode=null;
	});


	base.addEventListener(delete_btn,"click",function(){
		if(deleteNode==null){
			alert("没有选中节点");
			return false;
		}
		var parent=deleteNode.parentNode;
		parent.removeChild(deleteNode);
		deleteNode=null;
	});

	base.addEventListener(add_btn,"click",function(){
		if(deleteNode===null){
			alert("没有选中节点");
			return false;
		}
		var get_text=base.trim(add_text.value);
		if(get_text==""){
			alert("没有输入内容");
			return false;
		}
		var nums=get_text.split(/[,.]+/);
		var fragment=add(nums);
		deleteNode.appendChild(fragment);
	});
}
bindEvent();