
// get window search query string object 
const param = new URLSearchParams(window.location.search);
// Service Container Div (index.html)
const service_container = document.getElementById("ServiceContainer");
// Service Details Div (service.html)
const service_Details = document.getElementById("pixelup-services");

// navbar menu button logic for open navbar menu into mobile screens
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
}

// to redirect on whatapp whenever this button was click 
function sendToWhatsApp() {
    window.open(`https://wa.me/918200571458?text=${"Hello! I'm "}`, '_blank');
}

// for fetch service data from db folder and display it on the main home page as cards inside cards container (service container) 
function load_Services() {
    fetch('js/services.json')
        .then(data => data.json())
        .then(services => {
            let card = "";
            services.map((service) => {
                console.log(service)
                card = card + `
                    <div class="card" id="card-${service.id}">
                    <div class="card-image">
                        <img src="${service.path}" alt="${service.title}" title="${service.title}">
                    </div>
                    <hr>
                    <div class="card-content">
                        <h3> ${(service.title.length < 20) ? service.title : service.title.slice(0, 20) + "..."} </h3>
                        <p> ${(service.description.length < 120) ? service.description : service.description.slice(0, 120) + " ..."} </p>
                        <button type="button" onclick="view_Service(${service.id})"> See More </button>
                    </div>
                </div>
                `;
            })
            service_container.innerHTML = card;
        })
        .catch(error => {
            console.log(error.name);
            service_container.innerHTML = "";
            service_container.innerHTML = `<div class="error-div"> Somethings wants wrongs, Currenlty any services details are not available on the site, please contact us via email or whatapp and try again later!`
        })
}

function view_Service(id) {
    location.href = `pages/services.html?id=${id}`;
}

function load_Single_Service(serviceId) {
    // code for single service dynamic view 
    const mainServiceTitle = document.getElementById('main-service-title'); // Main Service Title 
    const ServiceGallery = document.getElementById('Service-Gallery'); // Service Gallery 
    const ServiceDetails = document.getElementById('service-details'); // Service Details
    fetch('js/services.json')
        .then(data => data.json())
        .then(Services => {
            // get the service using id number 
            const service = Services.find(serviceInfo => { return serviceInfo.id === parseInt(serviceId) })
            
            if (!service) {
                location.href = 'pages/no-service.html';
                return;
            }

            // function is for fetching and display the pros and cons of service from services.json()
            function load_features() {
                let features = "";
                service.moreDetails.map(data => {
                    features += `<div> ${(data.Available === true) ? "✅" :"❌"} ${data.content} </div>`;
                })
                return features;
            }

            // first adding a title 
            if (mainServiceTitle) {
                mainServiceTitle.innerText = `Our Work in ${service.title}`;
            }

            // fetching images 
            if (ServiceGallery) {
                service.gallery.forEach(image => {
                    ServiceGallery.innerHTML += `
                    <div class="image-cover">
                        <img src="${image}" alt="${service.title}">
                    </div>`;
                });
            }

            // fetching service details 
            if (ServiceDetails) {
                ServiceDetails.innerHTML = `
                    <h4 class="title">${service.title} </h4>
                    <p> ${service.description} </p>

                    <div class="service-values">
                        <h4> We Provides... </h4>
                        ${load_features()}
                    </div>
                `;
            }
        })
        .catch(error => console.log(error.name, " ", error.message))
}


// load all available services first 
if (service_container) {
    load_Services();
    console.log('Services Load Successfully!')

    // if email send succesfully this page shows
    if (param.get('status') === 'success') {
        location.href = 'pages/success.html';
    }

    // if email send unsuccesfully this page shows
    if (param.get('status') === 'error') {
        location.href = 'pages/error.html';
    }
}

if (service_Details) {
    let id = param.get('id');
    console.log('Service Details for service id - ', id)
    if (id) {
        load_Single_Service(id);
    } else {
        console.log('Unable to load services!')
    }
} 