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
				init.emergencyEcharts()
			})
		},
		me_btnOnClick: function() {
			$select_menu.animate({marginLeft: '-320px'}, 500, function() {
				$open_menus.show();
				init.emergencyEcharts()
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
		emergencyEcharts: function() {
			var emeChart = echarts.init(document.getElementById('emergency_num'));
			option = {
		    title: {
		    		show: false,
		        text: '航线上座率分析',
		        textStyle: {
		            fontWeight: 'normal',
		            fontSize: 16,
		            color: '#F1F1F3'
		        },
		        left: '6%'
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            lineStyle: {
		                color: '#57617B'
		            }
		        }
		    },
		    legend: {
		    		show: false,
		        icon: 'rect',
		        itemWidth: 14,
		        itemHeight: 5,
		        itemGap: 13,
		        data: ['南宁-曼芭', '桂林-曼芭', '南宁-甲米'],
		        right: '4%',
		        top: '0%',
		        textStyle: {
		            fontSize: 12,
		            color: '#F1F1F3'
		        }
		    },
		    grid: {
		    		top: '5%',
		        left: '11%',
		        right: '2%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [{
		        type: 'category',
		        boundaryGap: false,
		        axisLine: {
		            lineStyle: {
		                color: '#57617B'
		            }
		        },
		        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		    }],
		    yAxis: [{
		        type: 'value',
		        axisTick: {
		            show: false
		        },
		        axisLine: {
		            lineStyle: {
		                color: '#57617B'
		            }
		        },
		        axisLabel: {
		            margin: 10,
		            textStyle: {
		                fontSize: 14
		            }
		        },
		        splitLine: {
		            lineStyle: {
		                color: '#57617B'
		            }
		        }
		    }],
		    series: [{
		        name: '南宁-曼芭',
		        type: 'line',
		        smooth: true,
		        lineStyle: {
		            normal: {
		                width: 1
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ // 控制渐变 第三个参数是1从左往右  第四个从右往左
		                    offset: 0,
		                    color: 'rgba(137, 189, 27, 1)'
		                }, {
		                    offset: 0.8,
		                    color: 'yellow'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: 'rgb(137,189,27)'
		            }
		        },
		        data: [96.3,96.4,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
		    }, {
		        name: '桂林-曼芭',
		        type: 'line',
		        smooth: true,
		        lineStyle: {
		            normal: {
		                width: 1
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: 'rgba(0, 136, 212, 1)'
		                }, {
		                    offset: 0.8,
		                    color: 'green'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: 'rgb(0,136,212)'
		            }
		        },
		        data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
		    }, {
		        name: '南宁-甲米',
		        type: 'line',
		        smooth: true,
		        lineStyle: {
		            normal: {
		                width: 1
		            }
		        },
		        areaStyle: {
		        		show: false,
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: 'rgba(219, 50, 51, 1)'
		                }, {
		                    offset: 0.8,
		                    color: 'blue'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: 'rgb(219,50,51)'
		            }
		        },
		        data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,101.8,79.7,87.6,92.9,0]
		    }, ]
			};
			emeChart.setOption(option);
			$('#emergency_num').resize(function () { // 监听元素宽度变化
			    emeChart.resize();
			});
		},
		emeYearEcharts: function() {
			var emeYear = echarts.init(document.getElementById('eme_year_num'));
			var data= [{
          "name": "未处理",
          "value": 90,
      }, {
          "name": "已处理",
          "value": 10,
          
      }]
			var count=0
			option = {
			    title:{
			    		show: false,
			        x: 'center',
			        y: '45%',
			        text:'问题总数',
			        subtext:'100',
			        itemGap:6,
			        textStyle:{
			            color:'rgba(255,255,255,.8)',
			            fontSize:'12',
			            fontWeight:'500'
			        },
			        subtextStyle: {
			            color: '#fffa6f',// 副标题文字颜色
			            fontSize:'30',
			            fontWeight:'bolder'
			        }
			    },
			    
			    legend: {
			        bottom: "5",
			        right:'0',
			        left:'center',
			        selectedMode:false,
			        textStyle: {
			            color: '#fff',
			            fontSize: 13,
			            fontFamily:'宋体'
			        },
			        itemWidth: 28,  //图例标记的图形宽度
			        itemHeight: 12, //图例标记的图形高度
			        itemGap:40,
			        data: data,
			    },
			    series: [
			        // 主要展示层的
			        {
			            radius: ['60%', '45%'],
			            center: ['50%', '50%'],
			            selectedMode: false,
			            selectedOffset: 5,
			            type: 'pie',
			            label: {
			                normal: {
			                    show: true,
			                    textStyle: {
			                        color: '#fff',
			                        fontSize: 14
			                    },
//			                    formatter: "{b} : {c} /{d}%"
			                    formatter: "{b} : {d}%"
			                },
			                emphasis: {
			                    show: true
			                },
			                
			                
			            },
			            labelLine: {
			                normal: {
			                    show: true,
			                    length:38,
			                    length2:28
			                },
			                emphasis: {
			                    show: true
			                },
			            },
			            animation: false,
			            data: [{
			                "name": "未处理",
			                "value": 90,
			                itemStyle: {
			                    normal: {
			                      color: 'rgba(31,96,140, 0.8)'
			                    }
			                }
			            }, {
			                "name": "已处理",
			                "value": 10,
			                itemStyle: {
			                    normal: {
			                        color: 'rgba(134,88,10, 0.8)'
			                    }
			                }
			            }]
			        },
			        // 第二层
			        {
			            radius: ['60%', '77%'],
			            center: ['50%', '50%'],
			            type: 'pie',
			            color: ['#3c13a8', '#4d59e6'],
			            selectedMode: false,
			            selectedOffset: 5,
			            label: {
			                normal: {
			                    show: false,
			                    textStyle: {
			                        color: '#fff',
			                        fontSize: 14
			                    },
			                    formatter: "{b} : {c} /{d}%"
			                },
			                emphasis: {
			                    show: false
			                },   
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: false
			                },
			                lineStyle:{
			                        colorStops: [{
			                        offset: 0, color: '#fff' // 0% 处的颜色
			                    }, {
			                        offset: 1, color: '#fff' // 100% 处的颜色
			                    }],
			                }
			            },
			            animation: false,
			            data: [{
			                "name": "未处理",
			                "value": 90,
			                itemStyle: {
			                    normal: {
			                        color: 'rgba(56,171,242, 1)'
			                    }
			                }
			            }, {
			                "name": "已处理",
			                "value": 10,
			                itemStyle: {
			                    normal: {
			                        color: 'rgba(246,156,1,1)'
			                    }
			                }
			            }]
			        },
			        
			        // 边框的设置
			        // 中心的圆圈
			        {
			            radius: ['45%', '54%'],
			            center: ['50%', '50%'],
			            type: 'pie',
			            selectedMode: false,
			            selectedOffset: 5,
			            label: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: false
			                },
			                textStyle: {
			                    color: '#fff',
			                    fontSize: 14
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: false
			                }
			            },
			            data: [{
			                "name": "未处理",
			                "value": 90,
			                itemStyle: {
			                    normal: {
			                        color: 'rgba(12,40,64,0.8)'
			                    }
			                }
			            }, {
			                "name": "已处理",
			                "value": 10,
			                itemStyle: {
			                    normal: {
			                        color: 'rgba(50,37,16,0.8)'
			                    }
			                }
			            }],
			            animation: true
			        },
			    ]
			};
			emeYear.setOption(option);
			$('#eme_year_num').resize(function () {
			    emeYear.resize();
			});
		}
	}
	$(document).ready(function() {
		init.eventList();
		init.emergencyEcharts();
		init.emeYearEcharts();
	})
}(window, document, jQuery);
