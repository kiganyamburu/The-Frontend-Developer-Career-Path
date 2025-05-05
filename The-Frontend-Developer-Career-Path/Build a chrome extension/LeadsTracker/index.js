let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.setItem("myName", "Peter")
let name = localStorage.getItem("myName")
console.log(name)

localStorage.clear()

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))


    renderLeads()
})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) with target="_blank"
        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}


