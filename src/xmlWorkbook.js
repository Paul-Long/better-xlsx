import { props, Node } from './node';

@props('xmlns')
export class XRelationships extends Node {
  constructor ({ xmlns = 'http://schemas.openxmlformats.org/package/2006/relationships' }, children) {
    super({ xmlns }, children);
  }
}

@props('Id', 'Target', 'Type')
export class Relationship extends Node {}

@props('xmlns', 'xmlns:r')
export class Xworkbook extends Node {
  constructor (attrs = {}, children) {
    attrs['xmlns'] = attrs['xmlns'] || 'http://schemas.openxmlformats.org/spreadsheetml/2006/main';
    attrs['xmlns:r'] = attrs['xmlns:r'] || 'http://schemas.openxmlformats.org/officeDocument/2006/relationships';
    super(attrs, children);
  }
}

@props('appName', 'lastEdited', 'lowestEdited', 'rupBuild')
export class XfileVersion extends Node {}

@props('defaultThemeVersion', 'backupFile', 'showObjects', 'date1904')
export class XworkbookPr extends Node {}

export class XworkbookProtection extends Node {}

export class XbookViews extends Node {}

@props('activeTab', 'firstSheet', 'showHorizontalScroll', 'showVerticalScroll', 'showSheetTabs', 'tabRatio', 'windowHeight', 'windowWidth', 'xWindow', 'yWindow')
export class XworkbookView extends Node {}

export class Xsheets extends Node {}

@props('name', 'sheetId', 'r:id', 'state')
export class Xsheet extends Node {}

@props('calcId', 'iterateCount', 'refMode', 'iterate', 'iterateDelta')
export class XcalcPr extends Node {}