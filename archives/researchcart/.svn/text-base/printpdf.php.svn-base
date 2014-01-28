<?php


    $data ="
	    <html>
	    <head>
	    	<title>Marist Archives and Special Collection : Item List</title>
	    </head>
	    <body>";	
		
		for ($i=0; isset($_POST['printPdf' . $i]); $i++)
		{
			$data = $data . $_POST['printPdf' . $i];
		}
		
		$data = $data . "
	    </body></html>";
		
		/*
	    require_once(dirname(__FILE__).'/html2pdf/html2pdf.class.php');
	    $html2pdf = new HTML2PDF('P','A4','en');
	    $html2pdf->WriteHTML($data);
	    $html2pdf->Output('example.pdf');
	    */
	    
	    //print $data;
	    
	    
	    //require_once("dompdf_config.inc.php");
		require_once("dompdf/dompdf_config.inc.php");

		$dompdf = new DOMPDF();
		$dompdf->load_html($data);
		$dompdf->render();
		$dompdf->stream("Selection.pdf");

	
?>



