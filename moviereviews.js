var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    {
        title: "ABC",
        review: "ehh"
    }
];

for (var i = 0; i <= 1; i++) {
fill(84, 140, 209);
textAlign(CENTER, CENTER);
textSize(20);
text(movies[i].title, 200, 70 * i + 55);
textSize(15);
text(movies[i].review, 200, 75 * i + 80);
}
