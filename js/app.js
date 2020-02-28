

function init(){
    getContactos();
}

function getContactos(){
    console.log('obteniendo Contactos');
    //create request
    var cont=new XMLHttpRequest();
    //prepare request
    cont.open('GET','http://jsonplaceholder.typicode.com/users/?fbclid=IwAR2cPSIbNbofeZb1yYJIm2YRnONpIINVYNekVzyw2F6LreGo3ZTQUpstdXA');
    //send request
    cont.send();
    //readystatechange event handlera
    cont.onreadystatechange=function(){
        if(cont.readyState==4){
            if(cont.status==200){
                var jsonContact=JSON.parse(cont.responseText);
               createContacto(jsonContact);
            }
            if(cont.status==404){
                console.log('Invalid URL');
            }
            if(cont.status==500){
                console.log('Access denied by server');
            }
        }
    }
}


function createContacto(contact,id){
    console.log(contact);
    contact.forEach(c => {
        // Obteniendo contenedor main
        main = document.getElementById('main');
        
        // Creando contenido
        divContenido = document.createElement('div');
        divContenido.classList = 'contenido';
        main.appendChild(divContenido);

        // Creando h2
        hName = document.createElement('h2');
        hName.innerHTML = c.id + '. ' + c.name;
        divContenido.appendChild(hName);

        // Creando boton de información personal
        btnColl = document.createElement('button');
        btnColl.innerHTML = 'Information';
        btnColl.classList = 'btncolapso';
        btnColl.addEventListener("click", btn);
        divContenido.appendChild(btnColl);

        // Creando div de contenido de información personal
        divInfo = document.createElement('div');
        divInfo.classList = 'content';
        divContenido.appendChild(divInfo);

        // Añadiendo datos a divInfo
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>Username: </span>' +  c.name;
        divInfo.appendChild(pElement);        
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>E-mail: </span>' +  c.email;
        divInfo.appendChild(pElement);    
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>Phone: </span>' +  c.phone;
        divInfo.appendChild(pElement);
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>Web-Site: </span>' +  c.website;
        divInfo.appendChild(pElement);

        // Creando boton de dirección
        btnColl = document.createElement('button');
        btnColl.innerHTML = 'Address';
        btnColl.classList = 'btncolapso';
        btnColl.addEventListener("click", btn);
        divContenido.appendChild(btnColl);
        
        
        // Creando div de contenido de información personal
        divAddress = document.createElement('div');
        divAddress.classList = 'content';
        divContenido.appendChild(divAddress);

        // Añadiendo datos a divAddress pUser = document.createElement('p');
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>Street: </span>' +  c.address.street;
        divAddress.appendChild(pElement);     
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>Suite: </span>' +  c.address.suite;
        divAddress.appendChild(pElement);      
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>City: </span>' +  c.address.city;
        divAddress.appendChild(pElement);       
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>Zip Code: </span>' +  c.address.zipcode;
        divAddress.appendChild(pElement);    
        pElement = document.createElement('div');
        pElement.classList = 'map'; //  Mapa
        divAddress.appendChild(pElement);
        

        // Creando boton de compañia
        btnColl = document.createElement('button');
        btnColl.innerHTML = 'Company';
        btnColl.classList = 'btncolapso';
        btnColl.addEventListener("click", btn);
        divContenido.appendChild(btnColl);
        

        // Creando div de contenido de informacion de la compañia
        divCompany = document.createElement('div');
        divCompany.classList = 'content';
        divContenido.appendChild(divCompany);

        // Añadiendo datos a divAddress pUser = document.createElement('p');
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>bs: </span>' + c.company.bs;
        divCompany.appendChild(pElement);     
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>Name: </span>' + c.company.name;
        divCompany.appendChild(pElement);  
        pElement = document.createElement('p');
        pElement.innerHTML = '<span>Catch Phrase: </span>' + c.company.catchPhrase;
        divCompany.appendChild(pElement);     

    });
}


function btn() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
        content.style.display = "block";    
    }
    
  } 

  
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}
document.addEventListener("DOMContentLoaded", init());

