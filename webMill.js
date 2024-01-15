const fs = require("fs"); 
const poemfile = `./poems.js`;
const bookfile = `./book.js`;
const tools = require("./tools.js");
const mills = require("./mills.js");
const dt = new Date();
const timestamp = dt.getTime();
const datetime = dt.toDateString();
const description = "code art ::: algorithmic quilt patterns";
const rooturl = "https://quiltfactory.work";
const gsurl = "https://storage.googleapis.com/clockfactory";
const authorurl = "https://mctavish.work";
const chosenmill = mills[tools.randominteger(0,mills.length)];
let indexhtml = `
<html>
<head>
	<title>quilt factory</title>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
	<meta name="description" content="${description}"/>
	<meta name="author" content="kathy mctavish">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebPage",
			"name": "quilt factory",
			"breadcrumb": "core text",
			"url": "${rooturl}",
			"description": "${description}",
			"datePublished": "${datetime}",
			"image": "/apple-touch-icon.png",
			"author": "${authorurl}",
			"license": "http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US"
		}
	</script>

	<link rel="stylesheet" media="screen" href="css/core.css"/>
	<style>
	body {
		background-color:var(--warmblack);
		border-width:5%;
		border-left: dashed;
		border-color: var(--warmlightwhite);
		background-image: url("${gsurl}/${chosenmill}/poster0000_${chosenmill.slice(4)}.png"); 
		background-size:cover; background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
	}
	h5 {
 		color: var(--warmblack);
 	}
	main {
		border-left: dashed;
 		border-left-width: 6px;
 		border-left-color: var(--yellow);
 		border-right: dashed;
 		border-right-width: 6px;
 		border-right-color: var(--red);
		background-color:var(--gray);
	}
	</style>
</head>
<body class="" >
<div id="mainflex">
<main class="expand narrow" id="top">
<header>
	<h1>quilt factory</h1>
	<h2>compiled ::: <span class="small">${datetime}</span></h2>
</header>
<nav>
	<ul>
		<li><a href="https://mctavish.work/index.html" id="homelink">go to mctavish portfolio</a></li>
	</ul>
</nav>
<div class="screenreader-text">
	<p>Your feedback is always welcome.</p>
</div>
<article id="list">
	<header>
		<h1>quilt patterns</h1>
	</header>
	<div class="flex">
	<div class="content">
	<h5>physical samples</h5>
 	<ul>
 		<li><a href="physicalquilt.html">example physical quilt</a></li>
 		<li><a href="installation.html">previous quilted work</a></li>
 	</ul>
 	<h5>digital samples</h5>
	<ul>`
indexhtml = indexhtml + mills.map( name=>name.slice(4) ).map( name=>{
	return	`
		<li><a href="index${name}.html">quilt set ${name}</a></li>`;
}).join("");
indexhtml = indexhtml + ` 
	</ul>
	</div></div>
</article>
<article id="thanks">
	<header>
		<h1>thanks</h1>
	</header>
	<div class="content">
	<p>Kathy McTavish was a fiscal year 2023 recipient of a Creative Support for Individuals grant from the Minnesota State Arts Board. This activity was made possible by the voters of Minnesota through a grant from the Minnesota State Arts Board, thanks to a legislative appropriation from the arts and cultural heritage fund.</p>
	</div>
</article>
</main>
</div>
</body>
</html>`;
mills.map( mill=> {
	let s = mill.substring(4);
	let year = s.substring(0,4);
	let month = s.substring(4,6)-1;
	let date = s.substring(6,8);
	let hour = s.substring(8,10);
	let minute = s.substring(10,12);
	let dt = new Date(year,month,date,hour,minute);
	return {
		name: mill,
		suffix: mill.substring(4),
		//datetime: dt.toString(),
		datetime: dt.toDateString(),
		posters: [
			`poster0000_${s}.png`,
			`poster0001_${s}.png`,
			`poster0002_${s}.png`,
			`poster0004_${s}.png`,
		],
		title: `quilt ${s}`,
		subtitle: `${year}.${month}.${date} ${hour}:${minute}`, 
		url: `index${s}.html`,
	}
}).forEach( mill => {
	let head = `
<head>
	<title>${mill.title}</title>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
	<meta name="description" content="${description}"/>
	<meta name="author" content="kathy mctavish">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
			"@type": "WebPage",
			"name": "${mill.title}",
			"breadcrumb": "core text",
			"url": "${rooturl}/${mill.url}",
			"description": "${description}",
			"datePublished": "${mill.datetime}",
			"image": "/apple-touch-icon.png",
			"author": "${authorurl}",
			"license": "http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US"
		}
	</script>

	<link rel="stylesheet" media="screen" href="css/core.css"/>
	<style>
	body {
		background-image: url("${gsurl}/${mill.name}/${mill.posters[tools.randominteger(0,3)]}"); 
		background-size:cover; background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		}
	main {
		background-color:var(--gray);
	}
	</style>
</head>
`
	let html = `<html>${head}
<body class="" >
<div id="mainflex">
<main class="expand narrow" id="top">`;
	html = html + `
<header>
	<h1>quilt set</h1>
	<h2>created ::: ${mill.datetime}</h2>
</header>
<nav>
	<ul>
		<li><a href="index.html" id="indexlink">back to quilt index</a></li>
		<li><a href="https://mctavish.work/index.html" id="homelink">go to mctavish portfolio</a></li>
	</ul>
</nav>
<div class="screenreader-text">
	<p>Your feedback is always welcome.</p>
</div>
<article id="video">
	<header>
		<h1>video</h1>
	</header>
	<div class="content">
<figure>
<video controls poster="${gsurl}/${mill.name}/${mill.posters[tools.randominteger(0,3)]}">
  <source src="${gsurl}/${mill.name}/filmsound.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
</figure>
	</div>
</article>
<article id="audio">
	<header>
		<h1>soundscape alone</h1>
	</header>
	<div class="content">
	<p>
		<audio loop=true controls="true" id="soundscape" src="${gsurl}/${mill.name}/line_all_thread_all_echo_reverb.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio>
	</p>
	</div>
</article>
<article id="otherfiles">
	<header>
		<h1>other files</h1>
	</header>
	<div class="content">
	<ul>
		<li><a href="${gsurl}/${mill.name}/printbook.pdf">pattern book</a></li>
		<li><a href="${gsurl}/${mill.name}/line_all_thread_all_reverb.mp3">sound file with reverb</a></li>
		<li><a href="${gsurl}/${mill.name}/line_all_thread_all_echo_reverb.mp3">sound file with reverb & echo</a></li>
	</ul>
	</div>
</article>
<article id="notes">
	<header>
		<h1>notes</h1>
	</header>
	<div class="content">
	<p>code package @ ${mill.name}</p>
	</div>
</article>
</main>
</div>
</body>
</html>`;
	console.log(`${mill.url}`);
	console.log(`${JSON.stringify(mill.posters)}`);
	fs.writeFileSync(`${mill.url}`, html, (err) => {
		if (err)
			console.log(err);
		else {
			console.log(`${mill.url} written successfully\n`);
		}
	});
});
fs.writeFileSync(`index.html`, indexhtml, (err) => {
	if (err)
		console.log(err);
	else {
		console.log(`index.html written successfully\n`);
	}
});
//console.log(`prince ${filename} -o ./print.pdf`);
//console.log(`open ./print.pdf`);
