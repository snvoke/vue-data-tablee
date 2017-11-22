/*!
 * vue-data-tablee v0.1.0
 * (c) 2017-present Vitor Cavalcanti <vitorluizc@outlook.com> (https://vitorluizc.github.io)
 * Released under the MIT License.
 */
/**
 * Check value's constructor name.
 * @param {*} value
 * @param {string} constructor
 * @returns {boolean}
 */
var is = function (value, constructor) {
  var is = Object.prototype.toString.call(value) === ("[object " + constructor + "]");
  return is
};

var DataTablee = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"data-tablee"},[_c('tr',{staticClass:"row data-tablee-row -header"},_vm._l((_vm.cols),function(col,index){return _c('th',{key:index,staticClass:"cell data-tablee-cell -header"},[_vm._v(_vm._s(_vm.getLabel(col, 'label')))])})),_vm._v(" "),_vm._l((_vm.rows),function(row,index){return _c('tr',{key:index,staticClass:"row data-tablee-row -content"},_vm._l((_vm.cols),function(col,index){return _c('td',{key:index,staticClass:"cell data-tablee-cell -content"},[_vm._v(_vm._s(_vm.getLabel(row, col.field)))])}))})],2)},staticRenderFns: [],
  props: {
    /**
     * List of col's data.
     */
    cols: {
      type: Array,
      required: true,
      validator: function (cols) {
        var isValid = cols.length && cols.every(function (col) { return is(col, 'Object'); });
        return isValid
      }
    },

    /**
     * List of row's data.
     */
    rows: {
      type: Array,
      required: true
    },

    /**
     * Empty cell's character.
     */
    empty: {
      type: String,
      default: ''
    }
  },

  methods: {

    /**
     * Get value's label.
     * @param {*} value
     * @param {string} field
     * @returns {string}
     */
    getLabel: function getLabel (value, field) {
      var label = field.split('.').reduce(function (value, field) {
        if (is(value, 'Object') && value.hasOwnProperty(field))
          { return value[field] }
        return null
      }, value);
      return label || this.empty
    }
  }
};

/**
 * Install DataTablee components.
 * @param {Vue} Vue
 * @param {{ name: string }} [options]
 */
var install = function (Vue) {
  Vue.component('DataTablee', DataTablee);
};

export { install, DataTablee };
export default install;