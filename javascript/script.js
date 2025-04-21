const root = document.getElementById("root");

const navbar = document.createElement("nav");
navbar.setAttribute("id", "navbar");
navbar.setAttribute("class", "navbar");

const hero = document.createElement("div");
hero.setAttribute("class", "hero-section");
hero.setAttribute("id", "heroSection");

const filterFeatureSection = document.createElement("div");
filterFeatureSection.setAttribute("class", "filter-feature-section");
filterFeatureSection.setAttribute("id", "featureServiceSection");

const filters = document.createElement("div");
filters.setAttribute("class", "filter-content");
filters.setAttribute("id", "filterContent");

const features = document.createElement("div");
features.setAttribute("class", "feature-section");
features.setAttribute("id", "featureSection");

const gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "carsGrid");
gridContainer.setAttribute("class", "cars-grid");

function renderNavbar() {
    const logo = document.createElement("div");
    logo.className = "logo";
    logo.id = "logo";
    logo.textContent = "Carzone";

    const menu = document.createElement("ul");
    menu.className = "menu";
    menu.id = "menu";

    const menuItems = [
        { id: "homeLink", text: "Home" },
        { id: "serviceLink", text: "Service" },
        { id: "featuredLink", text: "Featured Cars" },
        { id: "newLink", text: "New Cars" },
        { id: "contactLink", text: "Contact" },
    ];

    menuItems.forEach((item) => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = item.text;
        menu.appendChild(li);

        if (li.id.toLowerCase() === "newlink") {
            li.addEventListener("click", function () {
                filterFeatureSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            });
        }
    });

    navbar.append(logo, menu);
}

function renderHeroSection() {
    const heroContent = document.createElement("div");
    heroContent.className = "hero-content";
    heroContent.id = "heroContent";

    const mainHeading = document.createElement("h1");
    mainHeading.id = "mainHeading";
    mainHeading.textContent = "GET YOUR ";

    const dreamCar = document.createElement("span");
    dreamCar.className = "highlight";
    dreamCar.id = "dreamCar";
    dreamCar.textContent = "DREAM CAR";

    const dreamPrice = document.createElement("span");
    dreamPrice.className = "highlight";
    dreamPrice.id = "dreamPrice";
    dreamPrice.textContent = "DREAM PRICE";

    mainHeading.appendChild(dreamCar);
    mainHeading.appendChild(document.createTextNode(" AT A "));
    mainHeading.appendChild(dreamPrice);

    const subHeading = document.createElement("h2");
    subHeading.id = "subHeading";
    subHeading.textContent = "The largest inventory of cars in Northern India";

    const contactButton = document.createElement("button");
    contactButton.className = "contact-btn";
    contactButton.id = "contactButton";
    contactButton.textContent = "Contact Us";

    heroContent.append(mainHeading, subHeading, contactButton);

    hero.appendChild(heroContent);
}

function renderFilterSection() {
    const filterSection = document.createElement("div");
    filterSection.className = "filter-section";
    filterSection.id = "filterSection";

    const filterTable = document.createElement("div");
    filterTable.className = "filter-table";

    const filterRows = [
        [
            {
                labelFor: "year",
                labelText: "Select Year",
                selectId: "year",
                defaultOption: "Year",
            },
            {
                labelFor: "make",
                labelText: "Select Make",
                selectId: "make",
                defaultOption: "Make",
            },
            {
                labelFor: "model",
                labelText: "Select Model",
                selectId: "model",
                defaultOption: "Model",
            },
        ],
        [
            {
                labelFor: "style",
                labelText: "Body Style",
                selectId: "style",
                defaultOption: "Style",
            },
            {
                labelFor: "condition",
                labelText: "Car Condition",
                selectId: "condition",
                defaultOption: "Condition",
            },
            {
                labelFor: "price",
                labelText: "Select Price",
                selectId: "price",
                defaultOption: "Price",
            },
        ],
    ];

    filterRows.forEach((row) => {
        const filterRow = document.createElement("div");
        filterRow.className = "filter-row";

        row.forEach((item) => {
            const filterItem = document.createElement("div");
            filterItem.className = "filter-item";

            const label = document.createElement("label");
            label.setAttribute("for", item.labelFor);
            label.id = `${item.labelFor}Label`;
            label.textContent = item.labelText;

            const select = document.createElement("select");
            select.id = item.selectId;

            const defaultOption = document.createElement("option");
            defaultOption.textContent = item.defaultOption;

            select.appendChild(defaultOption);

            filterItem.appendChild(label);
            filterItem.appendChild(select);
            filterRow.appendChild(filterItem);
        });

        filterTable.appendChild(filterRow);
    });

    const searchButton = document.createElement("button");
    searchButton.className = "search-btn";
    searchButton.id = "searchButton";
    searchButton.textContent = "Search";

    filterSection.appendChild(filterTable);
    filterSection.appendChild(searchButton);

    filters.appendChild(filterSection);
}

function renderFeaturesSection() {
    const featureCards = [
        {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/2211/2211425.png",
            imgAlt: "Car Icon",
            title: "Largest Dealership",
            description:
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
        },
        {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/18497/18497231.png",
            imgAlt: "Warranty Icon",
            title: "Unlimited Warranty",
            description:
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
        },
        {
            imgSrc: "https://cdn-icons-png.flaticon.com/512/1456/1456840.png",
            imgAlt: "Insurance Icon",
            title: "Insurance Support",
            description:
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
        },
    ];

    featureCards.forEach((card) => {
        const serviceCard = document.createElement("div");
        serviceCard.className = "service-card";

        const img = document.createElement("img");
        img.src = card.imgSrc;
        img.alt = card.imgAlt;
        img.className = "service-icon";

        const title = document.createElement("h3");
        title.className = "service-title";
        title.textContent = card.title;

        const description = document.createElement("p");
        description.className = "service-description";
        description.textContent = card.description;

        serviceCard.appendChild(img);
        serviceCard.appendChild(title);
        serviceCard.appendChild(description);

        features.appendChild(serviceCard);
    });
}

renderNavbar();
renderHeroSection();
renderFilterSection();
renderFeaturesSection();

filterFeatureSection.append(filters, features);
root.append(navbar, hero, filterFeatureSection);

async function renderCarsGrid() {
    gridContainer.replaceChildren();

    try {
        const response = await fetch("https://www.freetestapi.com/api/v1/cars");
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const carsData = await response.json();

        carsData.forEach((car) => {
            const gridItem = document.createElement("div");
            gridItem.className = "car-card";

            const carImage = document.createElement("img");
            carImage.src = car.image;
            carImage.alt = car.model || "Car Image";
            carImage.className = "car-image";

            const carName = document.createElement("h3");
            carName.className = "car-name";
            carName.textContent = car.make;

            const carModel = document.createElement("p");
            carModel.className = "car-model";
            carModel.textContent = `Model: ${car.model}`;

            const carPrice = document.createElement("p");
            carPrice.className = "car-price";
            carPrice.textContent = `Price: ${car.price}`;

            gridItem.appendChild(carImage);
            gridItem.appendChild(carName);
            gridItem.appendChild(carModel);
            gridItem.appendChild(carPrice);

            gridContainer.appendChild(gridItem);
        });
    } catch (error) {
        const errorMessage = document.createElement("p");
        errorMessage.className = "error-message";
        errorMessage.textContent =
            "Failed to load car data. Please try again later.";
        gridContainer.appendChild(errorMessage);
    }
}

renderCarsGrid();
root.append(gridContainer);