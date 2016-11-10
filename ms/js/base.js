

var msBase = {
		option:{
			before:".ms_before,ms_before2"
		},
		//上传照片
		uploadImg:function(){
					;
		    var result1 = '',result2 = '',result3 = '',result4 = '' ,result5 = '',result6 = '' ;
		    $('img_camera').addEventListener('change', function () {
		        var reader = new FileReader();
		        reader.onload = function (e) {
		            var compressImg = compress( this.result,fileSize);
		        };
		        reader.readAsDataURL(this.files[0]);
		        result1 = this.files[0].size + ' Bytes';
		        var fileSize = Math.round(this.files[0].size/1024/1024) ;
		    }, false);

		    var compress = function (res,fileSize) {
		        var img = new Image(),
		            maxW = 200; //设置最大宽度

		        img.onload = function () {
		            var cvs = document.createElement( 'canvas'),
		                ctx = cvs.getContext( '2d');

		            result2 = img.width;
		            result3 = img.height;

		            if(img.width > maxW) {
		                img.height *= maxW / img.width;
		                img.width = maxW;
		            }

		            cvs.width = img.width;
		            cvs.height = img.height;

		            result4 = cvs.width;
		            result5 = cvs.height;

		            ctx.clearRect(0, 0, cvs.width, cvs.height);
		            ctx.drawImage(img, 0, 0, img.width, img.height);

		            var compressRate = getCompressRate(1,fileSize);

		            var dataUrl = cvs.toDataURL( 'image/jpeg', compressRate);

		            $('imgInfo').setAttribute('src',dataUrl);
		            console.dir(dataUrl)
		        };
		        img.src = res;
		    };

		    function getCompressRate(allowMaxSize,fileSize){ 
		    	//计算压缩比率，size单位为MB
		        var compressRate = 1;

		        if(fileSize/allowMaxSize > 4){
		           compressRate = 0.5;
		        } else if(fileSize/allowMaxSize >3){
		           compressRate = 0.6;
		        } else if(fileSize/allowMaxSize >2){
		           compressRate = 0.7;
		        } else if(fileSize > allowMaxSize){
		           compressRate = 0.8;
		        } else{
		           compressRate = 0.9;
		        }

		        result6 = compressRate;

		        return compressRate;
		    }

		    function $(id){
		        if(typeof id === 'string' && id.constructor === String){
		            return document.getElementById(id);
		        }else{
		            return;
		        }
		    }
		},
		//修改左侧黑条高度，以及右侧距离顶部高度
		beforeTop:function(){
			//（弃用）
		},
		init:function(){
			this.uploadImg()
		}
	};


var msload = {
		option:{
			load:{
				id:"ms_load",
				text:"正在跳转",
				icon:"&#xe611;",
				class:"rotate"
			},
			success:{
				id:"ms_success",
				text:"加载成功！",
				icon:"&#xe60d;"
			},
			error:{
				id:"ms_error",
				text:"加载失败！",
				icon:"&#xe610;"
			},
			warning:{
				id:"ms_warning",
				text:"注意！",
				icon:"&#xe60e;"
			}
		},
		//生成loadimg
		loadBase:function(option){
			var _o = option;
			var html = "";
				html +="<div id='"+_o.id+"' class='ms_loadbox ms_fixmid'>";
				html +="<div class='ms_loader "+_o.class+"'>";
				html +="<i class='iconfont'>"+_o.icon+"</i>"
				html +="</div><p>"+_o.text+"</p>";
				html +="</div></div>";
				if($("#"+_o.id).length < 1){
					$("body").append(html)
				}
		},
		load:function(ms){
			var o = this.option.load
			ms ? this.loadBase(o) : $("#"+o.id).remove()
		},
		success:function(ms){
			var o = this.option.success
			ms ? this.loadBase(o) : $("#"+o.id).remove()
		},
		error:function(ms){
			var o = this.option.error
			ms ? this.loadBase(o) : $("#"+o.id).remove()
		},
		warning:function(ms){
			var o = this.option.warning
			ms ? this.loadBase(o) : $("#"+o.id).remove()
		},
		empty:function(){
			$(".ms_loadbox").remove() 
		}
		
	}


var isScroll = function (el) {
             var elems = el ? [el] : [document.documentElement, document.body];
             var scrollX = false, scrollY = false;
             for (var i = 0; i < elems.length; i++) {
                 var o = elems[i];

                 var sl = o.scrollLeft;
                 o.scrollLeft += (sl > 0) ? -1 : 1;
                 o.scrollLeft !== sl && (scrollX = scrollX || true);
                 o.scrollLeft = sl;

                 var st = o.scrollTop;
                 o.scrollTop += (st > 0) ? -1 : 1;
                 o.scrollTop !== st && (scrollY = scrollY || true);
                 o.scrollTop = st;
             }
             return {
                 scrollX: scrollX,
                 scrollY: scrollY
             };
         };

$(function(){
	
})