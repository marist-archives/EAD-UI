<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:xlink="http://www.w3.org/1999/xlink">

	<xsl:output method="html" indent="yes"/>
	<xsl:template match="ead">
		<html>
			<head>
				<link rel="shortcut icon" href="/archives/researchcart/images/ltp2.ico" />
				<link rel="stylesheet" href="/archives/researchcart/styles/main.css" type="text/css" />
				<link rel="stylesheet" type="text/css" href="/archives/researchcart/styles/quickTree.css" />
				<link rel="stylesheet" type="text/css" href="http://library.marist.edu/archives/mainpage/mainStyles/style.css" />
				<script type="text/javascript" src="http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js"></script>
				<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
				<script type="text/javascript" src="http://library.marist.edu/archives/mainpage/scripts/archivesChildMenu.js" ></script>
				<script type="text/javascript" src="http://library.marist.edu/archives/mainpage/scripts/searchForm.js"></script>
	
			
				<script type="text/javascript" src="/archives/researchcart/js/jquery.quickTree.js" ></script>
				<script type="text/javascript">$(document).ready(function(){
					$("ul.quickTree").quickTree();

					$('a.expand1').click(function(){
					$("ul.quickTree").find('ul').show();
					$("span.expand").addClass('expandAll');

					});

					$('a.collapse1').click(function(){
					location.reload();
					});
					});</script>
				<meta name="keywords" content="Lowell Thomas, Lowell Jackson Thomas, Frances Thomas, Frances Ryan Thomas, Fran Thomas, Lowell Thomas, Jr., Harry Chase, T.E. Lawrence, Thomas Edward Lawrence, Tibet, Dalai Lama, Cinerama, High Adventure with Lowell Thomas, High Adventure, Travelogues, Frank R. Roberson, Frank Roberson, glass plate negatives, lantern slides, Marist College, Marist Archives and Special Collections" />
				<meta name="description" content="Lowell Thomas was a household name during the golden age of radio.  He made T.E. Lawrence known worldwide as “Lawrence of Arabia,” he was the first to air a simulcast, the first to film the Dalai Lama in Tibet, he was the creator of Cinerama, the founder of Capital Cities (a major broadcasting company now owned by the Walt Disney Company), and the author of over 50 books.  In addition to his remarkable career as a journalist, newsman, entrepreneur, and explorer, Thomas was also considered one of the greatest public speakers of his generation.  He brought the news to the nation every evening for four decades and broadcast his experiences traveling to exotic lands by radio, television, and motion pictures. The Lowell Thomas Papers at Marist College is the largest and most comprehensive collection of materials concerning the pioneer news broadcaster and explorer.  The collection is comprised of 1,203 linear feet of manuscripts, graphic materials, and objects documenting Thomas’s life and family from 1789 (over 100 years before he was born) to 1981 (the year he passed away). The collection tells the story of the life and career of Lowell Thomas, as he became one of America’s most prominent newsmen, explorers, and entrepreneurs.  Included in the collection are several thousand photographs and slides (including glass and lantern) from all parts of the world.  Locations such as Arabia, Palestine, Afghanistan, India, New Zealand, Malaya, New Guinea, Africa, and Tibet are only a few of the distant lands Thomas was able to capture in this medium.  Also chronicled is Thomas’s early life, as photographs of his childhood and letters to his future wife Frances Ryan can be found in the collection.  As one of America’s most prominent travelers, Thomas was able to incorporate his journeys into stories and documentaries in both filmic and literary forms, two genres that are also major parts of the collection.  A few highlights of the collection include correspondence and journals documenting Thomas’s time with T. E. Lawrence and the development of the Lowell Thomas Travelogues, photographs, film, scrapbooks, and artifacts from his trip to Tibet, and background and administrative material relating to one of Thomas’s biggest endeavors, Cinerama.  With the quantity and quality of the materials present, the Lowell Thomas Papers serve as an invaluable research tool and guide for individuals in the fields of history, communications, journalism, public policy, foreign affairs, and documentary filmmaking. Lowell Jackson Thomas, born the 6th of August 1892 in Woodington Ohio, would become one of the most recognizable figures of his day as he led a life of world traveler, broadcaster, and communications pioneer.  By the time Thomas was 24-years-old, he had amassed two undergraduate degrees, two masters degrees, and one law degree, while traveling to Alaska, teaching, and working as a reporter.  In 1917 he was taken away from the “America First” campaign to cover the events of World War I.  This would lead to Thomas’s historic meeting with T. E. Lawrence.  While traveling with Lawrence through Egypt, the Sudan, and Arabia, Thomas filmed the fighting of the Bedouin people as they defeated the Turks.  Some 25 years later, Mr. Thomas would cover World War II.  In 1949 Thomas and his son Lowell, Jr. would embark on a historic journey into the forbidden land of Tibet.  They were not only able to meet the Dalai Lama (the same individual who is recognized as the Dalai Lama today), they were also the first people ever to film him. In 1930 Thomas became a radio broadcaster for CBS.  He would be involved in broadcasting for the remainder of his life as he pioneered the practice of broadcasting from remote locations.  In addition to his radio show Thomas was the voice of Fox Movietone newsreels and in 1940 he went on the air with the first sponsored program on television.  Broadcast at his regular radio hour, the show was the first “simulcast” (aired on radio and television simultaneously) ever produced.  In 1976 Lowell Thomas retired from his radio news program, which had been on the air for 46 consecutive years, only to begin a new program three years later.  “The Best Years” marked Thomas’s return to radio, as he would recall his interactions with the prominent figures he had met throughout his life.  With a full load of work for the weekend, he passed away in his house in Pawling, New York on the 29th of August 1981.  " />
				<title>Lowell Thomas Papers</title>
			</head>
			<body>

				<div id="bodyWrapper">
					<div id="headerContainer">
						<div id="header">
							<div id="logo"></div><!-- /logo -->
						</div>
						<!-- /header -->
					</div>
					<div id="menu">
						<div id="menuItems"></div><!-- /menuItems -->
					</div><!-- /menu -->
					<!--form id='search_form' name='search_form' action="http://library.marist.edu/archives/search/" method="POST">

					<input type='text' id='title' name='title' />
					<input type='submit' class="classname" value='Search'/>

					<input type="hidden" name="action" value="search" />
					<input type="hidden" name="page" value="0" />
					<input type="hidden" name="page_size" value="25" />

					<input id='col_42175' name='col_42175' value='true' style="display: none;"/>

					</form-->
					<div id="contentWrapper">
						<div id="bodyContent">
							<!--xsl:apply-templates select="eadheader/filedesc/titlestmt/titleproper"/-->
							<div id="tblElemsMain">
								<xsl:apply-templates select="eadheader"/>
								<xsl:apply-templates select="archdesc"/>

							</div>
							<div id="footerOptions">
								<a href= "http://library.marist.edu/archives/index.html" target="_self">Archives Home</a>
								<a href= "http://www.marist.edu" target="_blank">Marist Home</a>
								<a href="http://library.marist.edu/" target="_blank">Cannavino Library</a>

							</div><!-- /footerOptions -->
							<a href="http://www.archives.gov/nhprc/" target="_blank">
								<img src="images/nhprc2.jpg" width="150px" height="40px" class="nhprc"/>
							</a>
							<p id="nhprcAck1">This project was funded by the</p>
							<p id="nhprcAck">National Historical Publications and Records Commission</p>

							<!--p id="revised">Revised: 2011 October 25</p-->
						</div>
					</div><!-- /contentWrapper -->

				</div><!-- /bodyWrapper -->

			</body>
		</html>
	</xsl:template>
	<xsl:template match="eadheader">
		<h1 class="heading">
			<xsl:value-of select="filedesc/titlestmt/titleproper" />
		</h1>
		<div id="displayElems">
			<h2 class="indHeading">Repository</h2>
			<address>
				<xsl:value-of select="filedesc/publicationstmt/publisher" />
			</address>
			<xsl:for-each select="filedesc/publicationstmt/address/addressline[@id='add']">
				<address>
					<xsl:value-of select="." />
				</address>
			</xsl:for-each>
			<xsl:for-each select="filedesc/publicationstmt/address/addressline[@id='email']">
				<address>
					<a href="mailto:{text()}">
						<xsl:value-of select="."/>
					</a>
				</address>
			</xsl:for-each>
			<h2 class="indHeading">
				<a href="http://library.marist.edu/archives/LTP/report/">NHPRC Grant Report</a>
			</h2>
			<h2 class="indHeading">Project Director</h2>
			<p id="info">John Ansley, MA, MSLS</p>
			<h2 class="indHeading">Project Archivist</h2>
			<p id="info">
				<xsl:value-of select="filedesc/titlestmt/author" />
			</p>
			<h2 class="indHeading">Date Completed</h2>
			<p id="info">
				<xsl:value-of select="filedesc/publicationstmt/date" />
			</p>
			<h2 class="indHeading">Encoded by</h2>
			<p id="info">
				<xsl:value-of select="profiledesc/creation" />
			</p>

		</div>
	</xsl:template>
	<xsl:template match="archdesc">
		<div id="displayElems">
			<h2 class="indHeading">Creator</h2>
			<p id="info">
				<xsl:value-of select="did/origination" />
			</p>
			<h2 class="indHeading">Extent</h2>
			<p id="info">
				<xsl:value-of select="did/physdesc/extent" />
			</p>
			<h2 class="indHeading">Dates</h2>
			<p id="info1">
				Inclusive:
				<xsl:value-of select="did/unitdate[@type='inclusive']" />
			</p>
			<p id="info1">
				Bulk:
				<xsl:value-of select="did/unitdate[@type='bulk']" />
			</p>
			<h2 class="indHeading">Conditions Governing Access</h2>
			<p id="info">
				<xsl:value-of select="accessrestrict" />
			</p>
			<h2 class="indHeading">Languages</h2>
			<p id="info">
				<xsl:value-of select="did/langmaterial" />
			</p>
			<h2 class="indHeading">Scope and Content</h2>
			<p id="info">
				<xsl:value-of select="scopecontent/p" />
			</p>
			<xsl:for-each select="scopecontent/p/extref">
				<a href="{./@xlink:href}" target="_blank" class="readmore">Read more</a>
			</xsl:for-each>
			<h2 class="indHeading">Historical Note</h2>
			<xsl:for-each select="bioghist/p">
				<p id="info">
					<xsl:value-of select="." />
				</p>
			</xsl:for-each>
			<xsl:for-each select="bioghist/p/extref">
				<a href="{./@xlink:href}" target="_blank" class="readmore">Read more</a>
			</xsl:for-each>
			<h2 class="indHeading">Provenance</h2>
			<p id="info">
				<xsl:value-of select="acqinfo/p" />
			</p>
			<h2 class="indHeading">Copyright Notice</h2>
			<p id="info">
				<xsl:value-of select="userestrict/p" />
				<a href="http://www.loc.gov/copyright/title17/">http://www.loc.gov/copyright/title17/.</a>
			</p>
			<h2 class="indHeading">Acknowledgements</h2>
			<p id="info">The Marist College Archives and Special Collections staff wishes to express their deep appreciation to all of the parties that helped the Lowell Thomas Project come to fruition:</p>
			<a href="Notes/acknowledgements.html" target="_blank" class="readmore">Read more</a>
			<xsl:apply-templates select="dsc"/>
		</div>
	</xsl:template>
	<xsl:template match="dsc">
		<div id="listOfTree">
			<ul class="quickTree">
				<li class="heading">
					List of series
					<xsl:for-each select="c01">
						<ul>
							<li class="list">
								<xsl:for-each select="did/extref">
									<a href="{./@xlink:href}" target="_self">
										<xsl:value-of select="./unittitle"/>
									</a>
								</xsl:for-each>
								<xsl:value-of select="did/unittitle"/>
							</li>
						</ul>
					</xsl:for-each>
				</li>
			</ul>
		</div>
	</xsl:template>
</xsl:stylesheet>

