const band = {
    bandname : "oneD",
    famoussong: "You & I",
    year : 1999
}
// console.log(band);

//destructuring
// const bandname = band.bandname;
// const famoussong = band.famoussong;
// console.log(bandname);
// console.log(famoussong);

//or

// const {bandname, famoussong} = band;
// console.log(typeof bandname, bandname)
const {bandname : var1, famoussong : var2} = band; //changing variable name from bandname to var1 & famoussong to var2
console.log(var1, "and their famous song is", var2);