var passwords = [
	"password123",
	"qwertyuiop",
	"admin2015",
	"trustno1",
	"letmein6969"
];
var indexOld;
var index = Math.floor(Math.random() * passwords.length);
var password = passwords[index];
var characters = [];
var counter = 0;

var interval = setInterval(function() {
	for (i = 0; i < counter; i++) {
		characters[i] = password.charAt(i);
	}
	for (i = counter; i < password.length; i++) {
		characters[i] = Math.random()
			.toString(36)
			.charAt(2);
	}
	$(".password").text(characters.join(""));
}, 25);

function hack() {
	counter++;
	if (counter == password.length) {
		self.stop();
	}
}


//keyboard events won't fire if the iframe isn't selected first in Full Page view
$(window).load(function() {
	$(this).addClass("hidden");
	$(".info p:last-child, .password").removeClass("hidden");
	setInterval(function() {
		hack();
	},750);
});