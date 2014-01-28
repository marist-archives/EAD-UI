<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xlink="http://www.w3.org/1999/xlink"> 
  <xsl:output method="html"/> 
  <xsl:template match="ead"> 
    <html> 
      <head> 
	  	<link rel="shortcut icon" href="/archives/researchcart/images/ltp2.ico" />
       	<link rel="stylesheet" href="/archives/researchcart/styles/researchCart.css" type="text/css" />
       	<link rel="stylesheet" href="/archives/researchcart/styles/breadcrumb.css" type="text/css" />
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
		<script type="text/javascript" src="/archives/researchcart/js/jStorage.js"></script>
		<script type="text/javascript" src="/archives/researchcart/js/researchCart.js"></script>
		<script type="text/javascript" src="/archives/researchcart/js/eadBox.js"></script>
		<link rel="stylesheet" href="http://library.marist.edu/css/prettyPhoto.css" type="text/css" media="screen" title="prettyPhoto main stylesheet" charset="utf-8" />
		<script src="http://library.marist.edu/js/jquery.prettyPhoto.js" type="text/javascript" charset="utf-8"></script>
		
        
		<script type="text/javascript" charset="utf-8"><!-- jquery code for prettyphoto -->
		$(document).ready(function(){
			$("a[rel^='prettyPhoto']").prettyPhoto({
			theme: 'facebook'
			});
		});
	</script>


	
	

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


			<div id="noJS"> <!-- Message to display when Javascript is disabled -->
				<noscript>
					<strong>
						<span>Your browser either does not support JavaScript, or is currently disabled.</span><br/>
						<span>Please enable Javascript or install a Javascript compliant browser.</span>
					</strong>
					
				</noscript>
			</div> <!-- No Javascript -->


			<div id="contentWrapper">
				
				<div id="lightbox"></div>
				<div id="closebutton"></div>
				
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
						</div>	<!-- /footerOptions -->
						
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
<title><xsl:value-of select="."/></title>	
<h1 class="heading">Lowell Thomas Papers</h1>
<h2 class="heading">
<xsl:value-of select="."/>
</h2>

<!-- Breadcrumb navigation section start -->
<!-- Goes after </h2> and before </xsl:template> -->
<div id="breadcrumbs">
	<ul id="crumbs">
	<li id="first"><a href="http://library.marist.edu/archives/LTP/LTP.xml" target="_self">LT Papers</a></li>
	<li><a href="/archives/LTP/Graphic%20Materials/graphics.htm" id="#tree" class="lightbox_trigger">Graphic Materials</a></li>
	<li><a href="/archives/LTP/Graphic%20Materials/graphics.htm" id="#tree" class="lightbox_trigger">Photographs</a></li>
	<li><a href="/archives/LTP/Graphic%20Materials/graphics.htm" id="#GPN" class="lightbox_trigger">Glass Plate Negatives</a></li>
	<li><a href="/archives/LTP/Graphic%20Materials/graphics.htm" id="#GPNFR" class="lightbox_trigger">Frank R. Roberson</a></li>
	<li id="last"><xsl:value-of select="."/></li>
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

 <table class="tbl" align="center">	
 <xsl:for-each select="note">
 <tr class="Box">	
 <td class="caption" colspan="8"><xsl:value-of select="."/></td>
 </tr>
 </xsl:for-each>
 <tr class="tbldata">
      <th width="50px">Item</th>
      <th width="75px">Format</th>
	  <th width="75px">Index Number</th>
	  <th width="75px">Negative Number</th>
	  <th width="600px">Title</th>
	  <th width="400px">Date</th>
	  <th width="75px">Size (inches)</th>
	  <th width="75px">Select</th>
 </tr>
  
 <tr class="tbldata tblselectall">
	<td id="boxNumber" class="tableFont" style="width:145px	" ><xsl:value-of select="c02/did/container"/></td>
	<td id="artifactDetail" class="tableFont"  colspan="3" >All items in this Box</td>
	<td></td>
	<td></td>
	<td></td>
	<td id="checkBox"><input type="checkbox" id="selectAll" class="innerCheckBox selectAll" ></input></td>
	<td id="fileNumber" style="display:none">All-Items</td>
 </tr>
  
 <xsl:for-each select="c02">
	 <tr class="tbldata"> 
	 		<td class="tableFont"><xsl:value-of select="did/unitid"/></td>
			<td class="tableFont"><xsl:value-of select="did/physdesc/genreform"/></td>
			<td class="tableFont"><xsl:value-of select="did/materialspec[@label='index']"/></td>
			<td class="tableFont"><xsl:value-of select="did/materialspec[@label='negativenumber']"/></td>
			<!--td class="data"><a href="{./did/extref/@xlink:href}" rel="prettyPhoto[gallery]" title="{did/extref/unittitle}"><xsl:value-of select="did/extref/unittitle"/><xsl:value-of select="did/unittitle"/></a></td-->
			<td class="data"><a href="../../digitizedContents/JPEG_{did/container}/B_Scans/{../did/unitid}.{did/container}.{did/unitid}.jpg" rel="prettyPhoto[gallery]" title="{did/unittitle}(Item {did/unitid} - Box {did/container})">
			<xsl:value-of select="did/unittitle"/></a></td>
			<td class="tableFont"><xsl:value-of select="did/unitdate"/></td>
			<td class="tableFont"><xsl:value-of select="did/physdesc/extent"/></td>
			<td id="checkBox"><input type="checkbox" class="innerCheckBox  items" ></input></td>
			<td id="fileNumber" style="display:none"><xsl:value-of select="did/unitid"/></td>
			<td id="boxNumber" style="display:none"><xsl:value-of select="did/container"/></td>
			<td id="artifactDetail" style="display:none"><xsl:value-of select="did/unittitle"/></td>
	 </tr>
 </xsl:for-each>
</table><br />	 
 </xsl:template>
 
 <xsl:template match="note">
 <h2 class="box">
 <xsl:value-of select="."/>	
 </h2>
 <br/>
 </xsl:template>
 
  </xsl:stylesheet> 
 