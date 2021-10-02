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
     
    

        const break1=document.createElement("br");
        div2.appendChild(break1)

        const image=document.createElement("img");
        image.classList.add("image");
        image.setAttribute("src",item.flags[1]);
        

       
        const h4=document.createElement("h4");
        h4.classList.add("country_code");
        h4.innerHTML=`Country Code: ${item.alpha2Code} ,${item.alpha3Code}`;
   
  
        
        const h41=document.createElement("h4");
        h41.classList.add("region")
        h41.innerHTML=`Region: ${item.region}`;
    

       const h42=document.createElement("h4");
       h42.classList.add("capital");
       h42.innerHTML=`Capital: ${item.capital}`;
       

        const latlng=document.createElement("h4");
        latlng.classList.add("lat");
        latlng.innerHTML=`Latlng: ${item.latlng}`;
        

        // const currency1=document.createElement("h4");
        // currency1.classList.add("currency");
        // currency1.innerHTML=`Currency-Code: (${item.currencies[0].code})`;
     

        // const currency2=document.createElement("h4");
        // currency2.classList.add("currency");
        // currency2.innerHTML=`Currency-Name: (${item.currencies[0].name})`;
    


        // const currency=document.createElement("h4");
        // currency.classList.add("currency");
        // currency.innerHTML=`Currency-Symbol: (${item.currencies[0].symbol})`;

        div2.appendChild(h1)
        div2.appendChild(image)
        div2.appendChild(h4)
        div2.appendChild(h41)
        div2.appendChild(h42);
        div2.appendChild(latlng)
        // div2.appendChild(currency1);
        // div2.appendChild(currency2);
        // div2.appendChild(currency)

        
        div1.appendChild(div2)
        div.appendChild(div1)
        document.querySelector('body').appendChild(div)

    });
};
