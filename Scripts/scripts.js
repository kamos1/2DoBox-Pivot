$("#submit").on('click', function(e){
	e.preventDefault();
	var storeIdeaTitle = $('#title-input').val();
	var storeIdeaContent = $('#content-input').val();
	var card = new Card(storeIdeaTitle, storeIdeaContent);
	var itemKey = Date.now();
	var stringCard = JSON.stringify(card);
	localStorage.setItem(storeIdeaTitle, stringCard);
	console.log(card);
	console.log(stringCard);

	addIdea(storeIdeaTitle)
})

function Card(storeIdeaTitle, storeIdeaContent) {
	this.title = storeIdeaTitle;
	this.body = storeIdeaContent;
	this.quality = undefined;
	this.id = $(".new-idea").length;
}

function addIdea(storeIdeaTitle){

	var x = localStorage.getItem(storeIdeaTitle);
	var title = JSON.parse(x);
	
	console.log(title);
	// $("#card-section").prepend(`
	// 	<div class="new-idea">
	// 		<header>
	// 			<h1 class="entry-title">${}</h1>
	// 			<ul>
	// 				<li class="clear"></li>
	// 			</ul>
	// 		</header>
	// 		<article>
	// 			<p>${}</p>
	// 			<ul>
	// 				<li class="upvote"></li>
	// 				<li class="downvote"></li>
	// 			</ul>
	// 			<span class="quality">${}</span>
	// 		</article>
	// 		<hr>
	// 	</div>`)
}

// as the key local storage key: Have the card.id be generated by localStorage.length only problem is that it starts at zero... then use card.id as the local storage key.
//
// or have the localStorage.setItem key be storeIdeaTitle. I tried it both ways and it works.
