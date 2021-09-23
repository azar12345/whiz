let request=new XMLHttpRequest();


request.open("GET","https://rest-countries-api-techieegy.herokuapp.com/v1/all",true);

request.send();

request.onload=()=>{
    let data=JSON.parse(request.response);
    data.forEach((item)=>{
        const div=document.createElement("div");
        div.classList.add("main-container");
        
        const div1=document.createElement('div');
        div1.classList.add('cards');
        
        const div2=document.createElement("div");
        div2.classList.add("card")

        const h1=document.createElement("h1");
        h1.classList.add("name");
        h1.innerHTML=`Country Name: ${item.name}`;
     
        div2.appendChild(h1)

        const break1=document.createElement("br");
        div2.appendChild(break1)

        const image=document.createElement("img");
        image.classList.add("image");
        image.setAttribute("src",item.flags[0]);
        div2.appendChild(image)

       
        const h4=document.createElement("h4");
        h4.classList.add("country_code");
        h4.innerHTML=`Country Code: ${item.alpha2Code}`;
   
        div2.appendChild(h4)
        
        const h41=document.createElement("h4");
        h41.classList.add("region")
        h41.innerHTML=`Region: ${item.region}`;
       div2.appendChild(h41)

       const h42=document.createElement("h4");
       h42.classList.add("capital");
       h42.innerHTML=`Capital: ${item.capital}`;
       div2.appendChild(h42);

        const latlng=document.createElement("h4");
        latlng.classList.add("lat");
        latlng.innerHTML=`Latlng: ${item.latlng}`;
        div2.appendChild(latlng)

        const currency1=document.createElement("h4");
        currency1.classList.add("currency");
        currency1.innerHTML=`Currency-Code: (${item.currencies[0].code})`;
        div2.appendChild(currency1);

        const currency2=document.createElement("h4");
        currency2.classList.add("currency");
        currency2.innerHTML=`Currency-Name: (${item.currencies[0].name})`;
        div2.appendChild(currency2);


        const currency=document.createElement("h4");
        currency.classList.add("currency");
        currency.innerHTML=`Currency-Symbol: (${item.currencies[0].symbol})`;
        div2.appendChild(currency)

        
        div1.appendChild(div2)
        div.appendChild(div1)
        document.querySelector('body').appendChild(div)

    });
};


//list item in dom elemet
// let item=["azar","deen","be"]

// const ul=document.createElement("ul");
// item.forEach((item)=>{
//     const l1=document.createElement("li");
//     const textnode=document.createTextNode(item);
//     l1.appendChild(textnode);
//     ul.appendChild(l1);
// });
// document.querySelector("body").appendChild(ul);
