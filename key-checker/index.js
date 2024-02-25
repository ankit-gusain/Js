let body = document.querySelector("body");
let index = document.querySelector(".index");

body.addEventListener("keydown", (e) => {
    console.log(e);
    index.innerHTML = `
    <table>
        <thead>
            <tr>
                <th> key </th>
                <th> key type </th>
                <th> key code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> ${e.key === ' ' ? "Space" : e.key}</td>
                <td> ${e.code}</td>
                <td> ${e.keyCode} </td>
            </tr>
        </tbody>
    </table>
    `
});