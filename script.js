var count = 0;

class Blog{
    constructor(title,detail){
        this.title=title;
        this.detail=detail;
    }
    addTitle(){
        console.log(count);
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById(`card-text${count}`).appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription(){
        var description_card = document.createElement('p');
        description_card.setAttribute("id","blog-description");
        console.log(description_card);
        document.getElementById(`card-text${count}`).appendChild(description_card);
        description_card.innerHTML += this.detail;
    }
}
var addpost=document.getElementById('popupContact');
var blog=document.getElementById('addBlog');
var closepost=document.getElementById('close');
blog.addEventListener("click",function(){
    addpost.style.display="block";
   
});
closepost.addEventListener("click",function(){
    addpost.style.display="none";
   
});
document.getElementById("post").addEventListener("click",function(){
    document.getElementById("popupContact").style.display="none";
    var card = document.createElement("div");
    card.setAttribute("id", `card-text${count}`);
    document.getElementById("card-container").appendChild(card);

    var img2=document.createElement("img");
    img2.setAttribute("src","./assets/javascript.png");
    card.appendChild(img2);
    const title=document.getElementById("title").value;
    const detail=document.getElementById("detail").value;
    var obj=new Blog(title,detail);
    obj.addTitle();
    obj.addDescription();
    count++;
});