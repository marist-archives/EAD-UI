<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:xlink="http://www.w3.org/1999/xlink">
	<xsl:output method="html"/>
	<xsl:output
	doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
	doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"	/>
	<xsl:template match="ead">
		<html>
			<head>
				<link rel="shortcut icon" href="/archives/researchcart/images/ltp2.ico" />
				<link rel="stylesheet" href="/archives/researchcart/styles/researchCart.css" type="text/css" />
				<link rel="stylesheet" href="/archives/researchcart/styles/breadcrumb.css" type="text/css" />
				<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
				<script type="text/javascript" src="/archives/researchcart/js/jStorage.js"></script>
				<script type="text/javascript" src="/archives/researchcart/js/researchCart.js"></script>
				<script type="text/javascript" src="/archives/researchcart/js/eadBox.js"></script>

			</head>
			<body>

				<div id="bodyWrapper">
					<div id="header">
						<div id="logo"></div><!-- /logo -->
					</div><!-- /header -->
					<div id="menu">
						<div id="menuItems">

							<a href= "http://library.marist.edu/archives/index.html" target="_self">Archives Home</a>
							<a href= "http://www.marist.edu" target="_blank">Marist Home</a>
							<a href="http://library.marist.edu/" target="_blank">Cannavino Library</a>
							<a href= "http://voyager.marist.edu/vwebv/searchBasic?sk=en_USmarist" target="_blank">Library Catalog</a>
							<form id='search_form' name='search_form' action="http://library.marist.edu/archives/search/" method="POST">

								<input type='text' id='title' name='title' />
								<input type='submit' class="classname" value='Search'/>
								<input type="hidden" name="action" value="search" />
								<input type="hidden" name="page" value="0" />
								<input type="hidden" name="page_size" value="25" />
								<input id='col_42175' name='col_42175' value='true' style="display: none;"/>

							</form>

						</div><!-- /menuItems -->
					</div><!-- /menu -->
					<div id="noJS">
						<!-- Message to display when Javascript is disabled -->
						<noscript>
							<strong>
								<span>Your browser either does not support JavaScript, or is currently disabled.</span>
								<br/>
								<span>Please enable Javascript or install a Javascript compliant browser.</span>
							</strong>

						</noscript>
					</div><!-- No Javascript -->
					<div id="contentWrapper">
						<div id="bodyContent">
							<xsl:apply-templates select="eadheader"/>
							<div id="tblOptions">
								<a href="#" class="expand">Expand All</a>
								<a href="#" class="collapse">Collapse All</a>
							</div>
							<div id="tblElems">
								<xsl:apply-templates select="archdesc"/>
							</div>
							<div id="footerOptions">
								<a href="http://www.marist.edu" target="_blank">Marist Home</a>
								<a href="http://library.marist.edu/" target="_blank">Marist Library</a>
								<a href="http://library.marist.edu/archives/index.html" target="_blank">Home</a>
								<a href="http://library.marist.edu/archives/LTP/LTP.xml" target="">LT Papers</a>
							</div><!-- /footerOptions -->
							<a href="http://www.archives.gov/nhprc/" target="_blank">
								<img src="http://library.marist.edu/archives/LTP/images/nhprc2.jpg" width="150px" height="40px" class="nhprc"/>
							</a>
							<p id="nhprcAck1">This project was funded by the</p>
							<p id="nhprcAck">National Historical Publications and Records Commission</p>

						</div>

					</div><!-- /contentWrapper  -->

				</div><!-- /bodyWrapper -->

			</body>
		</html>
	</xsl:template>

	<!-- Template for eadheader -->
	<xsl:template match="eadheader">
		<xsl:apply-templates select="filedesc/titlestmt/titleproper"/>
	</xsl:template>
	<xsl:template match="titleproper">
		<title>
			<xsl:value-of select="."/>
		</title>
		<h1 class="heading">Lowell Thomas Papers</h1>
		<h2 class="heading" id="subSeries">
			<xsl:value-of select="."/>
		</h2>

		<!-- Breadcrumb navigation section start -->
		<!-- Goes after </h2> and before </xsl:template> -->
		<div id="breadcrumbs">
			<ul id="crumbs">
				<li id="first">
					<a href="http://library.marist.edu/archives/LTP/LTP.xml" target="_self">LT Papers</a>
				</li>
				<li>
					<a href="http://library.marist.edu/archives/LTP/Textual%20Materials/textual.xml" target="_self">Textual Materials</a>
				</li>
				<li id="last">
					<xsl:value-of select="."/>
				</li>
			</ul>
			<br />
		</div>
		<!-- Breadcrumb navigation section end -->

	</xsl:template>

	<!-- Template for archival description -->
	<xsl:template match="archdesc">
		<xsl:apply-templates select="dsc"/>
	</xsl:template>
	<xsl:template match="c01">

		<table class="tbl" align="center" >

			<xsl:for-each select="note">
				<tr class="Box">
					<td class="caption" colspan="5">
						<xsl:value-of select="."/>
					</td>
				</tr>
			</xsl:for-each>
			<tr class="tbldata">
				<th style="width:10px">Item</th>
				<th style="width:175px">Contents</th>
				<th style="width:85px">Date</th>
				<th style="width:85px">Select</th>

			</tr>
			<tr class="tbldata tblselectall">
				<td id="boxNumber" class="tableFont" style="width:145px	" >
					<xsl:value-of select="c02/did/container"/>
				</td>
				<td id="artifactDetail" class="tableFont"  colspan="2" >All items in this Box</td>
				<td id="checkBox">
					<input type="checkbox" id="selectAll" class="innerCheckBox selectAll" ></input>
				</td>
				<td id="fileNumber" style="display:none">All-Items</td>
			</tr>
			<xsl:for-each select="c02">
				<tr class="tbldata">
					<td class="tableFont">
						<xsl:value-of select="did/unitid"/>
					</td>
					<td class="data">
						<xsl:value-of select="did/unittitle"/>
					</td>
					<td class="tableFont">
						<xsl:value-of select="did/unitdate"/>
					</td>
					<td id="checkBox">
						<input type="checkbox" class="innerCheckBox items" ></input>
					</td>
					<td id="fileNumber" style="display:none">
						<xsl:value-of select="did/unitid"/>
					</td>
					<td id="boxNumber" style="display:none">
						<xsl:value-of select="did/container"/>
					</td>
					<td id="artifactDetail" style="display:none">
						<xsl:value-of select="did/unittitle"/>
					</td>
				</tr>

			</xsl:for-each>

		</table>
		<br />

	</xsl:template>

</xsl:stylesheet>
