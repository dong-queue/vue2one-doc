export default {
  input: [
    { name: 'disabled', type: 'boolean2' },
    { name: 'readonly', type: 'boolean2' },
  ],
  tabs: [
    { name: 'active-class', type: 'text', same: ['activeClass'] },
    { name: 'align-with-title', type: 'boolean1', same: ['alignWithTitle', 'alwt'] },
    { name: 'center-active', type: 'boolean1', same: ['centerActive', 'ca'] },
    { name: 'centered', type: 'boolean1' },
    { name: 'dark', type: 'boolean1' },
    { name: 'fixed-tabs', type: 'boolean1', same: ['fixedTabs', 'ft'] },
    { name: 'grow', type: 'boolean1' },
    { name: 'hide-slider', type: 'boolean1', same: ['hideSlider', 'hs'] },
    { name: 'icons-and-text', type: 'boolean1', same: ['iconsAndText', 'icnt'] },
    { name: 'light', type: 'boolean1' },
    { name: 'optional', type: 'boolean1' },
    { name: 'right', type: 'boolean1' },
    { name: 'vertical', type: 'boolean1' }
  ],
  tab: [
    { name: 'active-class', type: 'text', same: ['activeClass']  },
    { name: 'append', type: 'boolean1' },
    { name: 'dark', type: 'boolean1' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'exact', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'link', type: 'boolean1' },
    { name: 'nuxt', type: 'boolean1' },
    { name: 'replace', type: 'boolean1' }
  ],
  footer: [
    { name: 'absolute', type: 'boolean1' },
    { name: 'app', type: 'boolean1' },
    { name: 'dark', type: 'boolean1' },
    { name: 'fixed', type: 'boolean1' },
    { name: 'inset', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'outlined', type: 'boolean1' },
    { name: 'padless', type: 'boolean1' },
    { name: 'shaped', type: 'boolean1' },
    { name: 'tile', type: 'boolean1' },
  ],
  expanels: [
    { name: 'disabled', type: 'boolean2' },
    { name: 'readonly', type: 'boolean2' },
  ],
  carousel: [
    { name: 'cycle', type: 'boolean1' },
    { name: 'dark', type: 'boolean1' },
    { name: 'hide-delimiter-background', type: 'boolean1', same: ['hideDelimiterBackground'] },
    { name: 'hide-delimiters', type: 'boolean1', same: ['hideDelimiters'] },
    { name: 'light', type: 'boolean1' },
    { name: 'multiple', type: 'boolean1' },
    { name: 'progress', type: 'boolean1' },
    { name: 'reverse', type: 'boolean1' },
    { name: 'show-arrows-on-hover', type: 'boolean1', same: ['showArrowsOnHover'] },
    { name: 'touchless', type: 'boolean1' },
    { name: 'vertical', type: 'boolean1' },
  ],
  speedDial: [
    { name: 'absolute', type: 'boolean1' },
    { name: 'bottom', type: 'boolean1' },
    { name: 'fixed', type: 'boolean1' },
    { name: 'left', type: 'boolean1' },
    { name: 'openOnHover', type: 'boolean1' },
    { name: 'right', type: 'boolean1' },
    { name: 'top', type: 'boolean1' },
  ],
  radioGroup: [
    { name: 'dark', type: 'boolean1' },
    { name: 'dense', type: 'boolean1' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'error', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'mandatory', type: 'boolean1' },
    { name: 'multiple', type: 'boolean1' },
    { name: 'persistentHint', type: 'boolean1' },
    { name: 'readonly', type: 'boolean2' },
    { name: 'row', type: 'boolean1' },
    { name: 'success', type: 'boolean1' },
    { name: 'validateOnBlur', type: 'boolean1' },
  ],
  radio: [
    { name: 'dark', type: 'boolean1' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'light', type: 'boolean1' },
    { name: 'readonly', type: 'boolean2' },
  ],
  breadcrumbs: [
    { name: 'dark', type: 'boolean1' },
    { name: 'large', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
  ],
  breadcrumbsItem: [
    { name: 'append', type: 'boolean1' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'exact', type: 'boolean1' },
    { name: 'link', type: 'boolean1' },
    { name: 'nuxt', type: 'boolean1' },
    { name: 'replace', type: 'boolean1' }
  ],
  list: [
    { name: 'dark', type: 'boolean1' },
    { name: 'dense', type: 'boolean1' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'expand', type: 'boolean1' },
    { name: 'flat', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'nav', type: 'boolean1' },
    { name: 'outlined', type: 'boolean1' },
    { name: 'rounded', type: 'boolean1' },
    { name: 'shaped', type: 'boolean1' },
    { name: 'subheader', type: 'boolean1' },
    { name: 'threeLine', type: 'boolean1' },
    { name: 'tile', type: 'boolean1' },
    { name: 'twoLine', type: 'boolean1' },
  ],
  listGroup: [
    { name: 'disabled', type: 'boolean2' },
    { name: 'eager', type: 'boolean1' },
    { name: 'noAction', type: 'boolean1' },
    { name: 'subGroup', type: 'boolean1' }
  ],
  listItemGroup: [
    { name: 'dark', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'mandatory', type: 'boolean1' },
    { name: 'multiple', type: 'boolean1' }
  ],
  listItem: [
    { name: 'disabled', type: 'boolean2' },
    { name: 'append', type: 'boolean1' },
    { name: 'dark', type: 'boolean1' },
    { name: 'dense', type: 'boolean1' },
    { name: 'exact', type: 'boolean1' },
    { name: 'inactive', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'link', type: 'boolean1' },
    { name: 'nuxt', type: 'boolean1' },
    { name: 'replace', type: 'boolean1' },
    { name: 'selectable', type: 'boolean1' },
    { name: 'threeLine', type: 'boolean1' },
    { name: 'twoLine', type: 'boolean1' }
  ],
  bnavi: [
    { name: 'absolute', type: 'boolean1' },
    { name: 'app', type: 'boolean1' },
    { name: 'dark', type: 'boolean1' },
    { name: 'fixed', type: 'boolean1' },
    { name: 'grow', type: 'boolean1' },
    { name: 'hideOnScroll', type: 'boolean1' },
    { name: 'horizontal', type: 'boolean1' },
    { name: 'inputValue', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'mandatory', type: 'boolean1' },
    { name: 'shift', type: 'boolean1' }
  ],
  banner: [
    { name: 'app', type: 'boolean1' },
    { name: 'dark', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'outlined', type: 'boolean1' },
    { name: 'shaped', type: 'boolean1' },
    { name: 'singleLine', type: 'boolean1' },
    { name: 'sticky', type: 'boolean1' },
    { name: 'tile', type: 'boolean1' },
    { name: 'value', type: 'boolean1' }
  ],
  hover: [
    { name: 'disabled', type: 'boolean2' },
    { name: 'value', type: 'boolean1' }
  ],
  badge: [
    { name: 'avatar', type: 'boolean1' },
    { name: 'bordered', type: 'boolean1' },
    { name: 'bottom', type: 'boolean1' },
    { name: 'dark', type: 'boolean1' },
    { name: 'dot', type: 'boolean1' },
    { name: 'inline', type: 'boolean1' },
    { name: 'left', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'overlap', type: 'boolean1' },
    { name: 'tile', type: 'boolean1' }
  ],
  avatar: [
    { name: 'left', type: 'boolean1' },
    { name: 'right', type: 'boolean1' },
    { name: 'tile', type: 'boolean1' }
  ],
  card: [
    { name: 'loading', type: 'boolean2' },
    { name: 'dark', type: 'boolean1' },
  ],
  chip: [
    { name: 'append', type: 'boolean1' },
    { name: 'close', type: 'boolean1' },
    { name: 'dark', type: 'boolean1' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'draggable', type: 'boolean1' },
    { name: 'exact', type: 'boolean1' },
    { name: 'filter', type: 'boolean1' },
    { name: 'inputValue', type: 'boolean1' },
    { name: 'label', type: 'boolean1' },
    { name: 'large', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'link', type: 'boolean1' },
    { name: 'nuxt', type: 'boolean1' },
    { name: 'outlined', type: 'boolean1' },
    { name: 'pill', type: 'boolean1' },
    { name: 'replace', type: 'boolean1' },
    { name: 'small', type: 'boolean1' },
    { name: 'xLarge', type: 'boolean1' },
    { name: 'xSmall', type: 'boolean1' },
  ],
  img: [
    { name: 'height', type: 'prop'},
    { name: 'dark', type: 'boolean1' },
    { name: 'position', type: 'prop', default: 'center' },
    { name: 'eager', type: 'boolean1' },

  ],
  date: [
    { name: 'required', type: 'boolean1', same: ['form'] },
    { name: 'rules', type: 'rule' },
    { name: 'label', type: 'text' },
    { name: 'dark', type: 'boolean1' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'readonly', type: 'boolean2' },
    { name: 'flat', type: 'boolean1' },
    { name: 'fullWidth', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'multiple', type: 'boolean1' },
  ],
  treeview: [
    { name: 'dark', type: 'boolean1' },
    { name: 'light', type: 'boolean1' },
    { name: 'multipleActive', type: 'boolean1' },
    { name: 'dense', type: 'boolean1' },
    { name: 'selectable', type: 'boolean1'},
    { name: 'activatable', type: 'boolean1' },
    { name: 'hoverable', type: 'boolean1' },
    { name: 'selectionType', type: 'prop', default: 'leaf' },
    { name: 'openAll', type: 'boolean1' },
    { name: 'returnObject', type: 'boolean1' },
    { name: 'shaped', type: 'boolean1' },
    { name: 'rounded', type: 'boolean1' },
    { name: 'itemDisabled', type: 'prop', default: 'locked' },
  ],
  file: [
    { name: 'disabled', type: 'boolean2' },
    { name: 'readonly', type: 'boolean2' },
    { name: 'required', type: 'boolean1', same: ['form'] },
    { name: 'filled', type: 'boolean1' },
    { name: 'flat', type: 'boolean1' },
    { name: 'fullWidth', type: 'boolean1' },
    { name: 'hideDetails', type: 'boolean1' },
    // { name: 'hint', type: 'hint' },
    { name: 'label', type: 'text' },
    { name: 'light', type: 'boolean1' },
    { name: 'multiple', type: 'boolean1' },
    { name: 'outlined', type: 'boolean1', same: ['outline'] },
    { name: 'persistentHint', type: 'boolean1' },
    { name: 'placeholder', type: 'text' },
    { name: 'rules', type: 'rule' },
    { name: 'singleLine', type: 'boolean1' },
    { name: 'success', type: 'boolean1' },
    { name: 'successMessage', type: 'text' },

  ],
  dataTable: [
    { name: 'calculateWidths', type: 'boolean1' },
    { name: 'dense', type: 'boolean1' },
    { name: 'multiSort', type: 'boolean1' },
    { name: 'slingleSelect', type: 'boolean1' },
    { name: 'showSelect', type: 'boolean1' },
    { name: 'hideDefaultFooter', type: 'boolean1' },
    { name: 'hideDefaultHeader', type: 'boolean1' },
    { name: 'showSelect', type: 'boolean1' },
  ],
  checkbox: [
    { name: 'required', type: 'boolean1', same: ['form'] },
    { name: 'rules', type: 'rule' },
    { name: 'label', type: 'text' },
  ],
  switch: [
    { name: 'disabled', type: 'boolean2' },
    { name: 'readonly', type: 'boolean2' },
    { name: 'required', type: 'boolean1', same: ['form'] },
    { name: 'rules', type: 'rule' },
    { name: 'label', type: 'text' },
  ],
  textarea: [
    { name: 'required', type: 'boolean1', same: ['form'] },
    { name: 'rules', type: 'rule' },
    { name: 'label', type: 'text' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'readonly', type: 'boolean2' },
  ],
  currency: [
    { name: 'reverse', type: 'boolean1', default: 'true' },
    { name: 'label', type: 'text' },
    { name: 'required', type: 'boolean1', same: ['form'] },
    { name: 'singleLine', type: 'boolean1' },
    { name: 'rules', type: 'rule' },
    { name: 'placeholder', type: 'text' },
    { name: 'max', type: 'max' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'readonly', type: 'boolean2' },
    // { name: 'hint', type: 'hint' },
    { name: 'persistentHint', type: 'boolean1' },
  ],
  textfield: [
    { name: 'label', type: 'text' },
    { name: 'required', type: 'boolean1', same: ['form'] },
    { name: 'singleLine', type: 'boolean1' },
    // { name: 'rules', type: 'rule' },
    { name: 'placeholder', type: 'text' },
    { name: 'max', type: 'max'},
    { name: 'disabled', type: 'boolean2' },
    { name: 'readonly', type: 'boolean2' },
    // { name: 'hint', type: 'hint' },
    { name: 'persistentHint', type: 'boolean1' },
  ],
  toolbar: [
    { name: 'dark', type: 'boolean1' },
    { name: 'flat', type: 'boolean1' }
  ],
  select: [
    { name: 'allowOverflow', type: 'boolean1' },
    { name: 'autoSelectFirst', type: 'boolean1' },
    { name: 'autofocus', type: 'boolean1' },
    { name: 'cacheItems', type: 'boolean1' },
    { name: 'chips', type: 'boolean1' },
    { name: 'clearable', type: 'readonly' },
    { name: 'dark', type: 'boolean1' },
    { name: 'dense', type: 'boolean1' },
    { name: 'deletableChips', type: 'boolean1' },
    { name: 'disableLookup', type: 'boolean1' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'eager', type: 'boolean1' },
    { name: 'error', type: 'boolean1' },
    { name: 'filled', type: 'boolean1' },
    { name: 'flat', type: 'boolean1' },
    { name: 'fullWidth', type: 'boolean1' },
    { name: 'hideDetails', type: 'boolean1' },
    { name: 'hideNoData', type: 'boolean1' },
    { name: 'hideSelected', type: 'boolean1' },
    // { name: 'hint', type: 'hint' },
    { name: 'label', type: 'text' },
    { name: 'light', type: 'boolean1' },
    { name: 'loading', type: 'boolean2' },
    { name: 'multiple', type: 'boolean1' },
    { name: 'noFilter', type: 'boolean1' },
    { name: 'openOnClear', type: 'boolean1' },
    { name: 'outlined', type: 'boolean1', same: ['outline'] },
    { name: 'persistentHint', type: 'boolean1' },
    { name: 'readonly', type: 'boolean2' },
    { name: 'returnObject', type: 'boolean1' },
    { name: 'reverse', type: 'boolean1' },
    { name: 'required', type: 'boolean1', same: ['form'] },
    { name: 'rounded', type: 'boolean1' },
    { name: 'rules', type: 'rule' },
    { name: 'shaped', type: 'boolean1' },
    { name: 'singleLine', type: 'boolean1' },
    { name: 'smallChips', type: 'boolean1' },
    { name: 'solo', type: 'boolean1' },
    { name: 'soloInverted', type: 'boolean1' },
    { name: 'success', type: 'boolean1' },
    { name: 'validateOnBlur', type: 'boolean1' },
  ],
  autocomplete: [
    { name: 'allowOverflow', type: 'boolean1' },
    { name: 'autoSelectFirst', type: 'boolean1' },
    { name: 'autofocus', type: 'boolean1' },
    { name: 'cacheItems', type: 'boolean1' },
    { name: 'chips', type: 'boolean1' },
    { name: 'clearable', type: 'readonly' },
    { name: 'dark', type: 'boolean1' },
    { name: 'dense', type: 'boolean1' },
    { name: 'deletableChips', type: 'boolean1' },
    { name: 'disableLookup', type: 'boolean1' },
    { name: 'disabled', type: 'boolean2' },
    { name: 'eager', type: 'boolean1' },
    { name: 'error', type: 'boolean1' },
    { name: 'filled', type: 'boolean1' },
    { name: 'flat', type: 'boolean1' },
    { name: 'fullWidth', type: 'boolean1' },
    { name: 'hideDetails', type: 'boolean1' },
    { name: 'hideNoData', type: 'boolean1' },
    { name: 'hideSelected', type: 'boolean1' },
    // { name: 'hint', type: 'hint' },
    { name: 'label', type: 'text' },
    { name: 'light', type: 'boolean1' },
    { name: 'loading', type: 'boolean2' },
    { name: 'multiple', type: 'boolean1' },
    { name: 'noFilter', type: 'boolean1' },
    { name: 'openOnClear', type: 'boolean1' },
    { name: 'outlined', type: 'boolean1', same: ['outline'] },
    { name: 'persistentHint', type: 'boolean1' },
    { name: 'readonly', type: 'boolean2' },
    { name: 'returnObject', type: 'boolean1' },
    { name: 'reverse', type: 'boolean1' },
    { name: 'required', type: 'boolean1', same: ['form'] },
    { name: 'rounded', type: 'boolean1' },
    { name: 'rules', type: 'rule' },
    { name: 'shaped', type: 'boolean1' },
    { name: 'singleLine', type: 'boolean1' },
    { name: 'smallChips', type: 'boolean1' },
    { name: 'solo', type: 'boolean1' },
    { name: 'soloInverted', type: 'boolean1' },
    { name: 'success', type: 'boolean1' },
    { name: 'validateOnBlur', type: 'boolean1' },
  ],
  btn: [
    { name: 'absolute', type: 'boolean1', default: false },
    { name: 'append', type: 'boolean1', default: false },
    { name: 'block', type: 'boolean1', default: false },
    { name: 'bottom', type: 'boolean1', default: false },
    { name: 'dark', type: 'boolean1', default: false },
    { name: 'depressed', type: 'boolean1', default: false },
    { name: 'disabled', type: 'boolean2' },
    { name: 'exact', type: 'boolean1', default: false },
    { name: 'fab', type: 'boolean1', default: false },
    { name: 'fixed', type: 'boolean1', default: false },
    { name: 'icon', type: 'boolean1', default: false },
    { name: 'left', type: 'boolean1', default: false },
    { name: 'light', type: 'boolean1', default: false },
    { name: 'link', type: 'boolean1', default: false },
    { name: 'loading', type: 'boolean2', default: false },
    { name: 'nuxt', type: 'boolean1', default: false },
    { name: 'outlined', type: 'boolean1', same: ['outline'] },
    { name: 'replace', type: 'boolean1', default: false },
    { name: 'retainFocusOnClick', type: 'boolean1', default: false },
    { name: 'right', type: 'boolean1', default: false },
    { name: 'rounded', type: 'boolean1', default: false },
    { name: 'shaped', type: 'boolean1', default: false },
    { name: 'text', type: 'boolean1', default: false },
    { name: 'tile', type: 'boolean1', default: false },
    { name: 'top', type: 'boolean1', default: false }
  ]
}