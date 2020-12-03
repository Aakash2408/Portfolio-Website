import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import withStyles from '../styles/withStyles';
import Tablelvl2Context from '../Table/Tablelvl2Context';
import { alpha } from '../styles/colorManipulator';
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    '&$hover:hover': {
      backgroundColor: theme.palette.action.hover
    },
    '&$selected, &$selected:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.selectedOpacity)
    }
  },

  /* Pseudo-class applied to the root element if `selected={true}`. */
  selected: {},

  /* Pseudo-class applied to the root element if `hover={true}`. */
  hover: {},

  /* Styles applied to the root element if table variant="head". */
  head: {},

  /* Styles applied to the root element if table variant="footer". */
  footer: {}
});
const defaultComponent = 'tr';
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */

const TableRow = /*#__PURE__*/React.forwardRef(function TableRow(props, ref) {
  const {
    classes,
    className,
    component: Component = defaultComponent,
    hover = false,
    selected = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["classes", "className", "component", "hover", "selected"]);

  const tablelvl2 = React.useContext(Tablelvl2Context);
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref,
    className: clsx(classes.root, className, tablelvl2 && {
      'head': classes.head,
      'footer': classes.footer
    }[tablelvl2.variant], hover && classes.hover, selected && classes.selected),
    role: Component === defaultComponent ? null : 'row'
  }, other));
});
process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Should be valid <tr> children such as `TableCell`.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: PropTypes.bool,

  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: PropTypes.bool
} : void 0;
export default withStyles(styles, {
  name: 'MuiTableRow'
})(TableRow);