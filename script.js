$(document).ready(function(){
	var quote;
	var author;

	function getNewQuote(){

		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(response){
				console.log(response);
				quote =	response.quoteText;
				author = response.quoteAuthor;
				$('.quote').text(quote);
				if(author){
					$('.author').text("-" + author);
				}else{
					$('.author').text("- unkown" + author);
				}
			}
		});
	}
	getNewQuote();

	$('#btn-getQuote').on('click',function(){
		getNewQuote();
	});	

	$('#btn-tweet').on('click',function(){
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -') + author);
	});

});