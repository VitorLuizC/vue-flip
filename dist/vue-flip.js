(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueFlip = factory());
}(this, (function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: 'flip',
    props: {
      'activeClick': {
        type: Boolean,
        required: false,
        default: false
      },
      'activeHover': {
        type: Boolean,
        required: false,
        default: false
      },
      'width': {
        type: String,
        required: true
      },
      'height': String,
      'transition': {
        type: String,
        required: false,
        default: '0.5s'
      }
    },
    data: function data() {
      return {
        hover: false
      };
    },
    computed: {
      cardStyle: function cardStyle() {
        var result = {};

        if (this.height) {
          result.height = this.height.includes('%') ? '100%' : this.height;
        }

        if (this.width) {
          result.width = this.width.includes('%') ? '100%' : this.width;
        }

        if (this.transition) {
          result.transition = this.transition;
        }

        return result;
      }
    },
    methods: {
      handlerHover: function handlerHover() {
        if (this.activeClick) {
          this.hover = !this.hover;
        }
      }
    },
    install: function install(Vue) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$name = _ref.name,
          name = _ref$name === void 0 ? 'vue-flip' : _ref$name;

      Vue.component(name, Flip);
    }
  };

  /* script */
              const __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flip-container",class:{ 'active-hover': _vm.activeHover, 'hover': _vm.hover },style:({ width: _vm.width, height: _vm.height }),on:{"click":_vm.handlerHover}},[_c('div',{staticClass:"flipper",style:(_vm.cardStyle)},[_c('div',{staticClass:"front",style:(_vm.cardStyle)},[_vm._t("front")],2),_vm._v(" "),_c('div',{staticClass:"back",style:(_vm.cardStyle)},[_vm._t("back")],2)])])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-45c6fd18_0", { source: "\n.flip-container{-webkit-perspective:1000;-moz-perspective:1000;perspective:1000\n}\n.flip-container.active-hover:hover .flipper,.flip-container.hover .flipper{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);transform:rotateY(180deg)\n}\n.flipper{-webkit-transition:.6s;-moz-transition:.6s;-o-transition:.6s;transition:.6s;-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;position:relative\n}\n.back,.front{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0\n}\n.front{z-index:2;-webkit-transform:rotateY(0);-moz-transform:rotateY(0);transform:rotateY(0)\n}\n.back{-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);transform:rotateY(180deg)\n}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "Flip.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
      }

      component._scopeId = scope;

      {
        let hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            const originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            const existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      const head = document.head || document.getElementsByTagName('head')[0];
      const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      const isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

        const group = isOldIE ? css.media || 'default' : id;
        const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          let code = css.source;
          let index = style.ids.length;

          style.ids.push(id);

          if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
              ' */';
          }

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            const el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) el.setAttribute('media', css.media);
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index]) style.element.removeChild(nodes[index]);
            if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
            else style.element.appendChild(textNode);
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var Flip$1 = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      __vue_create_injector__,
      undefined
    );

  return Flip$1;

})));
