const navHolder=document.createElement('div');
      document.body.appendChild(navHolder);
      navHolder.innerHTML=`
         <div class="nav">
          <div class="brand">
           <a href="product.html">
           <img src="http://www.littleblessingsbakery.com/wp-content/uploads/2018/12/BlessingRoundLogo-transparent.png" />
           </a>
           <a href="product.html">
           <h3>
             Sprinkles Bakery
           </h3>
           </a>
         </div>

      <div class="menu-item">
        <a href="cart.html">Cart <span class="counter">0</span></a>
        <a href="signin.html">SignIn</a>
      </div>
      </div> `;

      const header=document.createElement('div');
                   document.body.appendChild(header);
                   header.innerHTML=`<h1 style="text-align: center;margin: 20px;">Cakes</h1>`;

const productList=[
    {
      name:"Vanila cake",
      price:2500,
      id:0,// please start id from zero 
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20hqK54jbcLze6Zt47dImB4iurw8iaIZImw&usqp=CAU",
      des:"Buttery vanilla cake filled with banana pudding, iced with whipped cream and vanilla wafer crumble"
    },
    {
      name:"Oreo Cake",
      price:3500,
      id:1,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMd4icO3shgWNYTh1FKihdrIwuIs4V7JlKmQ&usqp=CAU",
      des:"Sweet almond cake with a mixed berry filling and iced with a cream cheese buttercream"
    },
    {
      name:"Black Forest",
      price:6000,
      id:2,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnuCnpPDJxg58LGQiOZtIHuwNLeOEZIw7Sg&usqp=CAU",
      des:"Vanilla cake with cream filling iced with a whipped chocolate ganache"
    },   {
      name:"Bubbly Cake",
      price:5000,
      id:3,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGUx3qU8dX4CFqPR5KP6lyVAyMUpR3e21zA&usqp=CAU",
      des:"Butterscotch rum cake iced with butterscotch buttercream and a cream soda drizzle"
    },
    {
      name:"Choko Gems Cake",
      price:4500,
      id:4,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrhHp5RYUbmMID95QIiNKvOBrJ2aQPYeWbQ&usqp=CAU",
      des:"Almond cake iced with a white chocolate ganache and slivered almond garnish"
    },
    {
      name:"Fancy Cake",
      price:5000,
      id:5,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3Uh4X_k-vLuYCXdNc0nkLVTTm4RTwIAkuw&usqp=CAU",
      des:"Rich dark chocolate cake iced with peanut butter buttercream and topped with a peanut butter cup"
    },
    {
      name:" Cherry Cake",
      price:3000,
      id:6,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuE4mM6Ft2T60YJNdHgdtTbF7tN2WX6TFftg&usqp=CAU",
      des:"Oreo cake iced with vanilla buttercream and topped with an oreo cookie"
    },
  ]
  const productHolder=document.createElement('div');
        productHolder.className="productContainer";
        document.body.appendChild(productHolder);
        
        var i;
        for(i=0;i<productList.length;i++){
          let product=productList[i];
          let cardHolder=document.createElement('div');
               cardHolder.className="cardContainer ";
               productHolder.appendChild(cardHolder);
               cardHolder.innerHTML=`
               <a href="showproduct.html?id=${product.id}">
               <div class="card">
                 <div class="product-img">
                 <img src=${product.img} />
               </div>
              <div class="card-body">
              <div class="row">
              <span>${product.name}</span>
              <span>Price :&#8377; ${product.price}</span>
              </div>
             <p>${product.des}</p>
             </div>
             </div>
             </a>
               `
        }
        // ?id=value

        const footerHolder=document.createElement('div');
              document.body.appendChild(footerHolder);
              footerHolder.innerHTML=`
               <div class="footer" style="background-color: whitesmoke;padding: 10px;">
              <p style="text-align: center;">all copy right resversed with <a href="#">Sprinkles Bakery</a></p>
              </div>
              `;
              let cartItem=localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[];
              const counter=document.querySelector('.counter');
              counter.innerHTML=cartItem.length;