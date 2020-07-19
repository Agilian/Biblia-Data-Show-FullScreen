function calcula(){
		document.getElementById("teste").style.color="#CCCCCC";
			
		/* ----------------------  RECENTES ---------------------- */
		var liv_r = $('input[name=liv_b]').val();
		var cap_r = $('input[name=cap_b]').val();
		var ver_r = $('input[name=ver_b]').val();
		var desc  = $('#teste').text().substring(3,30);
		if($('.livro').text() !== $('input[name=liv_b]').val()){
			if($('.capitulo').text() !== $('input[name=cap_b]').val()){	
				$('.panel').append('<div class="row"><div class="livro">' + liv_r +  '</div><div class="capitulo">' + cap_r + ':' + ver_r + '</div><div class="descricao">' + desc + '...</div></div>');
			}
		}
		/*
		if($('.livro').text() == $('input[name=liv_b]').val()){
			if($('.capitulo').text() != $('input[name=cap_b]').val()){
					$('.panel').append('<div class="row"><div class="livro">' + liv_r +  '</div> <div class="capitulo"' + cap_r + '</div>:' + ver_r + '<div class="vers">' + desc + '...</div></div>');	
			}
		}
		/* ------------------------------------------------------- */		
}

function tempoFoco(){
	setInterval(function(){document.getElementById("livro").focus();}, 15000);
}

function setasVersiculo(){
	if (event.keyCode == 37){
		anteriorVersiculo();
	}
	if(event.keyCode == 39){
		proximoVersiculo();
	}

	if(event.keyCode == 13){
		abrirVersiculo();
	}
}

function proximoVersiculo(){
	document.getElementById("versiculo").value = parseInt(document.getElementById("versiculo").value) + 1;
	abrirVersiculo();
}
function anteriorVersiculo(){
	document.getElementById("versiculo").value = parseInt(document.getElementById("versiculo").value) - 1;
	abrirVersiculo();
}
function sel1(){
	abrirVersiculo();
	document.getElementById("livro").select();
}
function sel2(){
	abrirVersiculo();
	document.getElementById("capitulo").select();
}
function sel3(){
	abrirVersiculo();
	document.getElementById("versiculo").select();
}

function corretor(){
	var xLIV = document.getElementById("livro");
	var xCAP = document.getElementById("capitulo");
	var xVER = document.getElementById("versiculo");
	var x = xLIV.value.toLowerCase();
	xLIV.value=x;
	var l = x.charAt(0); 
	//alert(x);
	switch (l) {     //  primeira letra do livro digitado
		case "a":
			switch (x) {
				case "a":
				case "ag":
				case "age":
				case "ageu":
				case "ague":
				case "agueu":
				case "ajeu":
				case "aje":
					return "ageu";
				case "am":
				case "amo":
				case "amos":
				case "amoz":
				case "amó":
				case "amós":
				case "amóz":
				case "an":
				case "ano":
				case "anos":
				case "anoz":
				case "anó":
				case "anós":
					return "amos";
				case "ap":
				case "apo":
				case "apoc":
				case "apoca":
				case "apocal":
				case "apocali":
				case "apocalip":
				case "apocalips":
				case "apocalipse":
				case "apocalipise":
				case "apocalipis":
				case "apocalipi":
				case "apocalí":
				case "apocalíp":
				case "apocalíps":
				case "apocalípse":
				case "apocalípise":
				case "apocalípis":
				case "apocalípi":
				case "apocalipese":
				case "apocalipes":
				case "apocalipe":
				case "apocalípese":
				case "apocalípes":
				case "apocalípe":
				case "apocalípss":
				case "apocalípsse":
				case "apocalípisse":
				case "apocalípiss":
				case "apocalipesse":
				case "apocalipess":
				case "apocalípesse":
				case "apocalípess":
					return "apocalipse";
				case "abacuque":
				case "abacuqui":
				case "aba":
				case "abac":
				case "abacu":
				case "abacuc":
				case "abacuke":
					return "habacuque";
				default:
					return "atos";
			}
		case "c":
			switch (x) {
				case "c":
				case "ca":
				case "can":
				case "cant":
				case "canti":
				case "cantic":
				case "cantico":
				case "canticos":
				case "canta":
				case "cantar":
				case "cantare":
				case "cantares":
				case "cantares de":
				case "cantares de salomao":
				case "cantares de salomão":
					return "cantares";
				case "corintios":
				case "corintias":
				case "cor":
				case "cori":
				case "corin":
				case "corint":
				case "corintia":
				case "corintio":
					return "i corintios";
				case "crônicas":
				case "crô":
				case "crôn":
				case "crôni":
				case "crônic":
				case "crônica":
				case "cronicas":
				case "cr":
				case "cro":
				case "cron":
				case "croni":
				case "cronic":
				case "cronica":
					return "i cronicas";
				default:
					return "colossenses";
			}

		case "d":
			switch (x) {
				case "daniel":
				case "d":
				case "da":
				case "dan":
				case "dani":
				case "danie":
				case "daniele":
				case "daniela":
					return "daniel";
				default:
					return "deuteronomio";
			}
		case "e":
			switch (x) {
				case "efesios":
				case "ef":
				case "efe":
				case "efes":
				case "efesi":
				case "efesio":
				case "efesiu":
				case "efesius":
				case "efésios":
				case "efé":
				case "efés":
				case "efési":
				case "efésio":
				case "efésiu":
				case "efésius":
					return "efesios";
				case "esdras":
				case "es":
				case "esd":
				case "esdr":
				case "esdra":
					return "esdras";
				case "ester":
				case "est":
				case "este":
				case "estér":
				case "esté":
				case "esther":
				case "esth":
				case "esthe":
					return "ester";
				case "exodo":
				case "ex":
				case "exo":
				case "exod":
				case "exado":
				case "exa":
				case "exad":
				case "ezodo":
				case "ezo":
				case "ezod":
				case "ezado":
				case "eza":
				case "ezad":
				case "esodo":
				case "eso":
				case "esod":
				case "esado":
				case "esa":
				case "esad":
				case "hexodo":
				case "exodos":
				case "exados":
				case "ezodos":
				case "ezados":
				case "esodos":
				case "esados":
					return "exodo";
				case "ezequiel":
				case "ez":
				case "eze":
				case "ezeq":
				case "ezequ":
				case "ezequi":
				case "ezequie":
				case "ezequiél":
				case "ezequié":
					return "ezequiel";
				default:
					return "eclesiastes";
			}
		case "ê":
			switch(x)  {
				case "êx":
				case "êxo":
				case "êxod":
				case "êxa":
				case "êxado":
				case "êxad":
				case "êzado":
				case "êza":
				case "êzad":
				case "êz":
				case "êzo":
				case "êsodo":
				case "ês":
				case "êso":
				case "êsod":
				case "êzod":
				case "êzodo":
				case "êsado":
				case "êsa":
				case "êsad":
				case "êsodos":
				case "êzodos":
				case "êxados":
				case "êxodos":
				case "êzados":
				case "êsados":
					return "exodo";
				default:
					return "exodo";
			}
		case "é":
			switch (x) {
				case "ésdras":
				case "és":
				case "ésd":
				case "ésdr":
				case "ésdra":
					return "esdras";
				default:
					return "esdras";
			}
		case "f":
			switch (x) {
				case "filemom":
				case "f":
				case "fi":
				case "fil":
				case "file":
				case "filem":
				case "filemo":
				return "filemom";
				default:
					return "filipenses";
			}
		case "g":
			switch (x) {
				case "galatas":
				case "g":
				case "ga":
				case "gal":
				case "gala":
				case "galat":
				case "galata":
				case "gálatas":
				case "gá":
				case "gál":
				case "gála":
				case "gálat":
				case "gálata":
					return "galatas";
				case "geremias":
				case "ger":
				case "gere":
				case "gerem":
				case "geremi":
				case "geremia":
					return "jeremias";
				default:
					return "genesis";
			}
		case "h":
			switch (x) {
				case "hexodos":
				case "hêxodos":
				case "hexados":
				case "hêxados":
				case "hezodos":
				case "hêzodos":
				case "hezados":
				case "hêzados":
				case "hesodos":
				case "hêsodos":
				case "hesados":
				case "hêsados":
				case "hex":
				case "hexo":
				case "hexod":
				case "hêxodo":
				case "hêx":
				case "hêxo":
				case "hêxod":
				case "hexado":
				case "hexa":
				case "hexad":
				case "hêxado":
				case "hêxa":
				case "hêxad":
				case "hezodo":
				case "hezo":
				case "hezod":
				case "hêzodo":
				case "hêz":
				case "hêzo":
				case "hêzod":
				case "hezado":
				case "heza":
				case "hezad":
				case "hêzado":
				case "hêza":
				case "hêzad":
				case "hesodo":
				case "heso":
				case "hesod":
				case "hêsodo":
				case "hês":
				case "hêso":
				case "hêsod":
				case "hesado":
				case "hesa":
				case "hesad":
				case "hêsado":
				case "hêsa":
				case "hêsad":
					return "exodo";
				case "hat":
				case "hato":
				case "hatos":
				case "hatos ":
				case "hatos d":
				case "hatos do":
				case "hatos dos":
				case "hatos dos ":
					return "atos";
				case "hag":
				case "hage":
				case "hageu":
					return "ageu";
				case "ham":
				case "hamo":
				case "hamos":
				case "hamó":
				case "hamós":
					return "amos";
				case "heclesiastes":
				case "heclesiastis":
				case "heclesiasti":
				case "he":
				case "hec":
				case "hecl":
				case "hecle":
				case "hecles":
				case "heclesi":
				case "heclesia":
				case "heclesias":
				case "heclesiast":
				case "heclesiaste":
				case "heclesiá":
				case "heclesiás":
				case "heclesiást":
				case "heclesiáste":
					return "eclesiastes";
				case "hefesios":
				case "hef":
				case "hefe":
				case "hefes":
				case "hefesi":
				case "hefesio":
				case "hefesiu":
				case "hefesius":
				case "hefésios":
				case "hefé":
				case "hefés":
				case "hefési":
				case "hefésio":
				case "hefésiu":
				case "hefésius":
					return "efesios";
				case "hésdras":
				case "hés":
				case "hésd":
				case "hésdr":
				case "hésdra":
				case "hesdras":
				case "hes":
				case "hesd":
				case "hesdr":
				case "hesdra":
					return "esdras";
				case "ister":
				case "ist":
				case "iste":
				case "istér":
				case "isté":
				case "isther":
				case "isth":
				case "isthe":
				case "hester":
				case "hest":
				case "heste":
				case "hestér":
				case "hesté":
				case "hesther":
				case "hesth":
				case "hesthe":
					return "ester";
				case "hobadias":
				case "ho":
				case "hob":
				case "hoba":
				case "hobad":
				case "hobadi":
				case "hobadia":
					return "obadias";
				case "hebreus":
				case "he":
				case "heb":
				case "hebr":
				case "hebre":
				case "hebreu":
				case "hebeus":
				case "hebreos":
				case "hebleus":
					return "hebreus";
				default:
					return "habacuque";
			}
		case "1":
			switch (x) {
				case "1 cronicas":
				case "1 cr":
				case "1 cro":
				case "1 cron":
				case "1 croni":
				case "1 cronic":
				case "1 cronica":
				case "1 crônicas":
				case "1 crô":
				case "1 crôn":
				case "1 crôni":
				case "1 crônic":
				case "1 crônica":
					return "i cronicas";
				case "1 joao":
				case "1 j":
				case "1 jo":
				case "1º joao":
				case "1º j":
				case "1º jo":
				case "1 joão":
				case "1º joão":
					return "i joao";
				case "1 pedro":
				case "1 p":
				case "1 pe":
				case "1 ped":
				case "1 pedr":
					return "i pedro";
				case "1 reis":
				case "1 r":
				case "1 re":
				case "1 rei":
				case "1º reis":
				case "1º r":
				case "1º re":
				case "1º rei":
					return "i reis";
				case "1 samuel":
				case "1 s":
				case "1 sa":
				case "1 sam":
				case "1 samu":
				case "1 samue":
				case "1º samuel":
				case "1º s":
				case "1º sa":
				case "1º sam":
				case "1º samu":
				case "1º samue":
					return "i samuel";
				case "1 timoteo":
				case "1 ti":
				case "1 tim":
				case "1 timo":
				case "1 timot":
				case "1 timote":
				case "1º timoteo":
				case "1º ti":
				case "1º tim":
				case "1º timo":
				case "1º timot":
				case "1º timote":
					return "i timoteo";
				case "1 corintios":
				case "1 c":
				case "1 co":
				case "1 cor":
				case "1 cori":
				case "1 corin":
				case "1 corint":
				case "1 corinti":
				case "1 corintio":
				case "1 corintios":
				case "1° c":
				case "1° co":
				case "1° cor":
				case "1° cori":
				case "1° corin":
				case "1° corint":
				case "1° corinti":
				case "1° corintio":
					return "i corintios";
				default:
					return "i tessalonicenses";
			}
		case "2":
			switch (x) {
				case "2 corintios":
				case "2 c":
				case "2 co":
				case "2 cor":
				case "2 cori":
				case "2 corin":
				case "2 corint":
				case "2 corinti":
				case "2 corintio":
				case "2º corintios":
				case "2º c":
				case "2º co":
				case "2º cor":
				case "2º cori":
				case "2º corin":
				case "2º corint":
				case "2º corinti":
				case "2º corintio":
					return "ii corintios";
				case "2 cronicas":
				case "2 cr":
				case "2 cro":
				case "2 cron":
				case "2 croni":
				case "2 cronic":
				case "2 cronica":
				case "2º cronicas":
				case "2º cr":
				case "2º cro":
				case "2º cron":
				case "2º croni":
				case "2º cronic":
				case "2º cronica":
					return "ii cronicas";
				case "2 joao":
				case "2 j":
				case "2 jo":
				case "2 joa":
				case "2º joao":
				case "2º j":
				case "2º jo":
				case "2º joa":
				case "2 joão":
				case "2 joã":
				case "2º joão":
				case "2º joã":
					return "ii joao";
				case "2 pedro":
				case "2 p":
				case "2 pe":
				case "2 ped":
				case "2 pedr":
				case "2º pedro":
				case "2º p":
				case "2º pe":
				case "2º ped":
				case "2º pedr":
					return "ii pedro";
				case "2 reis":
				case "2 r":
				case "2 re":
				case "2 rei":
				case "2º reis":
				case "2º r":
				case "2º re":
				case "2º rei":
					return "ii reis";
				case "2 samuel":
				case "2 s":
				case "2 sa":
				case "2 sam":
				case "2 samu":
				case "2 samue":
				case "2º samuel":
				case "2º s":
				case "2º sa":
				case "2º sam":
				case "2º samu":
				case "2º samue":
					return "ii samuel";
				case "2 timoteo":
				case "2 ti":
				case "2 tim":
				case "2 timo":
				case "2 timot":
				case "2 timote":
				case "2º timoteo":
				case "2º ti":
				case "2º tim":
				case "2º timo":
				case "2º timot":
				case "2º timote":
				case "2 timóteo":
				case "2 timó":
				case "2 timót":
				case "2 timóte":
				case "2º timóteo":
				case "2º timó":
				case "2º timót":
				case "2º timóte":
				case "2 timotio":
				case "2 timoti":
				case "2º timotio":
				case "2º timoti":
				case "2 timótio":
				case "2 timóti":
				case "2º timótio":
				case "2º timóti":
					return "ii timoteo";
				default:
					return "genesis";
			}
		case "i":
			switch (x) {
				case "i corintios":
				case "i c":
				case "i co":
				case "i cor":
				case "i cori":
				case "i corin":
				case "i corint":
				case "i corinti":
				case "i corintio":
				case "i corintias":
				case "i corintians":
					return "i corintios";
				case "i cronicas":
				case "i cr":
				case "i cro":
				case "i cron":
				case "i croni":
				case "i cronic":
				case "i cronica":
				case "i crônicas":
				case "i crô":
				case "i crôn":
				case "i crôni":
				case "i crônic":
				case "i crônica":
					return "i cronicas";
				case "i joao":
				case "i j":
				case "i jo":
				case "i joa":
				case "i joão":
				case "i joã":
					return "i joao";
				case "i pedro":
				case "i p":
				case "i pe":
				case "i ped":
				case "i pedr":
					return "i pedro";
				case "i reis":
				case "i r":
				case "i re":
				case "i rei":
					return "i reis";
				case "i samuel":
				case "i s":
				case "i sa":
				case "i sam":
				case "i samu":
				case "i samue":
					return "i samuel";
				case "i tessalonicenses":
				case "i t":
				case "i te":
				case "i tes":
				case "i tess":
				case "i tessa":
				case "i tessal":
				case "i tessalo":
				case "i tessalon":
				case "i tessaloni":
				case "i tessalonic":
				case "i tessalonice":
				case "i tessalonicen":
				case "i tessalonicens":
				case "i tessalonicense":
				case "i tessalonicinses":
					return "i tessalonicenses";
				case "i timoteo":
				case "i ti":
				case "i tim":
				case "i timo":
				case "i timot":
				case "i timote":
				case "timoteo":
				case "ti":
				case "tim":
				case "timo":
				case "timot":
				case "timote":
					return "i timoteo";
				case "ii corintios":
				case "ii c":
				case "ii co":
				case "ii cor":
				case "ii cori":
				case "ii corin":
				case "ii corint":
				case "ii corinti":
				case "ii corintio":
					return "ii corintios";
				case "ii cronicas":
				case "ii cr":
				case "ii cro":
				case "ii cron":
				case "ii croni":
				case "ii cronic":
				case "ii cronica":
					return "ii cronicas";
				case "ii joao":
				case "ii j":
				case "ii jo":
				case "ii joa":
				case "ii joão":
				case "ii jã":
				case "ii joã":
					return "ii joao";
				case "ii pedro":
				case "ii p":
				case "ii pe":
				case "ii ped":
				case "ii pedr":
					return "ii pedro";
				case "ii reis":
				case "ii r":
				case "ii re":
				case "ii rei":
					return "ii reis";
				case "ii samuel":
				case "ii s":
				case "ii sa":
				case "ii sam":
				case "ii samu":
				case "ii samue":
					return "ii samuel";
				case "ii timoteo":
				case "ii ti":
				case "ii tim":
				case "ii timo":
				case "ii timot":
				case "ii timote":
				case "ii timotio":
				case "ii timoti":
				case "ii timótio":
				case "ii timóti":
				case "ii timóteo":
				case "ii timó":
				case "ii timót":
				case "ii timóte":
					return "ii timoteo";
				
				case "iii joao":
				case "iii j":
				case "iii jo":
				case "iii joa":
				case "iii joão":
				case "iii joã":
					return "iii joao";
				case "isaias":
				case "i":
				case "is":
				case "isa":
				case "isai":
				case "isaia":
				case "isaía":
				case "isaías":
					return "isaias";
				default:
					return "ii tessalonicenses";
			}
		case "3":
			switch (x) {
				case "3 joao":
				case "3 j":
				case "3 jo":
				case "3 joa":
				case "3 joão":
				case "3 joã":
					return "iii joao";
				default:
					return "iii joao";
			}
		case "j":
			switch (x) {
				case "jeremias":
				case "j":
				case "je":
				case "jer":
				case "jere":
				case "jerem":
				case "jeremi":
				case "jeremia":
					return "jeremias";
				case "jo":
				case "jó":
					return "jo";
				case "joao":
				case "joa":
				case "joão":
				case "joã":
					return "joao";
				case "joel":
				case "joe":
				case "joél":
				case "joé":
					return "joel";
				case "jonas":
				case "jon":
				case "jona":
				case "jônas":
				case "jôn":
				case "jôna":
					return "jonas";
				case "josue":
				case "josué":
				case "jos":
				case "josu":
					return "josue";
				case "judas":
				case "ju":
				case "jud":
				case "juda":
					return "judas";
				default:
					return "juizes";
			}
		case "l":
			switch (x) {
				case "levitico":
				case "le":
				case "lev":
				case "levi":
				case "levit":
				case "leviti":
				case "levitic":
				case "levítico":
				case "leví":
				case "levít":
				case "levíti":
				case "levític":
					return "levitico";
				case "lucas":
				case "lu":
				case "luc":
				case "luca":
				case "luccas":
					return "lucas";
				default:
					return "lamentações";
			}
		case "m":
			switch (x) {
				case "malaquias":
				case "m":
				case "ma":
				case "mal":
				case "mala":
				case "malaq":
				case "malaqu":
				case "malaqui":
				case "malaquia":
					return "malaquias";
				case "marcos":
				case "mar":
				case "marc":
				case "marco":
					return "marcos";
				case "mateus":
				case "mat":
				case "mate":
				case "mateu":
				case "math":
				case "mathe":
				case "matheu":
				case "matheus":
					return "mateus";
				default:
					return "miqueias";
			}
		case "n":
			switch (x) {
				case "naum":
				case "n":
				case "na":
				case "nau":
					return "naum";
				case "neemias":
				case "ne":
				case "nee":
				case "neem":
				case "neemi":
				case "neemia":
				case "nemias":
				case "nem":
				case "nemi":
				case "nemia":
					return "neemias";
				default:
					return "numeros";
			}
		case "o":
			switch (x) {
				case "obadias":
				case "o":
				case "ob":
				case "oba":
				case "obad":
				case "obadi":
				case "obadia":
					return "obadias";
				default:
					return "oseias";
			}
		case "p":
			switch (x) {
				case "proverbios":
				case "pr":
				case "pro":
				case "prov":
				case "prove":
				case "prover":
				case "proverb":
				case "proverbi":
				case "proverbio":
				case "provérbios":
				case "prové":
				case "provér":
				case "provérb":
				case "provérbi":
				case "provérbio":
					return "proverbios";
				case "pedro":
				case "p":
				case "pe":
				case "ped":
				case "pedr":
					return "i pedro";
				case "primeiro corintios":
				case "primeiro c":
				case "primeiro co":
				case "primeiro cor":
				case "primeiro cori":
				case "primeiro corin":
				case "primeiro corint":
				case "primeiro corinti":
				case "primeiro corintio":
				case "primeiro corintias":
				case "primeiro corintians":
					return "i corintios";
				case "primeiro cronicas":
				case "primeiro cr":
				case "primeiro cro":
				case "primeiro cron":
				case "primeiro croni":
				case "primeiro cronic":
				case "primeiro cronica":
				case "primeiro crônicas":
				case "primeiro crô":
				case "primeiro crôn":
				case "primeiro crôni":
				case "primeiro crônic":
				case "primeiro crônica":
					return "i cronicas";
				case "primeiro joao":
				case "primeiro j":
				case "primeiro jo":
				case "primeiro joa":
				case "primeiro joão":
				case "primeiro joã":
					return "i joao";
				case "primeiro pedro":
				case "primeiro p":
				case "primeiro pe":
				case "primeiro ped":
				case "primeiro pedr":
					return "i pedro";
				case "primeiro reis":
				case "primeiro r":
				case "primeiro re":
				case "primeiro rei":
					return "i reis";
				case "primeiro samuel":
				case "primeiro s":
				case "primeiro sa":
				case "primeiro sam":
				case "primeiro samu":
				case "primeiro samue":
					return "i samuel";
				case "primeiro tessalonicenses":
				case "primeiro t":
				case "primeiro te":
				case "primeiro tes":
				case "primeiro tess":
				case "primeiro tessa":
				case "primeiro tessal":
				case "primeiro tessalo":
				case "primeiro tessalon":
				case "primeiro tessaloni":
				case "primeiro tessalonic":
				case "primeiro tessalonice":
				case "primeiro tessalonicen":
				case "primeiro tessalonicens":
				case "primeiro tessalonicense":
				case "primeiro tessalonicinses":
					return "i tessalonicenses";
				case "primeiro timoteo":
				case "primeiro ti":
				case "primeiro tim":
				case "primeiro timo":
				case "primeiro timot":
				case "primeiro timote":
					return "i timoteo";
				default:
					return "proverbios";
			}
		case "r":
			switch (x) {
				case "romanos":
				case "ro":
				case "rom":
				case "roma":
				case "roman":
				case "romano":
				case "romanus":
				case "romanu":
					return "romanos";
				case "rute":
				case "ru":
				case "rut":
				case "ruti":
				case "ruteh":
					return "rute";
				default:
					return "reis";
			}
		case "s":
			switch (x) {
				case "salmos":
				case "s":
				case "sa":
				case "sal":
				case "salm":
				case "salmo":
				case "saumos":
				case "sau":
				case "saum":
				case "saumo":
				case "salmus":
				case "salmu":
				case "saumus":
				case "saumu":
					return "salmos";
				case "salomão":
				case "salomao":
				case "salo":
				case "salom":
				case "saloma":
					return "cantares";
				case "samuel":
				case "sam":
				case "samu":
				case "samue":
					return "i samuel";
				case "segundo corintios":
				case "segundo c":
				case "segundo co":
				case "segundo cor":
				case "segundo cori":
				case "segundo corin":
				case "segundo corint":
				case "segundo corinti":
				case "segundo corintio":
				case "segundo corintias":
				case "segundo corintians":
					return "i corintios";
				case "segundo cronicas":
				case "segundo cr":
				case "segundo cro":
				case "segundo cron":
				case "segundo croni":
				case "segundo cronic":
				case "segundo cronica":
				case "segundo crônicas":
				case "segundo crô":
				case "segundo crôn":
				case "segundo crôni":
				case "segundo crônic":
				case "segundo crônica":
					return "i cronicas";
				case "segundo joao":
				case "segundo j":
				case "segundo jo":
				case "segundo joa":
				case "segundo joão":
				case "segundo joã":
					return "i joao";
				case "segundo pedro":
				case "segundo p":
				case "segundo pe":
				case "segundo ped":
				case "segundo pedr":
					return "i pedro";
				case "segundo reis":
				case "segundo r":
				case "segundo re":
				case "segundo rei":
					return "i reis";
				case "segundo samuel":
				case "segundo s":
				case "segundo sa":
				case "segundo sam":
				case "segundo samu":
				case "segundo samue":
					return "i samuel";
				case "segundo tessalonicenses":
				case "segundo t":
				case "segundo te":
				case "segundo tes":
				case "segundo tess":
				case "segundo tessa":
				case "segundo tessal":
				case "segundo tessalo":
				case "segundo tessalon":
				case "segundo tessaloni":
				case "segundo tessalonic":
				case "segundo tessalonice":
				case "segundo tessalonicen":
				case "segundo tessalonicens":
				case "segundo tessalonicense":
				case "segundo tessalonicinses":
					return "i tessalonicenses";
				case "segundo timoteo":
				case "segundo ti":
				case "segundo tim":
				case "segundo timo":
				case "segundo timot":
				case "segundo timote":
					return "i timoteo";
				default:
					return "sofonias";
			}
		case "t":
			switch (x) {
				case "tiago":
				case "tia":
				case "tiag":
				case "thiago":
				case "thia":
				case "thiag":
					return "tiago";
				case "tito":
				case "tit":
				case "titu":
				case "tít":
				case "títo":
					return "tito";
				default:
					return "i timoteo";
			}
		case "z":
			switch (x) {
				case "zacarias":
				case "z":
				case "za":
				case "zac":
				case "zaca":
				case "zacar":
				case "zacari":
				case "zacaria":
					return "zacarias";
				default:
					return "zacarias";
			}
		default:
			return "genesis";
	}
}
