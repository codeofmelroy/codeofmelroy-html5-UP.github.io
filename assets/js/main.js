/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article'),
		$user_instagram_media = $("#user-instagram-media");

	var user_instagram_feed = {};
	// 	"data": [
	// 		{
	// 			"id": "18074799781166659",
	// 			"caption": "Best selfie is with nature in the background.",
	// 			"media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/73387300_582877179172469_3188934273550252065_n.jpg?_nc_cat=104&_nc_ohc=4yrr8rFP3tkAQl7alq9tED6vWzHLHdjEAur4GmxBYyhlkbFWnOBMG94Hw&_nc_ht=scontent.xx&oh=9cdbbdc27e7905c154c8382dc13cd562&oe=5E697D03",
	// 			"permalink": "https://www.instagram.com/p/B6GOnMCg3pjOefLeKOkkg9j1JMpa6KAziYN1000/"
	// 		},
	// 		{
	// 			"id": "17874033646489982",
	// 			"caption": "The best nougat chocolate ever. Dint knew it came in a huge pack. Directly from swiss. \n#toblerone #milkchocolate",
	// 			"media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/74649501_278718873084532_6268767035448458824_n.jpg?_nc_cat=106&_nc_ohc=vnAaqH1uB0cAQlsMemb3fEh265MDDO60_704Wg1X0OfyFz3N6OTvVxXGQ&_nc_ht=scontent.xx&oh=a038e7f4f2c0bbb152defc489743e016&oe=5E840953",
	// 			"permalink": "https://www.instagram.com/p/B5FQvowg8FHJLON5M8hx6m5gaBtIJrGTSkx2L00/"
	// 		},
	// 		{
	// 			"id": "17921641090345346",
	// 			"caption": "Have you ever explored your dark side? \n#halloween #joker\nArtist @monicha_9 and @ruhipyedave",
	// 			"media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/75324993_2366457743603486_4449816324305601902_n.jpg?_nc_cat=109&_nc_ohc=oyznSB2IaykAQmtycIXN4TVI05QrDxCzLPHHSvJ8VDKCdrToanDb6k5FA&_nc_ht=scontent.xx&oh=6c5e0264e48cf3b96ba70aeb1f5c4745&oe=5E828354",
	// 			"permalink": "https://www.instagram.com/p/B4SX907gL7ONmywZSRmEmitbBXyjYco2_i3j-40/"
	// 		},
	// 		{
	// 			"id": "17861866276409382",
	// 			"caption": "The smile on the face says it all... #burgersandfries #cafebasil 🍔🍟",
	// 			"media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/61903606_646474035795587_1502874447643760703_n.jpg?_nc_cat=103&_nc_ohc=VAb0eWV0QPgAQmtE_hU4vA4Nk3T3ePhcchnPx2L58z1coqqQzprloLI0A&_nc_ht=scontent.xx&oh=1e23cf923c6942521aab4c31c3242c76&oe=5EB19254",
	// 			"permalink": "https://www.instagram.com/p/ByGISSGAFtKT3Rp3UWpU13X4ARSKLqPhL9doBk0/"
	// 		},
	// 		{
	// 			"id": "17865831472356104",
	// 			"media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/56213877_319571625414773_6072875668759536599_n.jpg?_nc_cat=105&_nc_ohc=Xwu_UZSnzAQAQmHtrhQ_3vH1q1BluWiJyF5ttJNRYnNJJr1BgPgh2Sq4Q&_nc_ht=scontent.xx&oh=c1e1c413ca3116b795f83e62ba8be2dc&oe=5E78991A",
	// 			"permalink": "https://www.instagram.com/p/BvrZlnSAY4mpDbgUlpy-6xShqsnbi8t4aTwfYI0/"
	// 		},
	// 		{
	// 			"id": "17955027316249703",
	// 			"caption": "#WorkStation #Linux #Minion #Smurfette #Cocoturtle #Snowman",
	// 			"media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/53300152_620029821752600_3238293080386945625_n.jpg?_nc_cat=109&_nc_ohc=mF-drdLT8rcAQmwCiu4nxZsKbO0Iv4JD4XBXo8lEcEnenovsPTg8Lde9A&_nc_ht=scontent.xx&oh=f163404a03d70bd36af15becabcdd817&oe=5EB3D13D",
	// 			"permalink": "https://www.instagram.com/p/Bva-xW9AZ6FLHhKHnZy0mu8ainAEmvxdUgcgxE0/"
	// 		},
	// 		{
	// 			"id": "17866048312173287",
	// 			"caption": "😎😎😎",
	// 			"media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/24174932_1925471320815651_3388641858384035840_n.jpg?_nc_cat=106&_nc_ohc=d0dR67totRUAQnhslVA8X8eJV_2QiTn_hppuhDtoVu60lrrNIKXzjmt2g&_nc_ht=scontent.xx&oh=ad8dd8c062f2575fbdfaf8276b913db4&oe=5EAE4129",
	// 			"permalink": "https://www.instagram.com/p/BXh9NQ3BfbQnbMd5zluyd59zHql4LPkrigYubY0/"
	// 		},
	// 		{
	// 			"id": "17853899914038751",
	// 			"caption": "Now I will never get the message storage full #Marshmallow #Update #16gb #Storage #internal+SD",
	// 			"media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/24127191_391137204651270_5353918760166096896_n.jpg?_nc_cat=100&_nc_ohc=pS8zjo41IM8AQlkpKRZ-yvv_oMSh9H2zNtuwDJZ0tpFSCK300eIZaJRLw&_nc_ht=scontent.xx&oh=0d8b7e7a63a08fb4cd5d52610df4800e&oe=5EACC1F3",
	// 			"permalink": "https://www.instagram.com/p/BCU8HWiEwn36jdT0eF-Z2Aud3PakVlXhybhkb80/"
	// 		},
	// 		{
	// 			"id": "17844467827087022",
	// 			"caption": "Now this is an outstanding feature.... #Marshmallow #Android6 #Update #MotoE2",
	// 			"media_url": "https://scontent.xx.fbcdn.net/v/t51.2885-15/24125459_263044387557867_8927991596717178880_n.jpg?_nc_cat=107&_nc_ohc=wzgpvvlu7boAQnXOouchoN6hfSIo2STzGZAL8EhU0bSfzK7frsFDlZzkg&_nc_ht=scontent.xx&oh=3acb7ec23bbf57c1c866a25839fb3fe7&oe=5E79BFAB",
	// 			"permalink": "https://www.instagram.com/p/BB82kASEwl6ZT_vrrjjD4KnNs-CVUu1a7o9n4w0/"
	// 		}
	// 	],
	// 	"paging": {
	// 		"cursors": {
	// 			"before": "QVFIUldZAVHRIWXBVSHYxRXRyQjFYZAHB5YUVQYTN6VXlpb1R5WlBjaUw4MlpJV3JBVjB4VGRZARlNMb2psZAlVuWXlfVHRmMDBiWkgzUzM2ejJvNTlKbi1LXzVR",
	// 			"after": "QVFIUml6OGlQcFdZAbEJQTklHcGlUa3pydW5wTFlkdzNCaWdsSWtoVkdUV1Y3bGw1bk0xVWpvYXN3SU9uYVVOMXI4bmFWcUxmdDJodGlDRmhEZAUJnakNfTWJn"
	// 		},
	// 		"next": "https://graph.instagram.com/v1.0/17841400966534376/media?access_token=IGQVJWVFpoS2pHYUxyZAUxMOU9pakFNUzdfOEQtUUV5c2E3U0hoNC1tVlRWbTRWbExsRXBHTjVrUDA2dmtsOS1WM2tULVQ3SEcxS0UtaUx5akZAHanFiUVlZAVjN5THJObnRWYzBlSE1R&fields=id%2Ccaption%2Cmedia_url%2Cpermalink&limit=9&after=QVFIUml6OGlQcFdZAbEJQTklHcGlUa3pydW5wTFlkdzNCaWdsSWtoVkdUV1Y3bGw1bk0xVWpvYXN3SU9uYVVOMXI4bmFWcUxmdDJodGlDRmhEZAUJnakNfTWJn"
	// 	}
	// }

	$.get("https://graph.instagram.com/me/media?limit=9&fields=id,media_url,permalink&access_token=IGQVJWVFpoS2pHYUxyZAUxMOU9pakFNUzdfOEQtUUV5c2E3U0hoNC1tVlRWbTRWbExsRXBHTjVrUDA2dmtsOS1WM2tULVQ3SEcxS0UtaUx5akZAHanFiUVlZAVjN5THJObnRWYzBlSE1R",
		function (response) {
			user_instagram_feed = response;
			instagram_images();
		});

	function instagram_images() {
		let preimage = "<div>";
		let postimage = "</div>";
		let images = "";
		$user_instagram_media.empty(".loader");
		$.each(user_instagram_feed.data, function (i, val) {

			let rows = 3;
			if (window.innerWidth >= 425 && window.innerWidth <= 625)
				rows = 1;

			if (++i % rows != 0) {
				images += `<div class="instagram-cards"><a href="${val.permalink}" style="background-image: url(${val.media_url});" class="instagram-images"> </a></div>`;
			}
			else {
				images += `<div class="instagram-cards"><a href="${val.permalink}" style="background-image: url(${val.media_url});" class="instagram-images"></a></div>`;
				$user_instagram_media.append(preimage + images + postimage);
				images = "";
			}
		});

	}

	$("#main").tabs();

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Fix: Flexbox min-height bug on IE.
	if (browser.name == 'ie') {

		var flexboxFixTimeoutId;

		$window.on('resize.flexbox-fix', function () {

			clearTimeout(flexboxFixTimeoutId);

			flexboxFixTimeoutId = setTimeout(function () {

				if ($wrapper.prop('scrollHeight') > $window.height())
					$wrapper.css('height', 'auto');
				else
					$wrapper.css('height', '100vh');

			}, 250);

		}).triggerHandler('resize.flexbox-fix');

	}

	// Nav.
	var $nav = $header.children('nav'),
		$nav_li = $nav.find('li');

	// Add "middle" alignment classes if we're dealing with an even number of items.
	if ($nav_li.length % 2 == 0) {

		$nav.addClass('use-middle');
		$nav_li.eq(($nav_li.length / 2)).addClass('is-middle');

	}

	// Main.
	var delay = 325,
		locked = false;

	// Methods.
	$main._show = function (id, initial) {

		var $article = $main_articles.filter('#' + id);

		// No such article? Bail.
		if ($article.length == 0)
			return;

		// Handle lock.

		// Already locked? Speed through "show" steps w/o delays.
		if (locked || (typeof initial != 'undefined' && initial === true)) {

			// Mark as switching.
			$body.addClass('is-switching');

			// Mark as visible.
			$body.addClass('is-article-visible');

			// Deactivate all articles (just in case one's already active).
			$main_articles.removeClass('active');

			// Hide header, footer.
			$header.hide();
			$footer.hide();

			// Show main, article.
			$main.show();
			$article.show();

			// Activate article.
			$article.addClass('active');

			// Unlock.
			locked = false;

			// Unmark as switching.
			setTimeout(function () {
				$body.removeClass('is-switching');
			}, (initial ? 1000 : 0));

			return;

		}

		// Lock.
		locked = true;

		// Article already visible? Just swap articles.
		if ($body.hasClass('is-article-visible')) {

			// Deactivate current article.
			var $currentArticle = $main_articles.filter('.active');

			$currentArticle.removeClass('active');

			// Show article.
			setTimeout(function () {

				// Hide current article.
				$currentArticle.hide();

				// Show article.
				$article.show();

				// Activate article.
				setTimeout(function () {

					$article.addClass('active');

					// Window stuff.
					$window
						.scrollTop(0)
						.triggerHandler('resize.flexbox-fix');

					// Unlock.
					setTimeout(function () {
						locked = false;
					}, delay);

				}, 25);

			}, delay);

		}

		// Otherwise, handle as normal.
		else {

			// Mark as visible.
			$body
				.addClass('is-article-visible');

			// Show article.
			setTimeout(function () {

				// Hide header, footer.
				$header.hide();
				$footer.hide();

				// Show main, article.
				$main.show();
				$article.show();

				// Activate article.
				setTimeout(function () {

					$article.addClass('active');

					// Window stuff.
					$window
						.scrollTop(0)
						.triggerHandler('resize.flexbox-fix');

					// Unlock.
					setTimeout(function () {
						locked = false;
					}, delay);

				}, 25);

			}, delay);

		}

	};

	$main._hide = function (addState) {

		var $article = $main_articles.filter('.active');

		// Article not visible? Bail.
		if (!$body.hasClass('is-article-visible'))
			return;

		// Add state?
		if (typeof addState != 'undefined'
			&& addState === true)
			history.pushState(null, null, '#');

		// Handle lock.

		// Already locked? Speed through "hide" steps w/o delays.
		if (locked) {

			// Mark as switching.
			$body.addClass('is-switching');

			// Deactivate article.
			$article.removeClass('active');

			// Hide article, main.
			$article.hide();
			$main.hide();

			// Show footer, header.
			$footer.show();
			$header.show();

			// Unmark as visible.
			$body.removeClass('is-article-visible');

			// Unlock.
			locked = false;

			// Unmark as switching.
			$body.removeClass('is-switching');

			// Window stuff.
			$window
				.scrollTop(0)
				.triggerHandler('resize.flexbox-fix');

			return;

		}

		// Lock.
		locked = true;

		// Deactivate article.
		$article.removeClass('active');

		// Hide article.
		setTimeout(function () {

			// Hide article, main.
			$article.hide();
			$main.hide();

			// Show footer, header.
			$footer.show();
			$header.show();

			// Unmark as visible.
			setTimeout(function () {

				$body.removeClass('is-article-visible');

				// Window stuff.
				$window
					.scrollTop(0)
					.triggerHandler('resize.flexbox-fix');

				// Unlock.
				setTimeout(function () {
					locked = false;
				}, delay);

			}, 25);

		}, delay);


	};

	// Articles.
	$main_articles.each(function () {

		var $this = $(this);

		// Close.
		$('<div class="close">Close</div>')
			.appendTo($this)
			.on('click', function () {
				location.hash = '';
			});

		// Prevent clicks from inside article from bubbling.
		$this.on('click', function (event) {
			event.stopPropagation();
		});

	});

	// Events.
	$body.on('click', function (event) {

		// Article visible? Hide.
		if ($body.hasClass('is-article-visible'))
			$main._hide(true);

	});

	$window.on('keyup', function (event) {

		switch (event.keyCode) {

			case 27:

				// Article visible? Hide.
				if ($body.hasClass('is-article-visible'))
					$main._hide(true);

				break;

			default:
				break;

		}

	});

	$window.on('hashchange', function (event) {

		// Empty hash?
		if (location.hash == ''
			|| location.hash == '#') {

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Hide.
			$main._hide();

		}

		// Otherwise, check for a matching article.
		else if ($main_articles.filter(location.hash).length > 0) {

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Show article.
			$main._show(location.hash.substr(1));

		}

	});

	// Scroll restoration.
	// This prevents the page from scrolling back to the top on a hashchange.
	if ('scrollRestoration' in history)
		history.scrollRestoration = 'manual';
	else {

		var oldScrollPos = 0,
			scrollPos = 0,
			$htmlbody = $('html,body');

		$window
			.on('scroll', function () {

				oldScrollPos = scrollPos;
				scrollPos = $htmlbody.scrollTop();

			})
			.on('hashchange', function () {
				$window.scrollTop(oldScrollPos);
			});

	}

	// Initialize.

	// Hide main, articles.
	$main.hide();
	$main_articles.hide();

	// Initial article.
	if (location.hash != ''
		&& location.hash != '#')
		$window.on('load', function () {
			$main._show(location.hash.substr(1), true);
		});

	$("#work-tabs").tabs();
})(jQuery);