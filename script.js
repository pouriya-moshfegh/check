console.log("Commands :pitch(), search(), tend(), roast() , sleep(),help() ");
let tent = false;
let wood = 0;
let fire = false;
let marshmallow = 10;

function help() {
  console.log("Commands:pitch(), search(), tend(), roast() , sleep(),help()");
}
function pitch() {
  tent = true;
  console.log("you pitched the tent");
}
function tend() {
  if (fire) {
    fire = false;
    console.log("fire is off");
  } else if (!wood) {
    console.log("you need wood to start fire");
  } else {
    fire = true;
  }
}
function search() {
  if (!wood) {
    wood = 1;
    console.log("you found piece of wood");
  }
  console.log("you already have woods");
}
function tend() {
  console.log("you started the fire");
}
function roast() {
  if (marshmallow) {
    marshmallow = marshmallow - 1;
    console.log("you roasted the marshmallow");
  }
  else {
console.log('you are out of marshmallow')
  }
}
function sleep() {
  console.log("you need to put on the fire");
}
