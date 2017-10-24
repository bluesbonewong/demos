!function () {
	window.$ = function () {
		var array = []
		return array
	}

	$.bom = {
		openAtCenter: function (width, height, url) {
			// 弹窗
			window.open(url, '_blank', `width=${width}px,height=${height}px,screenX=${screen.width / 2 - width / 2}px,screenY=${screen.height / 2 - height / 2}px`)
			// template literals 模板字符串，ES5语法
			// 允许在字符串内嵌入表达式
		},

		search: function (name, value) {
			// 得到 查询字符串值
			// 若value不传参，返回name的值
			// 若value传参，将value赋值给name

			name = encodeURIComponent(name)
			// 防止 name 是中文
			// 不能再这里对 value 进行编码
			// 若value是undefined，typeof encodeURIComponent(undefined) === 'string'

			var searchAll = function () {
				var search = window.location.search
				var result = {}
				// 得到value
				// 去掉？
				if (search[0] === '?') {
					search = search.slice(1)
				}
				// 用 & 分割为数组
				var searchArr = search.split('&')
				// 遍历数组，用 = 分割
				for (var i = 0; i < searchArr.length; i++) {
					result[searchArr[i].split('=')[0]] = searchArr[i].split('=')[1]
				}
				return result
			}

			var result = searchAll()

			if (value === undefined) {
				return decodeURIComponent(result[name])
				// 防止 字符串 是编码
			} else {
				if (window.location.search === '') {
					// 若没有 search值 的情况
					window.location.search += `?${name}=${value}`
				} else {
					// 有 search值 的情况
					if (result[name] === undefined) {
						// search值 中 无name
						window.location.search += `&${name}=${value}`
					} else {
						// search值 中 有name
						result[name] = encodeURIComponent(value)
						var newSearch = '?'
						for (var key in result) {
							newSearch += `${key}=${encodeURIComponent(result[key])}&`
							// ?asdf=sadf&sdf=sadf
						}
						newSearch = newSearch.substring(0, newSearch.length - 1)
						window.location.search = newSearch
					}
				}
			}
		},

		browserType: function () {
			function isAndroid() {
				if (/Android/i.test(window.navigator.userAgent))
					console.log('The browser\'s type is Android')
			}

			function isIphone() {
				if (/Iphone/i.test(window.navigator.userAgent))
					console.log('The browser\'s type is Iphone')
			}

			function isIpad() {
				if (/Ipad/i.test(window.navigator.userAgent))
					console.log('The browser\'s type is Ipad')
			}

			function isIOS() {
				if (/(Ipad)|(Iphone)/i.test(window.navigator.userAgent))
					console.log('The browser\'s type is IOS')
			}

			return {
				isAndroid: isAndroid,
				isIphone: isIphone,
				isIpad: isIpad,
				isIOS: isIOS
			}
		}
	}
}()