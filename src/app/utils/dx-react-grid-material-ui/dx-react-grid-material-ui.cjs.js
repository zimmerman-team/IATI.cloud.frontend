/**
 * Bundle of @devexpress/dx-react-grid-material-ui
 * Generated: 2019-06-05
 * Version: 1.11.0
 * License: https://js.devexpress.com/Licensing
 */

'use strict';

if (typeof process === 'undefined') {
  var process = { env: {} };
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = require('react');
var PropTypes = require('prop-types');
var dxReactGrid = require('@devexpress/dx-react-grid');
var classNames = _interopDefault(require('classnames'));
var styles$N = require('@material-ui/core/styles');
var dxReactCore = require('@devexpress/dx-react-core');
var Popover = _interopDefault(require('@material-ui/core/Popover'));
var List = _interopDefault(require('@material-ui/core/List'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var VisibilityOff = _interopDefault(
  require('@material-ui/icons/VisibilityOff')
);
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var Checkbox = _interopDefault(require('@material-ui/core/Checkbox'));
var Chip = _interopDefault(require('@material-ui/core/Chip'));
var Input = _interopDefault(require('@material-ui/core/Input'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var Select = _interopDefault(require('@material-ui/core/Select'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var ChevronLeft = _interopDefault(require('@material-ui/icons/ChevronLeft'));
var ChevronRight = _interopDefault(require('@material-ui/icons/ChevronRight'));
var dxGridCore = require('@devexpress/dx-grid-core');
var TableSortLabel = _interopDefault(
  require('@material-ui/core/TableSortLabel')
);
var TableCell$1 = _interopDefault(require('@material-ui/core/TableCell'));
var ExpandMore = _interopDefault(require('@material-ui/icons/ExpandMore'));
var ExpandLess = _interopDefault(require('@material-ui/icons/ExpandLess'));
var TableRowMUI = _interopDefault(require('@material-ui/core/TableRow'));
var TableBody = _interopDefault(require('@material-ui/core/TableBody'));
var TableHead = _interopDefault(require('@material-ui/core/TableHead'));
var TableFooter = _interopDefault(require('@material-ui/core/TableFooter'));
var TableMUI = _interopDefault(require('@material-ui/core/Table'));
var RootRef = _interopDefault(require('@material-ui/core/RootRef'));
var colorManipulator = require('@material-ui/core/styles/colorManipulator');
var Menu = _interopDefault(require('@material-ui/core/Menu'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var SvgIcon = _interopDefault(require('@material-ui/core/SvgIcon'));
var SearchIcon = _interopDefault(require('@material-ui/icons/Search'));
var List$1 = _interopDefault(require('@material-ui/icons/List'));
var Toolbar$2 = _interopDefault(require('@material-ui/core/Toolbar'));
var InputAdornment = _interopDefault(
  require('@material-ui/core/InputAdornment')
);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }

    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

var styles = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
};

var RootBase = function RootBase(_ref) {
  var children = _ref.children,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'classes',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(classes.root, className)
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (RootBase.propTypes = {
      children: PropTypes.node.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
RootBase.defaultProps = {
  className: undefined
};
var Root = styles$N.withStyles(styles)(RootBase);

var Grid = function Grid(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    dxReactGrid.Grid,
    _extends(
      {
        rootComponent: Root
      },
      props
    ),
    children
  );
};
Grid.Root = Root;
process.env.NODE_ENV !== 'production'
  ? (Grid.propTypes = {
      children: PropTypes.node.isRequired
    })
  : void 0;

var Overlay = function Overlay(_ref) {
  var visible = _ref.visible,
    onHide = _ref.onHide,
    children = _ref.children,
    target = _ref.target,
    restProps = _objectWithoutProperties(_ref, [
      'visible',
      'onHide',
      'children',
      'target'
    ]);

  return React.createElement(
    Popover,
    _extends(
      {
        open: visible,
        anchorEl: target,
        onClose: onHide,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (Overlay.propTypes = {
      onHide: PropTypes.func.isRequired,
      children: PropTypes.node.isRequired,
      visible: PropTypes.bool,
      target: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    })
  : void 0;
Overlay.defaultProps = {
  visible: false,
  target: null
};

var Container = function Container(_ref) {
  var children = _ref.children,
    restProps = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    List,
    _extends(
      {
        dense: true
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (Container.propTypes = {
      children: PropTypes.node.isRequired
    })
  : void 0;

var ToggleButton = function ToggleButton(_ref) {
  var onToggle = _ref.onToggle,
    getMessage = _ref.getMessage,
    buttonRef = _ref.buttonRef,
    active = _ref.active,
    restProps = _objectWithoutProperties(_ref, [
      'onToggle',
      'getMessage',
      'buttonRef',
      'active'
    ]);

  return React.createElement(
    Tooltip,
    {
      title: getMessage('showColumnChooser'),
      placement: 'bottom',
      enterDelay: 300
    },
    React.createElement(
      IconButton,
      _extends(
        {
          onClick: onToggle,
          buttonRef: buttonRef
        },
        restProps
      ),
      React.createElement(VisibilityOff, null)
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (ToggleButton.propTypes = {
      onToggle: PropTypes.func.isRequired,
      getMessage: PropTypes.func.isRequired,
      buttonRef: PropTypes.func.isRequired,
      active: PropTypes.bool
    })
  : void 0;
ToggleButton.defaultProps = {
  active: false
};

var styles$1 = {
  checkbox: {
    padding: 0
  },
  itemText: {
    paddingLeft: 8
  }
};

var ItemBase = function ItemBase(_ref) {
  var _ref$item = _ref.item,
    column = _ref$item.column,
    hidden = _ref$item.hidden,
    disabled = _ref.disabled,
    onToggle = _ref.onToggle,
    classes = _ref.classes,
    restProps = _objectWithoutProperties(_ref, [
      'item',
      'disabled',
      'onToggle',
      'classes'
    ]);

  return React.createElement(
    ListItem,
    _extends(
      {
        key: column.name,
        button: !disabled,
        component: 'li',
        disabled: disabled,
        onClick: !disabled ? onToggle : null
      },
      restProps
    ),
    React.createElement(Checkbox, {
      checked: !hidden,
      tabIndex: -1,
      disableRipple: true,
      disabled: disabled,
      className: classes.checkbox
    }),
    React.createElement(ListItemText, {
      className: classes.itemText,
      primary: column.title || column.name
    })
  );
};

process.env.NODE_ENV !== 'production'
  ? (ItemBase.propTypes = {
      item: PropTypes.shape({
        column: PropTypes.shape({
          name: PropTypes.string
        }),
        hidden: PropTypes.bool
      }).isRequired,
      disabled: PropTypes.bool,
      onToggle: PropTypes.func,
      classes: PropTypes.object.isRequired
    })
  : void 0;
ItemBase.defaultProps = {
  onToggle: function onToggle() {},
  disabled: false
};
var Item = styles$N.withStyles(styles$1, {
  name: 'Item'
})(ItemBase);

var withPatchedProps = function withPatchedProps(patchProps) {
  return function(Target) {
    var Patched =
      /*#__PURE__*/
      (function(_React$PureComponent) {
        _inherits(Patched, _React$PureComponent);

        function Patched() {
          _classCallCheck(this, Patched);

          return _possibleConstructorReturn(
            this,
            _getPrototypeOf(Patched).apply(this, arguments)
          );
        }

        _createClass(Patched, [
          {
            key: 'render',
            value: function render() {
              return React.createElement(Target, patchProps(this.props));
            }
          }
        ]);

        return Patched;
      })(React.PureComponent);

    return Patched;
  };
};

var defaultMessages = {
  showColumnChooser: 'Show Column Chooser'
};
var ColumnChooserWithMessages = withPatchedProps(function(_ref) {
  var messages = _ref.messages,
    restProps = _objectWithoutProperties(_ref, ['messages']);

  return _objectSpread(
    {
      messages: _objectSpread({}, defaultMessages, messages)
    },
    restProps
  );
})(dxReactGrid.ColumnChooser);
ColumnChooserWithMessages.propTypes = {
  messages: PropTypes.shape({
    hiddenColumnNames: PropTypes.string
  })
};
ColumnChooserWithMessages.defaultProps = {
  messages: {}
};
ColumnChooserWithMessages.components = dxReactGrid.ColumnChooser.components;
var ColumnChooser = dxReactCore.withComponents({
  Container: Container,
  Item: Item,
  Overlay: Overlay,
  ToggleButton: ToggleButton
})(ColumnChooserWithMessages);

var styles$2 = function styles(theme) {
  return {
    container: {
      position: 'fixed',
      zIndex: 1000,
      left: 0,
      top: 0,
      display: 'inline-block'
    },
    column: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      float: 'right',
      cursor: 'move'
    }
  };
};

var ContainerBase = function ContainerBase(_ref) {
  var clientOffset = _ref.clientOffset,
    classes = _ref.classes,
    style = _ref.style,
    className = _ref.className,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, [
      'clientOffset',
      'classes',
      'style',
      'className',
      'children'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(classes.container, className),
        style: _objectSpread(
          {
            transform: 'translate(calc('
              .concat(clientOffset.x, 'px - 50%), calc(')
              .concat(clientOffset.y, 'px - 50%))'),
            msTransform: 'translateX('
              .concat(clientOffset.x, 'px) translateX(-50%) translateY(')
              .concat(clientOffset.y, 'px) translateY(-50%)')
          },
          style
        )
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (ContainerBase.propTypes = {
      clientOffset: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      children: PropTypes.node,
      classes: PropTypes.object.isRequired,
      style: PropTypes.object,
      className: PropTypes.string
    })
  : void 0;
ContainerBase.defaultProps = {
  style: null,
  className: undefined,
  children: undefined
};
var Container$1 = styles$N.withStyles(styles$2, {
  name: 'DragDrop'
})(ContainerBase);

var ColumnBase = function ColumnBase(_ref2) {
  var column = _ref2.column,
    classes = _ref2.classes,
    className = _ref2.className,
    restProps = _objectWithoutProperties(_ref2, [
      'column',
      'classes',
      'className'
    ]);

  return React.createElement(
    Chip,
    _extends(
      {
        className: classNames(classes.column, className),
        label: column.title
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (ColumnBase.propTypes = {
      column: PropTypes.object.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
ColumnBase.defaultProps = {
  className: undefined
};
var Column = styles$N.withStyles(styles$2, {
  name: 'DragDrop'
})(ColumnBase);

var DragDropProvider = dxReactCore.withComponents({
  Container: Container$1,
  Column: Column
})(dxReactGrid.DragDropProvider);

var styles$3 = function styles(theme) {
  return {
    pageSizeSelector: _objectSpread({}, theme.typography.caption, {
      paddingRight: theme.spacing(5),
      // NOTE: fixes vertical alignment in FF
      display: 'flex',
      alignItems: 'center'
    }),
    label: {
      paddingRight: theme.spacing(3)
    },
    pageSizeTitle: {
      width: 'auto',
      marginRight: theme.spacing(2)
    },
    inputRoot: {
      fontSize: theme.spacing(1.75),
      textAlign: 'right'
    },
    selectIcon: {
      top: 2
    },
    '@media (max-width: 768px)': {
      label: {
        display: 'none'
      },
      pageSizeSelector: {
        paddingRight: theme.spacing(2)
      }
    }
  };
};

var PageSizeSelectorBase = function PageSizeSelectorBase(_ref) {
  var pageSize = _ref.pageSize,
    onPageSizeChange = _ref.onPageSizeChange,
    pageSizes = _ref.pageSizes,
    getMessage = _ref.getMessage,
    classes = _ref.classes;
  var showAll = getMessage('showAll');
  return React.createElement(
    'div',
    {
      className: classes.pageSizeSelector
    },
    React.createElement(
      'span',
      {
        className: classes.label
      },
      getMessage('rowsPerPage')
    ),
    React.createElement(
      Select,
      {
        value: pageSize,
        onChange: function onChange(event) {
          return onPageSizeChange(event.target.value);
        },
        classes: {
          icon: classes.selectIcon
        },
        input: React.createElement(Input, {
          disableUnderline: true,
          classes: {
            root: classes.inputRoot
          }
        })
      },
      pageSizes.map(function(item) {
        return React.createElement(
          MenuItem,
          {
            key: item,
            value: item
          },
          item !== 0 ? item : showAll
        );
      })
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (PageSizeSelectorBase.propTypes = {
      pageSize: PropTypes.number.isRequired,
      onPageSizeChange: PropTypes.func.isRequired,
      pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
      classes: PropTypes.object.isRequired,
      getMessage: PropTypes.func.isRequired
    })
  : void 0;
var PageSizeSelector = styles$N.withStyles(styles$3, {
  name: 'PageSizeSelector'
})(PageSizeSelectorBase);

var styles$4 = function styles(theme) {
  return {
    pagination: {
      margin: 0
    },
    rowsLabel: _objectSpread({}, theme.typography.caption, {
      paddingRight: theme.spacing(5)
    }),
    button: {
      minWidth: theme.spacing(2)
    },
    activeButton: {
      fontWeight: 'bold',
      cursor: 'default'
    },
    arrowButton: {
      display: 'inline-block',
      transform: theme.direction === 'rtl' ? 'rotate(180deg)' : null,
      msTransform: theme.direction === 'rtl' ? 'rotate(180deg)' : null
    },
    prev: {
      marginRight: 0
    },
    next: {
      marginLeft: 0
    },
    '@media(max-width: 768px)': {
      button: {
        display: 'none'
      },
      prev: {
        marginRight: theme.spacing(1)
      },
      next: {
        marginLeft: theme.spacing(1)
      },
      rowsLabel: {
        paddingRight: theme.spacing(2)
      }
    }
  };
};

var PageButton = function PageButton(_ref) {
  var _classNames;

  var text = _ref.text,
    isActive = _ref.isActive,
    isDisabled = _ref.isDisabled,
    classes = _ref.classes,
    onClick = _ref.onClick;
  var buttonClasses = classNames(
    ((_classNames = {}),
    _defineProperty(_classNames, classes.button, true),
    _defineProperty(_classNames, classes.activeButton, isActive),
    _classNames)
  );
  return React.createElement(
    Button,
    _extends(
      {
        className: buttonClasses,
        disabled: isDisabled,
        onClick: onClick
      },
      isActive
        ? {
            tabIndex: -1
          }
        : null
    ),
    text
  );
};

process.env.NODE_ENV !== 'production'
  ? (PageButton.propTypes = {
      text: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
      isDisabled: PropTypes.bool,
      classes: PropTypes.object.isRequired,
      onClick: PropTypes.func
    })
  : void 0;
PageButton.defaultProps = {
  onClick: function onClick() {},
  isDisabled: false,
  isActive: false
};
var ellipsisSymbol = '\u2026';

var renderPageButtons = function renderPageButtons(
  currentPage,
  totalPageCount,
  classes,
  onCurrentPageChange
) {
  var pageButtons = [];
  var maxButtonCount = 3;
  var startPage = 1;
  var endPage = totalPageCount || 1;

  if (maxButtonCount < totalPageCount) {
    startPage = dxGridCore.calculateStartPage(
      currentPage + 1,
      maxButtonCount,
      totalPageCount
    );
    endPage = startPage + maxButtonCount - 1;
  }

  if (startPage > 1) {
    pageButtons.push(
      React.createElement(PageButton, {
        key: 1,
        text: String(1),
        classes: classes,
        onClick: function onClick() {
          return onCurrentPageChange(0);
        }
      })
    );

    if (startPage > 2) {
      pageButtons.push(
        React.createElement(PageButton, {
          key: 'ellipsisStart',
          text: ellipsisSymbol,
          classes: classes,
          isDisabled: true
        })
      );
    }
  }

  var _loop = function _loop(page) {
    pageButtons.push(
      React.createElement(PageButton, {
        key: page,
        text: String(page),
        isActive: page === currentPage + 1,
        classes: classes,
        onClick: function onClick() {
          return onCurrentPageChange(page - 1);
        },
        isDisabled: startPage === endPage
      })
    );
  };

  for (var page = startPage; page <= endPage; page += 1) {
    _loop(page);
  }

  if (endPage < totalPageCount) {
    if (endPage < totalPageCount - 1) {
      pageButtons.push(
        React.createElement(PageButton, {
          key: 'ellipsisEnd',
          text: ellipsisSymbol,
          classes: classes,
          isDisabled: true
        })
      );
    }

    pageButtons.push(
      React.createElement(PageButton, {
        key: totalPageCount,
        text: String(totalPageCount),
        classes: classes,
        onClick: function onClick() {
          return onCurrentPageChange(totalPageCount - 1);
        }
      })
    );
  }

  return pageButtons;
};

var PaginationBase = function PaginationBase(_ref2) {
  var totalPages = _ref2.totalPages,
    totalCount = _ref2.totalCount,
    pageSize = _ref2.pageSize,
    currentPage = _ref2.currentPage,
    onCurrentPageChange = _ref2.onCurrentPageChange,
    getMessage = _ref2.getMessage,
    classes = _ref2.classes;
  var from = dxGridCore.firstRowOnPage(currentPage, pageSize, totalCount);
  var to = dxGridCore.lastRowOnPage(currentPage, pageSize, totalCount);
  return React.createElement(
    'div',
    {
      className: classes.pagination
    },
    React.createElement(
      'span',
      {
        className: classes.rowsLabel
      },
      getMessage('info', {
        from: from,
        to: to,
        count: totalCount
      })
    ),
    React.createElement(
      IconButton,
      {
        className: classNames(classes.arrowButton, classes.prev),
        disabled: currentPage === 0,
        onClick: function onClick() {
          return currentPage > 0 && onCurrentPageChange(currentPage - 1);
        },
        'aria-label': 'Previous'
      },
      React.createElement(ChevronLeft, null)
    ),
    renderPageButtons(currentPage, totalPages, classes, onCurrentPageChange),
    React.createElement(
      IconButton,
      {
        className: classNames(classes.arrowButton, classes.next),
        disabled: currentPage === totalPages - 1 || totalCount === 0,
        onClick: function onClick() {
          return (
            currentPage < totalPages - 1 && onCurrentPageChange(currentPage + 1)
          );
        },
        'aria-label': 'Next'
      },
      React.createElement(ChevronRight, null)
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (PaginationBase.propTypes = {
      totalPages: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired,
      onCurrentPageChange: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
      totalCount: PropTypes.number.isRequired,
      pageSize: PropTypes.number.isRequired,
      getMessage: PropTypes.func.isRequired
    })
  : void 0;
var Pagination = styles$N.withStyles(styles$4, {
  name: 'Pagination'
})(PaginationBase);

var styles$5 = function styles(theme) {
  return {
    pager: {
      overflow: 'hidden',
      padding: theme.spacing(1.5),
      display: 'flex',
      flex: 'none',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  };
};

var PagerBase = function PagerBase(_ref) {
  var currentPage = _ref.currentPage,
    pageSizes = _ref.pageSizes,
    totalPages = _ref.totalPages,
    pageSize = _ref.pageSize,
    classes = _ref.classes,
    _onCurrentPageChange = _ref.onCurrentPageChange,
    onPageSizeChange = _ref.onPageSizeChange,
    totalCount = _ref.totalCount,
    getMessage = _ref.getMessage,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'currentPage',
      'pageSizes',
      'totalPages',
      'pageSize',
      'classes',
      'onCurrentPageChange',
      'onPageSizeChange',
      'totalCount',
      'getMessage',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(classes.pager, className)
      },
      restProps
    ),
    !!pageSizes.length &&
      React.createElement(PageSizeSelector, {
        pageSize: pageSize,
        onPageSizeChange: onPageSizeChange,
        pageSizes: pageSizes,
        getMessage: getMessage
      }),
    React.createElement(Pagination, {
      totalPages: totalPages,
      totalCount: totalCount,
      currentPage: currentPage,
      onCurrentPageChange: function onCurrentPageChange(page) {
        return _onCurrentPageChange(page);
      },
      pageSize: pageSize,
      getMessage: getMessage
    })
  );
};

process.env.NODE_ENV !== 'production'
  ? (PagerBase.propTypes = {
      currentPage: PropTypes.number.isRequired,
      totalPages: PropTypes.number.isRequired,
      pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
      pageSize: PropTypes.number.isRequired,
      classes: PropTypes.object.isRequired,
      onCurrentPageChange: PropTypes.func.isRequired,
      onPageSizeChange: PropTypes.func.isRequired,
      totalCount: PropTypes.number.isRequired,
      getMessage: PropTypes.func.isRequired,
      className: PropTypes.string
    })
  : void 0;
PagerBase.defaultProps = {
  className: undefined
};
var Pager = styles$N.withStyles(styles$5, {
  name: 'Pager'
})(PagerBase);

var defaultMessages$1 = {
  rowsPerPage: 'Rows per page:'
};
var PagingPanelWithMessages = withPatchedProps(function(_ref) {
  var messages = _ref.messages,
    restProps = _objectWithoutProperties(_ref, ['messages']);

  return _objectSpread(
    {
      messages: _objectSpread({}, defaultMessages$1, messages)
    },
    restProps
  );
})(dxReactGrid.PagingPanel);
PagingPanelWithMessages.propTypes = {
  messages: PropTypes.shape({
    showAll: PropTypes.string,
    rowsPerPage: PropTypes.string,
    info: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  })
};
PagingPanelWithMessages.defaultProps = {
  messages: {}
};
PagingPanelWithMessages.components = dxReactGrid.PagingPanel.components;
var PagingPanel = dxReactCore.withComponents({
  Container: Pager
})(PagingPanelWithMessages);

var styles$6 = function styles(theme) {
  return {
    panel: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: theme.spacing(1.5)
    }
  };
};

var GroupPanelContainerBase = function GroupPanelContainerBase(_ref) {
  var classes = _ref.classes,
    children = _ref.children,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'classes',
      'children',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(classes.panel, className)
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (GroupPanelContainerBase.propTypes = {
      classes: PropTypes.object.isRequired,
      children: PropTypes.node,
      className: PropTypes.string
    })
  : void 0;
GroupPanelContainerBase.defaultProps = {
  children: undefined,
  className: undefined
};
var GroupPanelContainer = styles$N.withStyles(styles$6, {
  name: 'GroupPanelContainer'
})(GroupPanelContainerBase);

var ENTER_KEY_CODE = 13;
var SPACE_KEY_CODE = 32;

var styles$7 = function styles(theme) {
  return {
    button: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1.5)
    },
    draftCell: {
      opacity: 0.3
    }
  };
};

var label = function label(
  showSortingControls,
  sortingEnabled,
  sortingDirection,
  column
) {
  var title = column.title || column.name;
  return showSortingControls
    ? React.createElement(
        TableSortLabel,
        {
          active: !!sortingDirection,
          direction: sortingDirection === null ? undefined : sortingDirection,
          disabled: !sortingEnabled,
          tabIndex: -1
        },
        title
      )
    : title;
};

var GroupPanelItemBase = function GroupPanelItemBase(_ref) {
  var _classNames;

  var _ref$item = _ref.item,
    column = _ref$item.column,
    draft = _ref$item.draft,
    onGroup = _ref.onGroup,
    showGroupingControls = _ref.showGroupingControls,
    showSortingControls = _ref.showSortingControls,
    sortingDirection = _ref.sortingDirection,
    onSort = _ref.onSort,
    sortingEnabled = _ref.sortingEnabled,
    groupingEnabled = _ref.groupingEnabled,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'item',
      'onGroup',
      'showGroupingControls',
      'showSortingControls',
      'sortingDirection',
      'onSort',
      'sortingEnabled',
      'groupingEnabled',
      'classes',
      'className'
    ]);

  var chipClassNames = classNames(
    ((_classNames = {}),
    _defineProperty(_classNames, classes.button, true),
    _defineProperty(_classNames, classes.draftCell, draft),
    _classNames),
    className
  );

  var onClick = function onClick(e) {
    var isActionKeyDown =
      e.keyCode === ENTER_KEY_CODE || e.keyCode === SPACE_KEY_CODE;
    var isMouseClick = e.keyCode === undefined;
    var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
    var direction =
      (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey
        ? null
        : undefined;
    onSort({
      direction: direction,
      keepOther: cancelSortingRelatedKey
    });
  };

  return React.createElement(
    Chip,
    _extends(
      {
        label: label(
          showSortingControls,
          sortingEnabled,
          sortingDirection,
          column
        ),
        className: chipClassNames
      },
      showGroupingControls
        ? {
            onDelete: groupingEnabled ? onGroup : null
          }
        : null,
      showSortingControls
        ? {
            onClick: sortingEnabled ? onClick : null
          }
        : null,
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (GroupPanelItemBase.propTypes = {
      item: PropTypes.shape({
        column: PropTypes.shape({
          title: PropTypes.string
        }).isRequired,
        draft: PropTypes.bool
      }).isRequired,
      showSortingControls: PropTypes.bool,
      sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
      onSort: PropTypes.func,
      onGroup: PropTypes.func,
      showGroupingControls: PropTypes.bool,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      sortingEnabled: PropTypes.bool,
      groupingEnabled: PropTypes.bool
    })
  : void 0;
GroupPanelItemBase.defaultProps = {
  showSortingControls: false,
  sortingEnabled: false,
  sortingDirection: undefined,
  onSort: undefined,
  onGroup: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
  className: undefined
};
var GroupPanelItem = styles$N.withStyles(styles$7, {
  name: 'GroupPanelItem'
})(GroupPanelItemBase);

var styles$8 = function styles(theme) {
  return {
    groupInfo: {
      color: theme.typography.caption.color,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize
    }
  };
};

var GroupPanelEmptyMessageBase = function GroupPanelEmptyMessageBase(_ref) {
  var getMessage = _ref.getMessage,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'getMessage',
      'classes',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(classes.groupInfo, className)
      },
      restProps
    ),
    getMessage('groupByColumn')
  );
};

process.env.NODE_ENV !== 'production'
  ? (GroupPanelEmptyMessageBase.propTypes = {
      getMessage: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
GroupPanelEmptyMessageBase.defaultProps = {
  className: undefined
};
var GroupPanelEmptyMessage = styles$N.withStyles(styles$8, {
  name: 'GroupPanelEmptyMessage'
})(GroupPanelEmptyMessageBase);

var GroupingPanel = dxReactCore.withComponents({
  Container: GroupPanelContainer,
  Item: GroupPanelItem,
  EmptyMessage: GroupPanelEmptyMessage
})(dxReactGrid.GroupingPanel);

var styles$9 = function styles(theme) {
  return {
    toggleCell: {
      textAlign: 'center',
      textOverflow: 'initial',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing(1)
    },
    toggleCellButton: {
      verticalAlign: 'middle',
      display: 'inline-block',
      padding: theme.spacing(1)
    }
  };
};

var TableDetailToggleCellBase = function TableDetailToggleCellBase(_ref) {
  var style = _ref.style,
    expanded = _ref.expanded,
    classes = _ref.classes,
    onToggle = _ref.onToggle,
    tableColumn = _ref.tableColumn,
    tableRow = _ref.tableRow,
    row = _ref.row,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'style',
      'expanded',
      'classes',
      'onToggle',
      'tableColumn',
      'tableRow',
      'row',
      'className'
    ]);

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    onToggle();
  };

  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.toggleCell, className),
        style: style
      },
      restProps
    ),
    React.createElement(
      IconButton,
      {
        className: classes.toggleCellButton,
        onClick: handleClick
      },
      expanded
        ? React.createElement(ExpandLess, null)
        : React.createElement(ExpandMore, null)
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableDetailToggleCellBase.propTypes = {
      style: PropTypes.object,
      expanded: PropTypes.bool,
      classes: PropTypes.object.isRequired,
      onToggle: PropTypes.func,
      className: PropTypes.string,
      tableColumn: PropTypes.object,
      tableRow: PropTypes.object,
      row: PropTypes.any
    })
  : void 0;
TableDetailToggleCellBase.defaultProps = {
  style: null,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined
};
var TableDetailToggleCell = styles$N.withStyles(styles$9, {
  name: 'TableDetailToggleCell'
})(TableDetailToggleCellBase);

var styles$a = function styles(theme) {
  return {
    active: {
      backgroundColor: theme.palette.background.default
    }
  };
};

var TableDetailCellBase = function TableDetailCellBase(_ref) {
  var colSpan = _ref.colSpan,
    style = _ref.style,
    children = _ref.children,
    classes = _ref.classes,
    className = _ref.className,
    tableColumn = _ref.tableColumn,
    tableRow = _ref.tableRow,
    row = _ref.row,
    restProps = _objectWithoutProperties(_ref, [
      'colSpan',
      'style',
      'children',
      'classes',
      'className',
      'tableColumn',
      'tableRow',
      'row'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        style: style,
        colSpan: colSpan,
        className: classNames(classes.active, className)
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableDetailCellBase.propTypes = {
      style: PropTypes.object,
      colSpan: PropTypes.number,
      children: PropTypes.node,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      tableColumn: PropTypes.object,
      tableRow: PropTypes.object,
      row: PropTypes.any
    })
  : void 0;
TableDetailCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  className: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  row: undefined,
  children: undefined
};
var TableDetailCell = styles$N.withStyles(styles$a, {
  name: 'TableDetailCell'
})(TableDetailCellBase);

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
    row = _ref.row,
    tableRow = _ref.tableRow,
    restProps = _objectWithoutProperties(_ref, ['children', 'row', 'tableRow']);

  return React.createElement(TableRowMUI, restProps, children);
};
process.env.NODE_ENV !== 'production'
  ? (TableRow.propTypes = {
      children: PropTypes.node,
      row: PropTypes.any,
      tableRow: PropTypes.object
    })
  : void 0;
TableRow.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined
};

var TableRowDetailWithWidth = function TableRowDetailWithWidth(props) {
  return React.createElement(
    dxReactGrid.TableRowDetail,
    _extends(
      {
        toggleColumnWidth: 48
      },
      props
    )
  );
};

TableRowDetailWithWidth.components = dxReactGrid.TableRowDetail.components;
var TableRowDetail = dxReactCore.withComponents({
  Row: TableRow,
  Cell: TableDetailCell,
  ToggleCell: TableDetailToggleCell
})(TableRowDetailWithWidth);
TableRowDetail.COLUMN_TYPE = dxReactGrid.TableRowDetail.COLUMN_TYPE;
TableRowDetail.ROW_TYPE = dxReactGrid.TableRowDetail.ROW_TYPE;

var styles$b = function styles(theme) {
  return {
    cell: {
      cursor: 'pointer',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5)
    }
  };
};

var CellBase = function CellBase(_ref) {
  var Content = _ref.contentComponent,
    Icon = _ref.iconComponent,
    style = _ref.style,
    colSpan = _ref.colSpan,
    row = _ref.row,
    column = _ref.column,
    expanded = _ref.expanded,
    onToggle = _ref.onToggle,
    classes = _ref.classes,
    children = _ref.children,
    className = _ref.className,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    restProps = _objectWithoutProperties(_ref, [
      'contentComponent',
      'iconComponent',
      'style',
      'colSpan',
      'row',
      'column',
      'expanded',
      'onToggle',
      'classes',
      'children',
      'className',
      'tableRow',
      'tableColumn'
    ]);

  var handleClick = function handleClick() {
    return onToggle();
  };

  return React.createElement(
    TableCell$1,
    _extends(
      {
        colSpan: colSpan,
        style: style,
        className: classNames(classes.cell, className),
        onClick: handleClick
      },
      restProps
    ),
    React.createElement(Icon, {
      expanded: expanded
    }),
    React.createElement(
      Content,
      {
        column: column,
        row: row
      },
      children
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (CellBase.propTypes = {
      contentComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        .isRequired,
      iconComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        .isRequired,
      style: PropTypes.object,
      colSpan: PropTypes.number,
      row: PropTypes.any,
      column: PropTypes.object,
      expanded: PropTypes.bool,
      onToggle: PropTypes.func,
      classes: PropTypes.object.isRequired,
      children: PropTypes.node,
      className: PropTypes.string,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object
    })
  : void 0;
CellBase.defaultProps = {
  style: null,
  colSpan: 1,
  row: {},
  column: {},
  expanded: false,
  onToggle: function onToggle() {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};
var Cell = styles$N.withStyles(styles$b, {
  name: 'TableGroupCell'
})(CellBase);

var styles$c = function styles() {
  return {
    columnTitle: {
      verticalAlign: 'middle'
    }
  };
};

var ContentBase = function ContentBase(_ref) {
  var column = _ref.column,
    row = _ref.row,
    classes = _ref.classes,
    className = _ref.className,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, [
      'column',
      'row',
      'classes',
      'className',
      'children'
    ]);

  return React.createElement(
    'span',
    _extends(
      {
        className: classNames(classes.columnTitle, className)
      },
      restProps
    ),
    React.createElement('strong', null, column.title || column.name, ':', ' '),
    children || String(row.value)
  );
};

process.env.NODE_ENV !== 'production'
  ? (ContentBase.propTypes = {
      row: PropTypes.any,
      column: PropTypes.object,
      children: PropTypes.node,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
ContentBase.defaultProps = {
  row: {},
  column: {},
  children: undefined,
  className: undefined
};
var Content = styles$N.withStyles(styles$c)(ContentBase);

var styles$d = function styles(theme) {
  return {
    groupButton: {
      verticalAlign: 'middle',
      display: 'inline-block',
      padding: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  };
};

var IconBase = function IconBase(_ref) {
  var expanded = _ref.expanded,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'expanded',
      'classes',
      'className'
    ]);

  return React.createElement(
    IconButton,
    _extends(
      {
        className: classNames(classes.groupButton, className)
      },
      restProps
    ),
    expanded
      ? React.createElement(ExpandMore, null)
      : React.createElement(ChevronRight, null)
  );
};

process.env.NODE_ENV !== 'production'
  ? (IconBase.propTypes = {
      expanded: PropTypes.bool.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
IconBase.defaultProps = {
  className: undefined
};
var Icon = styles$N.withStyles(styles$d)(IconBase);

var TableGroupRowWithIndent = function TableGroupRowWithIndent(props) {
  return React.createElement(
    dxReactGrid.TableGroupRow,
    _extends(
      {
        indentColumnWidth: 48
      },
      props
    )
  );
};

TableGroupRowWithIndent.components = dxReactGrid.TableGroupRow.components;
var TableGroupRow = dxReactCore.withComponents({
  Row: TableRow,
  Cell: Cell,
  Content: Content,
  Icon: Icon
})(TableGroupRowWithIndent);
TableGroupRow.COLUMN_TYPE = dxReactGrid.TableGroupRow.COLUMN_TYPE;
TableGroupRow.ROW_TYPE = dxReactGrid.TableGroupRow.ROW_TYPE;

var styles$e = function styles(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing(1),
      textAlign: 'center'
    },
    checkbox: {
      padding: theme.spacing(1)
    },
    alignWithRowSpan: {
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing(0.5)
    },
    pointer: {
      cursor: 'pointer'
    }
  };
};

var TableSelectAllCellBase = function TableSelectAllCellBase(_ref) {
  var _classNames;

  var allSelected = _ref.allSelected,
    someSelected = _ref.someSelected,
    disabled = _ref.disabled,
    onToggle = _ref.onToggle,
    classes = _ref.classes,
    className = _ref.className,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    rowSpan = _ref.rowSpan,
    restProps = _objectWithoutProperties(_ref, [
      'allSelected',
      'someSelected',
      'disabled',
      'onToggle',
      'classes',
      'className',
      'tableRow',
      'tableColumn',
      'rowSpan'
    ]);

  var cellClasses = classNames(
    ((_classNames = {}),
    _defineProperty(_classNames, classes.cell, true),
    _defineProperty(_classNames, classes.pointer, !disabled),
    _defineProperty(_classNames, classes.alignWithRowSpan, rowSpan > 1),
    _classNames),
    className
  );
  return React.createElement(
    TableCell$1,
    _extends(
      {
        padding: 'checkbox',
        className: cellClasses,
        rowSpan: rowSpan
      },
      restProps
    ),
    React.createElement(Checkbox, {
      checked: allSelected,
      className: classes.checkbox,
      indeterminate: someSelected,
      disabled: disabled,
      onClick: function onClick(e) {
        if (disabled) return;
        e.stopPropagation();
        onToggle();
      }
    })
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableSelectAllCellBase.propTypes = {
      allSelected: PropTypes.bool,
      someSelected: PropTypes.bool,
      disabled: PropTypes.bool,
      onToggle: PropTypes.func,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      rowSpan: PropTypes.number
    })
  : void 0;
TableSelectAllCellBase.defaultProps = {
  allSelected: false,
  someSelected: false,
  disabled: false,
  onToggle: function onToggle() {},
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined
};
var TableSelectAllCell = styles$N.withStyles(styles$e, {
  name: 'TableSelectAllCell'
})(TableSelectAllCellBase);

var styles$f = function styles(theme) {
  return {
    cell: {
      overflow: 'visible',
      paddingRight: 0,
      paddingLeft: theme.spacing(1),
      textAlign: 'center'
    },
    checkbox: {
      marginTop: '-1px',
      marginBottom: '-1px',
      padding: theme.spacing(1)
    }
  };
};

var TableSelectCellBase = function TableSelectCellBase(_ref) {
  var style = _ref.style,
    selected = _ref.selected,
    onToggle = _ref.onToggle,
    classes = _ref.classes,
    className = _ref.className,
    row = _ref.row,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    restProps = _objectWithoutProperties(_ref, [
      'style',
      'selected',
      'onToggle',
      'classes',
      'className',
      'row',
      'tableRow',
      'tableColumn'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        padding: 'checkbox',
        style: style,
        className: classNames(classes.cell, className)
      },
      restProps
    ),
    React.createElement(Checkbox, {
      className: classes.checkbox,
      checked: selected,
      onClick: function onClick(e) {
        e.stopPropagation();
        onToggle();
      }
    })
  );
};
process.env.NODE_ENV !== 'production'
  ? (TableSelectCellBase.propTypes = {
      style: PropTypes.object,
      selected: PropTypes.bool,
      onToggle: PropTypes.func,
      classes: PropTypes.object.isRequired,
      row: PropTypes.any,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      className: PropTypes.string
    })
  : void 0;
TableSelectCellBase.defaultProps = {
  style: null,
  selected: false,
  onToggle: function onToggle() {},
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};
var TableSelectCell = styles$N.withStyles(styles$f, {
  name: 'TableSelectCell'
})(TableSelectCellBase);

var TableSelectRow = function TableSelectRow(_ref) {
  var selected = _ref.selected,
    selectByRowClick = _ref.selectByRowClick,
    onToggle = _ref.onToggle,
    row = _ref.row,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, [
      'selected',
      'selectByRowClick',
      'onToggle',
      'row',
      'tableRow',
      'tableColumn',
      'children'
    ]);

  return React.createElement(
    TableRowMUI,
    _extends(
      {
        selected: selected,
        onClick: function onClick(e) {
          if (!selectByRowClick) return;
          e.stopPropagation();
          onToggle();
        }
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (TableSelectRow.propTypes = {
      children: PropTypes.node,
      onToggle: PropTypes.func,
      selected: PropTypes.bool,
      selectByRowClick: PropTypes.bool,
      row: PropTypes.any,
      tableColumn: PropTypes.object,
      tableRow: PropTypes.object
    })
  : void 0;
TableSelectRow.defaultProps = {
  children: undefined,
  onToggle: function onToggle() {},
  selected: false,
  selectByRowClick: false,
  row: undefined,
  tableColumn: undefined,
  tableRow: undefined
};

var TableSelectionWithWidth = function TableSelectionWithWidth(props) {
  return React.createElement(
    dxReactGrid.TableSelection,
    _extends(
      {
        selectionColumnWidth: 58
      },
      props
    )
  );
};

TableSelectionWithWidth.components = dxReactGrid.TableSelection.components;
var TableSelection = dxReactCore.withComponents({
  Row: TableSelectRow,
  Cell: TableSelectCell,
  HeaderCell: TableSelectAllCell
})(TableSelectionWithWidth);
TableSelection.COLUMN_TYPE = dxReactGrid.TableSelection.COLUMN_TYPE;

var getBorder = function getBorder(theme) {
  return '1px solid '.concat(
    theme.palette.type === 'light'
      ? colorManipulator.lighten(
          colorManipulator.fade(theme.palette.divider, 1),
          0.88
        )
      : colorManipulator.darken(
          colorManipulator.fade(theme.palette.divider, 1),
          0.68
        )
  );
};

var styles$g = function styles(theme) {
  return {
    table: {
      tableLayout: 'fixed',
      borderCollapse: 'separate'
    },
    stickyTable: {
      position: 'sticky',
      zIndex: 500,
      overflow: 'visible',
      background: theme.palette.background.paper,
      fallbacks: {
        position: '-webkit-sticky'
      }
    },
    headTable: {
      top: 0
    },
    footTable: {
      borderTop: getBorder(theme),
      bottom: 0
    }
  };
};

var TableBase = function TableBase(_ref) {
  var _classNames;

  var children = _ref.children,
    classes = _ref.classes,
    className = _ref.className,
    use = _ref.use,
    tableRef = _ref.tableRef,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'classes',
      'className',
      'use',
      'tableRef'
    ]);

  return React.createElement(
    RootRef,
    {
      rootRef: tableRef
    },
    React.createElement(
      TableMUI,
      _extends(
        {
          className: classNames(
            ((_classNames = {}),
            _defineProperty(_classNames, classes.table, true),
            _defineProperty(_classNames, classes.stickyTable, !!use),
            _defineProperty(_classNames, classes.headTable, use === 'head'),
            _defineProperty(_classNames, classes.footTable, use === 'foot'),
            _classNames),
            className
          )
        },
        restProps
      ),
      children
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableBase.propTypes = {
      use: PropTypes.oneOf(['head', 'foot']),
      children: PropTypes.node.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      tableRef: dxReactCore.RefType.isRequired
    })
  : void 0;
TableBase.defaultProps = {
  use: undefined,
  className: undefined
};
var Table = styles$N.withStyles(styles$g, {
  name: 'Table'
})(TableBase);

var MINIMAL_COLUMN_WIDTH = 120;
var TableLayout = function TableLayout(props) {
  return React.createElement(
    dxReactGrid.TableLayout,
    _extends(
      {
        layoutComponent: dxReactGrid.StaticTableLayout,
        minColumnWidth: MINIMAL_COLUMN_WIDTH
      },
      props
    )
  );
};

var styles$h = function styles(theme) {
  return {
    cell: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      '&:first-child': {
        paddingLeft: theme.spacing(3)
      },
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    footer: {
      borderBottom: getBorder(theme)
    },
    cellRightAlign: {
      textAlign: 'right'
    },
    cellCenterAlign: {
      textAlign: 'center'
    },
    cellNoWrap: {
      whiteSpace: 'nowrap'
    }
  };
};

var TableCellBase = function TableCellBase(_ref) {
  var _classNames;

  var column = _ref.column,
    value = _ref.value,
    children = _ref.children,
    classes = _ref.classes,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    row = _ref.row,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'column',
      'value',
      'children',
      'classes',
      'tableRow',
      'tableColumn',
      'row',
      'className'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.cell, true),
          _defineProperty(
            _classNames,
            classes.cellRightAlign,
            tableColumn && tableColumn.align === 'right'
          ),
          _defineProperty(
            _classNames,
            classes.cellCenterAlign,
            tableColumn && tableColumn.align === 'center'
          ),
          _defineProperty(
            _classNames,
            classes.cellNoWrap,
            !(tableColumn && tableColumn.wordWrapEnabled)
          ),
          _classNames),
          className
        ),
        classes: {
          footer: classes.footer
        }
      },
      restProps
    ),
    children || value
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableCellBase.propTypes = {
      value: PropTypes.any,
      column: PropTypes.object,
      row: PropTypes.any,
      classes: PropTypes.object.isRequired,
      children: PropTypes.node,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      className: PropTypes.string
    })
  : void 0;
TableCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};
var TableCell = styles$N.withStyles(styles$h, {
  name: 'TableCell'
})(TableCellBase);

var styles$i = function styles(theme) {
  return {
    cell: {
      padding: 0
    },
    footer: {
      borderBottom: getBorder(theme)
    }
  };
};

var TableStubCellBase = function TableStubCellBase(_ref) {
  var classes = _ref.classes,
    className = _ref.className,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    restProps = _objectWithoutProperties(_ref, [
      'classes',
      'className',
      'tableRow',
      'tableColumn'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className),
        classes: {
          footer: classes.footer
        }
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableStubCellBase.propTypes = {
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object
    })
  : void 0;
TableStubCellBase.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};
var TableStubCell = styles$N.withStyles(styles$i, {
  name: 'TableStubCell'
})(TableStubCellBase);

var styles$j = function styles(theme) {
  return {
    cell: {
      padding: theme.spacing(6, 0)
    },
    textContainer: {
      display: 'inline-block',
      position: 'sticky',
      left: '50%'
    },
    text: {
      transform: 'translateX(-50%)',
      msTransform: 'translateX(-50%)',
      display: 'inline-block'
    }
  };
};

var TableNoDataCellBase = function TableNoDataCellBase(_ref) {
  var style = _ref.style,
    colSpan = _ref.colSpan,
    getMessage = _ref.getMessage,
    classes = _ref.classes,
    className = _ref.className,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    restProps = _objectWithoutProperties(_ref, [
      'style',
      'colSpan',
      'getMessage',
      'classes',
      'className',
      'tableRow',
      'tableColumn'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        style: style,
        className: classNames(classes.cell, className),
        colSpan: colSpan
      },
      restProps
    ),
    React.createElement(
      'div',
      {
        className: classes.textContainer
      },
      React.createElement(
        'big',
        {
          className: classes.text
        },
        getMessage('noData')
      )
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (TableNoDataCellBase.propTypes = {
      style: PropTypes.object,
      colSpan: PropTypes.number,
      getMessage: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object
    })
  : void 0;
TableNoDataCellBase.defaultProps = {
  style: null,
  colSpan: 1,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};
var TableNoDataCell = styles$N.withStyles(styles$j, {
  name: 'TableNoDataCell'
})(TableNoDataCellBase);

var styles$k = {
  root: {
    flexGrow: 1,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    // NOTE: fix sticky positioning in Safari
    width: '100%'
  }
};

var TableContainerBase = function TableContainerBase(_ref) {
  var children = _ref.children,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'classes',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(classes.root, className)
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableContainerBase.propTypes = {
      children: PropTypes.node.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
TableContainerBase.defaultProps = {
  className: undefined
};
var TableContainer = styles$N.withStyles(styles$k, {
  name: 'TableContainer'
})(TableContainerBase);

var TableStubRow = function TableStubRow(_ref) {
  var children = _ref.children,
    tableRow = _ref.tableRow,
    restProps = _objectWithoutProperties(_ref, ['children', 'tableRow']);

  return React.createElement(TableRowMUI, restProps, children);
};
process.env.NODE_ENV !== 'production'
  ? (TableStubRow.propTypes = {
      children: PropTypes.node,
      tableRow: PropTypes.object
    })
  : void 0;
TableStubRow.defaultProps = {
  children: undefined,
  tableRow: undefined
};

var Table$1 = dxReactCore.withComponents({
  Table: Table,
  TableHead: TableHead,
  TableBody: TableBody,
  TableFooter: TableFooter,
  Container: TableContainer,
  Layout: TableLayout,
  Row: TableRow,
  Cell: TableCell,
  NoDataRow: TableRow,
  NoDataCell: TableNoDataCell,
  StubRow: TableStubRow,
  StubCell: TableStubCell,
  StubHeaderCell: TableStubCell
})(dxReactGrid.Table);
Table$1.components = dxReactGrid.Table.components;
Table$1.COLUMN_TYPE = dxReactGrid.Table.COLUMN_TYPE;
Table$1.ROW_TYPE = dxReactGrid.Table.ROW_TYPE;
Table$1.NODATA_ROW_TYPE = dxReactGrid.Table.NODATA_ROW_TYPE;

var styles$l = function styles(theme) {
  return {
    cell: {
      padding: theme.spacing(1),
      backgroundImage:
        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACqCAYAAABbAOqQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYWQ2ODE5MS00ZDMxLWRjNGYtOTU0NC1jNjJkMTIxMjY2M2IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjY1RUVFQzAzRDYzMTFFODlFNThCOUJBQjU4Q0EzRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY1RUVFQkYzRDYzMTFFODlFNThCOUJBQjU4Q0EzRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVlMjM1Y2U0LTc5ZWUtNGI0NC05ZjlkLTk2NTZmZGFjNjhhNCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk1OTQ2MjBiLTUyMTQtYTM0Yy04Nzc5LTEwMmEyMTY4MTlhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvLbJKYAAADrSURBVHja7N3BDYBACABBsQn7L48q0BoMD5SZxAZuc74gF1V1MMfpCARBEEEQRBAEEQRBdovnuxxDq3RD/LIQRBAEQRBBEEQQBBEEQQQBAAAAAAAAABhi8gZVbgxi6kQQBBEEQQRBEEEQRBAEQRBBAAAAAAAAAAAabX2Daux2lqkTQRBEEAQRBEEEQRBBEARBBAEAAAAAAAAAaLR1g2osUyeCIIggCCIIggiCIIIgCIIIAgAAAAAAAADQ6KsbVPnXIKZOBEEQQRBEEAQRBEEEQRAEEYRXoqqcghuCIIIgiCAIIgiCCMIUtwADALYCCr92l++TAAAAAElFTkSuQmCC)',
      backgroundRepeat: 'no-repeat repeat',
      backgroundOrigin: 'content-box'
    }
  };
};

var TableSkeletonCellBase = function TableSkeletonCellBase(_ref) {
  var classes = _ref.classes,
    className = _ref.className,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    restProps = _objectWithoutProperties(_ref, [
      'classes',
      'className',
      'tableRow',
      'tableColumn'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className)
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableSkeletonCellBase.propTypes = {
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object
    })
  : void 0;
TableSkeletonCellBase.defaultProps = {
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined
};
var TableSkeletonCell = styles$N.withStyles(styles$l, {
  name: 'TableSkeletonCell'
})(TableSkeletonCellBase);

var MINIMAL_COLUMN_WIDTH$1 = 120;
var VirtualTableLayout = function VirtualTableLayout(props) {
  return React.createElement(
    dxReactGrid.TableLayout,
    _extends(
      {
        layoutComponent: dxReactGrid.VirtualTableLayout,
        minColumnWidth: MINIMAL_COLUMN_WIDTH$1
      },
      props
    )
  );
};

var FixedHeader = function FixedHeader(props) {
  return React.createElement(
    Table,
    _extends(
      {
        use: 'head'
      },
      props
    )
  );
};

var FixedFooter = function FixedFooter(props) {
  return React.createElement(
    Table,
    _extends(
      {
        use: 'foot'
      },
      props
    )
  );
};

var VirtualTable = dxReactGrid.makeVirtualTable(Table$1, {
  VirtualLayout: VirtualTableLayout,
  FixedHeader: FixedHeader,
  FixedFooter: FixedFooter,
  SkeletonCell: TableSkeletonCell,
  defaultEstimatedRowHeight: 48,
  defaultHeight: 530
});
VirtualTable.COLUMN_TYPE = Table$1.COLUMN_TYPE;
VirtualTable.ROW_TYPE = Table$1.ROW_TYPE;
VirtualTable.NODATA_ROW_TYPE = Table$1.NODATA_ROW_TYPE;

var styles$m = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    cell: {
      padding: 0,
      '&:first-child': {
        paddingLeft: spacing(3)
      }
    },
    flexContainer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }
  };
};

var TableFilterCellBase = function TableFilterCellBase(_ref2) {
  var filter = _ref2.filter,
    getMessage = _ref2.getMessage,
    onFilter = _ref2.onFilter,
    classes = _ref2.classes,
    children = _ref2.children,
    className = _ref2.className,
    tableRow = _ref2.tableRow,
    tableColumn = _ref2.tableColumn,
    column = _ref2.column,
    filteringEnabled = _ref2.filteringEnabled,
    restProps = _objectWithoutProperties(_ref2, [
      'filter',
      'getMessage',
      'onFilter',
      'classes',
      'children',
      'className',
      'tableRow',
      'tableColumn',
      'column',
      'filteringEnabled'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className)
      },
      restProps
    ),
    React.createElement(
      'div',
      {
        className: classes.flexContainer
      },
      children
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableFilterCellBase.propTypes = {
      filter: PropTypes.object,
      onFilter: PropTypes.func,
      classes: PropTypes.object.isRequired,
      children: PropTypes.node,
      getMessage: PropTypes.func.isRequired,
      className: PropTypes.string,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      column: PropTypes.object,
      filteringEnabled: PropTypes.bool
    })
  : void 0;
TableFilterCellBase.defaultProps = {
  filter: null,
  onFilter: function onFilter() {},
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  column: undefined,
  filteringEnabled: true
};
var TableFilterCell = styles$N.withStyles(styles$m, {
  name: 'TableFilterCell'
})(TableFilterCellBase);

var styles$n = function styles(theme) {
  return {
    input: {
      width: '100%'
    },
    root: {
      margin: theme.spacing(1)
    }
  };
};

var EditorBase = function EditorBase(_ref) {
  var value = _ref.value,
    disabled = _ref.disabled,
    getMessage = _ref.getMessage,
    _onChange = _ref.onChange,
    classes = _ref.classes,
    restProps = _objectWithoutProperties(_ref, [
      'value',
      'disabled',
      'getMessage',
      'onChange',
      'classes'
    ]);

  return React.createElement(
    Input,
    _extends(
      {
        classes: {
          input: classes.input,
          root: classes.root
        },
        fullWidth: true,
        disabled: disabled,
        value: value,
        onChange: function onChange(event) {
          return _onChange(event.target.value);
        },
        placeholder: getMessage('filterPlaceholder')
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (EditorBase.propTypes = {
      classes: PropTypes.object.isRequired,
      value: PropTypes.any,
      disabled: PropTypes.bool,
      onChange: PropTypes.func,
      getMessage: PropTypes.func.isRequired
    })
  : void 0;
EditorBase.defaultProps = {
  value: '',
  disabled: false,
  onChange: function onChange() {}
};
var Editor = styles$N.withStyles(styles$n, {
  name: 'Editor'
})(EditorBase);

var styles$o = function styles(_ref) {
  var spacing = _ref.spacing;
  return {
    icon: {
      marginRight: spacing(1)
    }
  };
};

var FilterSelectorBase =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(FilterSelectorBase, _React$PureComponent);

    function FilterSelectorBase(props) {
      var _this;

      _classCallCheck(this, FilterSelectorBase);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(FilterSelectorBase).call(this, props)
      );
      _this.state = {
        opened: false
      };

      _this.setButtonRef = function(buttonRef) {
        _this.buttonRef = buttonRef;
      };

      _this.handleButtonClick = function() {
        _this.setState(function(prevState) {
          return {
            opened: !prevState.opened
          };
        });
      };

      _this.handleMenuClose = function() {
        _this.setState({
          opened: false
        });
      };

      _this.handleMenuItemClick = function(nextValue) {
        var onChange = _this.props.onChange;

        _this.setState({
          opened: false
        });

        onChange(nextValue);
      };

      return _this;
    }

    _createClass(FilterSelectorBase, [
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            value = _this$props.value,
            availableValues = _this$props.availableValues,
            disabled = _this$props.disabled,
            getMessage = _this$props.getMessage,
            Icon = _this$props.iconComponent,
            ToggleButton = _this$props.toggleButtonComponent,
            classes = _this$props.classes;
          var opened = this.state.opened;
          return availableValues.length
            ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  ToggleButton,
                  {
                    buttonRef: this.setButtonRef,
                    onToggle: this.handleButtonClick,
                    disabled: disabled || availableValues.length === 1
                  },
                  React.createElement(Icon, {
                    type: value
                  })
                ),
                React.createElement(
                  Menu,
                  {
                    anchorEl: this.buttonRef,
                    open: opened,
                    onClose: this.handleMenuClose,
                    MenuListProps: {
                      dense: true
                    }
                  },
                  availableValues.map(function(valueItem) {
                    return React.createElement(
                      MenuItem,
                      {
                        key: valueItem,
                        selected: valueItem === value,
                        onClick: function onClick() {
                          return _this2.handleMenuItemClick(valueItem);
                        }
                      },
                      React.createElement(
                        ListItemIcon,
                        null,
                        React.createElement(Icon, {
                          type: valueItem,
                          className: classes.icon
                        })
                      ),
                      React.createElement(
                        ListItemText,
                        null,
                        getMessage(valueItem)
                      )
                    );
                  })
                )
              )
            : null;
        }
      }
    ]);

    return FilterSelectorBase;
  })(React.PureComponent);

process.env.NODE_ENV !== 'production'
  ? (FilterSelectorBase.propTypes = {
      value: PropTypes.string,
      availableValues: PropTypes.arrayOf(PropTypes.string),
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
      iconComponent: PropTypes.func.isRequired,
      toggleButtonComponent: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
      ]).isRequired,
      getMessage: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired
    })
  : void 0;
FilterSelectorBase.defaultProps = {
  value: undefined,
  availableValues: [],
  onChange: function onChange() {},
  disabled: false
};
var FilterSelector = styles$N.withStyles(styles$o, {
  name: 'FilterSelector'
})(FilterSelectorBase);

var ToggleButton$1 = function ToggleButton(_ref) {
  var buttonRef = _ref.buttonRef,
    onToggle = _ref.onToggle,
    disabled = _ref.disabled,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, [
      'buttonRef',
      'onToggle',
      'disabled',
      'children'
    ]);

  return React.createElement(
    IconButton,
    _extends(
      {
        buttonRef: buttonRef,
        onClick: onToggle,
        disabled: disabled
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (ToggleButton$1.propTypes = {
      buttonRef: PropTypes.func.isRequired,
      onToggle: PropTypes.func.isRequired,
      children: PropTypes.node,
      disabled: PropTypes.bool
    })
  : void 0;
ToggleButton$1.defaultProps = {
  children: undefined,
  disabled: false
};

var AVAILABLE_PATHS = {
  contains:
    'M6.094 19.563l-2.031 0.281c-0.646 0.094-1.13 0.266-1.453 0.516-0.302 0.24-0.453 0.646-0.453 1.219 0 0.438 0.138 0.799 0.414 1.086s0.664 0.419 1.164 0.398c0.708 0 1.281-0.24 1.719-0.719 0.427-0.49 0.641-1.125 0.641-1.906v-0.875zM8.234 24.641h-2.172v-1.641c-0.677 1.24-1.661 1.859-2.953 1.859-0.927 0-1.682-0.276-2.266-0.828-0.552-0.552-0.828-1.292-0.828-2.219 0-1.927 1.068-3.052 3.203-3.375l2.875-0.438c0-1.469-0.656-2.203-1.969-2.203-1.177 0-2.224 0.427-3.141 1.281v-2.078c1.010-0.656 2.198-0.984 3.563-0.984 2.458 0 3.687 1.302 3.687 3.906v6.719zM14.734 16.797c0.521-0.583 1.167-0.875 1.938-0.875 0.74 0 1.323 0.281 1.75 0.844 0.448 0.583 0.672 1.38 0.672 2.391 0 1.188-0.24 2.13-0.719 2.828-0.49 0.677-1.13 1.016-1.922 1.016-0.719 0-1.302-0.271-1.75-0.813-0.427-0.51-0.641-1.141-0.641-1.891v-1.266c-0.021-0.906 0.203-1.651 0.672-2.234zM16.969 24.859c1.375 0 2.443-0.521 3.203-1.562 0.781-1.042 1.172-2.427 1.172-4.156 0-1.542-0.354-2.771-1.063-3.688-0.688-0.958-1.651-1.438-2.891-1.438-1.427 0-2.531 0.693-3.313 2.078v-6.781h-2.156v15.328h2.172v-1.5c0.677 1.146 1.635 1.719 2.875 1.719zM22.266 6.125c0.135 0 0.245 0.063 0.328 0.188 0.104 0.073 0.156 0.182 0.156 0.328v22.953c0 0.125-0.052 0.24-0.156 0.344-0.083 0.115-0.193 0.172-0.328 0.172h-12.281c-0.146 0-0.266-0.057-0.359-0.172-0.115-0.115-0.172-0.229-0.172-0.344v-22.953c0-0.135 0.057-0.245 0.172-0.328 0.094-0.125 0.214-0.188 0.359-0.188h12.281zM31.531 24.141c-0.76 0.479-1.693 0.719-2.797 0.719-1.427 0-2.589-0.479-3.484-1.438-0.865-0.958-1.286-2.198-1.266-3.719 0-1.688 0.448-3.052 1.344-4.094 0.917-1.042 2.208-1.573 3.875-1.594 0.854 0 1.63 0.177 2.328 0.531v2.156c-0.677-0.531-1.391-0.792-2.141-0.781-0.938 0-1.714 0.339-2.328 1.016-0.594 0.677-0.891 1.552-0.891 2.625 0 1.042 0.297 1.88 0.891 2.516 0.521 0.615 1.25 0.922 2.188 0.922 0.813 0 1.573-0.297 2.281-0.891v2.031z',
  notContains:
    'M5.828 20.469v0.328c0 0.385-0.057 0.667-0.172 0.844-0.052 0.083-0.117 0.177-0.195 0.281s-0.174 0.224-0.289 0.359c-0.458 0.521-1.031 0.771-1.719 0.75-0.521 0-0.927-0.141-1.219-0.422-0.292-0.292-0.438-0.661-0.438-1.109 0-0.156 0.010-0.273 0.031-0.352s0.052-0.141 0.094-0.188 0.094-0.086 0.156-0.117 0.141-0.078 0.234-0.141c0.031-0.031 0.078-0.070 0.141-0.117s0.146-0.086 0.25-0.117h3.125zM14.016 18.328c0.010-0.406 0.070-0.729 0.18-0.969s0.289-0.49 0.539-0.75c0.479-0.604 1.13-0.906 1.953-0.906 0.75 0 1.344 0.292 1.781 0.875 0.198 0.25 0.349 0.495 0.453 0.734s0.172 0.578 0.203 1.016h-5.109zM19.078 20.469c-0.063 0.427-0.146 0.708-0.25 0.844-0.052 0.073-0.109 0.159-0.172 0.258l-0.219 0.352c-0.469 0.688-1.135 1.031-2 1.031-0.708 0-1.297-0.271-1.766-0.813l-0.305-0.359c-0.089-0.104-0.159-0.198-0.211-0.281-0.104-0.167-0.156-0.448-0.156-0.844v-0.188h5.078zM33.344 18.328l-6.875 0c0.031-0.198 0.070-0.372 0.117-0.523s0.107-0.284 0.18-0.398 0.154-0.224 0.242-0.328l0.305-0.344c0.604-0.688 1.391-1.031 2.359-1.031 0.771 0 1.51 0.266 2.219 0.797v-2.234c-0.75-0.333-1.552-0.5-2.406-0.5-1.667 0-2.974 0.531-3.922 1.594-0.396 0.427-0.708 0.859-0.938 1.297s-0.385 0.995-0.469 1.672h-2.719c-0.021-0.719-0.117-1.31-0.289-1.773s-0.424-0.914-0.758-1.352c-0.729-0.938-1.719-1.417-2.969-1.438-1.479 0-2.615 0.708-3.406 2.125v-6.953h-2.266v9.391h-3.75v-0.594c0-2.646-1.25-3.969-3.75-3.969-1.365 0-2.583 0.328-3.656 0.984v2.125c0.99-0.865 2.063-1.297 3.219-1.297 1.344 0 2.016 0.75 2.016 2.25l-2.953 0.125c-0.25 0.021-0.487 0.070-0.711 0.148l-0.633 0.227h-3.328v2.141h1.828l-0.281 0.594c-0.073 0.135-0.109 0.37-0.109 0.703 0 0.938 0.276 1.682 0.828 2.234 0.542 0.573 1.313 0.859 2.313 0.859 1.281 0 2.297-0.635 3.047-1.906v1.656h2.172v-4.141h3.75v4.141h2.297v-1.516c0.677 1.188 1.661 1.776 2.953 1.766 1.385 0 2.464-0.531 3.234-1.594 0.302-0.385 0.557-0.792 0.766-1.219 0.198-0.385 0.339-0.911 0.422-1.578h2.703c0.021 0.708 0.141 1.25 0.359 1.625 0.115 0.198 0.253 0.401 0.414 0.609s0.346 0.427 0.555 0.656c0.906 1 2.099 1.5 3.578 1.5 1.104 0 2.057-0.245 2.859-0.734v-2.109c-0.75 0.604-1.526 0.917-2.328 0.938-0.979 0-1.74-0.318-2.281-0.953l-0.328-0.328c-0.094-0.094-0.177-0.195-0.25-0.305s-0.13-0.234-0.172-0.375-0.073-0.315-0.094-0.523h6.906v-2.141zM33.297 5.688c0.146 0 0.266 0.047 0.359 0.141 0.104 0.104 0.156 0.229 0.156 0.375v23.484c0 0.135-0.052 0.255-0.156 0.359-0.094 0.115-0.214 0.172-0.359 0.172h-35.078c-0.135 0-0.26-0.057-0.375-0.172-0.094-0.115-0.135-0.234-0.125-0.359v-23.484c0-0.104 0.042-0.229 0.125-0.375 0.104-0.094 0.229-0.141 0.375-0.141h35.078z',
  startsWith:
    'M6.109 20.688c0 0.813-0.219 1.474-0.656 1.984-0.448 0.531-1.010 0.786-1.688 0.766-0.51 0-0.896-0.141-1.156-0.422-0.302-0.292-0.443-0.667-0.422-1.125 0-0.615 0.151-1.042 0.453-1.281 0.177-0.135 0.378-0.245 0.602-0.328s0.497-0.146 0.82-0.188l2.047-0.313v0.906zM8.203 18.063c0-2.688-1.219-4.031-3.656-4.031-1.333 0-2.51 0.339-3.531 1.016v2.141c0.917-0.885 1.948-1.328 3.094-1.328 1.333 0 2 0.766 2 2.297l-2.891 0.453c-2.115 0.333-3.161 1.516-3.141 3.547 0 0.958 0.266 1.724 0.797 2.297 0.542 0.573 1.292 0.859 2.25 0.859 1.292 0 2.26-0.641 2.906-1.922v1.688h2.172v-7.016zM14.703 16.906c0.479-0.604 1.109-0.906 1.891-0.906 0.76 0 1.344 0.297 1.75 0.891 0.438 0.615 0.656 1.443 0.656 2.484 0 1.219-0.229 2.198-0.688 2.938-0.469 0.719-1.109 1.078-1.922 1.078-0.719 0-1.286-0.281-1.703-0.844-0.448-0.542-0.672-1.208-0.672-2v-1.313c-0.010-0.938 0.219-1.714 0.688-2.328zM16.906 25.313c1.365 0 2.422-0.542 3.172-1.625 0.771-1.115 1.156-2.563 1.156-4.344 0-1.604-0.339-2.885-1.016-3.844-0.698-0.979-1.661-1.469-2.891-1.469-1.438 0-2.531 0.719-3.281 2.156v-7.078h-2.188v15.969h2.172v-1.563c0.667 1.198 1.625 1.797 2.875 1.797zM31.375 24.563c-0.75 0.5-1.672 0.75-2.766 0.75-1.427 0-2.583-0.505-3.469-1.516-0.885-0.969-1.318-2.26-1.297-3.875 0-1.74 0.464-3.161 1.391-4.266 0.927-1.063 2.198-1.604 3.813-1.625 0.844 0 1.62 0.172 2.328 0.516v2.25c-0.688-0.563-1.406-0.828-2.156-0.797-0.927 0-1.688 0.349-2.281 1.047-0.583 0.698-0.875 1.609-0.875 2.734 0 1.094 0.281 1.969 0.844 2.625 0.542 0.656 1.286 0.984 2.234 0.984 0.781 0 1.526-0.323 2.234-0.969v2.141zM22.172 5.844c0.115 0 0.224 0.052 0.328 0.156 0.094 0.125 0.141 0.25 0.141 0.375v23.844c0 0.156-0.047 0.286-0.141 0.391-0.115 0.094-0.224 0.141-0.328 0.141h-23.469c-0.125 0-0.24-0.047-0.344-0.141-0.094-0.104-0.141-0.234-0.141-0.391v-23.844c0-0.125 0.047-0.25 0.141-0.375 0.104-0.104 0.219-0.156 0.344-0.156h23.469z',
  endsWith:
    'M6.234 19.344l-2.047 0.313c-0.625 0.083-1.104 0.26-1.438 0.531-0.302 0.24-0.453 0.651-0.453 1.234 0 0.469 0.141 0.852 0.422 1.148s0.672 0.435 1.172 0.414c0.677 0 1.234-0.25 1.672-0.75 0.448-0.51 0.672-1.167 0.672-1.969v-0.922zM8.359 24.578h-2.141v-1.656c-0.667 1.26-1.656 1.891-2.969 1.891-0.938 0-1.698-0.276-2.281-0.828-0.542-0.573-0.813-1.328-0.813-2.266 0-2.021 1.063-3.188 3.188-3.5l2.891-0.484c0-1.51-0.661-2.266-1.984-2.266-1.167 0-2.214 0.443-3.141 1.328v-2.125c1.042-0.677 2.224-1.016 3.547-1.016 2.469 0 3.703 1.333 3.703 4v6.922zM14.906 16.516c0.49-0.615 1.13-0.922 1.922-0.922 0.76 0 1.339 0.297 1.734 0.891 0.438 0.615 0.656 1.438 0.656 2.469 0 1.208-0.229 2.182-0.688 2.922-0.469 0.698-1.115 1.047-1.938 1.047-0.708 0-1.276-0.276-1.703-0.828-0.458-0.552-0.688-1.214-0.688-1.984v-1.281c-0.010-0.948 0.224-1.719 0.703-2.313zM17.125 24.813c1.354 0 2.417-0.531 3.188-1.594 0.781-1.073 1.172-2.505 1.172-4.297 0-1.604-0.349-2.87-1.047-3.797-0.698-0.979-1.661-1.469-2.891-1.469-1.438 0-2.542 0.714-3.313 2.141v-7h-2.203v15.781h2.188v-1.531c0.677 1.177 1.646 1.766 2.906 1.766zM31.688 21.969c-0.698 0.635-1.453 0.953-2.266 0.953-0.958 0-1.703-0.323-2.234-0.969-0.563-0.667-0.849-1.536-0.859-2.609 0-1.115 0.297-2.016 0.891-2.703 0.594-0.698 1.359-1.047 2.297-1.047 0.76 0 1.484 0.266 2.172 0.797v-2.219c-0.708-0.344-1.49-0.516-2.344-0.516-1.625 0-2.906 0.536-3.844 1.609-0.938 1.083-1.406 2.495-1.406 4.234 0 1.594 0.438 2.875 1.313 3.844 0.885 0.979 2.052 1.469 3.5 1.469 1.083 0 2.010-0.245 2.781-0.734v-2.109zM33.188 5.563c0.104 0 0.219 0.047 0.344 0.141 0.094 0.146 0.141 0.276 0.141 0.391v23.578c0 0.146-0.047 0.281-0.141 0.406-0.125 0.094-0.24 0.141-0.344 0.141h-23.625c-0.125 0-0.24-0.047-0.344-0.141-0.094-0.135-0.135-0.271-0.125-0.406v-23.578c0-0.115 0.042-0.245 0.125-0.391 0.094-0.094 0.208-0.141 0.344-0.141h23.625z',
  equal:
    'M29.438 11.797v2.75h-26.922v-2.75h26.922zM29.438 17.406v2.75h-26.922v-2.75h26.922z',
  notEqual:
    'M16.906 11.797l3.016-6.547 2.094 1-2.547 5.547h9.969v2.75h-11.234l-1.328 2.859h12.563v2.75h-13.828l-2.875 6.281-2.094-0.984 2.438-5.297h-10.563v-2.75h11.828l1.297-2.859h-13.125v-2.75h14.391z',
  greaterThan:
    'M24.125 16.047l-14.906 8.625-1.375-2.375 10.781-6.25-10.781-6.234 1.375-2.375z',
  greaterThanOrEqual:
    'M23.031 14.328l-14.906 8.625-1.375-2.375 10.797-6.25-10.797-6.234 1.375-2.375zM23.828 15.641l1.375 2.391-14.938 8.609-1.375-2.375z',
  lessThan:
    'M22.75 7.438l1.375 2.375-10.781 6.234 10.781 6.25-1.375 2.375-14.906-8.609z',
  lessThanOrEqual:
    'M23.828 5.719l1.375 2.375-10.813 6.234 10.813 6.25-1.375 2.375-14.922-8.609zM23.047 24.266l-1.375 2.375-14.922-8.609 1.375-2.391z'
};
var Icon$1 = function Icon(_ref) {
  var type = _ref.type,
    restProps = _objectWithoutProperties(_ref, ['type']);

  var path = AVAILABLE_PATHS[type];
  return path
    ? React.createElement(
        SvgIcon,
        _extends(
          {
            viewBox: '0 0 32 32'
          },
          restProps
        ),
        React.createElement('path', {
          d: path
        })
      )
    : React.createElement(SearchIcon, restProps);
};
process.env.NODE_ENV !== 'production'
  ? (Icon$1.propTypes = {
      type: PropTypes.string
    })
  : void 0;
Icon$1.defaultProps = {
  type: undefined
};

var TableFilterRow = dxReactCore.withComponents({
  Row: TableRow,
  Cell: TableFilterCell,
  Editor: Editor,
  FilterSelector: FilterSelector,
  Icon: Icon$1,
  ToggleButton: ToggleButton$1
})(dxReactGrid.TableFilterRow);
TableFilterRow.ROW_TYPE = dxReactGrid.TableFilterRow.ROW_TYPE;

var styles$p = function styles(theme) {
  return {
    resizeHandle: {
      position: 'absolute',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      width: theme.spacing(2),
      top: 0,
      right: -theme.spacing(1),
      height: '100%',
      cursor: 'col-resize',
      zIndex: 100
    },
    resizeHandleLine: {
      position: 'absolute',
      backgroundColor: theme.palette.primary.light,
      height: '50%',
      width: '1px',
      top: '25%',
      transition: 'all linear 100ms'
    },
    resizeHandleFirstLine: {
      left: ''.concat(theme.spacing(1) - 1, 'px')
    },
    resizeHandleSecondLine: {
      left: ''.concat(theme.spacing(1) + 1, 'px')
    },
    resizeHandleLineActive: {
      left: theme.spacing(1)
    },
    resizeHandleActive: {
      '& $resizeHandleLine': {
        opacity: '1',
        backgroundColor: theme.palette.primary.light,
        height: 'calc(100% - 4px)',
        top: '2px'
      }
    }
  };
};

var ResizingControlBase =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(ResizingControlBase, _React$PureComponent);

    function ResizingControlBase(props) {
      var _this;

      _classCallCheck(this, ResizingControlBase);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(ResizingControlBase).call(this, props)
      );
      _this.state = {
        resizing: false
      };

      _this.onResizeStart = function(_ref) {
        var x = _ref.x;
        _this.resizeStartingX = x;

        _this.setState({
          resizing: true
        });
      };

      _this.onResizeUpdate = function(_ref2) {
        var x = _ref2.x;
        var onWidthDraft = _this.props.onWidthDraft;
        onWidthDraft({
          shift: x - _this.resizeStartingX
        });
      };

      _this.onResizeEnd = function(_ref3) {
        var x = _ref3.x;
        var _this$props = _this.props,
          onWidthChange = _this$props.onWidthChange,
          onWidthDraftCancel = _this$props.onWidthDraftCancel;
        onWidthDraftCancel();
        onWidthChange({
          shift: x - _this.resizeStartingX
        });

        _this.setState({
          resizing: false
        });
      };

      return _this;
    }

    _createClass(ResizingControlBase, [
      {
        key: 'render',
        value: function render() {
          var _classNames, _classNames2, _classNames3;

          var _this$props2 = this.props,
            classes = _this$props2.classes,
            resizeHandleOpacityClass = _this$props2.resizeHandleOpacityClass,
            resizeLastHandleClass = _this$props2.resizeLastHandleClass;
          var resizing = this.state.resizing;
          return React.createElement(
            dxReactCore.Draggable,
            {
              onStart: this.onResizeStart,
              onUpdate: this.onResizeUpdate,
              onEnd: this.onResizeEnd
            },
            React.createElement(
              'div',
              {
                className: classNames(
                  ((_classNames = {}),
                  _defineProperty(_classNames, classes.resizeHandle, true),
                  _defineProperty(_classNames, resizeLastHandleClass, true),
                  _defineProperty(
                    _classNames,
                    classes.resizeHandleActive,
                    resizing
                  ),
                  _classNames)
                )
              },
              React.createElement('div', {
                className: classNames(
                  ((_classNames2 = {}),
                  _defineProperty(_classNames2, resizeHandleOpacityClass, true),
                  _defineProperty(_classNames2, classes.resizeHandleLine, true),
                  _defineProperty(
                    _classNames2,
                    classes.resizeHandleFirstLine,
                    true
                  ),
                  _defineProperty(
                    _classNames2,
                    classes.resizeHandleLineActive,
                    resizing
                  ),
                  _classNames2)
                )
              }),
              React.createElement('div', {
                className: classNames(
                  ((_classNames3 = {}),
                  _defineProperty(_classNames3, resizeHandleOpacityClass, true),
                  _defineProperty(_classNames3, classes.resizeHandleLine, true),
                  _defineProperty(
                    _classNames3,
                    classes.resizeHandleSecondLine,
                    true
                  ),
                  _defineProperty(
                    _classNames3,
                    classes.resizeHandleLineActive,
                    resizing
                  ),
                  _classNames3)
                )
              })
            )
          );
        }
      }
    ]);

    return ResizingControlBase;
  })(React.PureComponent);
process.env.NODE_ENV !== 'production'
  ? (ResizingControlBase.propTypes = {
      onWidthChange: PropTypes.func.isRequired,
      onWidthDraft: PropTypes.func.isRequired,
      onWidthDraftCancel: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
      resizeLastHandleClass: PropTypes.string.isRequired,
      resizeHandleOpacityClass: PropTypes.string.isRequired
    })
  : void 0;
var ResizingControl = styles$N.withStyles(styles$p, {
  name: 'ResizingControl'
})(ResizingControlBase);

var styles$q = function styles(theme) {
  return {
    plainTitle: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: theme.spacing(3)
    },
    cell: {
      outline: 'none',
      position: 'relative',
      overflow: 'visible',
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      '&:first-child': {
        paddingLeft: theme.spacing(3)
      },
      '&:hover $resizeHandleLine': {
        opacity: 1
      },
      '&:nth-last-child(2) $resizeHandle': {
        width: theme.spacing(1),
        right: '1px'
      }
    },
    resizeHandle: {},
    resizeHandleLine: {
      opacity: 0
    },
    '@media (pointer: fine)': {
      resizeHandleLine: {
        opacity: 0
      },
      resizeHandleActive: {
        '& $resizeHandleLine': {
          opacity: 1
        }
      },
      resizeHandle: {
        '&:hover $resizeHandleLine': {
          opacity: 1
        }
      }
    },
    cellNoUserSelect: {
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none'
    },
    cellDraggable: {
      cursor: 'pointer'
    },
    cellDimmed: {
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: theme.palette.background.paper,
        opacity: 0.7,
        pointerEvents: 'none',
        zIndex: 400
      }
    },
    cellRight: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      textAlign: 'right'
    },
    cellCenter: {
      textAlign: 'center'
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    cellNoWrap: {
      whiteSpace: 'nowrap'
    }
  };
};

var TableHeaderCellBase =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(TableHeaderCellBase, _React$PureComponent);

    function TableHeaderCellBase(props) {
      var _this;

      _classCallCheck(this, TableHeaderCellBase);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(TableHeaderCellBase).call(this, props)
      );
      _this.state = {
        dragging: false
      };
      _this.cellRef = React.createRef();

      _this.onDragStart = function() {
        _this.setState({
          dragging: true
        });
      };

      _this.onDragEnd = function() {
        if (_this.cellRef.current) {
          _this.setState({
            dragging: false
          });
        }
      };

      return _this;
    }

    _createClass(TableHeaderCellBase, [
      {
        key: 'render',
        value: function render() {
          var _classNames;

          var _this$props = this.props,
            style = _this$props.style,
            column = _this$props.column,
            tableColumn = _this$props.tableColumn,
            showGroupingControls = _this$props.showGroupingControls,
            onGroup = _this$props.onGroup,
            groupingEnabled = _this$props.groupingEnabled,
            draggingEnabled = _this$props.draggingEnabled,
            resizingEnabled = _this$props.resizingEnabled,
            onWidthChange = _this$props.onWidthChange,
            onWidthDraft = _this$props.onWidthDraft,
            onWidthDraftCancel = _this$props.onWidthDraftCancel,
            classes = _this$props.classes,
            tableRow = _this$props.tableRow,
            className = _this$props.className,
            children = _this$props.children,
            showSortingControls = _this$props.showSortingControls,
            sortingDirection = _this$props.sortingDirection,
            sortingEnabled = _this$props.sortingEnabled,
            onSort = _this$props.onSort,
            before = _this$props.before,
            restProps = _objectWithoutProperties(_this$props, [
              'style',
              'column',
              'tableColumn',
              'showGroupingControls',
              'onGroup',
              'groupingEnabled',
              'draggingEnabled',
              'resizingEnabled',
              'onWidthChange',
              'onWidthDraft',
              'onWidthDraftCancel',
              'classes',
              'tableRow',
              'className',
              'children',
              'showSortingControls',
              'sortingDirection',
              'sortingEnabled',
              'onSort',
              'before'
            ]);

          var dragging = this.state.dragging;
          var align = (tableColumn && tableColumn.align) || 'left';
          var tableCellClasses = classNames(
            ((_classNames = {}),
            _defineProperty(_classNames, classes.cell, true),
            _defineProperty(_classNames, classes.cellRight, align === 'right'),
            _defineProperty(
              _classNames,
              classes.cellCenter,
              align === 'center'
            ),
            _defineProperty(
              _classNames,
              classes.cellNoUserSelect,
              draggingEnabled
            ),
            _defineProperty(
              _classNames,
              classes.cellDraggable,
              draggingEnabled
            ),
            _defineProperty(
              _classNames,
              classes.cellDimmed,
              dragging || (tableColumn && tableColumn.draft)
            ),
            _defineProperty(
              _classNames,
              classes.cellNoWrap,
              !(tableColumn && tableColumn.wordWrapEnabled)
            ),
            _classNames),
            className
          );
          var cellLayout = React.createElement(
            TableCell$1,
            _extends(
              {
                style: style,
                className: tableCellClasses
              },
              restProps
            ),
            React.createElement(
              'div',
              {
                className: classes.container
              },
              children
            ),
            resizingEnabled &&
              React.createElement(ResizingControl, {
                onWidthChange: onWidthChange,
                onWidthDraft: onWidthDraft,
                onWidthDraftCancel: onWidthDraftCancel,
                resizeLastHandleClass: classes.resizeHandle,
                resizeHandleOpacityClass: classes.resizeHandleLine
              })
          );
          return draggingEnabled
            ? React.createElement(
                dxReactCore.DragSource,
                {
                  ref: this.cellRef,
                  payload: [
                    {
                      type: 'column',
                      columnName: column.name
                    }
                  ],
                  onStart: this.onDragStart,
                  onEnd: this.onDragEnd
                },
                cellLayout
              )
            : cellLayout;
        }
      }
    ]);

    return TableHeaderCellBase;
  })(React.PureComponent);

process.env.NODE_ENV !== 'production'
  ? (TableHeaderCellBase.propTypes = {
      tableColumn: PropTypes.object,
      tableRow: PropTypes.object,
      column: PropTypes.object,
      style: PropTypes.object,
      showSortingControls: PropTypes.bool,
      sortingEnabled: PropTypes.bool,
      sortingDirection: PropTypes.oneOf(['asc', 'desc', null]),
      onSort: PropTypes.func,
      showGroupingControls: PropTypes.bool,
      groupingEnabled: PropTypes.bool,
      onGroup: PropTypes.func,
      draggingEnabled: PropTypes.bool,
      resizingEnabled: PropTypes.bool,
      onWidthChange: PropTypes.func,
      onWidthDraft: PropTypes.func,
      onWidthDraftCancel: PropTypes.func,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      children: PropTypes.node,
      before: PropTypes.node
    })
  : void 0;
TableHeaderCellBase.defaultProps = {
  column: undefined,
  tableColumn: undefined,
  tableRow: undefined,
  style: null,
  showSortingControls: false,
  sortingDirection: undefined,
  sortingEnabled: false,
  onSort: undefined,
  showGroupingControls: false,
  groupingEnabled: false,
  onGroup: undefined,
  draggingEnabled: false,
  resizingEnabled: false,
  onWidthChange: undefined,
  onWidthDraft: undefined,
  onWidthDraftCancel: undefined,
  className: undefined,
  children: undefined,
  before: undefined
};
var TableHeaderCell = styles$N.withStyles(styles$q, {
  name: 'TableHeaderCell'
})(TableHeaderCellBase);

var ENTER_KEY_CODE$1 = 13;
var SPACE_KEY_CODE$1 = 32;

var styles$r = function styles() {
  return {
    root: {
      width: '100%',
      userSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none'
    },
    tooltipRoot: {
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    sortLabelRoot: {
      maxWidth: '100%'
    },
    sortLabelRight: {
      flexDirection: 'row-reverse'
    },
    sortLabelActive: {
      color: 'inherit'
    }
  };
};

var _onClick = function onClick(e, onSort) {
  var isActionKeyDown =
    e.keyCode === ENTER_KEY_CODE$1 || e.keyCode === SPACE_KEY_CODE$1;
  var isMouseClick = e.keyCode === undefined;
  var cancelSortingRelatedKey = e.metaKey || e.ctrlKey;
  var direction =
    (isMouseClick || isActionKeyDown) && cancelSortingRelatedKey
      ? null
      : undefined;
  var keepOther = e.shiftKey || cancelSortingRelatedKey;
  e.preventDefault();
  onSort({
    direction: direction,
    keepOther: keepOther
  });
};

var SortLabelBase = function SortLabelBase(_ref) {
  var _classNames;

  var column = _ref.column,
    align = _ref.align,
    direction = _ref.direction,
    children = _ref.children,
    onSort = _ref.onSort,
    classes = _ref.classes,
    getMessage = _ref.getMessage,
    disabled = _ref.disabled,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'column',
      'align',
      'direction',
      'children',
      'onSort',
      'classes',
      'getMessage',
      'disabled',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(classes.root, className)
      },
      restProps
    ),
    React.createElement(
      Tooltip,
      {
        title: getMessage('sortingHint'),
        placement: align === 'right' ? 'bottom-end' : 'bottom-start',
        enterDelay: 300,
        classes: {
          tooltip: classes.tooltipRoot
        }
      },
      React.createElement(
        TableSortLabel,
        {
          active: !!direction,
          direction: direction === null ? undefined : direction,
          onClick: function onClick(e) {
            return _onClick(e, onSort);
          },
          disabled: disabled,
          classes: {
            root: classNames(
              ((_classNames = {}),
              _defineProperty(_classNames, classes.sortLabelRoot, true),
              _defineProperty(
                _classNames,
                classes.sortLabelRight,
                align === 'right'
              ),
              _classNames)
            ),
            active: classes.sortLabelActive
          }
        },
        children
      )
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (SortLabelBase.propTypes = {
      column: PropTypes.object,
      align: PropTypes.string,
      direction: PropTypes.oneOf(['asc', 'desc', null]),
      children: PropTypes.node,
      classes: PropTypes.object.isRequired,
      onSort: PropTypes.func.isRequired,
      getMessage: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      className: PropTypes.string
    })
  : void 0;
SortLabelBase.defaultProps = {
  column: undefined,
  direction: undefined,
  disabled: false,
  align: 'left',
  className: null,
  children: undefined
};
var SortLabel = styles$N.withStyles(styles$r, {
  name: 'SortLabel'
})(SortLabelBase);

var styles$s = function styles(theme) {
  return {
    root: {
      paddingLeft: 0,
      height: theme.spacing(3),
      cursor: 'pointer'
    },
    disabled: {
      cursor: 'default',
      opacity: 0.3
    }
  };
};

var GroupButtonBase = function GroupButtonBase(_ref) {
  var _classNames;

  var disabled = _ref.disabled,
    onGroup = _ref.onGroup,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'disabled',
      'onGroup',
      'classes',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        onClick: function onClick(e) {
          if (disabled) return;
          e.stopPropagation();
          onGroup(e);
        },
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.root, true),
          _defineProperty(_classNames, classes.disabled, disabled),
          _classNames),
          className
        )
      },
      restProps
    ),
    React.createElement(List$1, null)
  );
};

process.env.NODE_ENV !== 'production'
  ? (GroupButtonBase.propTypes = {
      onGroup: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
      disabled: PropTypes.bool,
      className: PropTypes.string
    })
  : void 0;
GroupButtonBase.defaultProps = {
  disabled: false,
  className: undefined
};
var GroupButton = styles$N.withStyles(styles$s, {
  name: 'GroupButton'
})(GroupButtonBase);

var styles$t = {
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

var TitelBase = function TitelBase(_ref) {
  var children = _ref.children,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'classes',
      'className'
    ]);

  return React.createElement(
    'span',
    _extends(
      {
        className: classNames(classes.title, className)
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (TitelBase.propTypes = {
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]),
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
TitelBase.defaultProps = {
  className: null,
  children: undefined
};
var Title = styles$N.withStyles(styles$t, {
  name: 'Title'
})(TitelBase);

var styles$u = {
  content: {
    width: '100%',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  alignCenter: {
    justifyContent: 'center'
  },
  alignRight: {
    justifyContent: 'flex-end'
  }
};

var ContentBase$1 = function ContentBase(_ref) {
  var _classNames;

  var column = _ref.column,
    align = _ref.align,
    children = _ref.children,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'column',
      'align',
      'children',
      'classes',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.content, true),
          _defineProperty(_classNames, classes.alignCenter, align === 'center'),
          _defineProperty(_classNames, classes.alignRight, align === 'right'),
          _classNames),
          className
        )
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (ContentBase$1.propTypes = {
      column: PropTypes.object,
      align: PropTypes.string,
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]),
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
ContentBase$1.defaultProps = {
  column: undefined,
  align: 'left',
  className: null,
  children: undefined
};
var Content$1 = styles$N.withStyles(styles$u, {
  name: 'Content'
})(ContentBase$1);

var defaultMessages$2 = {
  sortingHint: 'Sort'
};
var TableHeaderRowWithMessages = withPatchedProps(function(_ref) {
  var messages = _ref.messages,
    restProps = _objectWithoutProperties(_ref, ['messages']);

  return _objectSpread(
    {
      messages: _objectSpread({}, defaultMessages$2, messages)
    },
    restProps
  );
})(dxReactGrid.TableHeaderRow);
TableHeaderRowWithMessages.propTypes = {
  messages: PropTypes.shape({
    sortingHint: PropTypes.string
  })
};
TableHeaderRowWithMessages.defaultProps = {
  messages: {}
};
TableHeaderRowWithMessages.components = dxReactGrid.TableHeaderRow.components;
var TableHeaderRow = dxReactCore.withComponents({
  Cell: TableHeaderCell,
  Row: TableRow,
  Content: Content$1,
  SortLabel: SortLabel,
  Title: Title,
  GroupButton: GroupButton
})(TableHeaderRowWithMessages);
TableHeaderRow.ROW_TYPE = dxReactGrid.TableHeaderRow.ROW_TYPE;

var styles$v = function styles(theme) {
  return {
    cell: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      '&:first-child': {
        paddingLeft: theme.spacing(3)
      },
      '&:last-child': {
        paddingRight: theme.spacing(3),
        borderRight: 0
      },
      height: theme.spacing(6),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      borderBottom: getBorder(theme),
      borderRight: getBorder(theme)
    },
    beforeBorder: {
      borderLeft: getBorder(theme)
    }
  };
};

var CellBase$1 = function CellBase(_ref) {
  var _classNames;

  var column = _ref.column,
    value = _ref.value,
    children = _ref.children,
    classes = _ref.classes,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    row = _ref.row,
    className = _ref.className,
    beforeBorder = _ref.beforeBorder,
    restProps = _objectWithoutProperties(_ref, [
      'column',
      'value',
      'children',
      'classes',
      'tableRow',
      'tableColumn',
      'row',
      'className',
      'beforeBorder'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.cell, true),
          _defineProperty(_classNames, classes.beforeBorder, beforeBorder),
          _classNames),
          className
        )
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (CellBase$1.propTypes = {
      value: PropTypes.any,
      column: PropTypes.object,
      row: PropTypes.any,
      classes: PropTypes.object.isRequired,
      children: PropTypes.node,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      className: PropTypes.string,
      beforeBorder: PropTypes.bool
    })
  : void 0;
CellBase$1.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined,
  beforeBorder: false
};
var Cell$1 = styles$N.withStyles(styles$v, {
  name: 'Cell'
})(CellBase$1);

var styles$w = function styles(theme) {
  return {
    headerCellBorder: {
      borderRight: getBorder(theme),
      borderTop: 'none',
      '&:last-child': {
        borderRight: 0
      },
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing(2)
    },
    beforeBorder: {
      borderLeft: getBorder(theme)
    }
  };
};

var BandedHeaderCellBase = function BandedHeaderCellBase(_ref) {
  var _classNames;

  var HeaderCellComponent = _ref.component,
    className = _ref.className,
    classes = _ref.classes,
    beforeBorder = _ref.beforeBorder,
    restProps = _objectWithoutProperties(_ref, [
      'component',
      'className',
      'classes',
      'beforeBorder'
    ]);

  return React.createElement(
    HeaderCellComponent,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.headerCellBorder, true),
          _defineProperty(_classNames, classes.beforeBorder, beforeBorder),
          _classNames),
          className
        )
      },
      restProps
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (BandedHeaderCellBase.propTypes = {
      component: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      beforeBorder: PropTypes.bool
    })
  : void 0;
BandedHeaderCellBase.defaultProps = {
  className: undefined,
  beforeBorder: false
};
var BandedHeaderCell = styles$N.withStyles(styles$w, {
  name: 'BandedHeaderCell'
})(BandedHeaderCellBase);

var styles$x = {
  emptyCell: {
    display: 'none'
  }
};

var InvisibleCellBase = function InvisibleCellBase(_ref) {
  var classes = _ref.classes;
  return React.createElement(TableCell$1, {
    className: classes.emptyCell
  });
};

process.env.NODE_ENV !== 'production'
  ? (InvisibleCellBase.propTypes = {
      classes: PropTypes.object.isRequired
    })
  : void 0;
var InvisibleCell = styles$N.withStyles(styles$x, {
  name: 'InvisibleCell'
})(InvisibleCellBase);

var styles$y = {
  row: {
    height: 'auto'
  }
};
var RowBase = function RowBase(_ref) {
  var children = _ref.children,
    classes = _ref.classes,
    className = _ref.className,
    row = _ref.row,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'classes',
      'className',
      'row',
      'tableRow',
      'tableColumn'
    ]);

  return React.createElement(
    TableRowMUI,
    _extends(
      {
        className: classNames(classes.row, className)
      },
      restProps
    ),
    children
  );
};
process.env.NODE_ENV !== 'production'
  ? (RowBase.propTypes = {
      classes: PropTypes.object.isRequired,
      children: PropTypes.node,
      row: PropTypes.any,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      className: PropTypes.string
    })
  : void 0;
RowBase.defaultProps = {
  children: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};
var Row = styles$N.withStyles(styles$y, {
  name: 'Row'
})(RowBase);

var TableBandHeader = dxReactCore.withComponents({
  Cell: Cell$1,
  Row: Row,
  BandedHeaderCell: BandedHeaderCell,
  InvisibleCell: InvisibleCell
})(dxReactGrid.TableBandHeader);
TableBandHeader.ROW_TYPE = dxReactGrid.TableBandHeader.ROW_TYPE;

var styles$z = function styles(theme) {
  return {
    cell: {
      padding: theme.spacing(1)
    },
    inputRoot: {
      width: '100%'
    },
    inputRight: {
      textAlign: 'right'
    },
    inputCenter: {
      textAlign: 'center'
    }
  };
};

var EditCellBase = function EditCellBase(_ref) {
  var _classNames;

  var column = _ref.column,
    value = _ref.value,
    onValueChange = _ref.onValueChange,
    style = _ref.style,
    classes = _ref.classes,
    children = _ref.children,
    row = _ref.row,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    editingEnabled = _ref.editingEnabled,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'column',
      'value',
      'onValueChange',
      'style',
      'classes',
      'children',
      'row',
      'tableRow',
      'tableColumn',
      'editingEnabled',
      'className'
    ]);

  var inputClasses = classNames(
    ((_classNames = {}),
    _defineProperty(
      _classNames,
      classes.inputRight,
      tableColumn && tableColumn.align === 'right'
    ),
    _defineProperty(
      _classNames,
      classes.inputCenter,
      tableColumn && tableColumn.align === 'center'
    ),
    _classNames)
  );
  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className),
        style: style
      },
      restProps
    ),
    children ||
      React.createElement(Input, {
        className: classes.inputRoot,
        classes: {
          input: inputClasses
        },
        value: value || '',
        disabled: !editingEnabled,
        onChange: function onChange(e) {
          return onValueChange(e.target.value);
        }
      })
  );
};

process.env.NODE_ENV !== 'production'
  ? (EditCellBase.propTypes = {
      column: PropTypes.object,
      row: PropTypes.any,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      value: PropTypes.any,
      onValueChange: PropTypes.func.isRequired,
      style: PropTypes.object,
      classes: PropTypes.object.isRequired,
      editingEnabled: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string
    })
  : void 0;
EditCellBase.defaultProps = {
  column: undefined,
  row: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  value: '',
  style: null,
  children: undefined,
  className: undefined,
  editingEnabled: true
};
var EditCell = styles$N.withStyles(styles$z, {
  name: 'EditCell'
})(EditCellBase);

var TableEditRow = dxReactCore.withComponents({
  Row: TableRow,
  Cell: EditCell
})(dxReactGrid.TableEditRow);
TableEditRow.ADDED_ROW_TYPE = dxReactGrid.TableEditRow.ADDED_ROW_TYPE;
TableEditRow.EDIT_ROW_TYPE = dxReactGrid.TableEditRow.EDIT_ROW_TYPE;

var styles$A = function styles(theme) {
  return {
    button: {
      padding: theme.spacing(1),
      minWidth: 40
    },
    headingCell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      padding: theme.spacing(0, 2, 0, 3)
    },
    cell: {
      whiteSpace: 'nowrap',
      textAlign: 'center',
      padding: theme.spacing(0, 2, 0, 3)
    },
    alignWithRowSpan: {
      verticalAlign: 'bottom',
      paddingBottom: theme.spacing(1.25)
    }
  };
};

var withEditColumnStyles = styles$N.withStyles(styles$A, {
  name: 'EditColumn'
});

var CommandButtonBase = function CommandButtonBase(_ref) {
  var onExecute = _ref.onExecute,
    text = _ref.text,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'onExecute',
      'text',
      'classes',
      'className'
    ]);

  return React.createElement(
    Button,
    _extends(
      {
        color: 'primary',
        className: classNames(classes.button, className),
        onClick: function onClick(e) {
          e.stopPropagation();
          onExecute();
        }
      },
      restProps
    ),
    text
  );
};

process.env.NODE_ENV !== 'production'
  ? (CommandButtonBase.propTypes = {
      onExecute: PropTypes.func.isRequired,
      text: PropTypes.string.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
CommandButtonBase.defaultProps = {
  className: undefined
};
var CommandButton = withEditColumnStyles(CommandButtonBase);

var EditCommandHeadingCellBase = function EditCommandHeadingCellBase(_ref2) {
  var _classNames;

  var children = _ref2.children,
    classes = _ref2.classes,
    className = _ref2.className,
    tableRow = _ref2.tableRow,
    tableColumn = _ref2.tableColumn,
    rowSpan = _ref2.rowSpan,
    restProps = _objectWithoutProperties(_ref2, [
      'children',
      'classes',
      'className',
      'tableRow',
      'tableColumn',
      'rowSpan'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.headingCell, true),
          _defineProperty(_classNames, classes.alignWithRowSpan, rowSpan > 1),
          _classNames),
          className
        ),
        rowSpan: rowSpan
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (EditCommandHeadingCellBase.propTypes = {
      children: PropTypes.node,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      rowSpan: PropTypes.number
    })
  : void 0;
EditCommandHeadingCellBase.defaultProps = {
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  rowSpan: undefined
};
var EditCommandHeadingCell = withEditColumnStyles(EditCommandHeadingCellBase);

var EditCommandCellBase = function EditCommandCellBase(_ref3) {
  var tableRow = _ref3.tableRow,
    tableColumn = _ref3.tableColumn,
    row = _ref3.row,
    children = _ref3.children,
    classes = _ref3.classes,
    className = _ref3.className,
    restProps = _objectWithoutProperties(_ref3, [
      'tableRow',
      'tableColumn',
      'row',
      'children',
      'classes',
      'className'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(classes.cell, className)
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (EditCommandCellBase.propTypes = {
      children: PropTypes.node,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      row: PropTypes.any
    })
  : void 0;
EditCommandCellBase.defaultProps = {
  children: undefined,
  className: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  row: undefined
};
var EditCommandCell = withEditColumnStyles(EditCommandCellBase);

var TableEditColumnWithWidth = withPatchedProps(function(props) {
  return _objectSpread(
    {
      width: 150
    },
    props
  );
})(dxReactGrid.TableEditColumn);
TableEditColumnWithWidth.components = dxReactGrid.TableEditColumn.components;
var TableEditColumn = dxReactCore.withComponents({
  Cell: EditCommandCell,
  HeaderCell: EditCommandHeadingCell,
  Command: CommandButton
})(TableEditColumnWithWidth);
TableEditColumn.COLUMN_TYPE = dxReactGrid.TableEditColumn.COLUMN_TYPE;

var styles$B = function styles(theme) {
  return {
    emptyMessage: {
      margin: '0 auto',
      padding: theme.spacing(5, 0),
      fontFamily: theme.typography.fontFamily,
      color: theme.typography.subtitle1.color,
      fontSize: theme.typography.subtitle1.fontSize
    }
  };
};

var EmptyMessageBase = function EmptyMessageBase(_ref) {
  var getMessage = _ref.getMessage,
    classes = _ref.classes,
    restProps = _objectWithoutProperties(_ref, ['getMessage', 'classes']);

  return React.createElement(
    Toolbar$2,
    restProps,
    React.createElement(
      'big',
      {
        className: classes.emptyMessage
      },
      getMessage('noColumns')
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (EmptyMessageBase.propTypes = {
      getMessage: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired
    })
  : void 0;
var EmptyMessage = styles$N.withStyles(styles$B, {
  name: 'EmptyMessage'
})(EmptyMessageBase);

var TableColumnVisibility = dxReactCore.withComponents({
  EmptyMessage: EmptyMessage
})(dxReactGrid.TableColumnVisibility);

var TableReorderingCell = function TableReorderingCell(_ref) {
  var style = _ref.style,
    getCellDimensions = _ref.getCellDimensions;

  var refHandler = function refHandler(node) {
    return (
      node &&
      getCellDimensions(function() {
        var _node$getBoundingClie = node.getBoundingClientRect(),
          left = _node$getBoundingClie.left,
          right = _node$getBoundingClie.right;

        return {
          left: left,
          right: right
        };
      })
    );
  };

  return React.createElement('td', {
    ref: refHandler,
    style: _objectSpread({}, style, {
      padding: 0
    })
  });
};
process.env.NODE_ENV !== 'production'
  ? (TableReorderingCell.propTypes = {
      getCellDimensions: PropTypes.func.isRequired,
      style: PropTypes.object
    })
  : void 0;
TableReorderingCell.defaultProps = {
  style: null
};

var styles$C = function styles() {
  return {
    row: {
      visibility: 'hidden'
    }
  };
};

var TableInvisibleRowBase = function TableInvisibleRowBase(_ref) {
  var className = _ref.className,
    classes = _ref.classes,
    restParams = _objectWithoutProperties(_ref, ['className', 'classes']);

  return React.createElement(
    TableRow,
    _extends(
      {
        className: classNames(classes.row, className)
      },
      restParams
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableInvisibleRowBase.propTypes = {
      className: PropTypes.string,
      classes: PropTypes.object.isRequired
    })
  : void 0;
TableInvisibleRowBase.defaultProps = {
  className: undefined
};
var TableInvisibleRow = styles$N.withStyles(styles$C, {
  name: 'TableInvisibleRow'
})(TableInvisibleRowBase);

var TableColumnReordering = dxReactCore.withComponents({
  Row: TableInvisibleRow,
  Cell: TableReorderingCell
})(dxReactGrid.TableColumnReordering);

var TableColumnResizing =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(TableColumnResizing, _React$PureComponent);

    function TableColumnResizing() {
      _classCallCheck(this, TableColumnResizing);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(TableColumnResizing).apply(this, arguments)
      );
    }

    _createClass(TableColumnResizing, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            minColumnWidth = _this$props.minColumnWidth,
            restProps = _objectWithoutProperties(_this$props, [
              'minColumnWidth'
            ]);

          return React.createElement(
            dxReactGrid.TableColumnResizing,
            _extends({}, restProps, {
              minColumnWidth: minColumnWidth
            })
          );
        }
      }
    ]);

    return TableColumnResizing;
  })(React.PureComponent);
process.env.NODE_ENV !== 'production'
  ? (TableColumnResizing.propTypes = {
      minColumnWidth: PropTypes.number
    })
  : void 0;
TableColumnResizing.defaultProps = {
  minColumnWidth: 40
};

var styles$D = function styles(theme) {
  return {
    toolbar: {
      borderBottom: getBorder(theme),
      flex: 'none'
    }
  };
};

var ToolbarBase = function ToolbarBase(_ref) {
  var children = _ref.children,
    classes = _ref.classes,
    className = _ref.className,
    style = _ref.style,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'classes',
      'className',
      'style'
    ]);

  return React.createElement(
    Toolbar$2,
    _extends(
      {
        style: style,
        className: classNames(classes.toolbar, className)
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (ToolbarBase.propTypes = {
      children: PropTypes.node.isRequired,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string,
      style: PropTypes.object
    })
  : void 0;
ToolbarBase.defaultProps = {
  className: undefined,
  style: null
};
var Toolbar = styles$N.withStyles(styles$D, {
  name: 'Toolbar'
})(ToolbarBase);

var FlexibleSpace = function FlexibleSpace() {
  return React.createElement('div', {
    style: {
      flex: '0 0 0',
      marginLeft: 'auto'
    }
  });
};

var Toolbar$1 = dxReactCore.withComponents({
  Root: Toolbar,
  FlexibleSpace: FlexibleSpace
})(dxReactGrid.Toolbar);

var styles$E = function styles(theme) {
  return {
    button: {
      marginTop: '-1px',
      marginBottom: '-1px',
      marginLeft: -theme.spacing(1),
      marginRight: theme.spacing(2),
      padding: theme.spacing(1)
    },
    hidden: {
      cursor: 'default',
      opacity: 0
    }
  };
};

var TableTreeExpandButtonBase = function TableTreeExpandButtonBase(_ref) {
  var _classNames;

  var visible = _ref.visible,
    expanded = _ref.expanded,
    classes = _ref.classes,
    onToggle = _ref.onToggle,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'visible',
      'expanded',
      'classes',
      'onToggle',
      'className'
    ]);

  return React.createElement(
    IconButton,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.button, true),
          _defineProperty(_classNames, classes.hidden, !visible),
          _classNames),
          className
        ),
        onClick: function onClick(e) {
          if (!visible) return;
          e.stopPropagation();
          onToggle();
        },
        tabIndex: visible ? 0 : -1
      },
      restProps
    ),
    expanded
      ? React.createElement(ExpandMore, null)
      : React.createElement(ChevronRight, null)
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableTreeExpandButtonBase.propTypes = {
      visible: PropTypes.bool,
      expanded: PropTypes.bool,
      onToggle: PropTypes.func,
      className: PropTypes.string,
      classes: PropTypes.object.isRequired
    })
  : void 0;
TableTreeExpandButtonBase.defaultProps = {
  visible: false,
  expanded: false,
  onToggle: function onToggle() {},
  className: undefined
};
var TableTreeExpandButton = styles$N.withStyles(styles$E)(
  TableTreeExpandButtonBase
);

var styles$F = function styles(theme) {
  return {
    checkbox: {
      marginTop: '-1px',
      marginBottom: '-1px',
      marginRight: theme.spacing(2),
      marginLeft: -theme.spacing(2),
      padding: theme.spacing(1)
    }
  };
};

var TableTreeCheckboxBase = function TableTreeCheckboxBase(_ref) {
  var disabled = _ref.disabled,
    checked = _ref.checked,
    indeterminate = _ref.indeterminate,
    onChange = _ref.onChange,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'disabled',
      'checked',
      'indeterminate',
      'onChange',
      'classes',
      'className'
    ]);

  return React.createElement(
    Checkbox,
    _extends(
      {
        className: classNames(classes.checkbox, className),
        checked: checked,
        indeterminate: indeterminate,
        disabled: disabled,
        onClick: function onClick(e) {
          if (disabled) return;
          e.stopPropagation();
          onChange();
        }
      },
      restProps
    )
  );
};
process.env.NODE_ENV !== 'production'
  ? (TableTreeCheckboxBase.propTypes = {
      disabled: PropTypes.bool,
      checked: PropTypes.bool,
      indeterminate: PropTypes.bool,
      onChange: PropTypes.func,
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
TableTreeCheckboxBase.defaultProps = {
  disabled: false,
  checked: false,
  indeterminate: false,
  onChange: function onChange() {},
  className: undefined
};
var TableTreeCheckbox = styles$N.withStyles(styles$F)(TableTreeCheckboxBase);

var styles$G = function styles(theme) {
  return {
    indent: {
      marginLeft: theme.spacing(3)
    }
  };
};

var TableTreeIndentBase = function TableTreeIndentBase(_ref) {
  var level = _ref.level,
    classes = _ref.classes;
  return Array.from({
    length: level
  }).map(function(value, currentLevel) {
    return React.createElement('span', {
      // eslint-disable-next-line react/no-array-index-key
      key: currentLevel,
      className: classes.indent
    });
  });
};
process.env.NODE_ENV !== 'production'
  ? (TableTreeIndentBase.propTypes = {
      level: PropTypes.number,
      classes: PropTypes.object.isRequired
    })
  : void 0;
TableTreeIndentBase.defaultProps = {
  level: 0
};
var TableTreeIndent = styles$N.withStyles(styles$G)(TableTreeIndentBase);

var styles$H = function styles() {
  return {
    content: {
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  };
};

var TableTreeContentBase = function TableTreeContentBase(_ref) {
  var children = _ref.children,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'classes',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(
          _defineProperty({}, classes.content, true),
          className
        )
      },
      restProps
    ),
    children
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableTreeContentBase.propTypes = {
      classes: PropTypes.object.isRequired,
      children: PropTypes.node,
      className: PropTypes.string
    })
  : void 0;
TableTreeContentBase.defaultProps = {
  children: undefined,
  className: undefined
};
var TableTreeContent = styles$N.withStyles(styles$H)(TableTreeContentBase);

var styles$I = function styles(theme) {
  return {
    cell: {
      padding: theme.spacing(0.5, 1),
      '&:first-child': {
        paddingLeft: theme.spacing(3)
      }
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    cellNoWrap: {
      whiteSpace: 'nowrap'
    },
    cellRightAlign: {
      textAlign: 'right'
    },
    cellCenterAlign: {
      textAlign: 'center'
    }
  };
};

var TableTreeCellBase = function TableTreeCellBase(_ref) {
  var _classNames;

  var column = _ref.column,
    value = _ref.value,
    children = _ref.children,
    classes = _ref.classes,
    tableRow = _ref.tableRow,
    tableColumn = _ref.tableColumn,
    row = _ref.row,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'column',
      'value',
      'children',
      'classes',
      'tableRow',
      'tableColumn',
      'row',
      'className'
    ]);

  return React.createElement(
    TableCell$1,
    _extends(
      {
        className: classNames(
          ((_classNames = {}),
          _defineProperty(_classNames, classes.cell, true),
          _defineProperty(
            _classNames,
            classes.cellNoWrap,
            !(tableColumn && tableColumn.wordWrapEnabled)
          ),
          _defineProperty(
            _classNames,
            classes.cellRightAlign,
            tableColumn && tableColumn.align === 'right'
          ),
          _defineProperty(
            _classNames,
            classes.cellCenterAlign,
            tableColumn && tableColumn.align === 'center'
          ),
          _classNames),
          className
        )
      },
      restProps
    ),
    React.createElement(
      'div',
      {
        className: classes.container
      },
      children
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableTreeCellBase.propTypes = {
      value: PropTypes.any,
      column: PropTypes.object,
      row: PropTypes.any,
      classes: PropTypes.object.isRequired,
      children: PropTypes.node,
      tableRow: PropTypes.object,
      tableColumn: PropTypes.object,
      className: PropTypes.string
    })
  : void 0;
TableTreeCellBase.defaultProps = {
  value: undefined,
  column: undefined,
  row: undefined,
  children: undefined,
  tableRow: undefined,
  tableColumn: undefined,
  className: undefined
};
var TableTreeCell = styles$N.withStyles(styles$I)(TableTreeCellBase);

var TableTreeColumn = dxReactCore.withComponents({
  Cell: TableTreeCell,
  Content: TableTreeContent,
  Indent: TableTreeIndent,
  ExpandButton: TableTreeExpandButton,
  Checkbox: TableTreeCheckbox
})(dxReactGrid.TableTreeColumn);

var styles$J = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.action.active
    }
  };
};

var SearchPanelInputBase = function SearchPanelInputBase(_ref) {
  var onValueChange = _ref.onValueChange,
    value = _ref.value,
    getMessage = _ref.getMessage,
    restProps = _objectWithoutProperties(_ref, [
      'onValueChange',
      'value',
      'getMessage'
    ]);

  return React.createElement(
    Input,
    _extends(
      {
        onChange: function onChange(e) {
          return onValueChange(e.target.value);
        },
        value: value,
        type: 'text',
        placeholder: getMessage('searchPlaceholder')
      },
      restProps,
      {
        startAdornment: React.createElement(
          InputAdornment,
          {
            position: 'start'
          },
          React.createElement(SearchIcon, null)
        )
      }
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (SearchPanelInputBase.propTypes = {
      onValueChange: PropTypes.func.isRequired,
      value: PropTypes.string,
      getMessage: PropTypes.func.isRequired
    })
  : void 0;
SearchPanelInputBase.defaultProps = {
  value: ''
};
var SearchPanelInput = styles$N.withStyles(styles$J)(SearchPanelInputBase);

var SearchPanel = dxReactCore.withComponents({
  Input: SearchPanelInput
})(dxReactGrid.SearchPanel);

var styles$K = function styles(theme) {
  return {
    fixedCell: {
      backgroundColor: theme.palette.background.paper,
      position: 'sticky',
      zIndex: 300,
      backgroundClip: 'padding-box'
    },
    dividerRight: {
      borderRight: '1px solid '.concat(theme.palette.divider)
    },
    dividerLeft: {
      borderLeft: '1px solid '.concat(theme.palette.divider)
    }
  };
};

var FixedCellBase =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inherits(FixedCellBase, _React$PureComponent);

    function FixedCellBase() {
      _classCallCheck(this, FixedCellBase);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(FixedCellBase).apply(this, arguments)
      );
    }

    _createClass(FixedCellBase, [
      {
        key: 'render',
        value: function render() {
          var _classNames;

          var _this$props = this.props,
            CellPlaceholder = _this$props.component,
            side = _this$props.side,
            showLeftDivider = _this$props.showLeftDivider,
            showRightDivider = _this$props.showRightDivider,
            className = _this$props.className,
            classes = _this$props.classes,
            style = _this$props.style,
            position = _this$props.position,
            restProps = _objectWithoutProperties(_this$props, [
              'component',
              'side',
              'showLeftDivider',
              'showRightDivider',
              'className',
              'classes',
              'style',
              'position'
            ]);

          return React.createElement(
            CellPlaceholder,
            _extends(
              {
                className: classNames(
                  ((_classNames = {}),
                  _defineProperty(_classNames, classes.fixedCell, true),
                  _defineProperty(
                    _classNames,
                    classes.dividerLeft,
                    showLeftDivider
                  ),
                  _defineProperty(
                    _classNames,
                    classes.dividerRight,
                    showRightDivider
                  ),
                  _classNames),
                  className
                ),
                style: _objectSpread(
                  {},
                  style,
                  _defineProperty({}, side, position)
                )
              },
              restProps
            )
          );
        }
      }
    ]);

    return FixedCellBase;
  })(React.PureComponent);

process.env.NODE_ENV !== 'production'
  ? (FixedCellBase.propTypes = {
      className: PropTypes.string,
      style: PropTypes.object,
      component: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
      side: PropTypes.string.isRequired,
      position: PropTypes.number,
      showLeftDivider: PropTypes.bool,
      showRightDivider: PropTypes.bool
    })
  : void 0;
FixedCellBase.defaultProps = {
  className: undefined,
  style: null,
  showLeftDivider: false,
  showRightDivider: false,
  position: undefined
};
var FixedCell = styles$N.withStyles(styles$K, {
  name: 'TableFixedCell'
})(FixedCellBase);

var styles$L = function styles() {
  return {
    cell: {
      border: 0
    }
  };
};

var TableBorderlessStubCellBase = function TableBorderlessStubCellBase(_ref) {
  var className = _ref.className,
    classes = _ref.classes,
    restProps = _objectWithoutProperties(_ref, ['className', 'classes']);

  return React.createElement(
    TableStubCell,
    _extends(
      {
        className: classNames(classes.cell, className)
      },
      restProps
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableBorderlessStubCellBase.propTypes = {
      classes: PropTypes.object.isRequired,
      className: PropTypes.string
    })
  : void 0;
TableBorderlessStubCellBase.defaultProps = {
  className: undefined
};
var TableBorderlessStubCell = styles$N.withStyles(styles$L, {
  name: 'TableBorderlessStubCell'
})(TableBorderlessStubCellBase);
var TableListenerCell = function TableListenerCell(_ref2) {
  var listen = _ref2.listen,
    onSizeChange = _ref2.onSizeChange,
    restProps = _objectWithoutProperties(_ref2, ['listen', 'onSizeChange']);

  return listen
    ? React.createElement(
        dxReactCore.Sizer,
        _extends(
          {
            containerComponent: TableBorderlessStubCell,
            onSizeChange: onSizeChange
          },
          restProps
        )
      )
    : React.createElement(TableBorderlessStubCell, restProps);
};
process.env.NODE_ENV !== 'production'
  ? (TableListenerCell.propTypes = {
      listen: PropTypes.bool.isRequired,
      onSizeChange: PropTypes.func.isRequired
    })
  : void 0;

var TableFixedColumns = dxReactCore.withComponents({
  Cell: FixedCell,
  ListenerRow: TableInvisibleRow,
  ListenerCell: TableListenerCell
})(dxReactGrid.TableFixedColumns);

var styles$M = function styles(theme) {
  return {
    item: {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(13)
    }
  };
};

var TableSummaryItemBase = function TableSummaryItemBase(_ref) {
  var children = _ref.children,
    type = _ref.type,
    value = _ref.value,
    getMessage = _ref.getMessage,
    classes = _ref.classes,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, [
      'children',
      'type',
      'value',
      'getMessage',
      'classes',
      'className'
    ]);

  return React.createElement(
    'div',
    _extends(
      {
        className: classNames(
          _defineProperty({}, classes.item, true),
          className
        )
      },
      restProps
    ),
    React.createElement(
      React.Fragment,
      null,
      getMessage(type),
      ':\xA0\xA0',
      children
    )
  );
};

process.env.NODE_ENV !== 'production'
  ? (TableSummaryItemBase.propTypes = {
      value: PropTypes.number,
      type: PropTypes.string.isRequired,
      getMessage: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
      children: PropTypes.node,
      className: PropTypes.string
    })
  : void 0;
TableSummaryItemBase.defaultProps = {
  value: null,
  children: undefined,
  className: undefined
};
var TableSummaryItem = styles$N.withStyles(styles$M)(TableSummaryItemBase);

var TableSummaryRow = dxReactCore.withComponents({
  TotalRow: TableRow,
  GroupRow: TableRow,
  TreeRow: TableRow,
  TotalCell: TableCell,
  GroupCell: TableCell,
  TreeCell: TableCell,
  TableTreeCell: TableTreeCell,
  TableTreeContent: TableTreeContent,
  TableTreeIndent: TableTreeIndent,
  Item: TableSummaryItem
})(dxReactGrid.TableSummaryRow);
TableSummaryRow.TREE_ROW_TYPE = dxReactGrid.TableSummaryRow.TREE_ROW_TYPE;
TableSummaryRow.GROUP_ROW_TYPE = dxReactGrid.TableSummaryRow.GROUP_ROW_TYPE;
TableSummaryRow.TOTAL_ROW_TYPE = dxReactGrid.TableSummaryRow.TOTAL_ROW_TYPE;

exports.ColumnChooser = ColumnChooser;
exports.DragDropProvider = DragDropProvider;
exports.Grid = Grid;
exports.GroupingPanel = GroupingPanel;
exports.PagingPanel = PagingPanel;
exports.SearchPanel = SearchPanel;
exports.Table = Table$1;
exports.TableBandHeader = TableBandHeader;
exports.TableColumnReordering = TableColumnReordering;
exports.TableColumnResizing = TableColumnResizing;
exports.TableColumnVisibility = TableColumnVisibility;
exports.TableEditColumn = TableEditColumn;
exports.TableEditRow = TableEditRow;
exports.TableFilterRow = TableFilterRow;
exports.TableFixedColumns = TableFixedColumns;
exports.TableGroupRow = TableGroupRow;
exports.TableHeaderRow = TableHeaderRow;
exports.TableRowDetail = TableRowDetail;
exports.TableSelection = TableSelection;
exports.TableSummaryRow = TableSummaryRow;
exports.TableTreeColumn = TableTreeColumn;
exports.Toolbar = Toolbar$1;
exports.VirtualTable = VirtualTable;
//# sourceMappingURL=dx-react-grid-material-ui.cjs.js.map
