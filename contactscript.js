// Array that will store the contact data
let contacts = [];


// Function to load and display contacts
async function displayContacts() {

    try {

        // Fetch the JSON data
        const response = await fetch("contacts.json");

        // Parse the JSON data into a JavaScript object
        const data = await response.json();

        // Store the contacts in the contacts array
        contacts = data.contacts;

        // Display the contacts in the table
        updateContactTable();

    } catch (error) {

        console.error("Error loading contacts:", error);

    }
}


// Function to update the HTML table
function updateContactTable() {

    // Find the table body
    const contactList = document.getElementById("contactList");

    // Clear the existing table rows
    contactList.innerHTML = "";

    // Loop through the contacts
    contacts.forEach(function(contact) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phoneNumber}</td>
        `;

        contactList.appendChild(row);

    });
}


// Function to add a new contact
function addContact(event) {

    // Prevent the form from refreshing the webpage
    event.preventDefault();

    // Get the values entered in the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    // Create a new contact object
    const newContact = {
        name: name,
        email: email,
        phoneNumber: phoneNumber
    };

    // Add the new contact to the contacts array
    contacts.push(newContact);

    // Update the HTML table
    updateContactTable();

    // Clear the form after adding the contact
    document.getElementById("contactForm").reset();
}


// Listen for the form submission
document.getElementById("contactForm").addEventListener("submit", addContact);


// Load the original contacts when the page opens
displayContacts();