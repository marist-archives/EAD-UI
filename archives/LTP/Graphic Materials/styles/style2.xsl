<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:xlink="http://www.w3.org/1999/xlink"> 
<xsl:output method="html" indent="yes"/> 
    	<xsl:output 
  		doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
  		doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"	/> 
  <xsl:template match="ead"> 
    <html> 
      	<head>
				<link rel="shortcut icon" href="/archives/researchcart/images/ltp2.ico" />      	
				<link rel="stylesheet" href="/archives/researchcart/styles/main.css" type="text/css" />
				<link rel="stylesheet" href="/archives/researchcart/styles/breadcrumb.css" type="text/css" />
				<link rel="stylesheet" type="text/css" href="/archives/researchcart/styles/quickTree.css" />
				<script type="text/javascript" src="http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js"></script>
				<script src="/archives/researchcart/js/jquery.quickTree.js" type="text/javascript"></script>
				<script type="text/javascript">
					$(document).ready(function(){
					$("ul.quickTree").quickTree();
					
					
					$('a.expand1').click(function(){
					$("ul.quickTree").find('ul').show();
					$("span.expand").addClass('expandAll');
										 
					 });
			
					$('a.collapse1').click(function(){
						location.reload();
					  });		
					});	
			
				</script>
		
			<meta name="google-site-verification" content="Yu4zBvLQkc4-cuHjOT0us8es7aymauHAR2xDL99KrlE" />	
	       <title>Graphic Materials</title> 
		</head> 
	  <body>
	  
				
	  	 <div id="bodyWrapper">
			<div id="header">
				<div id="logo">
    			
				</div><!-- /logo -->
			</div> <!-- /header -->

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

	
			<div id="contentWrapper">
				 <div id="bodyContent">
				<!--div id="tblOptions">
					<a href="#" class="expand1">Expand all </a>
					<a href="#" class="collapse1"> Collapse all </a>
				</div-->
				 <div id="tblElems">
				  	
	  			<xsl:apply-templates select="archdesc"/>
				</div>
						<div id="footerOptions">
							<a href="http://www.marist.edu" target="_blank">Marist Home</a>
							<a href="http://library.marist.edu/" target="_blank">Marist Library</a>
							<a href="http://library.marist.edu/archives/index.html" target="_blank">Home</a>
							<a href="http://library.marist.edu/archives/LTP/LTP.xml" target="">LT Papers</a>
						</div>	<!-- /footerOptions -->
						<a href="http://www.archives.gov/nhprc/" target="_blank"><img src="../images/nhprc2.jpg" width="150px" height="40px" class="nhprc"/></a>
						<p id="nhprcAck1">This project was funded by the</p> 
						<p id="nhprcAck">National Historical Publications and Records Commission</p>

				</div>	
			</div><!-- /contentWrapper -->
		</div><!-- /bodyWrapper -->	
		
	  </body>
  </html>
</xsl:template>

<!--xsl:template match="eadheader/filedesc/titlestmt/titleproper"-->
	
<!--/xsl:template-->	


<xsl:template match="archdesc">
	  <xsl:apply-templates select="dsc"/>
</xsl:template>

<xsl:template match="dsc">
	<h1 class="heading">Lowell Thomas Papers</h1>
	
	<!-- Breadcrumb start After <h1 class="heading"> -->
	<div id="breadcrumbs">
		<ul id="crumbs">
			<li id="first"><a href="http://library.marist.edu/archives/LTP/LTP.xml" target="_self">LT Papers</a></li>
			<li id="last">Graphic Materials</li>
		</ul>
		<br />	
	</div>
	<!-- Breadcrumb end	Before <div id="tree"> -->
	
		
	<div id="tree">
	<a  href="#" class="expand1">Expand All</a>
	<a  href="#" class="collapse1">Collapse All</a>	
	<ul class="quickTree">
	<li class="heading">2. Graphic Material
	<xsl:for-each select="c01">
	<ul>
		
		<li class="list">
		<xsl:for-each select="did/extref">
							<a href="{./@xlink:href}" target="_self"><xsl:value-of select="./unittitle"/></a>
						</xsl:for-each>	
		<xsl:value-of select="did/unittitle"/>
		<xsl:for-each select="c02">
			<ul>
			<li class="list">
				<xsl:for-each select="did/extref">
							<a href="{./@xlink:href}" target="_self"><xsl:value-of select="./unittitle"/></a>
						</xsl:for-each>
				<xsl:value-of select="did/unittitle"/>
				<xsl:for-each select="c03">
					<ul>
						<li class="list">
						<xsl:for-each select="did/extref">
							<a href="{./@xlink:href}" target="_self"><xsl:value-of select="./unittitle"/></a>
						</xsl:for-each>
						<xsl:value-of select="did/unittitle"/>
						<xsl:for-each select="c04">
								<ul>
								<li class="list">
									<xsl:for-each select="did/extref">
											<a href="{./@xlink:href}" target="_self"><xsl:value-of select="./unittitle"/></a>
									</xsl:for-each>
											<xsl:value-of select="did/unittitle"/>
									<xsl:for-each select="c05">
											<ul>										
											<li class="list">
											<xsl:for-each select="did/extref">
												<a href="{./@xlink:href}" target="_self"><xsl:value-of select="./unittitle"/></a>
																	
													</xsl:for-each>	
													<xsl:value-of select="did/unittitle"/>
											</li>
											</ul>	
										
									</xsl:for-each>	
								</li>
								</ul>
						</xsl:for-each>
						</li>		
					</ul>
				</xsl:for-each>	
			</li>		
			</ul>
		</xsl:for-each>
		</li>	
	</ul>
	</xsl:for-each>
	</li>
	</ul>
	</div>
</xsl:template>
</xsl:stylesheet>
 

 
