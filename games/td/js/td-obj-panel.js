/**
 *
 * Author:
 *	oldj <oldj.wu@gmail.com>
 *	http://oldj.net/
 *
 * File: td-panel.js
 *
 * Create Date: 2010-11-21 11:41:20
 *
 */


// _TD.a.push begin
_TD.a.push(function (TD) {

	// panel 对象的属性、方法。注意属性中不要有数组、对象等
	// 引用属性，否则多个实例的相关属性会发生冲突
	var panel_obj = {
		_init: function (cfg) {
			cfg = cfg || {};
			this.x = cfg.x;
			this.y = cfg.y;
			this.scene = cfg.scene;
			this.map = cfg.main_map;

			// make panel map
			var panel_map = new TD.Map("panel-map", TD.lang.mix({
					x: this.x + cfg.map.x,
					y: this.y + cfg.map.y,
					scene: this.scene,
					step_level: this.step_level,
					render_level: this.render_level
				}, cfg.map, false));

			this.addToScene(this.scene, 1, 7);
			panel_map.addToScene(this.scene, 1, 7, panel_map.grids);
			this.scene.panel_map = panel_map;
			this.gameover_obj = new TD.GameOver("panel-gameover", {
				panel: this,
				scene: this.scene,
				step_level: this.step_level,
				is_visiable: false,
				x: 0,
				y: 0,
				width: this.scene.stage.width,
				height: this.scene.stage.height,
				render_level: 9
			});

			this.balloontip = new TD.BalloonTip("panel-balloon-tip", {
				scene: this.scene,
				step_level: this.step_level,
				render_level: 9
			});
			this.balloontip.addToScene(this.scene, 1, 9);

			// make buttons
			// 暂停按钮
			this.btn_pause = new TD.Button("panel-btn-pause", {
				scene: this.scene,
				x: this.x,
				y: this.y + 260,
				text: TD._t("button_pause_text"),
				//desc: TD._t("button_pause_desc_0"),
				step_level: this.step_level,
				render_level: this.render_level + 1,
				onClick: function () {
					if (this.scene.state == 1) {
						this.scene.pause();
						this.text = TD._t("button_continue_text");
						this.scene.panel.btn_upgrade.hide();
						this.scene.panel.btn_sell.hide();
						this.scene.panel.btn_restart.show();
						//this.desc = TD._t("button_pause_desc_1");
					} else if (this.scene.state == 2) {
						this.scene.start();
						this.text = TD._t("button_pause_text");
						this.scene.panel.btn_restart.hide();
						if (this.scene.map.selected_building) {
							this.scene.panel.btn_upgrade.show();
							this.scene.panel.btn_sell.show();
						}
						//this.desc = TD._t("button_pause_desc_0");
					}
				}
			});
			// 重新开始按钮
			this.btn_restart = new TD.Button("panel-btn-restart", {
				scene: this.scene,
				x: this.x,
				y: this.y + 300,
				is_visiable: false,
				text: TD._t("button_restart_text"),
				step_level: this.step_level,
				render_level: this.render_level + 1,
				onClick: function () {
					setTimeout(function () {
						TD.stage.clear();
						TD.is_paused = true;
						TD.start();
						TD.mouseHand(false);
					}, 0);
				}
			});
			// 建筑升级按钮
			this.btn_upgrade = new TD.Button("panel-btn-upgrade", {
				scene: this.scene,
				x: this.x,
				y: this.y + 300,
				is_visiable: false,
				text: TD._t("button_upgrade_text"),
				step_level: this.step_level,
				render_level: this.render_level + 1,
				onClick: function () {
					this.scene.map.selected_building.tryToUpgrade(this);
				}
			});
			// 建筑出售按钮
			this.btn_sell = new TD.Button("panel-btn-sell", {
				scene: this.scene,
				x: this.x,
				y: this.y + 340,
				is_visiable: false,
				text: TD._t("button_sell_text"),
				step_level: this.step_level,
				render_level: this.render_level + 1,
				onClick: function () {
					this.scene.map.selected_building.tryToSell(this);
				}
			});
		},
		render: function () {
			// 画状态文字
			var ctx = TD.ctx;

			ctx.textAlign = "left";
			ctx.textBaseline = "top";
			ctx.fillStyle = "#000";
			ctx.font = "normal 12px 'Courier New'";
			ctx.beginPath();
			ctx.fillText(TD._t("panel_money_title") + TD.money, this.x, this.y);
			ctx.fillText(TD._t("panel_score_title") + TD.score, this.x, this.y + 20);
			ctx.fillText(TD._t("panel_life_title") + TD.life, this.x, this.y + 40);
			ctx.fillText(TD._t("panel_building_title") + this.map.buildings.length,
				this.x, this.y + 60);
			ctx.fillText(TD._t("panel_monster_title") + this.map.monsters.length,
				this.x, this.y + 80);
			ctx.fillText(TD._t("wave_info", [this.scene.wave]), this.x, this.y + 210);
			ctx.closePath();

			// 在右下角画版本信息
			ctx.textAlign = "right";
			ctx.fillStyle = "#666";
			ctx.font = "normal 12px 'Courier New'";
			ctx.beginPath();
			ctx.fillText("version: " + TD.version + " | 三国刷将乐", TD.stage.width - TD.padding,
				TD.stage.height - TD.padding * 2);
			ctx.closePath();

			// 在左下角画FPS信息
			ctx.textAlign = "left";
			ctx.fillStyle = "#666";
			ctx.font = "normal 12px 'Courier New'";
			ctx.beginPath();
			ctx.fillText("FPS: " + TD.fps, TD.padding, TD.stage.height - TD.padding * 2);
			ctx.closePath();
		}
	};

	/**
	 * @param cfg <object> 配置对象
	 *		 至少需要包含以下项：
	 *		 {
	 *			 life: 怪物的生命值
	 *			 shield: 怪物的防御值
	 *			 speed: 怪物的速度
	 *		 }
	 */
	TD.Panel = function (id, cfg) {
		var panel = new TD.Element(id, cfg);
		TD.lang.mix(panel, panel_obj);
		panel._init(cfg);

		return panel;
	};

	// balloon tip对象的属性、方法。注意属性中不要有数组、对象等
	// 引用属性，否则多个实例的相关属性会发生冲突
	var balloontip_obj = {
		_init: function (cfg) {
			cfg = cfg || {};
			this.scene = cfg.scene;
		},
		msg: function (txt, el) {
			this.text = txt;
			var ctx = TD.ctx;
			ctx.font = "normal 12px 'Courier New'";
			this.width = Math.max(
				ctx.measureText(txt).width + 10,
				TD.lang.strLen2(txt) * 6 + 10
				);
			this.height = 23;
			if (el && el.cx && el.cy) {
				this.el = el;
				this.x = el.cx + 0.5;
				this.y = el.cy + 0.5;

				if (this.x + this.width > this.scene.stage.width - TD.padding) {
					this.x = this.x - this.width;
				}

				this.px = this.x + 5;
				this.py = this.y + 4;

				this.show();
			}
		},
		render: function () {
			if (!this.el) return;
			var ctx = TD.ctx;

			ctx.lineWidth = 1;
			ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
			ctx.strokeStyle = "rgba(222, 222, 0, 0.9)";
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();

			ctx.textAlign = "left";
			ctx.textBaseline = "top";
			ctx.fillStyle = "#000";
			ctx.font = "normal 12px 'Courier New'";
			ctx.beginPath();
			ctx.fillText(this.text, this.px, this.py);
			ctx.closePath();

		}
	};

	/**
	 * @param cfg <object> 配置对象
	 *		 至少需要包含以下项：
	 *		 {
	 *			 scene: scene
	 *		 }
	 */
	TD.BalloonTip = function (id, cfg) {
		var balloontip = new TD.Element(id, cfg);
		TD.lang.mix(balloontip, balloontip_obj);
		balloontip._init(cfg);

		return balloontip;
	};

	// button 对象的属性、方法。注意属性中不要有数组、对象等
	// 引用属性，否则多个实例的相关属性会发生冲突
	var button_obj = {
		_init: function (cfg) {
			cfg = cfg || {};
			this.text = cfg.text;
			this.onClick = cfg.onClick || TD.lang.nullFunc;
			this.x = cfg.x;
			this.y = cfg.y;
			this.width = cfg.width || 80;
			this.height = cfg.height || 30;
			this.font_x = this.x + 8;
			this.font_y = this.y + 7;
			this.scene = cfg.scene;
			this.desc = cfg.desc || "";

			this.addToScene(this.scene, this.step_level, this.render_level);
			this.caculatePos();
		},
		onEnter: function () {
			TD.mouseHand(true);
			if (this.desc) {
				this.scene.panel.balloontip.msg(this.desc, this);
			}
		},
		onOut: function () {
			TD.mouseHand(false);
			if (this.scene.panel.balloontip.el == this) {
				this.scene.panel.balloontip.hide();
			}
		},
		render: function () {
			var ctx = TD.ctx;

			ctx.lineWidth = 2;
			ctx.fillStyle = this.is_hover ? "#eee" : "#ccc";
			ctx.strokeStyle = "#999";
			ctx.beginPath();
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();

			ctx.textAlign = "left";
			ctx.textBaseline = "top";
			ctx.fillStyle = "#000";
			ctx.font = "normal 12px 'Courier New'";
			ctx.beginPath();
			ctx.fillText(this.text, this.font_x, this.font_y);
			ctx.closePath();
			ctx.fill();
		}
	};

	/**
	 * @param cfg <object> 配置对象
	 *		 至少需要包含以下项：
	 *		 {
	 *			 x:
	 *			 y:
	 *			 text:
	 *			 onClick: function
	 *			 sence:
	 *		 }
	 */
	TD.Button = function (id, cfg) {
		cfg.on_events = ["enter", "out", "click"];
		var button = new TD.Element(id, cfg);
		TD.lang.mix(button, button_obj);
		button._init(cfg);

		return button;
	};


	// gameover 对象的属性、方法。注意属性中不要有数组、对象等
	// 引用属性，否则多个实例的相关属性会发生冲突
	var gameover_obj = {
		_init: function (cfg) {
			this.panel = cfg.panel;
			this.scene = cfg.scene;

			this.addToScene(this.scene, 1, 9);
		},
		render: function () {

			this.panel.btn_pause.hide();
			this.panel.btn_upgrade.hide();
			this.panel.btn_sell.hide();
			this.panel.btn_restart.show();

			var ctx = TD.ctx;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = "#ccc";
			ctx.font = "bold 62px 'Verdana'";
			ctx.beginPath();
			ctx.fillText("GAME OVER", this.width / 2, this.height / 2);
			ctx.closePath();
			ctx.fillStyle = "#f00";
			ctx.font = "bold 60px 'Verdana'";
			ctx.beginPath();
			ctx.fillText("GAME OVER", this.width / 2, this.height / 2);
			ctx.closePath();

		}
	};

	/**
	 * @param cfg <object> 配置对象
	 *		 至少需要包含以下项：
	 *		 {
	 *			 panel:
	 *			 scene:
	 *		 }
	 */
	TD.GameOver = function (id, cfg) {
		var obj = new TD.Element(id, cfg);
		TD.lang.mix(obj, gameover_obj);
		obj._init(cfg);

		return obj;
	}

}); // _TD.a.push end
