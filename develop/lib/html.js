// create a function that adds staff to html document

function head() {
    return `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/css/bootstrap-grid.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
        <link rel="stylesheet" href="./develop/html/style.css" />
        <title>My Team</title>
    </head>
    <body>
        <header><h1>My Team</h1></header>
        <div class="container">
        <main>`
}

function footer() {
    return `
            </main>
            </div>
        </body>
    </html>`;
}
const buildStaff = staff => {
    
    head();

    let cardContainer = `
    <div class="employee-card col-lg-2 col-md-6 col-sm-12">
    <div class="employee-header">`;

    for (let i = 0; i < staff.length; i++) {
        cardContainer += `<div>${staff[i].getName()}</div>
                        <div>${(staff[i].getRole())}</div>`;
        cardContainer += `</div><div class="employee-details">`;
        cardContainer += `<div>${staff[i].getId()}</div>
                        <div>${staff[i].getEmail()}</div>`;

        if(staff[i].getRole() === 'Manager') {
            cardContainer += `<div>${staff[i].getOfficeNumber()}</div>`;
        } else if(staff[i].getRole() === 'Engineer') {
            cardContainer += `<div>${staff[i].getGithub()}</div>`;
        } else if(staff[i].getRole() === 'Intern') {
            cardContainer += `<div>${staff[i].getSchool()}</div>`;
        }
    }
    
    cardContainer += `</div></div>`;
    footer();
}

module.exports = buildStaff;