class Visitor{
    constructor(container, color, x,y, width,height, src, msg, chat){
        this.container=container;
        this.color=color;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.src=src;
        this.msg=msg
        this.chat=chat
        
        this.box=document.createElement("div");
        this.nameDiv=document.createElement("div");
        this.contentDiv=document.createElement("div");

        this.img=document.createElement("img");
        this.comment=document.createElement("div");

        this.box.style.position="absolute";
        // this.box.style.background="gainsboro";
        this.box.style.left=this.x+"px";
        this.box.style.top=this.y+"px";
        this.box.style.width=this.width+"px";
        this.box.style.height=this.height+"px";

        this.nameDiv.style.width=100+"%";
        this.nameDiv.style.height=30+"px";
        this.nameDiv.style.background=this.color;
        this.nameDiv.style.borderTopLeftRadius=20+"px";
        this.nameDiv.style.borderTopRightRadius=20+"px";
        this.nameDiv.innerText=this.msg;

        this.contentDiv.style.position="absolute";
        this.contentDiv.style.width=100+"%";
        this.contentDiv.style.height=160+"px";
        this.contentDiv.style.background="rgb(245, 242, 242)";

        this.img.style.position="absolute";
        this.img.style.width=150+"px";
        this.img.style.left=10+"px";
        this.img.src=this.src;

        this.comment.style.width=200+"px";
        this.comment.style.height=110+"px";
        this.comment.style.background="white";
        this.comment.style.position="absolute";
        this.comment.style.left=170+"px";
        this.comment.style.top=20+"px";
        this.comment.style.border="1px solid gray";
        this.comment.style.borderRadius=5+"px";

        this.comment.innerText=this.chat;

        //부착
        this.box.appendChild(this.nameDiv);
        this.box.appendChild(this.contentDiv);

        this.contentDiv.appendChild(this.img);
        this.contentDiv.appendChild(this.comment);

        this.container.appendChild(this.box);
    }
}