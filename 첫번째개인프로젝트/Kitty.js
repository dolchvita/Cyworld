class Kitty{
    constructor(container, src, x,y, width,height){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;


        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.width=this.width+"px";           //초기값 설정을 잘 해놓으려면 px 빼놓지 말기...
        this.img.style.height=this.height+"px";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        
        container.appendChild(this.img);
    }
    creat(){
        this.img.style.width=this.width;
        this.img.style.height=this.height;
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}