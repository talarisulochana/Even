const card=document.querySelector("div");
card.id="Flower"
card.innerHTML='<img src ="https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?cs=srgb&dl=nature-flowers-garden-863963.jpg&fm=jpg" width="300px"/><p>This is a very beautiful</p><button>Search</button>'
card.style.border="2px solid black";
card.style.backgroundColor="lightgray";
card.style.display="inline-block";
card.style.padding="10px";
card.style.margin="10px";
card.style.textAlign="center";


const cardA=document.querySelector("section");
cardA.id="B";
cardA.innerHTML='<img src ="https://tse4.mm.bing.net/th?id=OIP.UVwOYZgB82XxFtM52g9uSAHaFj&pid=Api&P=0&h=180" width="300px"/><p>This is a very beautiful</p><button>Search</button>'
cardA.style.border="2px solid black";
cardA.style.backgroundColor="lightgray";
cardA.style.display="inline-block";
cardA.style.padding="10px";
cardA.style.margin="10px";
cardA.style.textAlign="center";

const newcard=document.createElement("div")
newcard.id="Image"
newcard.innerHTML=`<img src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"  width="300px"/><p>This is a Nature beautiful</P><button>Nature</button>`
newcard.style.border="2px solid black";
newcard.style.display="inline-block";
newcard.style.backgroundColor="lightgray"
newcard.style.padding="10px";
newcard.style.margin="10px";
newcard.style.textAlign="center";
document.body.appendChild(newcard)


const Card=document.createElement("div")
Card.id="A"
Card.innerHTML='<img src="https://tse2.mm.bing.net/th?id=OIP.6n8XSlapiwYDrZHjx61ZLwHaD3&pid=Api&P=0&h=180" width="300px" ><p>This is a very  beautiful</P><button>God</button>'
Card.style.border="2px solid black";
Card.style.display="inline-block";
Card.style.backgroundColor="lightgray"
Card.style.margin="10px"
Card.style.padding="10px";
Card.style.textAlign="center";
document.body.appendChild(Card)