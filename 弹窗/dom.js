!function () {
	window.$ = function () {
		var array = []
		return array
	}

	$.bom = {
		openAtCenter: function (width, height, url) {
			window.open(url, '_blank', `width=${width}px,height=${height}px,screenX=${screen.width/2 - width/2}px,screenY=${screen.height/2 - height/2}px`)
			// template literals 模板字符串，ES5语法
			// 允许在字符串内嵌入表达式
		}
	}
}()