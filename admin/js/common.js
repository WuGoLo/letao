
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 验证用户登录功能
	$.ajax({
		url: '/api/employee/checkRootLogin',
		type: 'get',
		success: function (info) {
				if(info.error) {
					location.href = '/admin/login.html?url=' + location.href;
				}
		}
	})

	// 退出登录功能
	$('.fa-sign-out').parent().on('click', function () {
		$.ajax({
			url: '/api/employee/employeeLogout',
			type: 'get',
			success: function (info) {
				if(info.success) {
					location.href = '/admin/login.html?url=' + location.href;
				}
			}
		})
	})
