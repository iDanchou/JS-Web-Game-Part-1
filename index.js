function newImage(imageLocation, left, bottom) {
    let image = document.createElement('img');
    image.src = imageLocation;
    image.style.position = 'fixed';
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
}

function newItem(imageLocation, left, bottom) {
    let item = document.createElement('img');
    item.src = imageLocation;
    item.style.position = 'fixed';
    item.style.left = left;
    item.style.bottom = bottom;
    document.body.append(item); 
    return item;
}

function removeItem(item) {
    item.addEventListener('dblclick', function() {
        item.remove()
    })
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

let sword = newItem('assets/sword.png', '500px', '405px');
let shield = newItem('assets/shield.png', '165px', '185px');
let staff = newItem('assets/staff.png', '600px', '100px');


removeItem(sword);
removeItem(shield);
removeItem(staff);