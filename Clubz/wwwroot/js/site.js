document.addEventListener("DOMContentLoaded", async () => {
  let table = document.querySelector("table");
  let lastRow = table.rows[table.rows.length - 1];
  let lastRowHtml = lastRow.innerHTML;

  let newRow = document.createElement("tr");
  newRow.innerHTML = lastRowHtml;

  document.querySelectorAll('button[type="submit"]').forEach((element) => {
    element.addEventListener("click", async (e) => {
      e.preventDefault();

      let formMethod = element.getAttribute("formmethod");

      if (
        formMethod === "post" ||
        formMethod === "put" ||
        formMethod === "delete"
      ) {
        let form = element.form;
        let formData = new FormData(form);
        let obj = Object.fromEntries(formData);
        let id = obj.Id;
        let json = JSON.stringify(obj);

        let fetched = save(`/api/clubs?id=${id}`, formMethod, json);

        if (formMethod === "post") {
          table.tBodies[0].appendChild(newRow);

          fetched.then((response) => {
            response.json().then((data) => {
              let button = e.target;
              let newId = data;
              let rowToUpdate = button.closest("tr");

              rowToUpdate.className = `row${newId}`;
              rowToUpdate.querySelector("form").id = `form${newId}`;
              rowToUpdate.querySelector('input[name="Id"]').value = newId;

              rowToUpdate.querySelector(
                'button[formmethod="post"]'
              ).form = `form${newId}`;

              rowToUpdate.querySelector(
                'button[formmethod="delete"]'
              ).form = `form${newId}`;

              rowToUpdate
                .querySelector('button[formmethod="delete"]')
                .removeAttribute("disabled");

              console.log(data);
            });
          });
        }
        if (formMethod === "put") {
          fetched.then((response) => {
            response.json().then((data) => {
              console.log(data);
            });
          });
        }
        if (formMethod === "delete") {
          fetched.then((response) => {
            let row = document.querySelector(`tr.row${id}`);
            let rowIndex = row.rowIndex;
            table.deleteRow(rowIndex);
            response.json().then((data) => {
              console.log(data);
            });
          });
        }
      }
    });
  });
});

async function save(url, method, body) {
  return await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
}
