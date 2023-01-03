class Menu{
    constructor(container, color, x,y, width,height, menu){
        this.container=container;
        this.div=document.createElement("div");
        this.color=color;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.menu=menu;
        
        //스타일 적용
        this.div.style.position="absolute";
        this.div.style.background=this.color;
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        
        this.div.fontSize=14+"px";
        this.div.style.borderRadius=10+"px";
        this.div.innerText=this.menu;


        this.container.appendChild(this.div);

        this.div.addEventListener("click", ()=>{
            rollOver(this);         //매개변수를 받는다.
        });

    }   //constructor
}
