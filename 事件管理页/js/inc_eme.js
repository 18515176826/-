!function(window, document, $, undefined) {
	var $menuText = $('#menuText');
	var $select_menu = $('#select_menu');
	var $open_menus = $('#open_menus');
	var $mana_center = $('.mana_center');
	var init = {
		eventList: function() {
			var $eme_list = $('#eme_list');
			var $yiji = $('.yiji');
			var $me_btn = $('#me_btn');
			$eme_list.on('click', 'li', this.me_listOnClick);
			$yiji.on('click', '.inactive', this.inactiveOnClick); // 左侧菜单一二级事件
			$yiji.on('click', '.submenu li', this.submenuLiOnClick); // 左侧菜单三级事件
			$me_btn.on('click', this.me_btnOnClick);
			$open_menus.on('click', this.open_menusOnClick);
		},
		open_menusOnClick: function() {
			$select_menu.animate({marginLeft: '0'}, 500, function() {
				$open_menus.hide();
			})
		},
		me_btnOnClick: function() {
			$select_menu.animate({marginLeft: '-320px'}, 500, function() {
				$open_menus.show();
			})
		},
		me_listOnClick: function() { // 头部事件
			var $this = $(this);
			$this.addClass('emeListOn').siblings('li').removeClass('emeListOn');
		},
		inactiveOnClick: function() {
			var $this = $(this);
    	$menuText.val($this.text())
    	$this
        .siblings('img')
        .attr('src', './img/sj_h.png')
        .end()
        .parent('li')
        .siblings('li')
        .children('.sanjiao')
        .attr('src', './img/sj_l.png')
      $this
        .find('img')
        .attr('src', './img/sj_h.png')
        .end()
        .parent('li')
        .siblings('li')
        .children('a')
        .find('img')
        .attr('src', '')
      if ($this.siblings('ul').css('display') == 'none') {
        $this.parent('li').siblings('li').removeClass('inactives');
        $this.addClass('inactives');
        $this.siblings('ul').slideDown(200).children('li');
        if ($this.parents('li').siblings('li').children('ul').css('display') == 'block') {
            $this.parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
            $this.parents('li').siblings('li').children('ul').slideUp(200);
        }
      } else {
        //控制自身变成+号
        $this.removeClass('inactives');
        //控制自身菜单下子菜单隐藏
        $this.siblings('ul').slideUp(200);
        //控制自身子菜单变成+号
        $this.siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
        //控制自身菜单下子菜单隐藏
        $this.siblings('ul').children('li').children('ul').slideUp(200);
        //控制同级菜单只保持一个是展开的（-号显示）
        $this.siblings('ul').children('li').children('a').removeClass('inactives');
        // 改变三角形的颜色
      }
		},
		submenuLiOnClick: function(e) {
			var $this = $(this);
    	$menuText.val($this.text())
    	e.stopPropagation();
		},
		laypage: function() { //分页
			$('#light-pagination').pagination({
				pages: 20,
				cssStyle: 'light-theme',
				prevText: '上一页',
				nextText: '下一页'
			});
		}
	}
	$(document).ready(function() {
		init.eventList();
		init.laypage();
	})
}(window, document, jQuery);
