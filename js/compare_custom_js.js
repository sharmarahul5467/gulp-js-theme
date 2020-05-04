// JavaScript Document
$(document).ready(function(e) {
			var folder_src = '../img/portfolio/ps/compare/';
			var bf =[folder_src+'bf/1.jpg',folder_src+'bf/2.jpg',folder_src+'bf/3.jpg',folder_src+'bf/4.jpg',folder_src+'bf/5.jpg',folder_src+'bf/6.jpg',folder_src+'bf/7.jpg',folder_src+'bf/8.jpg'];
			var af = [folder_src+'af/1.jpg',folder_src+'af/2.jpg',folder_src+'af/3.jpg',folder_src+'af/4.jpg',folder_src+'af/5.jpg',folder_src+'af/6.jpg',folder_src+'af/7.jpg',folder_src+'af/8.jpg'];
			var i =0;
		
			for(i=0; i<bf.length; i++)
			{
				$("#compare_category").append('<div class="test" id="demo'+(i+1)+'"></div>');
				
					//alert($("#category"+(i+1)+"").width());
				bgCompare({
						beforeImage: bf[i],
						afterImage: af[i],
						bgSize: "contain",
						showTooltips: "yes",
						targetId: "category"+(i+1),
						handleTheme: "white-blue",
						sliderPos: "50%",
						txtBefore: "slide_left",
						txtAfter: "slide_right"
			
					});
					var img = new Image;
					img.src = bf[i];
				//	$("#category"+(i+1)+"").width(img.width).height(img.height);
			}
			
				
        });