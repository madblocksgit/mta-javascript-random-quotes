function generateQuote() {
	var quotes=[
	 {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "Failure is like a Girl Friend, we addict and we transform that GF into Wife (Success).",
      author: "Madhu Parvathaneni"
    },
    {
      quote:
        "Don't bother what others think about you, it only matters what you feel about you.",
      author: "Madhu Parvathaneni"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
	];

	var temp=Math.floor(Math.random()*quotes.length);
	document.getElementById('quote').innerHTML=quotes[temp]['quote'];
	document.getElementById('author').innerHTML=quotes[temp]['author'];
	console.log(temp);
}