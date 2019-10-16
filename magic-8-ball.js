fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
var answer = floor(random (1, 6));
if (answer === 1) {
    fill(173, 48, 169);
    text("YOU'LL HAVE", 164, 217);
    text("A MEDICORE", 166, 234);
    text("DAY", 190, 250); 
} else if (answer === 2) {
    text("YOU'LL HAVE", 164, 217);
    text("TERRIBLE LUCK", 155, 234);
} else if (answer === 3) {
    text("YOU'LL HAVE", 164, 217);
    text("EXTREME", 174, 231);
    text("GOOD LUCK", 168, 246);
} else if (answer === 4) {
    text("YOU'LL HAVE", 164, 217);
    text("EXTREME", 174, 232);
    text("BAD LUCK", 174, 248);
} else if (answer === 5) {
    text("YOUR DAY WILL", 156, 218);
    text("BE FULL OF", 170, 233);
    text("MANY SUPRISES", 156, 249);
}
